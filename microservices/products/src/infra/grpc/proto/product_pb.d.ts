// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Product extends jspb.Message { 
    getId(): string;
    setId(value: string): Product;
    getThumbnail(): string;
    setThumbnail(value: string): Product;
    getName(): string;
    setName(value: string): Product;
    getPrice(): number;
    setPrice(value: number): Product;
    getIngredients(): string;
    setIngredients(value: string): Product;
    getAvailability(): boolean;
    setAvailability(value: boolean): Product;
    getVolume(): string;
    setVolume(value: string): Product;
    getOthers(): string;
    setOthers(value: string): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: string,
        thumbnail: string,
        name: string,
        price: number,
        ingredients: string,
        availability: boolean,
        volume: string,
        others: string,
    }
}

export class CreateProductRequest extends jspb.Message { 
    getThumbnail(): string;
    setThumbnail(value: string): CreateProductRequest;
    getName(): string;
    setName(value: string): CreateProductRequest;
    getPrice(): number;
    setPrice(value: number): CreateProductRequest;
    getIngredients(): string;
    setIngredients(value: string): CreateProductRequest;
    getAvailability(): boolean;
    setAvailability(value: boolean): CreateProductRequest;
    getVolume(): string;
    setVolume(value: string): CreateProductRequest;
    getOthers(): string;
    setOthers(value: string): CreateProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
    static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
    export type AsObject = {
        thumbnail: string,
        name: string,
        price: number,
        ingredients: string,
        availability: boolean,
        volume: string,
        others: string,
    }
}

export class CloneProductRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): CloneProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloneProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CloneProductRequest): CloneProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloneProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloneProductRequest;
    static deserializeBinaryFromReader(message: CloneProductRequest, reader: jspb.BinaryReader): CloneProductRequest;
}

export namespace CloneProductRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetProductInformationRequest extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): GetProductInformationRequest;
    getPage(): string;
    setPage(value: string): GetProductInformationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductInformationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductInformationRequest): GetProductInformationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductInformationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductInformationRequest;
    static deserializeBinaryFromReader(message: GetProductInformationRequest, reader: jspb.BinaryReader): GetProductInformationRequest;
}

export namespace GetProductInformationRequest {
    export type AsObject = {
        query: string,
        page: string,
    }
}

export class ListAllProductsRequest extends jspb.Message { 
    getPage(): string;
    setPage(value: string): ListAllProductsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAllProductsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAllProductsRequest): ListAllProductsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAllProductsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAllProductsRequest;
    static deserializeBinaryFromReader(message: ListAllProductsRequest, reader: jspb.BinaryReader): ListAllProductsRequest;
}

export namespace ListAllProductsRequest {
    export type AsObject = {
        page: string,
    }
}

export class UpdateProductRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateProductRequest;
    getThumbnail(): string;
    setThumbnail(value: string): UpdateProductRequest;
    getName(): string;
    setName(value: string): UpdateProductRequest;
    getPrice(): number;
    setPrice(value: number): UpdateProductRequest;
    getIngredients(): string;
    setIngredients(value: string): UpdateProductRequest;
    getAvailability(): boolean;
    setAvailability(value: boolean): UpdateProductRequest;
    getVolume(): string;
    setVolume(value: string): UpdateProductRequest;
    getOthers(): string;
    setOthers(value: string): UpdateProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProductRequest): UpdateProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProductRequest;
    static deserializeBinaryFromReader(message: UpdateProductRequest, reader: jspb.BinaryReader): UpdateProductRequest;
}

export namespace UpdateProductRequest {
    export type AsObject = {
        id: string,
        thumbnail: string,
        name: string,
        price: number,
        ingredients: string,
        availability: boolean,
        volume: string,
        others: string,
    }
}

export class DeleteProductRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProductRequest): DeleteProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProductRequest;
    static deserializeBinaryFromReader(message: DeleteProductRequest, reader: jspb.BinaryReader): DeleteProductRequest;
}

export namespace DeleteProductRequest {
    export type AsObject = {
        id: string,
    }
}

export class ProductResponse extends jspb.Message { 

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): Product | undefined;
    setProduct(value?: Product): ProductResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProductResponse): ProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductResponse;
    static deserializeBinaryFromReader(message: ProductResponse, reader: jspb.BinaryReader): ProductResponse;
}

export namespace ProductResponse {
    export type AsObject = {
        product?: Product.AsObject,
    }
}

export class ProductListResponse extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): ProductListResponse;
    addProducts(value?: Product, index?: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProductListResponse): ProductListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductListResponse;
    static deserializeBinaryFromReader(message: ProductListResponse, reader: jspb.BinaryReader): ProductListResponse;
}

export namespace ProductListResponse {
    export type AsObject = {
        productsList: Array<Product.AsObject>,
    }
}

export class Nothing extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nothing.AsObject;
    static toObject(includeInstance: boolean, msg: Nothing): Nothing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nothing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nothing;
    static deserializeBinaryFromReader(message: Nothing, reader: jspb.BinaryReader): Nothing;
}

export namespace Nothing {
    export type AsObject = {
    }
}
