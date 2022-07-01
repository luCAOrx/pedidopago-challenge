import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/ProductRepository'

type CloneProductRequest = { productId: string }

type CloneProductResponse = Product

export class CloneProductUseCase {
  constructor (private productRepository: ProductRepository) {}

  async execute ({
    productId
  }: CloneProductRequest): Promise<CloneProductResponse> {
    const findProductById = await this.productRepository.findProductById(
      productId
    )

    if (productId !== findProductById?.id) {
      throw new Error('Product does not exists.')
    }

    const product = Product.create(findProductById.props)

    const clonedProduct = await this.productRepository.cloneProduct(
      Object(product.value)
    )

    return clonedProduct
  }
}
