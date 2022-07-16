import { prisma } from '../prisma/client'
import { UpdateProductHandler } from './UpdateProductHandler'

const sut = new UpdateProductHandler()

describe('Update product handler', () => {
  afterAll(async () => {
    await prisma.products.deleteMany()
  })

  it('should not be able to update a product with wrong id', async () => {
    const response = await sut.handler({
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

    const response = await sut.handler({
      productId: createdProduct.id,
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

    const response = await sut.handler({
      productId: createdProduct.id,
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