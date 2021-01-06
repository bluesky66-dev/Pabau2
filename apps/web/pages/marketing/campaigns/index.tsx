import { Layout } from '@pabau/ui'
import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudTable from '../../../components/CrudTable'
import pluralize from 'pluralize'

const LIST_QUERY = gql`
  query {
    marketing_campaign(order_by: { created_at: desc }) {
      __typename
      id
      name
    }
  }
`
const DELETE_MUTATION = gql`
  mutation($id: uuid!) {
    delete_marketing_campaign_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation($name: String!) {
    insert_marketing_campaign_one(object: { name: $name }) {
      __typename
      id
    }
  }
`

const schema: Schema = {
  full: 'Marketing Campaign',
  short: 'Campaign',
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
      cssWidth: 'max',
    },
  },
}

export const Index: NextPage = () => {
  return (
    <Layout pageTitle={pluralize(schema.full)}>
      <CrudTable
        schema={schema}
        addQuery={ADD_MUTATION}
        deleteQuery={DELETE_MUTATION}
        listQuery={LIST_QUERY}
      />
    </Layout>
  )
}

export default Index
