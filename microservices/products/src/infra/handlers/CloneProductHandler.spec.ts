import { prisma } from '../prisma/client'
import { CloneProductHandler } from './CloneProductHandler'
import { randomUUID } from 'node:crypto'

const sut = new CloneProductHandler()

const id = randomUUID()

describe('Clone product handler', () => {
  afterAll(async () => {
    await prisma.products.deleteMany()
  })

  it('should be able to clone a product', async () => {
    const createdProduct = await prisma.products.create({
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

    const productCloned = await sut.handle({
      productId: createdProduct.id
    })

    expect(productCloned.isRight()).toBeTruthy()
  })

  it('should not be able to clone a product with id inexistent', async () => {
    const cloneProduct = await sut.handle({
      productId: 'aad54b32-b870-4f93-b0e9-331eb1d1f311'
    })

    expect(cloneProduct.isLeft()).toBeTruthy()
  })
})
