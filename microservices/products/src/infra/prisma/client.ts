import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${process.env.DATABASE_USER
        }:${process.env.DATABASE_PASSWORD
        }@${process.env.DATABASE_ROOT_HOST
        }:${process.env.DATABASE_PORT
        }/${process.env.DATABASE_DATABASE
        }`
    }
  }
})
