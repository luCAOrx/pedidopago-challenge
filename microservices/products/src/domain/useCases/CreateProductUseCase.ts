import { Either, left, right } from '../../core/domain/logic/Either'
import { CreateProductRequestDTO } from '../dtos/ProductDTO'
import {
  NameValidation,
  IngredientsValidation,
  AvailabilityValidation,
  VolumeValidation,
  PriceValidation,
  ThumbnailValidation,
  OthersValidation
} from '../entities/validations'
import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/ProductRepository'

type CreateProductRequest = CreateProductRequestDTO

type CreateProductResponse = Either<
  NameValidation |
  IngredientsValidation |
  AvailabilityValidation |
  VolumeValidation |
  PriceValidation |
  ThumbnailValidation |
  OthersValidation,
  Product
>

export class CreateProductUseCase {
  constructor (private productRepository: ProductRepository) {}

  async execute (data: CreateProductRequest): Promise<CreateProductResponse> {
    const productOrError = Product.create(data)

    if (productOrError.isLeft()) {
      return left(productOrError.value)
    }

    const product = productOrError.value

    await this.productRepository.createProducts(product)

    return right(product)
  }
}
