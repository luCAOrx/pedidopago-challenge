import { CreateProductUseCase } from '../../useCases/CreateProductUseCase'

const createProductSpy = jest.fn()
const findProductByIdSpy = jest.fn()
const cloneProductSpy = jest.fn()
const getProductInformationSpy = jest.fn()
const listAllProductsSpy = jest.fn()
const updateProductSpy = jest.fn()
const deleteProductSpy = jest.fn()

const sut = new CreateProductUseCase({
  createProducts: createProductSpy,
  findProductById: findProductByIdSpy,
  cloneProduct: cloneProductSpy,
  getProductInformation: getProductInformationSpy,
  listAllProducts: listAllProductsSpy,
  updateProduct: updateProductSpy,
  deleteProduct: deleteProductSpy
})

describe('Product volume value object', () => {
  it('should accept valid volume', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '2mg',
      price: 1000,
      thumbnail: 'image.jpg'
    })

    expect(response.isRight()).toBeTruthy()

    expect(createProductSpy).toHaveBeenCalled()
  })

  it('should reject the field volume if it is empty', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '',
      price: 1000,
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })

  it('should reject volume field if it has letter or word between numbers',
    async () => {
      const response = await sut.execute({
        name: 'Benegripe',
        ingredients: 'vitamina c, dipirona mono hidratada',
        availability: true,
        volume: 'volume2volume0volume0volume',
        price: 1000,
        thumbnail: 'image.jpg'
      })

      expect(response.isLeft()).toBeTruthy()

      expect(createProductSpy).not.toHaveBeenCalled()
    })

  it('should reject volume with less than 3 characters', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '20',
      price: 1000,
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })

  it('should reject volume with more than 5 characters', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '2000ml',
      price: 1000,
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })

  it('should reject volume without allowed suffix', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200g',
      price: 1000,
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })
})
