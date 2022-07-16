import { Either, left, right } from '../../core/domain/logic/Either'
import { CreateProductRequestDTO } from '../dtos/ProductDTO'
import { Product } from '../entities/Product'
import { AvailabilityValidation, IngredientsValidation, NameValidation, OthersValidation, PriceValidation, ThumbnailValidation, VolumeValidation } from '../entities/validations'
import { ProductRepository } from '../repositories/ProductRepository'
import { ProductDoesNotExistsError } from './errors/ProductDoesNotExistsError'

type UpdateProductRequest = { productId: string, data: CreateProductRequestDTO }

type UpdateProductResponse = Either<
NameValidation |
IngredientsValidation |
AvailabilityValidation |
VolumeValidation |
PriceValidation |
ThumbnailValidation |
OthersValidation |
ProductDoesNotExistsError,
Product
>

export class UpdateProductUseCase {
  constructor (private productRepository: ProductRepository) {}

  async execute ({
    productId,
    data
  }: UpdateProductRequest): Promise<UpdateProductResponse> {
    const product = await this.productRepository.findProductById(
      productId
    )

    if (productId !== product?.id) {
      return left(new ProductDoesNotExistsError())
    }

    const productOrError = Product.create(data)

    if (productOrError.isLeft()) {
      return left(productOrError.value)
    }

    product.props = productOrError.value.props

    await this.productRepository.updateProduct(product)

    return right(product)
  }
}
