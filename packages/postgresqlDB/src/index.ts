import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import dotenv from "dotenv";

dotenv.config();

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const prisma = globalForPrisma.prisma || new PrismaClient()

export const prismaAdapter = PrismaAdapter
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma