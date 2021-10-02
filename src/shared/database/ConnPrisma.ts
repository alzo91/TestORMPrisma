import { PrismaClient } from ".prisma/client";

const prismaConn = new PrismaClient();

export { prismaConn };
