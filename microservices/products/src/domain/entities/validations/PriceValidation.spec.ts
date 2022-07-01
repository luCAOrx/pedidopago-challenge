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

describe('Product price value object', () => {
  it('should accept valid price', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 1000,
      thumbnail: 'image.jpg'
    })

    expect(response.isRight()).toBeTruthy()

    expect(createProductSpy).toHaveBeenCalled()
  })

  it('should reject price if it is less than or equal to 0', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 0,
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })

  it('should reject the price if it is not a number', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: '10'.indexOf('1', 1),
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })

  it('should reject price with more than 6 digits', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 1000000,
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })
})
