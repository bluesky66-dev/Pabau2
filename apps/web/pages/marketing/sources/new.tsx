import React, { FC } from 'react'
import NewLayout from '../../../components/NewLayout'
import { gql, useMutation } from '@apollo/client'

interface Values {
  name: string
}

const MARKETING_SOURCE_ADD = gql`
  mutation MarketingSourceAdd($name: String!) {
    insert_marketing_source_one(object: { name: $name }) {
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
      onSubmit={(form) => {
        console.log(`marketing source new page received a form! name=${form.name}`, form)
        doMutation({ variables: form })
        // await new Promise((resolve) => {
        //   setTimeout(() => resolve(null), 1300)
        // })
        //return false
      }}
    />
  )
}

export default Page
