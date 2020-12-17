import React, { FC } from 'react'
import NewLayout from '../../../components/NewLayout'
import { gql, useMutation } from '@apollo/client'
import { MARKETING_SOURCE_LIST, MarketingSourceList, Values } from './index'

const MARKETING_SOURCE_ADD = gql`
  mutation MarketingSourceAdd($name: String!) {
    insert_marketing_source_one(object: { name: $name }) {
      __typename
      id
    }
  }
`

const Page: FC = () => {
  const [doMutation] = useMutation(MARKETING_SOURCE_ADD)
  return (
    <NewLayout<Values>
      schema={{
        full: 'Marketing Source',
        fullLower: 'marketing source',
        short: 'Source',
        shortLower: 'source',
        fields: {
          name: {
            full: 'Friendly Name',
            fullLower: 'friendly name',
            short: 'Name',
            shortLower: 'name',
            min: 2,
            example: 'Facebook',
            description: 'A friendly name',
            extra: <i>Please note: blah blah blahh</i>,
          },
        },
      }}
      onSubmit={async (form) => {
        await doMutation({
          variables: form,
          optimisticResponse: {},
          update: (proxy, { data: { insert_marketing_source_one } }) => {
            // Read the data from our cache for this query.
            const data = proxy.readQuery<MarketingSourceList>({
              query: MARKETING_SOURCE_LIST,
            })
            // Write our data back to the cache with the new comment in it
            proxy.writeQuery({
              query: MARKETING_SOURCE_LIST,
              data: {
                ...data,
                marketing_source: [...data.marketing_source, insert_marketing_source_one],
              },
            })
          },
        })
      }}
    />
  )
}

export default Page
