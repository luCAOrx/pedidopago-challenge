import { Either, right } from '../../core/domain/logic/Either'
import { ProductRepository } from '../repositories/ProductRepository'

type DeleteProductRequest = { productId: string }

type DeleteProductResponse = Either<Error, null>

export class DeleteProductUseCase {
  constructor (private productRepository: ProductRepository) {}

  async execute ({
    productId
  }: DeleteProductRequest): Promise<DeleteProductResponse> {
    const product = await this.productRepository.findProductById(
      productId
    )

    if (productId !== product.id) {
      throw new Error('Product does not exists.')
    }

    await this.productRepository.deleteProduct(product)

    return right(null)
  }
}
