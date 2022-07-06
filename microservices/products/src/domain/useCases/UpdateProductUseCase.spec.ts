import { Product } from '../entities/Product'
import {
  InMemoryProductRepository
} from '../repositories/inMemory/InMemoryProductRepository'
import { UpdateProductUseCase } from './UpdateProductUseCase'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new UpdateProductUseCase(inMemoryProductRepository)

const createdProduct = Product.create({
  name: 'Albumina',
  ingredients: 'clara de ovos',
  availability: true,
  volume: '500mg',
  price: 3000,
  thumbnail: 'image.jpg',
  others: 'Após deve ser mantido em temperatura ambiente'
}).value as Product

inMemoryProductRepository.createProducts(createdProduct)

describe('Update product use case', () => {
  it('should not be able to update a product with wrong id', async () => {
    const updateProduct = await sut.execute({
      productId: 'ddb9b22d-121a-49b0-a39d-d5885a3d0304',
      data: {
        name: 'Benegripe',
        ingredients: 'vitamina c, dipirona mono hidratada',
        availability: true,
        volume: '200mg',
        price: 1000,
        thumbnail: 'image.jpg',
        others: 'O medicamento após deve ser mantido em temperatura ambiente'
      }
    })

    expect(updateProduct.isLeft()).toBeTruthy()
  })

  it('should be able to update a product', async () => {
    const response = await sut.execute({
      productId: createdProduct.id,
      data: {
        name: 'Benegripe',
        ingredients: 'vitamina c, dipirona mono hidratada',
        availability: true,
        volume: '200mg',
        price: 1000,
        thumbnail: 'image.jpg',
        others: 'O medicamento após deve ser mantido em temperatura ambiente'
      }
    })

    expect(response).toBeTruthy()
  })

  it('should not be able to update a product with wrong data', async () => {
    const response = await sut.execute({
      productId: createdProduct.id,
      data: {
        name: '',
        ingredients: '',
        availability: Boolean(),
        volume: 'mg',
        price: 0,
        thumbnail: '',
        others: 'O'
      }
    })

    expect(response.isRight()).not.toBeTruthy()
  })
})
