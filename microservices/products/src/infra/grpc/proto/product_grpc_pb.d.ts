// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as product_pb from "./product_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProduct: IProductServiceService_IcreateProduct;
    cloneProduct: IProductServiceService_IcloneProduct;
    getProductInformation: IProductServiceService_IgetProductInformation;
    listAllProducts: IProductServiceService_IlistAllProducts;
    updateProduct: IProductServiceService_IupdateProduct;
    deleteProduct: IProductServiceService_IdeleteProduct;
}

interface IProductServiceService_IcreateProduct extends grpc.MethodDefinition<product_pb.CreateProductRequest, product_pb.ProductResponse> {
    path: "/product.ProductService/createProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.CreateProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.CreateProductRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductResponse>;
}
interface IProductServiceService_IcloneProduct extends grpc.MethodDefinition<product_pb.CloneProductRequest, product_pb.ProductResponse> {
    path: "/product.ProductService/cloneProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.CloneProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.CloneProductRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductResponse>;
}
interface IProductServiceService_IgetProductInformation extends grpc.MethodDefinition<product_pb.GetProductInformationRequest, product_pb.ProductListResponse> {
    path: "/product.ProductService/getProductInformation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.GetProductInformationRequest>;
    requestDeserialize: grpc.deserialize<product_pb.GetProductInformationRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductListResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductListResponse>;
}
interface IProductServiceService_IlistAllProducts extends grpc.MethodDefinition<product_pb.ListAllProductsRequest, product_pb.ProductListResponse> {
    path: "/product.ProductService/listAllProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.ListAllProductsRequest>;
    requestDeserialize: grpc.deserialize<product_pb.ListAllProductsRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductListResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductListResponse>;
}
interface IProductServiceService_IupdateProduct extends grpc.MethodDefinition<product_pb.UpdateProductRequest, product_pb.ProductResponse> {
    path: "/product.ProductService/updateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.UpdateProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.UpdateProductRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.ProductResponse>;
}
interface IProductServiceService_IdeleteProduct extends grpc.MethodDefinition<product_pb.DeleteProductRequest, product_pb.Nothing> {
    path: "/product.ProductService/deleteProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.DeleteProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.DeleteProductRequest>;
    responseSerialize: grpc.serialize<product_pb.Nothing>;
    responseDeserialize: grpc.deserialize<product_pb.Nothing>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
    createProduct: grpc.handleUnaryCall<product_pb.CreateProductRequest, product_pb.ProductResponse>;
    cloneProduct: grpc.handleUnaryCall<product_pb.CloneProductRequest, product_pb.ProductResponse>;
    getProductInformation: grpc.handleUnaryCall<product_pb.GetProductInformationRequest, product_pb.ProductListResponse>;
    listAllProducts: grpc.handleUnaryCall<product_pb.ListAllProductsRequest, product_pb.ProductListResponse>;
    updateProduct: grpc.handleUnaryCall<product_pb.UpdateProductRequest, product_pb.ProductResponse>;
    deleteProduct: grpc.handleUnaryCall<product_pb.DeleteProductRequest, product_pb.Nothing>;
}

export interface IProductServiceClient {
    createProduct(request: product_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    cloneProduct(request: product_pb.CloneProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    cloneProduct(request: product_pb.CloneProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    cloneProduct(request: product_pb.CloneProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    getProductInformation(request: product_pb.GetProductInformationRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    getProductInformation(request: product_pb.GetProductInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    getProductInformation(request: product_pb.GetProductInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    listAllProducts(request: product_pb.ListAllProductsRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    listAllProducts(request: product_pb.ListAllProductsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    listAllProducts(request: product_pb.ListAllProductsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.UpdateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.DeleteProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.Nothing) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Nothing) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Nothing) => void): grpc.ClientUnaryCall;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createProduct(request: product_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public cloneProduct(request: product_pb.CloneProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public cloneProduct(request: product_pb.CloneProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public cloneProduct(request: product_pb.CloneProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public getProductInformation(request: product_pb.GetProductInformationRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public getProductInformation(request: product_pb.GetProductInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public getProductInformation(request: product_pb.GetProductInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public listAllProducts(request: product_pb.ListAllProductsRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public listAllProducts(request: product_pb.ListAllProductsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public listAllProducts(request: product_pb.ListAllProductsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductListResponse) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.UpdateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductResponse) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.DeleteProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.Nothing) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Nothing) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Nothing) => void): grpc.ClientUnaryCall;
}
