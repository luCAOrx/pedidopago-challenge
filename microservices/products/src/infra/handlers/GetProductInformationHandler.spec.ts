import { prisma } from '../prisma/client'
import { CreateProductHandler } from './CreateProductHandler'
import { GetProductInformationHandler } from './GetProductInformationHandler'

const sut = new GetProductInformationHandler()

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

  it('should be able to search a product information', async () => {
    const product = await sut.handler({ query: ['mina', 'clara'] })

    expect(product[0].props.name).toEqual('Albumina')
    expect(product[0].props.ingredients).toEqual('clara de ovos')
  })

  it('should be able to search a product information with case-insensitive',
    async () => {
      const product = await sut.handler({ query: ['MINA', 'CLARA'] })

      expect(product[0].props.name).toEqual('Albumina')
      expect(product[0].props.ingredients).toEqual('clara de ovos')
    }
  )

  it('should be able to search a product without a information', async () => {
    const product = await sut.handler({ query: '' })

    expect(product.length).toEqual(5)
  })

  it('should be able to paginate', async () => {
    let product = await sut.handler({ takePage: 5 })

    expect(product.length).toEqual(5)

    product = await sut.handler({ takePage: 5, page: 2 })

    expect(product.length).toEqual(5)
  })
})
