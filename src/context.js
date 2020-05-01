import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';

const prisma = new PrismaClient();
const { JWT_SECRET } = process.env;

const pubsub = new PubSub();

export function createContext(request) {
  return {
    request,
    prisma,
    pubsub,
    appSecret: JWT_SECRET,
  };
}
