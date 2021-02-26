import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

/* eslint-disable graphql/template-strings */
const LIST_QUERY = gql`
  query salutation($isActive: Boolean = true, $offset: Int, $limit: Int) {
    salutation(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: { is_active: { _eq: $isActive } }
    ) {
      __typename
      id
      salutation
      is_active
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query salutation_aggregate($isActive: Boolean = true) {
    salutation_aggregate(where: { is_active: { _eq: $isActive } }) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_salutation_by_pk($id: uuid!) {
    delete_salutation_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_salutation_one($salutation: String!, $is_active: Boolean) {
    insert_salutation_one(
      object: { salutation: $salutation, is_active: $is_active }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_salutation_by_pk(
    $id: uuid!
    $salutation: String!
    $is_active: Boolean
    $order: Int
  ) {
    update_salutation_by_pk(
      pk_columns: { id: $id }
      _set: { salutation: $salutation, is_active: $is_active, order: $order }
    ) {
      __typename
      id
      is_active
      order
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_salutation_order($id: uuid!, $order: Int) {
    update_salutation(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Salutation',
  fullLower: 'salutation',
  short: 'Salutation',
  shortLower: 'salutation',
  createButtonLabel: 'Create Salutation',
  messages: {
    create: {
      success: 'You have successfully created a salutation',
      error: 'While creating a salutation',
    },
    update: {
      success: 'You have successfully updated a salutation',
      error: 'While updating a salutation',
    },
    delete: {
      success: 'You have successfully deleted a salutation',
      error: 'While deleting a salutation',
    },
  },
  fields: {
    salutation: {
      full: 'Salutation Name',
      fullLower: 'salutation name',
      short: 'Salutation',
      shortLower: 'salutation',
      min: 2,
      example: 'King',
      cssWidth: 'max',
      type: 'string',
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const Salutation: NextPage = () => {
  return (
    <CrudLayout
      schema={schema}
      tableSearch={false}
      addQuery={ADD_MUTATION}
      deleteQuery={DELETE_MUTATION}
      listQuery={LIST_QUERY}
      editQuery={EDIT_MUTATION}
      aggregateQuery={LIST_AGGREGATE_QUERY}
      updateOrderQuery={UPDATE_ORDER_MUTATION}
      addFilter={true}
    />
  )
}

export default Salutation
