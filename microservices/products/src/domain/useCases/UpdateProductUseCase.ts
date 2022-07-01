import { Either, left, right } from '../../core/domain/logic/Either'
import { CreateProductRequestDTO } from '../dtos/ProductDTO'
import { Product } from '../entities/Product'
import { AvailabilityValidation, IngredientsValidation, NameValidation, OthersValidation, PriceValidation, ThumbnailValidation, VolumeValidation } from '../entities/validations'
import { ProductRepository } from '../repositories/ProductRepository'

type UpdateProductRequest = { productId: string, data: CreateProductRequestDTO }

type UpdateProductResponse = Either<
NameValidation |
IngredientsValidation |
AvailabilityValidation |
VolumeValidation |
PriceValidation |
ThumbnailValidation |
OthersValidation,
Product
>

export class UpdateProductUseCase {
  constructor (private productRepository: ProductRepository) {}

  async execute ({
    productId,
    data
  }: UpdateProductRequest): Promise<UpdateProductResponse> {
    const findProductById = await this.productRepository.findProductById(
      productId
    )

    if (productId !== findProductById?.id) {
      throw new Error('Product does not exists.')
    }

    const productOrError = Product.create(data)

    if (productOrError.isLeft()) {
      return left(productOrError.value)
    }

    findProductById.props = productOrError.value.props

    await this.productRepository.updateProduct(Object(findProductById.props))

    return right(findProductById)
  }
}
