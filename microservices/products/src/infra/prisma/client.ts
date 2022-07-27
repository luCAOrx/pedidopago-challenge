import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${
        process.env.MARIADB_USER
      }:${
        process.env.MARIADB_PASSWORD
      }@${
        process.env.MARIADB_ROOT_HOST
      }:${
        process.env.MARIADB_PORT
      }/${
        process.env.MARIADB_DATABASE
      }`
    }
  }
})
