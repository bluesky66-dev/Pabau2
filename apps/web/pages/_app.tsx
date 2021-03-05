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
import { library } from '@fortawesome/fontawesome-svg-core'
// import 'react-google-places-autocomplete/dist/index.min.css'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { OperationDefinitionNode } from 'graphql'
import i18next from 'i18next'
import { AppProps } from 'next/app'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import 'react-phone-input-2/lib/style.css'
import 'react-quill/dist/quill.snow.css'
import de from '../locales/de.json'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import sp from '../locales/sp.json'
import ar from '../locales/ar.json'
import bg from '../locales/bg.json'
import cz from '../locales/cz.json'
import da from '../locales/da.json'
import hu from '../locales/hu.json'
import lv from '../locales/lv.json'
import no from '../locales/no.json'
import pl from '../locales/pl.json'
import sw from '../locales/sw.json'
import ro from '../locales/ro.json'
import ru from '../locales/ru.json'
import ContextWrapper from '../components/ContextWrapper'
require('../styles/global.less')
require('../../../libs/ui/src/styles/antd.less')
require('react-phone-input-2/lib/style.css')

const cache = new InMemoryCache()
const GRAPHQL_ENDPOINT = 'wss://api.new.pabau.com/v1/graphql'
const GRAPHQL_HTTP_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  'https://api.new.pabau.com/v1/graphql'

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])
library.add(...iconList)
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
  uri: GRAPHQL_HTTP_ENDPOINT,
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
        const { kind, operation } = getMainDefinition(
          query
        ) as OperationDefinitionNode
        return (
          kind === 'OperationDefinition' &&
          operation === 'subscription' &&
          process.browser
        )
      },
      wsLink,
      httpLink
    )
  : httpLink

const client = new ApolloClient({
  ssrMode: false,
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

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: en,
    },
    de: {
      common: de,
    },
    fr: {
      common: fr,
    },
    sp: {
      common: sp,
    },
    ar: {
      common: ar,
    },
    bg: {
      common: bg,
    },
    cz: {
      common: cz,
    },
    da: {
      common: da,
    },
    hu: {
      common: hu,
    },
    lv: {
      common: lv,
    },
    no: {
      common: no,
    },
    pl: {
      common: pl,
    },
    sw: {
      common: sw,
    },
    ro: {
      common: ro,
    },
    ru: {
      common: ru,
    },
  },
})

export default function CustomApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18next}>
        <style jsx global>{`
          @font-face {
            font-family: 'Circular-Std-Black';
            src: local('Circular-Std-Black'),
              url(../public/fonts/CircularStd-Black.otf) format('opentype');
          }

          @font-face {
            font-family: 'Circular-Std-Book';
            src: url('/fonts/CircularStd-Book.otf') format('opentype');
          }

          @font-face {
            font-family: 'Circular-Std-Medium';
            src: url('/fonts/CircularStd-Medium.otf') format('opentype');
          }
        `}</style>
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
      </I18nextProvider>
    </ApolloProvider>
  )
}
