import { MakeProduct } from '../../../test/factories/MakeProductFactory'

describe('Create product handler', () => {
  it('should be able to create a new product', async () => {
    const response = await new MakeProduct().toHandler()

    expect(response.isRight()).toBeTruthy()
  })

  it('should not be able to create a new product', async () => {
    const response = await new MakeProduct().toHandler({
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
