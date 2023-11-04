import { PrismaClient } from '@prisma/client';

  // to avoid multiple active prisma instances
  const prismadb = globalThis.prisma || new PrismaClient();
  
  if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
  
  export default prismadb;