import 'dotenv/config'
import { ChannelCredentials } from '@grpc/grpc-js'
import { ProductServiceClient } from '../proto/product_grpc_pb'
import { CreateProductRequest, ProductResponse } from '../proto/product_pb'

const productClient = new ProductServiceClient(
  `${process.env.GRPC_PRODUCT_SERVER_HOST}:${process.env.GRPC_PRODUCT_SERVER_PORT}`,
  ChannelCredentials.createInsecure()
)

describe('Product server', () => {
  it('should be able to create a new product', async () => {
    return new Promise<ProductResponse>((resolve, reject) => {
      const product = new CreateProductRequest()
      product.setThumbnail('image.jpg')
      product.setName('Albumina')
      product.setPrice(10)
      product.setIngredients('vitamina C')
      product.setAvailability(true)
      product.setVolume('100mg')
      product.setOthers('O medicamento deve ser mantido em temperatura ambiente')

      productClient.createProducts(product, (err, product) => {
        if (err) reject(err)
        else resolve(product)

        console.log(product)

        expect(product).toBeTruthy()
      })
    })
  })

  //   it('should be able to clone a product', async () => {
  //     const id = randomUUID()

  //     const createProduct = await prisma.products.create({
  //       data: {
  //         id,
  //         name: 'Creatina',
  //         ingredients: 'Aminoácidos essências',
  //         availability: true,
  //         volume: '300mg',
  //         price: 30,
  //         thumbnail: 'image.jpg',
  //         others: 'Após deve ser mantido em temperatura ambiente'
  //       }
  //     })

  //     const product = new CloneProductRequest()

  //     product.setId(createProduct.id)

  //     productClient.cloneProduct(product, (err, response) => {
  //       if (err) return err.details
  //       expect(response.toObject()).toBeTruthy()
  //     })
  //   })

  //   it('should be able get product information', () => {
  //     const product = new GetProductInformationRequest()

  //     product.setQuery('Alb')
  //     product.setPage('1')

  //     productClient.getProductInformation(product, (err, response) => {
  //       if (err) return err.details

  //       expect(response.toObject().productsList).toBeTruthy()
  //     })
  //   })

  //   it('should be able list all products', () => {
  //     const product = new ListAllProductsRequest()
  //     product.setPage('1')

  //     productClient.listAllProducts(product, (err, response) => {
  //       if (err) return err.details

  //       expect(response.toObject().productsList).toBeTruthy()
  //     })
  //   })

  //   it('should be able to update a product', async () => {
  //     const id = randomUUID()

  //     const createProduct = await prisma.products.create({
  //       data: {
  //         id,
  //         name: 'Polivitamínico',
  //         ingredients: 'Aminoácidos essências, vitamina A',
  //         availability: true,
  //         volume: '300mg',
  //         price: 30,
  //         thumbnail: 'image.jpg',
  //         others: 'Após aberto deve ser mantido em temperatura ambiente'
  //       }
  //     })

  //     const product = new UpdateProductRequest()

  //     product.setId(createProduct.id)
  //     product.setThumbnail('image.jpg')
  //     product.setName('Multivitamínico')
  //     product.setPrice(5)
  //     product.setIngredients('vitamina A, vitamina B, vitamina C')
  //     product.setAvailability(true)
  //     product.setVolume('200mg')
  //     product.setOthers('O medicamento deve ser mantido em temperatura ambiente')

  //     productClient.updateProduct(product, (err, response) => {
  //       if (err) return err.details

  //       expect(response.toObject()).toBeTruthy()
  //     })
  //   })

  //   it('should be able to delete a product', async () => {
  //     const id = randomUUID()

  //     const createProduct = await prisma.products.create({
  //       data: {
  //         id,
  //         name: 'Polivitamínico',
  //         ingredients: 'Aminoácidos essências, vitamina A',
  //         availability: true,
  //         volume: '300mg',
  //         price: 30,
  //         thumbnail: 'image.jpg',
  //         others: 'Após aberto deve ser mantido em temperatura ambiente'
  //       }
  //     })

  //     const product = new DeleteProductRequest()

  //     product.setId(createProduct.id)

  //     productClient.deleteProduct(product, (err, response) => {
  //       if (err) return err

  //       expect(response.toObject()).toBeTruthy()
  //     })
  //   })
})
