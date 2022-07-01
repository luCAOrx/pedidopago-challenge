import { Product } from '../entities/Product'

export type GetProductInformationParams = {
  query?: any,
  page: number,
  takePage: number
}

export interface ProductRepository {
  createProducts: (product: Product) => Promise<Product>;
  findProductById: (productId: string) => Promise<Product>
  cloneProduct: (product: Product) => Promise<Product>;
  getProductInformation: (
    params: GetProductInformationParams
  ) => Promise<Product[]>;
  listAllProducts: (page: number, takePage: number) => Promise<Product[]>;
  updateProduct: (data: Product) => Promise<Product>;
  deleteProduct: (product: Product) => Promise<void>;
}
