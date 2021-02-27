import { ApolloServer } from 'apollo-server-express'
import express from 'express';
import { schema } from './schema'
import { createContext } from './context'
import bodyParser from 'body-parser'

const PORT = 4000;
const app = express();
const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: true,
});
app.use(bodyParser.json());

server.applyMiddleware({app})

app.listen(
  { port: PORT },
  () =>
    console.log(
      `Server running on port ${PORT}`,
    ),
)


