import { Product } from '../entities/Product'
import { InMemoryProductRepository } from '../repositories/inMemory/InMemoryProductRepository'
import { CloneProductUseCase } from './CloneProductUseCase'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new CloneProductUseCase(inMemoryProductRepository)

describe('Clone product use case', () => {
  it('should be able to clone a new product', async () => {
    const product = Product.create({
      name: 'Multivitamínico',
      ingredients: 'vitamina c, dipirona mono hidratada',
      availability: true,
      volume: '200mg',
      price: 1000,
      thumbnail: 'image.jpg',
      others: 'O medicamento após deve ser mantido em temperatura ambiente'
    }).value as Product

    await inMemoryProductRepository.createProducts(product)

    const productCloned = await sut.execute({ productId: product.id })

    expect(productCloned).toBeTruthy()
  })

  it('should not be able to clone a product', async () => {
    const cloneProduct = await sut.execute({
      productId: 'aad54b32-b870-4f93-b0e9-331eb1d1f311'
    })

    expect(cloneProduct.isLeft()).toBeTruthy()
  })
})
