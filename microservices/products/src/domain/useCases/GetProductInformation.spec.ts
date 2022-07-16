import { Product } from '../entities/Product'
import { InMemoryProductRepository } from '../repositories/inMemory/InMemoryProductRepository'
import { GetProductInformationUseCase } from './GetProductInformation'

const inMemoryProductRepository = new InMemoryProductRepository()

const sut = new GetProductInformationUseCase(inMemoryProductRepository)

describe('Get products by name use case', () => {
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

  it('should be able to search a product information', async () => {
    const product = await sut.execute({ query: ['mina', 'clara'] })

    expect(product.length).toEqual(5)
    expect(product[0].props.name).toEqual('Albumina')
    expect(product[0].props.ingredients).toEqual('clara de ovos')
  })

  it('should be able to search a product information with case-insensitive',
    async () => {
      const product = await sut.execute({ query: ['MINA', 'CLARA'] })

      expect(product.length).toEqual(5)
      expect(product[0].props.name).toEqual('Albumina')
      expect(product[0].props.ingredients).toEqual('clara de ovos')
    }
  )

  it('should be able to search a product without a information', async () => {
    const product = await sut.execute({ query: '' })

    expect(product.length).toEqual(5)
    expect(product[0].props.name).toEqual('Albumina')
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
