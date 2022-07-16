import { CreateProductRequestDTO } from '../../domain/dtos/ProductDTO'

import {
  CreateProductUseCase
} from '../../domain/useCases/CreateProductUseCase'

import {
  PrismaProductRepository
} from '../repositories/prisma/PrismaProductRepository'

export class CreateProductHandler {
  async handle (request: CreateProductRequestDTO) {
    const {
      thumbnail,
      name,
      price,
      ingredients,
      availability,
      volume,
      others
    } = request

    const prismaProductRepository = new PrismaProductRepository()

    const createProductUseCase = new CreateProductUseCase(
      prismaProductRepository
    )

    const response = await createProductUseCase.execute({
      thumbnail,
      name,
      price,
      ingredients,
      availability,
      volume,
      others
    })

    return response
  }
}
