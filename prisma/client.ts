import { PrismaClient } from "@prisma/client";
// in sync w/ model
// can be done anywhere, best practise here to run once when this client file is imported & will be cached
// dev mode - fast refresh so need to add extra code

// NB: solution updated from what mosh used https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
