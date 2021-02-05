// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');

// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

// // const server = new ApolloServer({ typeDefs, resolvers });

// // const app = express();
// // server.applyMiddleware({ app });

// // app.listen({ port: 4000 }, () =>
// //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// // );
// // (async () => {
// //     let res = await prisma.admin.findFirst();
// //     console.log(res);
// // })()


// // console.log('Hello World!');
import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

new ApolloServer({ schema, context: createContext }).listen(
  { port: 4000 },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
    ),
)