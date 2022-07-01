import { Product } from '../entities/Product'
import { InMemoryProductRepository } from '../repositories/inMemory/InMemoryProductRepository'
import { ListAllProductsUseCase } from './ListAllProductsUseCase'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new ListAllProductsUseCase(inMemoryProductRepository)

describe('List all products use case', () => {
  beforeAll(async () => {
    for (let i = 0; i < 20; i++) {
      const products = Product.create({
        name: 'Albumina',
        ingredients: 'clara de ovos',
        availability: true,
        volume: '500mg',
        price: 3000,
        thumbnail: 'image.jpg',
        others: 'Após deve ser mantido em temperatura ambiente'
      }).value as Product

      await inMemoryProductRepository.createProducts(products)
    }
  })

  it('should be able to list all products', async () => {
    const product = await sut.execute({ })

    expect(product.length).toEqual(5)
    expect(product[0].props.name).toEqual('Albumina')
    expect(product[0].props.ingredients).toEqual('clara de ovos')
  })

  it('should be able to paginate', async () => {
    let product = await sut.execute({ takePage: 5 })

    expect(product.length).toEqual(5)
    expect(product[0].props.name).toEqual('Albumina')

    product = await sut.execute({ takePage: 5, page: 2 })

    expect(product.length).toEqual(5)
    expect(product[0].props.name).toEqual('Albumina')
  })
})
