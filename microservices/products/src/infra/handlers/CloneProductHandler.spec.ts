import { prisma } from '../prisma/client'
import { CloneProductHandler } from './CloneProductHandler'

const sut = new CloneProductHandler()

describe('Clone product handler', () => {
  afterAll(async () => {
    await prisma.products.deleteMany()
  })

  it('should be able to clone a product', async () => {
    const createdProduct = await prisma.products.create({
      data: {
        name: 'Creatina',
        ingredients: 'Aminoácidos essências',
        availability: true,
        volume: '300mg',
        price: 30,
        thumbnail: 'image.jpg',
        others: 'Após deve ser mantido em temperatura ambiente'
      }
    })

    const productCloned = await sut.handler({
      productId: createdProduct.id
    })

    expect(productCloned.isRight()).toBeTruthy()
  })

  it('should not be able to clone a product with id inexistent', async () => {
    const cloneProduct = await sut.handler({
      productId: 'aad54b32-b870-4f93-b0e9-331eb1d1f311'
    })

    expect(cloneProduct.isLeft()).toBeTruthy()
  })
})
