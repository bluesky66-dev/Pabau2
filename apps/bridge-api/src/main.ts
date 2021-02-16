import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

const PORT = 4000;

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: true,
});

server.listen(
  { port: PORT },
  () =>
    console.log(
      `Server running on port ${PORT}`,
    ),
).catch(error => console.error(error))


