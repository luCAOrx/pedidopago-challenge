import { CreateProductRequestDTO } from '../../src/domain/dtos/ProductDTO'
import { InMemoryProductRepository } from '../../src/domain/repositories/inMemory/InMemoryProductRepository'
import { CreateProductUseCase } from '../../src/domain/useCases/CreateProductUseCase'
import { CreateProductHandler } from '../../src/infra/handlers/CreateProductHandler'

type Override = Partial<CreateProductRequestDTO>;

const inMemoryProductRepository = new InMemoryProductRepository()

export class MakeProduct {
  public toDomain (override: Override = {}) {
    const createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)

    return createProductUseCase.execute({
      name: 'Albumina',
      ingredients: 'clara de ovos',
      availability: true,
      volume: '500mg',
      price: 30,
      thumbnail: 'image.jpg',
      others: 'Após aberto deve ser mantido em temperatura ambiente',
      ...override
    })
  }

  public async toHandler (override: Override = {}) {
    return await new CreateProductHandler().handle({
      name: 'Albumina',
      ingredients: 'clara de ovos',
      availability: true,
      volume: '500mg',
      price: 30,
      thumbnail: 'image.jpg',
      others: 'Após aberto deve ser mantido em temperatura ambiente',
      ...override
    })
  }
}
