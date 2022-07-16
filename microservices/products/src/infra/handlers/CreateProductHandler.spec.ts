import { prisma } from '../prisma/client'
import { CreateProductHandler } from './CreateProductHandler'

const sut = new CreateProductHandler()

describe('Create product handler', () => {
  afterAll(async () => {
    await prisma.products.deleteMany()
  })

  it('should be able to create a new product', async () => {
    const response = await sut.handle({
      name: 'Creatina',
      ingredients: 'Aminoácidos essências',
      availability: true,
      volume: '300mg',
      price: 30,
      thumbnail: 'image.jpg',
      others: 'Após deve ser mantido em temperatura ambiente'
    })

    expect(response.isRight()).toBeTruthy()
  })

  it('should not be able to create a new product', async () => {
    const response = await sut.handle({
      name: '',
      ingredients: '',
      availability: Boolean(),
      volume: 'mg',
      price: 0,
      thumbnail: '',
      others: 'O'
    })

    expect(response.isLeft()).toBeTruthy()
  })
})
