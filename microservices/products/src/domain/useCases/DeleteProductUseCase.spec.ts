import { Product } from '../entities/Product'
import {
  InMemoryProductRepository
} from '../repositories/inMemory/InMemoryProductRepository'
import { DeleteProductUseCase } from './DeleteProductUseCase'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new DeleteProductUseCase(inMemoryProductRepository)

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
  it('should not be able to delete a product with wrong id', async () => {
    async function deleteProduct () {
      await sut.execute({ productId: 'ddb9b22d-121a-49b0-a39d-d5885a3d0304' })
    }

    expect(deleteProduct).rejects.toEqual(new Error('Product does not exists.'))
  })

  it('should be able to delete a product', async () => {
    const response = await sut.execute({ productId: createdProduct.id })

    expect(response.isRight()).toBeTruthy()
    expect(inMemoryProductRepository.items.length).toEqual(0)
  })
})
