import { DocumentNode, gql, useQuery } from '@apollo/client'

function convert(doc: DocumentNode): DocumentNode {
  // console.log('previously', doc.definitions[0].operation)
  // const cloned = { ...doc }
  // console.log('txt', doc.definitions[0], cloned, MARKETING_SOURCE_LIST_SUBSCRIPTION)
  // cloned.definitions[0].operation = 'subscription'
  // cloned.loc.source.body = `  subscription MarketingSourceListQuery {
  //   marketing_source(order_by: { created_at: desc }) {
  //     __typename
  //     id
  //     name
  //   }
  // }`
  const body = doc?.loc?.source?.body
  if (!body) throw new Error('No body found')
  const snipped = body.substr(body.indexOf('{'))
  return gql(`subscription ${snipped}`)
}

export function useLiveQuery(query: DocumentNode) {
  const { subscribeToMore, ...rest } = useQuery(query, {
    //ssr: typeof window === 'undefined',
    ssr: false,
    skip: typeof window === 'undefined',
    onCompleted: (data1) => {
      console.log('GOT QUERY DATA', data1)

      subscribeToMore({
        document: convert(query),
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev
          const key = Object.keys(subscriptionData.data)[0]
          return Object.assign({}, prev, {
            [key]: subscriptionData.data[key],
          })
        },
      })
    },
  })
  const innerData = rest.data ? rest.data[Object.keys(rest.data)[0]] : undefined
  return { innerData, ...rest }
}
