import { CloneProductUseCase } from '../../domain/useCases/CloneProductUseCase'
import { PrismaProductRepository } from '../repositories/prisma/PrismaProductRepository'

type CloneProductRequest = { productId: string }

export class CloneProductHandler {
  async handle ({ productId }: CloneProductRequest) {
    const prismaProductRepository = new PrismaProductRepository()

    const cloneProductUseCase = new CloneProductUseCase(
      prismaProductRepository
    )

    const response = await cloneProductUseCase.execute({ productId })

    return response
  }
}
