/* eslint-disable */
import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query petty_cash_types(
    $isActive: Boolean = true
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    petty_cash_types(
      offset: $offset
      limit: $limit
      order_by: { created_at: desc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      name
      is_active
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query petty_cash_types_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    petty_cash_types_aggregate(
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_petty_cash_types_by_pk($id: uuid!) {
    delete_petty_cash_types_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_petty_cash_types_one($name: String!, $is_active: Boolean) {
    insert_petty_cash_types_one(
      object: { name: $name, is_active: $is_active }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_petty_cash_types_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
  ) {
    update_petty_cash_types_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, is_active: $is_active }
    ) {
      __typename
      id
      is_active
    }
  }
`

const schema: Schema = {
  full: 'Petty Cash Types',
  fullLower: 'petty cash types',
  short: 'Petty Cash',
  shortLower: 'petty cash types',
  messages: {
    create: {
      success: 'You have successfully created a petty cash',
      error: 'While creating a petty cash',
    },
    update: {
      success: 'You have successfully updated a petty cash',
      error: 'While updating a petty cash',
    },
    delete: {
      success: 'You have successfully deleted a petty cash',
      error: 'While deleting a petty cash',
    },
  },
  fields: {
    name: {
      full: 'Friendly Name',
      fullLower: 'friendly name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Milk',
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      default: true,
    },
  },
}

export const PettyCash: NextPage = () => {
  return (
    <CrudLayout
      schema={schema}
      tableSearch={false}
      addQuery={ADD_MUTATION}
      deleteQuery={DELETE_MUTATION}
      listQuery={LIST_QUERY}
      editQuery={EDIT_MUTATION}
      aggregateQuery={LIST_AGGREGATE_QUERY}
    />
  )
}

export default PettyCash
