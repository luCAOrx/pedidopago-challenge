import { Either, left, right } from '../../core/domain/logic/Either'
import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/ProductRepository'
import { ProductDoesNotExistsError } from './errors/ProductDoesNotExistsError'

type CloneProductRequest = { productId: string }

type CloneProductResponse = Either<ProductDoesNotExistsError, Product>

export class CloneProductUseCase {
  constructor (private productRepository: ProductRepository) {}

  async execute ({
    productId
  }: CloneProductRequest): Promise<CloneProductResponse> {
    const findProductById = await this.productRepository.findProductById(
      productId
    )

    if (productId !== findProductById?.id) {
      return left(new ProductDoesNotExistsError())
    }

    const product = Product.create(findProductById.props)

    const clonedProduct = await this.productRepository.cloneProduct(
      Object(product.value)
    )

    return right(clonedProduct)
  }
}
