import 'dotenv/config'

import { Server, ServerCredentials } from '@grpc/grpc-js'

import { ProductServer } from './implementations/ProductServer'

import { ProductServiceService } from './proto/product_grpc_pb'

import { promisify } from 'util'

const server = new Server()

const bindPromise = promisify(server.bindAsync).bind(server)

server.addService(ProductServiceService, new ProductServer())

bindPromise(
  `${process.env.GRPC_PRODUCT_SERVER_HOST}:${process.env.GRPC_PRODUCT_SERVER_PORT}`,
  ServerCredentials.createInsecure()
).then(() => {
  server.start()
  console.log(
    `listening on ${process.env.GRPC_PRODUCT_SERVER_HOST}:${process.env.GRPC_PRODUCT_SERVER_PORT}`
  )
}).catch((error) => console.log(error))
