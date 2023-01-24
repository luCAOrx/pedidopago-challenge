// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_CloneProductRequest(arg) {
  if (!(arg instanceof product_pb.CloneProductRequest)) {
    throw new Error('Expected argument of type product.CloneProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CloneProductRequest(buffer_arg) {
  return product_pb.CloneProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_CreateProductRequest(arg) {
  if (!(arg instanceof product_pb.CreateProductRequest)) {
    throw new Error('Expected argument of type product.CreateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateProductRequest(buffer_arg) {
  return product_pb.CreateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_DeleteProductRequest(arg) {
  if (!(arg instanceof product_pb.DeleteProductRequest)) {
    throw new Error('Expected argument of type product.DeleteProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_DeleteProductRequest(buffer_arg) {
  return product_pb.DeleteProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductInformationRequest(arg) {
  if (!(arg instanceof product_pb.GetProductInformationRequest)) {
    throw new Error('Expected argument of type product.GetProductInformationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductInformationRequest(buffer_arg) {
  return product_pb.GetProductInformationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ListAllProductsRequest(arg) {
  if (!(arg instanceof product_pb.ListAllProductsRequest)) {
    throw new Error('Expected argument of type product.ListAllProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ListAllProductsRequest(buffer_arg) {
  return product_pb.ListAllProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Nothing(arg) {
  if (!(arg instanceof product_pb.Nothing)) {
    throw new Error('Expected argument of type product.Nothing');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Nothing(buffer_arg) {
  return product_pb.Nothing.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductListResponse(arg) {
  if (!(arg instanceof product_pb.ProductListResponse)) {
    throw new Error('Expected argument of type product.ProductListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductListResponse(buffer_arg) {
  return product_pb.ProductListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductResponse(arg) {
  if (!(arg instanceof product_pb.ProductResponse)) {
    throw new Error('Expected argument of type product.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductResponse(buffer_arg) {
  return product_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_UpdateProductRequest(arg) {
  if (!(arg instanceof product_pb.UpdateProductRequest)) {
    throw new Error('Expected argument of type product.UpdateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_UpdateProductRequest(buffer_arg) {
  return product_pb.UpdateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  createProduct: {
    path: '/product.ProductService/createProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.CreateProductRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_CreateProductRequest,
    requestDeserialize: deserialize_product_CreateProductRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  cloneProduct: {
    path: '/product.ProductService/cloneProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.CloneProductRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_CloneProductRequest,
    requestDeserialize: deserialize_product_CloneProductRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  getProductInformation: {
    path: '/product.ProductService/getProductInformation',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.GetProductInformationRequest,
    responseType: product_pb.ProductListResponse,
    requestSerialize: serialize_product_GetProductInformationRequest,
    requestDeserialize: deserialize_product_GetProductInformationRequest,
    responseSerialize: serialize_product_ProductListResponse,
    responseDeserialize: deserialize_product_ProductListResponse,
  },
  listAllProducts: {
    path: '/product.ProductService/listAllProducts',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ListAllProductsRequest,
    responseType: product_pb.ProductListResponse,
    requestSerialize: serialize_product_ListAllProductsRequest,
    requestDeserialize: deserialize_product_ListAllProductsRequest,
    responseSerialize: serialize_product_ProductListResponse,
    responseDeserialize: deserialize_product_ProductListResponse,
  },
  updateProduct: {
    path: '/product.ProductService/updateProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.UpdateProductRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_UpdateProductRequest,
    requestDeserialize: deserialize_product_UpdateProductRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  deleteProduct: {
    path: '/product.ProductService/deleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.DeleteProductRequest,
    responseType: product_pb.Nothing,
    requestSerialize: serialize_product_DeleteProductRequest,
    requestDeserialize: deserialize_product_DeleteProductRequest,
    responseSerialize: serialize_product_Nothing,
    responseDeserialize: deserialize_product_Nothing,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
