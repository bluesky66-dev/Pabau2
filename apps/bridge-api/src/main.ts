import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

const PORT_NUMBER = 4000;

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: true,
});

server.listen(
  {port:PORT_NUMBER},
)
  .then(()=> console.log(`Server running on port ${PORT_NUMBER}`))
  .catch(error => console.error(error))


