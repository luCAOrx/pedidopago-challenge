import { MakeProduct } from '../../../test/factories/MakeProductFactory'
import { Product } from '../entities/Product'
import {
  InMemoryProductRepository
} from '../repositories/inMemory/InMemoryProductRepository'
import { DeleteProductUseCase } from './DeleteProductUseCase'
import { ProductDoesNotExistsError } from './errors/ProductDoesNotExistsError'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new DeleteProductUseCase(inMemoryProductRepository)

describe('Delete product use case', () => {
  it('should not be able to delete a product with wrong id', async () => {
    const response = await sut.execute({
      productId: 'ddb9b22d-121a-49b0-a39d-d5885a3d0304'
    })

    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(ProductDoesNotExistsError)
  })

  it('should be able to delete a product', async () => {
    const product = (await new MakeProduct().toDomain()).value as Product
    inMemoryProductRepository.createProducts(product)

    const response = await sut.execute({ productId: product.id })

    expect(response.isRight()).toBeTruthy()
    expect(inMemoryProductRepository.items.length).toEqual(0)
  })
})
