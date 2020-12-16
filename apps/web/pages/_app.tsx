import React from 'react'
import { AppProps } from 'next/app'
import './styles.less'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { OperationDefinitionNode } from 'graphql'

const cache = new InMemoryCache()
const GRAPHQL_ENDPOINT = 'wss://api.new.pabau.com/v1/graphql'

// const request = async (operation) => {
//   operation.setContext({
//     http: {
//       includeExtensions: true,
//       includeQuery: false,
//     },
//     headers,
//   })
// }
//
// const requestLink = new ApolloLink(
//   (operation, forward) =>
//     new Observable((observer) => {
//       let handle
//       Promise.resolve(operation)
//         .then((oper) => request(oper))
//         .then(() => {
//           handle = forward(operation).subscribe({
//             next: observer.next.bind(observer),
//             error: observer.error.bind(observer),
//             complete: observer.complete.bind(observer),
//           })
//         })
//         .catch(observer.error.bind(observer))
//
//       return () => {
//         if (handle) handle.unsubscribe()
//       }
//     })
// )

// const httpLink = new BatchHttpLink({
//   uri: GRAPHQL_ENDPOINT,
// })

const httpLink = new HttpLink({
  uri: 'https://api.new.pabau.com/v1/graphql',
})

const wsLink = process.browser
  ? new WebSocketLink({
      uri: GRAPHQL_ENDPOINT,
      options: {
        reconnect: true,
        connectionParams: {
          authToken: 'user.authToken goes here',
        },
      },
    })
  : null

// Let Apollo figure out if the request is over ws or http
const terminatingLink = wsLink
  ? split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode
        return kind === 'OperationDefinition' && operation === 'subscription' && process.browser
      },
      wsLink,
      httpLink
    )
  : httpLink

const client = new ApolloClient({
  link: ApolloLink.from([
    // onError(({ graphQLErrors, networkError }) => {
    //   if (graphQLErrors) {
    //     console.error({ graphQLErrors })
    //   }
    //   if (networkError) {
    //     console.error({ networkError })
    //   }
    // }),
    terminatingLink,

    // link,

    // withClientState({
    //   defaults: {
    //     isConnected: true,
    //   },
    //   resolvers: {
    //     Mutation: {
    //       updateNetworkStatus: (_, { isConnected }, { cache }) => {
    //         cache.writeData({ data: { isConnected } })
    //         return null
    //       },
    //     },
    //   },
    //   cache,
    // }),

    // Push the links into the Apollo client
    // createPersistedQueryLink({ generateHash: ({}) => documentId }).concat(
    //   // New config
    //   terminatingLink
    //   // Old config
    //   // new BatchHttpLink({
    //   //   uri: GRAPHQL_ENDPOINT,
    //   //   credentials: 'include'
    //   // })
    // ),
  ]),
  cache,
})

export default function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
