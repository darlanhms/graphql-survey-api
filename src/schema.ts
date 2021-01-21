import { buildSchema } from 'type-graphql';
import { GraphQLSchema } from 'graphql';

import UserResolver from './resolvers/UserResolver';
import SurveyResolver from './resolvers/SurveyResolver';

export default async function createSchema(): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    resolvers: [UserResolver, SurveyResolver],
  });

  return schema;
}
