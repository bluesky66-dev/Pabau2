import { ApolloServer } from 'apollo-server-express'
import express from 'express';
import { schema } from './schema'
import { createContext } from './context'
import cookieSession from 'cookie-session'

const PORT = 4000;
const app = express();
app.set('trust proxy', true);

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: true,
});

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
)
server.applyMiddleware({app})
app.listen(
  { port: PORT },
  () =>
    console.log(
      `Server running on port ${PORT}`,
    ),
)


