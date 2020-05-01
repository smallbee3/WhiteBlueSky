import * as path from 'path';

import { makeSchema } from '@nexus/schema';
import { nexusPrismaPlugin } from 'nexus-prisma';

export const schema = makeSchema({
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: path.join(__dirname, './../schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'client',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
});
