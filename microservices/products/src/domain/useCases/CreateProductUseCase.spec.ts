import { CreateProductUseCase } from './CreateProductUseCase'

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

describe('Create product use case', () => {
  it('should be able to create a new product', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 1000,
      thumbnail: 'image.jpg',
      others: 'O medicamento após deve ser mantido em temperatura ambiente'
    })

    expect(response).toBeTruthy()

    expect(createProductSpy).toHaveBeenCalled()
  })

  it('should not be able to create a new product', async () => {
    const response = await sut.execute({
      name: '',
      ingredients: '',
      availability: Boolean(),
      volume: 'mg',
      price: 0,
      thumbnail: '',
      others: 'O'
    })

    expect(response.isRight()).not.toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })
})
