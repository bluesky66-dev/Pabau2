import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query marketing_sources {
    marketing_source(order_by: { created_at: desc }) {
      __typename
      id
      name
      is_active
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_marketing_source($id: uuid!) {
    delete_marketing_source_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_marketing_source($name: String!) {
    insert_marketing_source_one(object: { name: $name }) {
      __typename
      id
    }
  }
`

const schema: Schema = {
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
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
    },
    is_active: {
      full: 'Active',
      type: 'boolean',
    },
  },
}

export const Index: NextPage = () => {
  return (
    <CrudLayout
      schema={schema}
      addQuery={ADD_MUTATION}
      deleteQuery={DELETE_MUTATION}
      listQuery={LIST_QUERY}
    />
  )
}

export default Index
