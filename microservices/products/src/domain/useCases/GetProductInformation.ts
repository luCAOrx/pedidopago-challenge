import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/ProductRepository'

type GetProductInformationRequest = {
  query?: any
  takePage?: number
  page?: number
}

type GetProductInformationResponse = Product[]

export class GetProductInformation {
  constructor (private productRepository: ProductRepository) {}

  async execute ({
    query,
    takePage = 5,
    page = 1
  }: GetProductInformationRequest): Promise<GetProductInformationResponse> {
    const productsOrProduct = await this.productRepository.getProductInformation({
      query,
      takePage,
      page
    })

    return productsOrProduct
  }
}
