import { ApolloServer } from 'apollo-server-express'
import express from 'express';
import { schema } from './schema'
import { createContext } from './context'
import bodyParser from 'body-parser'
import { LoginHandler} from "./app/authentication/login/LoginHandler";


const PORT = 4000;
const app = express();
const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: true,
});
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  try{
    const login = await new LoginHandler(req, res).handleRequest();
    return res.json({
      accessToken: login
    });
  } catch (error){
    console.log(error)
  }
});

server.applyMiddleware({app})

app.listen(
  { port: PORT },
  () =>
    console.log(
      `Server running on port ${PORT}`,
    ),
)


