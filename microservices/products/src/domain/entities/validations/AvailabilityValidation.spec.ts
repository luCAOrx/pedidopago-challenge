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

describe('Product availability value object', () => {
  it('should accept valid availability', async () => {
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

  it('should reject the field availability if it is empty', async () => {
    const response = await sut.execute({
      name: 'Benegripe',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: Boolean(),
      volume: '200mg',
      price: 1000,
      thumbnail: 'image.jpg'
    })

    expect(response.isLeft()).toBeTruthy()

    expect(createProductSpy).not.toHaveBeenCalled()
  })
})
