import {
  PrismaProductRepository
} from '../repositories/prisma/PrismaProductRepository'
import {
  GetProductInformationUseCase
} from '../../domain/useCases/GetProductInformation'

type GetProductInformationRequest = {
  query?: any
  takePage?: number
  page?: number
}

export class GetProductInformationHandler {
  async handler ({
    query,
    page,
    takePage
  }: GetProductInformationRequest) {
    const prismaProductRepository = new PrismaProductRepository()

    const getProductInformationUseCase = new GetProductInformationUseCase(
      prismaProductRepository
    )

    const response = await getProductInformationUseCase.execute({
      query,
      page,
      takePage
    })

    return response
  }
}
