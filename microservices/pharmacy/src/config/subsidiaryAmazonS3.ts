export const subsidiaryAmazonS3Config = {
  credentials: {
    accessKeyId: String(process.env.AWS_SUBSIDIARY_ACCESS_KEY_ID),
    secretAccessKey: String(process.env.AWS_SUBSIDIARY_SECRET_ACCESS_KEY)
  },
  region: process.env.AWS_SUBSIDIARY_DEFAULT_REGION
};