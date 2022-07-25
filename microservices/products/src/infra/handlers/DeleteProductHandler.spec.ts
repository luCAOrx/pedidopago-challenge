import { prisma } from '../prisma/client'
import { PrismaProductRepository } from '../repositories/prisma/PrismaProductRepository'
import { DeleteProductHandler } from './DeleteProductHandler'
import { randomUUID } from 'node:crypto'

const sut = new DeleteProductHandler()

const id = randomUUID()

describe('Delete product handler', () => {
  afterAll(async () => {
    await prisma.products.deleteMany()
  })

  it('should not be able to delete a product with wrong id', async () => {
    const response = await sut.handle({
      productId: 'ddb9b22d-121a-49b0-a39d-d5885a3d0304'
    })

    expect(response.isLeft()).toBeTruthy()
  })

  it('should be able to delete a product', async () => {
    const prismaProductRepository = new PrismaProductRepository()

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

    const response = await sut.handle({
      productId: createdProduct.id
    })

    const productFound = await prismaProductRepository.findProductById(
      createdProduct.id
    )

    expect(response.isRight()).toBeTruthy()
    expect(productFound).toBeNull()
  })
})
