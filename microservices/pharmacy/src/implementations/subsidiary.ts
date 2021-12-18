import { PrismaClient } from '@prisma/client'

import aws from 'aws-sdk';

import multerS3 from 'multer-s3';

import { promisify } from 'util';
import fileSystem from 'fs';
import path from 'path';
import { subsidiaryAmazonS3Config } from '../config/subsidiaryAmazonS3';

const prisma = new PrismaClient();

multerS3({
  s3: new aws.S3(subsidiaryAmazonS3Config),
  bucket: String(process.env.AWS_SUBSIDIARY_BUCKET_NAME),
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
});

const s3 = new aws.S3(subsidiaryAmazonS3Config);

export async function createSubsidiary(call: any, callback: any) {
  const { 
    logo,
    nome,
    cnpj,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
    farmacia_id
  } = call.request.subsidiary;

  try {
    const cnpjAlreadyExistis = await prisma.subsidiary.findFirst({
      where: { cnpj },
      select: { cnpj: true }
    });

    const subsidiaryLimit = await prisma.subsidiary.findMany({
      where: { farmacia_id },
      select: { farmacia_id: true }
    });

    if (cnpjAlreadyExistis) {
      if (process.env.STORAGE_TYPE === 'local') {
        promisify(fileSystem.unlink)(path.resolve(
          __dirname, '..', '..', '..', '..', 'api', 'uploads', `subsidiary/${logo}`,
        ));
      } else {
        s3.deleteObject({
          Bucket: String(process.env.AWS_SUBSIDIARY_BUCKET_NAME),
          Key: logo,
        }).promise();
      }

      return callback(new Error('Esse CNPJ já existe.'), null);
    }

    if (subsidiaryLimit.length > 2) {
      if (process.env.STORAGE_TYPE === 'local') {
        promisify(fileSystem.unlink)(path.resolve(
          __dirname, '..', '..', '..', '..', 'api', 'uploads', `subsidiary/${logo}`,
        ));
      } else {
        s3.deleteObject({
          Bucket: String(process.env.AWS_SUBSIDIARY_BUCKET_NAME),
          Key: logo,
        }).promise();
      }

      return callback(new Error('A farmácia sede não pode ter mais que 3 filias.'), null);
    }
    
    const subsidiary = await prisma.subsidiary.create({
      data: {
        logo,
        nome,
        cnpj,
        endereco,
        horarioDeFuncionamento,
        responsavel,
        telefone,
        outros,
        farmacia_id,
      }
    });

    return callback(null, { subsidiary });
  } catch (error) {
    if (process.env.STORAGE_TYPE === 'local') {
      promisify(fileSystem.unlink)(path.resolve(
        __dirname, '..', '..', '..', '..', 'api', 'uploads', `subsidiary/${logo}`,
      ));
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_SUBSIDIARY_BUCKET_NAME),
        Key: logo,
      }).promise();
    }

    return callback(error, null);
  }
}

export async function getSubsidiaryByName(call: any, callback: any) {
  const { nome, page } = call.request;

  try {
    const subsidiarys = await prisma.subsidiary.findMany({
      where: { nome },
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    });
    
    return callback(null, { subsidiarys });
  } catch (error) {
    return callback(error, null);
  }
}

export async function getAllSubsidiarys(call: any, callback: any) {
  const { page } = call.request;

  try {
    const subsidiarys = await prisma.subsidiary.findMany({
      orderBy: { id: 'desc' },
      take: 5,
      skip: (Number(page) - 1) * 5
    });

    callback(null, { subsidiarys })
  } catch (error) {
    callback(error, null);
  }
}

export async function updateSubsidiaryData(call: any, callback: any) {
  const { 
    id,
    logo,
    nome,
    endereco,
    horarioDeFuncionamento,
    responsavel,
    telefone,
    outros,
  } = call.request.subsidiary;

  try {
    const logoInDataBase = await prisma.subsidiary.findFirst({
      where: { id },
      select: { logo: true }
    })

    if (process.env.STORAGE_TYPE === 'local') {
      promisify(fileSystem.unlink)(path.resolve(
        __dirname, '..', '..', '..', '..', 'api', 'uploads', `subsidiary/${logoInDataBase?.logo}`,
      ));
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_SUBSIDIARY_BUCKET_NAME),
        Key: String(logoInDataBase?.logo),
      }).promise();
    }

    const subsidiary = await prisma.subsidiary.update({
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

    return callback(null, { subsidiary });
  } catch (error) {
    const logoInDataBase = await prisma.subsidiary.findFirst({
      where: { id },
      select: { logo: true }
    })

    if (process.env.STORAGE_TYPE === 'local') {
      promisify(fileSystem.unlink)(path.resolve(
        __dirname, '..', '..', '..', '..', 'api', 'uploads', `subsidiary/${logoInDataBase?.logo}`,
      ));
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_SUBSIDIARY_BUCKET_NAME),
        Key: String(logoInDataBase?.logo),
      }).promise();
    };

    return callback(error, null);
  }
}

export async function deleteSubsidiary(call: any, callback: any) {
  const { id } = call.request;
 
  try {
    const logoInDataBase = await prisma.subsidiary.findFirst({
      where: { id },
      select: { logo: true }
    })

    if (process.env.STORAGE_TYPE === 'local') {
      promisify(fileSystem.unlink)(path.resolve(
        __dirname, '..', '..', '..', '..', 'api', 'uploads', `subsidiary/${logoInDataBase?.logo}`,
      ));
    } else {
      s3.deleteObject({
        Bucket: String(process.env.AWS_SUBSIDIARY_BUCKET_NAME),
        Key: String(logoInDataBase?.logo),
      }).promise();
    };
    
    await prisma.subsidiary.delete({
      where: { id }
    })
 
    return callback(null, null)
  } catch (error) {
    return callback(error, null)
  }
 }