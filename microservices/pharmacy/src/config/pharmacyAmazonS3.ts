export const pharmacyAmazonS3Config = {
  credentials: {
    accessKeyId: String(process.env.AWS_PHARMACY_ACCESS_KEY_ID),
    secretAccessKey: String(process.env.AWS_PHARMACY_SECRET_ACCESS_KEY)
  },
  region: process.env.AWS_PHARMACY_DEFAULT_REGION
};