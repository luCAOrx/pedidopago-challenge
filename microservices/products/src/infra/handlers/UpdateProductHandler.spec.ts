import { prisma } from '../prisma/client'
import { UpdateProductHandler } from './UpdateProductHandler'
import { randomUUID } from 'node:crypto'

const sut = new UpdateProductHandler()

const id = randomUUID()

const createdProduct = prisma.products.create({
  data: {
    id,
    name: 'Creatina',
    ingredients: 'Aminoácidos essências',
    availability: true,
    volume: '300mg',
    price: 30,
    thumbnail: 'image.jpg',
    others: 'Após deve ser mantido em temperatura ambiente'
  }
})

describe('Update product handler', () => {
  beforeAll(async () => {
    const createProducts = async () => await createdProduct

    createProducts()
  })

  afterAll(async () => {
    await prisma.products.deleteMany()
  })

  it('should not be able to update a product with wrong id', async () => {
    const response = await sut.handle({
      productId: 'ddb9b22d-121a-49b0-a39d-d5885a3d0304',
      data: {
        name: 'Dipirona',
        ingredients: 'dipirona mono-hidratada',
        availability: true,
        volume: '100mg',
        price: 10,
        thumbnail: 'image.jpg',
        others: 'O medicamento após deve ser mantido em temperatura ambiente'
      }
    })

    expect(response.isLeft()).toBeTruthy()
  })

  it('should not be able to update a product with wrong data', async () => {
    const response = await sut.handle({
      productId: (await createdProduct).id,
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

  it('should be able to update a product', async () => {
    const response = await sut.handle({
      productId: (await createdProduct).id,
      data: {
        name: 'Dipirona',
        ingredients: 'dipirona mono-hidratada',
        availability: true,
        volume: '100mg',
        price: 10,
        thumbnail: 'image.jpg',
        others: 'O medicamento após deve ser mantido em temperatura ambiente'
      }
    })

    expect(response.isRight()).toBeTruthy()
  })
})
