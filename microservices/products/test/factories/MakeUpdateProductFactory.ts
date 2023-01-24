import { CreateProductRequestDTO } from '../../src/domain/dtos/ProductDTO'
import { UpdateProductHandler } from '../../src/infra/handlers/UpdateProductHandler'

type Override = Partial<CreateProductRequestDTO>;

export class MakeUpdateProduct {
  public async toHandler ({
    override = {},
    productId
  }: {
    override?: Override;
    productId: string
  }) {
    return await new UpdateProductHandler().handle({
      productId,
      data: {
        name: 'Albumina',
        ingredients: 'clara de ovos',
        availability: true,
        volume: '500mg',
        price: 30,
        thumbnail: 'image.jpg',
        others: 'Após aberto deve ser mantido em temperatura ambiente',
        ...override
      }
    })
  }
}
