import { PrismaClient } from '@prisma/client'

import aws from 'aws-sdk';

import multerS3 from 'multer-s3';

import { promisify } from 'util';
import fileSystem from 'fs';
import path from 'path';
import { pharmacyAmazonS3Config } from '../config/pharmacyAmazonS3';

const prisma = new PrismaClient();

multerS3({
  s3: new aws.S3(pharmacyAmazonS3Config),
  bucket: String(process.env.AWS_PHARMACY_BUCKET_NAME),
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
});

const s3 = new aws.S3(pharmacyAmazonS3Config);

export async function createPharmacy(call: any, callback: any) {
  const { 
    logo,
    nome,
    cnpj,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
  } = call.request.pharmacy;

  try {
    const cnpjAlreadyExistis = await prisma.pharmacy.findFirst({
      where: { cnpj },
      select: { cnpj: true }
    });

    if (cnpjAlreadyExistis) {
      if (process.env.STORAGE_TYPE === 'local') {
        promisify(fileSystem.unlink)(path.resolve(
          __dirname, '..', '..', '..', '..', 'api', 'uploads', `pharmacy/${logo}`,
        ));
      } else {
        s3.deleteObject({
          Bucket: String(process.env.AWS_PHARMACY_BUCKET_NAME),
          Key: logo,
        }).promise();
      }

      return callback(new Error('Esse CNPJ já existe.'), null);
    }

    const pharmacy = await prisma.pharmacy.create({
      data: {
        logo,
        nome,
        cnpj,
        endereco,
        horarioDeFuncionamento,
        responsavel,
        telefone,
        outros,
      }
    });

    return callback(null, { pharmacy });
  } catch (error) {
    promisify(fileSystem.unlink)(path.resolve(
      __dirname, '..', '..', '..', '..', 'api', 'uploads', `pharmacy/${logo}`,
    ));

    s3.deleteObject({
      Bucket: String(process.env.AWS_PHARMACY_BUCKET_NAME),
      Key: logo,
    }).promise();

    return callback(error, null);
  }
}

export async function getPharmacyByName(call: any, callback: any) {
  const { nome, page } = call.request;

  try {
    const pharmacys = await prisma.pharmacy.findMany({
      where: { nome },
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    });
    
    return callback(null, { pharmacys });
  } catch (error) {
    return callback(error, null);
  }
}

export async function getAllPharmacys(call: any, callback: any) {
  const { page } = call.request;
  
  try {
    const pharmacys = await prisma.pharmacy.findMany({
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    });

    return callback(null, { pharmacys })
  } catch (error) {
    return callback(error, null);
  }
}

export async function updatePharmacyData(call: any, callback: any) {
  const { 
    id,
    logo,
    nome,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
  } = call.request.pharmacy;

  try {
    const logoInDataBase = await prisma.pharmacy.findFirst({
      where: { id },
      select: { logo: true }
    });

    if (process.env.STORAGE_TYPE === 'local') {
      promisify(fileSystem.unlink)(path.resolve(
        __dirname, '..', '..', '..', '..', 'api', 'uploads', `pharmacy/${logoInDataBase?.logo}`,
      ));
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_PHARMACY_BUCKET_NAME),
        Key: String(logoInDataBase?.logo),
      }).promise();
    }

    const pharmacy = await prisma.pharmacy.update({
      where: { id },
      data: {
        logo,
        nome,
        endereco,
        horarioDeFuncionamento,
        responsavel,
        telefone,
        outros,
      }
    });

    return callback(null, { pharmacy });
  } catch (error) {
    const logoInDataBase = await prisma.pharmacy.findFirst({
      where: { id },
      select: { logo: true }
    });
    
    if (process.env.STORAGE_TYPE === 'local') {
      promisify(fileSystem.unlink)(path.resolve(
        __dirname, '..', '..', '..', '..', 'api', 'uploads', `pharmacy/${logoInDataBase?.logo}`,
      ));
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_PHARMACY_BUCKET_NAME),
        Key: String(logoInDataBase?.logo),
      }).promise();
    }

    return callback(error, null);
  }
}

export async function deletePharmacy(call: any, callback: any) {
 const { id } = call.request;

 try {
  const logoInDataBase = await prisma.pharmacy.findFirst({
    where: { id },
    select: { logo: true }
  });

  if (process.env.STORAGE_TYPE === 'local') {
    promisify(fileSystem.unlink)(path.resolve(
      __dirname, '..', '..', '..', '..', 'api', 'uploads', `pharmacy/${logoInDataBase?.logo}`,
    ));
  } else {
    s3.deleteObject({
      Bucket: String(process.env.AWS_PHARMACY_BUCKET_NAME),
      Key: String(logoInDataBase?.logo),
    }).promise();
  }
  
   await prisma.pharmacy.delete({
     where: { id }
   })

   return callback(null, null)
 } catch (error) {
   return callback(error, null)
 }
}