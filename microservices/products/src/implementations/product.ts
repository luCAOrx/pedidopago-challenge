import { PrismaClient } from '@prisma/client'

import aws from 'aws-sdk'

import multerS3 from 'multer-s3'

import { unlink } from 'fs/promises'

import { resolve } from 'path'

import { productAmazonS3Config } from '../config/productAmazonS3'

multerS3({
  s3: new aws.S3(productAmazonS3Config),
  bucket: String(process.env.AWS_PRODUCTS_BUCKET_NAME),
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read'
})

const prisma = new PrismaClient()

const s3 = new aws.S3(productAmazonS3Config)

export async function createProduct (call: any, callback: any) {
  const {
    thumbnail,
    nome,
    preco,
    ingredientes,
    disponibilidade,
    volume,
    outros
  } = call.request.product

  try {
    const product = await prisma.products.create({
      data: {
        thumbnail,
        nome,
        preco,
        ingredientes,
        disponibilidade,
        volume,
        outros
      }
    })

    return callback(null, { product })
  } catch (error) {
    const filePath = resolve(__dirname, '..', '..', '..', '..', 'api', 'uploads', 'product', `${thumbnail}`)

    if (process.env.STORAGE_TYPE === 'local') {
      await unlink(filePath)
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_PRODUCTS_BUCKET_NAME),
        Key: thumbnail
      }).promise()
    }

    return callback(error, null)
  };
};

export async function cloneProduct (call: any, callback: any) {
  const { id } = call.request

  try {
    const productClone = await prisma.products.findFirst({
      where: { id }
    })

    const product = await prisma.products.create({
      data: {
        thumbnail: String(productClone?.thumbnail),
        nome: String(productClone?.nome),
        preco: String(productClone?.preco),
        ingredientes: String(productClone?.ingredientes),
        disponibilidade: String(productClone?.disponibilidade),
        volume: String(productClone?.volume),
        outros: String(productClone?.outros)
      }
    })

    return callback(null, { product })
  } catch (error) {
    return callback(error, null)
  };
};

export async function getProductsByName (call: any, callback: any) {
  const { nome, page } = call.request

  try {
    const products = await prisma.products.findMany({
      where: { nome },
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    })

    return callback(null, { products })
  } catch (error) {
    return callback(error, null)
  };
};

export async function getAllProducts (call: any, callback: any) {
  const { page } = call.request

  try {
    const products = await prisma.products.findMany({
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    })

    return callback(null, { products })
  } catch (error) {
    callback(error, null)
  };
};

export async function updateProductData (call: any, callback: any) {
  const {
    id,
    thumbnail,
    nome,
    preco,
    ingredientes,
    disponibilidade,
    volume,
    outros
  } = call.request.product

  try {
    const thumbnailInDataBase = await prisma.products.findFirst({
      where: { id },
      select: { thumbnail: true }
    })

    const filePath = resolve(__dirname, '..', '..', '..', '..', 'api', 'uploads', 'product', `${thumbnailInDataBase?.thumbnail}`)

    if (process.env.STORAGE_TYPE === 'local') {
      await unlink(filePath)
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_PRODUCTS_BUCKET_NAME),
        Key: String(thumbnailInDataBase?.thumbnail)
      }).promise()
    }

    const product = await prisma.products.update({
      where: { id },
      data: {
        thumbnail,
        nome,
        preco,
        ingredientes,
        disponibilidade,
        volume,
        outros
      }
    })

    return callback(null, { product })
  } catch (error) {
    const thumbnailInDataBase = await prisma.products.findFirst({
      where: { id },
      select: { thumbnail: true }
    })

    const filePath = resolve(__dirname, '..', '..', '..', '..', 'api', 'uploads', 'product', `${thumbnailInDataBase?.thumbnail}`)

    if (process.env.STORAGE_TYPE === 'local') {
      await unlink(filePath)
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_PRODUCTS_BUCKET_NAME),
        Key: String(thumbnailInDataBase?.thumbnail)
      }).promise()
    }

    return callback(error, null)
  };
};

export async function deleteProduct (call: any, callback: any) {
  const { id } = call.request

  try {
    const thumbnailInDataBase = await prisma.products.findFirst({
      where: { id },
      select: { thumbnail: true }
    })

    const filePath = resolve(__dirname, '..', '..', '..', '..', 'api', 'uploads', 'product', `${thumbnailInDataBase?.thumbnail}`)

    if (process.env.STORAGE_TYPE === 'local') {
      await unlink(filePath)
      console.log('file deleted')
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_PRODUCTS_BUCKET_NAME),
        Key: String(thumbnailInDataBase?.thumbnail)
      }).promise()
    }

    await prisma.products.delete({
      where: { id }
    })

    return callback(null, null)
  } catch (error) {
    return callback(error, null)
  };
};
