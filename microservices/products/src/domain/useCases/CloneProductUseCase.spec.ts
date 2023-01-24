import { MakeProduct } from '../../../test/factories/MakeProductFactory'
import { Product } from '../entities/Product'
import { InMemoryProductRepository } from '../repositories/inMemory/InMemoryProductRepository'
import { CloneProductUseCase } from './CloneProductUseCase'
import { ProductDoesNotExistsError } from './errors/ProductDoesNotExistsError'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new CloneProductUseCase(inMemoryProductRepository)

describe('Clone product use case', () => {
  it('should be able to clone a new product', async () => {
    const product = (await new MakeProduct().toDomain()).value as Product

    inMemoryProductRepository.createProducts(product)

    const response = await sut.execute({ productId: product.id })

    expect(response.isRight()).toBeTruthy()
  })

  it('should not be able to clone a product', async () => {
    const response = await sut.execute({
      productId: 'aad54b32-b870-4f93-b0e9-331eb1d1f311'
    })

    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(ProductDoesNotExistsError)
  })
})
