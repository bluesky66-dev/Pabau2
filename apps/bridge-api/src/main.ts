import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

const port_number = 4000;

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: true,
});

server.listen(
  { port: port_number },
  () =>
    console.log(
      `http://localhost:4000`,
    ),
)


