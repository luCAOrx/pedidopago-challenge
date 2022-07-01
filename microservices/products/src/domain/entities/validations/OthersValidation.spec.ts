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

describe('Product others value object', () => {
  it('should accept valid others', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 1000,
      thumbnail: 'image.jpg',
      others: 'O medicamento após deve ser mantido em temperatura ambiente'
    })

    expect(response.isRight()).toBeTruthy()

    expect(createProductSpy).toHaveBeenCalled()
  })

  it('should reject others with less than 2 characters', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 1000,
      thumbnail: 'image.jpg',
      others: 'O'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })

  it('should reject others with more than 255 characters', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 1000,
      thumbnail: 'image.jpg',
      others: 'O medicamento deve está em temperatura ambiente'.repeat(260)
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })
})
