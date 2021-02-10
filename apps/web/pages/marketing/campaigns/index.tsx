/* eslint-disable */
import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query marketing_campaigns {
    listMarketingSources {
      __typename
      id
      name
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query marketing_campaign_aggregate {
    listMarketingSources {
      aggregate {
        count
      }
    }
  }
`

const DELETE_MUTATION = gql`
  mutation delete_marketing_campaign($id: uuid!) {
    deleteOneMarketingSource(where: {id: $id}) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_marketing_campaign($name: String!) {
    createOneMarketingSource(object: { name: $name }) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_marketing_campaign_by_pk($id: uuid!, $name: String!) {
    updateOneMarketingSource(
      pk_columns: { id: $id }
      _set: { name: $name }
    ) {
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
    <CrudLayout
      schema={schema}
      addQuery={ADD_MUTATION}
      deleteQuery={DELETE_MUTATION}
      listQuery={LIST_QUERY}
      editQuery={EDIT_MUTATION}
      aggregateQuery={LIST_AGGREGATE_QUERY}
    />
  )
}

export default Index
