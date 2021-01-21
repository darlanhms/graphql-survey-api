import { buildSchema } from 'type-graphql';
import { GraphQLSchema } from 'graphql';

import UserResolver from './resolvers/UserResolver';

export default async function createSchema(): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  return schema;
}
