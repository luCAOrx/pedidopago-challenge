import { MakeProduct } from '../../../test/factories/MakeProductFactory'

describe('Create product use case', () => {
  it('should be able to create a new product', async () => {
    const product = await new MakeProduct().toDomain()

    expect(product.isRight()).toBeTruthy()
  })

  it('should not be able to create a new product', async () => {
    const response = await new MakeProduct().toDomain({
      name: '',
      ingredients: '',
      availability: Boolean(),
      volume: 'mg',
      price: 0,
      thumbnail: '',
      others: 'O'
    })

    expect(response.isRight()).not.toBeTruthy()
  })
})
