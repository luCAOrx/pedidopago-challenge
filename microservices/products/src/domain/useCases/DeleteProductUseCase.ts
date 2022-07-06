import { Either, left, right } from '../../core/domain/logic/Either'
import { ProductRepository } from '../repositories/ProductRepository'
import { ProductDoesNotExistsError } from './errors/ProductDoesNotExistsError'

type DeleteProductRequest = { productId: string }

type DeleteProductResponse = Either<ProductDoesNotExistsError, null>

export class DeleteProductUseCase {
  constructor (private productRepository: ProductRepository) {}

  async execute ({
    productId
  }: DeleteProductRequest): Promise<DeleteProductResponse> {
    const product = await this.productRepository.findProductById(
      productId
    )

    if (productId !== product.id) {
      return left(new ProductDoesNotExistsError())
    }

    await this.productRepository.deleteProduct(product)

    return right(null)
  }
}
