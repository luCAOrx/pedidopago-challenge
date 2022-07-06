import { Products } from '@prisma/client'
import { Product } from '../../domain/entities/Product'

export class ProductMapper {
  static toDomain (raw: Products): Product {
    const productOrError = Product.create({
      availability: raw.availability,
      ingredients: raw.ingredients,
      name: raw.name,
      price: Number(raw.price),
      thumbnail: raw.thumbnail,
      volume: raw.volume,
      others: raw.others
    }, raw.id)

    if (productOrError.isLeft()) {
      throw new Error('The field value is invalid.')
    }

    return productOrError.value
  }

  static toPersistence (product: Product) {
    return {
      id: product.id,
      availability: product.props.availability,
      ingredients: product.props.ingredients,
      name: product.props.name,
      price: product.props.price,
      thumbnail: product.props.thumbnail,
      volume: product.props.volume,
      others: product.props.others
    }
  }
}
