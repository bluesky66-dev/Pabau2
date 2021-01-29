import {
  DocumentNode,
  gql,
  QueryHookOptions,
  QueryResult,
  useQuery,
} from '@apollo/client'
import { useEffect } from 'react'

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
  const firstCurly = body.indexOf('{')
  const firstParen = body.indexOf('(')
  const i =
    firstParen === -1 || firstCurly < firstParen ? firstCurly : firstParen
  const snipped = body.substr(i)
  return gql(`subscription ${snipped}`)
}

/**
 * Like useQuery + useSubscription combined =]
 *
 * @param query
 * @param options
 */
export function useLiveQuery<T>(
  query: DocumentNode,
  options?: QueryHookOptions<T> & { subscription?: DocumentNode }
): Omit<QueryResult, 'subscribeToMore'> {
  const { subscribeToMore, ...rest } = useQuery<T>(query, {
    //ssr: typeof window === 'undefined',
    ssr: true,
    skip: typeof window === 'undefined',
    onCompleted: (data1) => {
      console.log('GOT QUERY DATA', data1)
    },
    ...options,
  })
  useEffect(() => {
    console.log('creating sub!')
    const cancelFunc = subscribeToMore({
      document: (options && options.subscription) || convert(query),
      variables: options && options.variables ? options.variables : undefined,
      updateQuery: (prev, { subscriptionData }) => {
        console.log('GOT SUBSCRIPTION DATA', prev, subscriptionData)

        if (!subscriptionData.data) return prev
        const key = Object.keys(subscriptionData.data)[0]
        return Object.assign({}, prev, {
          [key]: (subscriptionData.data as Record<string, unknown>)[key],
        })
      },
    })

    return () => {
      console.log('cleaning up sub!')
      cancelFunc()
    }
  }, [query, subscribeToMore, options])

  const data = rest.data
    ? Object.keys(rest.data).length > 1
      ? rest.data
      : (rest.data as Record<string, unknown>)[
          Object.keys(rest.data as Record<string, unknown>)[0]
        ]
    : undefined
  return { ...rest, data }
}
