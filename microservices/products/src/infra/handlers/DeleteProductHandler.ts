import { PrismaProductRepository } from '../repositories/prisma/PrismaProductRepository'
import { DeleteProductUseCase } from '../../domain/useCases/DeleteProductUseCase'

type DeleteProductRequest = { productId: string }

export class DeleteProductHandler {
  async handler ({ productId }: DeleteProductRequest) {
    const prismaProductRepository = new PrismaProductRepository()

    const deleteProductUseCase = new DeleteProductUseCase(
      prismaProductRepository
    )

    const response = deleteProductUseCase.execute({ productId })

    return response
  }
}
