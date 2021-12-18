import 'dotenv/config';

import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js';

import { loadSync } from '@grpc/proto-loader';

import path from 'path';

import {
  createPharmacy,
  getPharmacyByName,
  getAllPharmacys,
  updatePharmacyData,
  deletePharmacy
} from './implementations/pharmacy';

import {
  createSubsidiary,
  getSubsidiaryByName,
  getAllSubsidiarys,
  updateSubsidiaryData,
  deleteSubsidiary
} from './implementations/subsidiary';

const pharmacyPath = path.resolve(__dirname, 'proto', 'pharmacy.proto');

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
 }

const packageDefinition = loadSync(pharmacyPath, options);
  
const { pharmacy } = loadPackageDefinition(packageDefinition) as any;

const server = new Server();

server.addService(pharmacy.PharmacyService.service, {
  createPharmacy,
  getPharmacyByName,
  getAllPharmacys,
  updatePharmacyData,
  deletePharmacy
});

server.addService(pharmacy.SubsidiaryService.service, {
  createSubsidiary,
  getSubsidiaryByName,
  getAllSubsidiarys,
  updateSubsidiaryData,
  deleteSubsidiary
});

server.bindAsync(String(process.env.GRPC_PHARMACY_SERVER_URL), ServerCredentials.createInsecure(), () => {
  server.start();
});


