import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';

import createSchema from './schema';

const bootstrap = async () => {
  await createConnection();

  const schema = await createSchema();

  const server = new GraphQLServer({ schema });

  server.start(() => console.log('Server running on http://localhost:4000'));
};

bootstrap();
