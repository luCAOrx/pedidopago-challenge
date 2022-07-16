import { prisma } from '../prisma/client'
import { CreateProductHandler } from './CreateProductHandler'
import { ListAllProductsHandler } from './ListAllProductsHandler'

const sut = new ListAllProductsHandler()

describe('Get products by name handler', () => {
  beforeAll(async () => {
    const createProduct = new CreateProductHandler()

    for (let i = 0; i < 20; i++) {
      await createProduct.handle({
        name: 'Albumina',
        ingredients: 'clara de ovos',
        availability: true,
        volume: '500mg',
        price: 30,
        thumbnail: 'image.jpg',
        others: 'Após aberto deve ser mantido em temperatura ambiente'
      })
    }
  })

  afterAll(async () => {
    await prisma.products.deleteMany()
  })

  it('should be able to list all products', async () => {
    const product = await sut.handler({ })

    expect(product.length).toEqual(5)
  })

  it('should be able to paginate', async () => {
    let product = await sut.handler({ takePage: 5 })

    expect(product.length).toEqual(5)

    product = await sut.handler({ takePage: 5, page: 2 })

    expect(product.length).toEqual(5)
  })
})
