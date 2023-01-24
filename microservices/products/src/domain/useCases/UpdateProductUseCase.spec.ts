import { MakeProduct } from '../../../test/factories/MakeProductFactory'
import { Product } from '../entities/Product'
import { InMemoryProductRepository } from '../repositories/inMemory/InMemoryProductRepository'
import { ProductDoesNotExistsError } from './errors/ProductDoesNotExistsError'
import { UpdateProductUseCase } from './UpdateProductUseCase'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new UpdateProductUseCase(inMemoryProductRepository)

describe('Update product use case', () => {
  it('should not be able to update a product with wrong id', async () => {
    const product = (await new MakeProduct().toDomain()).value as Product

    const response = await sut.execute({
      productId: 'ddb9b22d-121a-49b0-a39d-d5885a3d0304',
      data: product.props
    })

    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(ProductDoesNotExistsError)
  })

  it('should be able to update a product', async () => {
    const product = (await new MakeProduct().toDomain()).value as Product

    inMemoryProductRepository.createProducts(product)

    const response = await sut.execute({
      productId: product.id,
      data: product.props
    })

    expect(response.isRight()).toBeTruthy()
  })

  it('should not be able to update a product with wrong data', async () => {
    const product = (await new MakeProduct().toDomain()).value as Product

    inMemoryProductRepository.createProducts(product)

    const response = await sut.execute({
      productId: product.id,
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

    expect(response.isLeft()).toBeTruthy()
  })
})
