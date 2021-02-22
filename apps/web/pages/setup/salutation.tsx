import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query salutation(
    $isActive: Boolean = true
    $offset: Int
    $limit: Int
    $searchTerm: String = ""
  ) {
    salutation(
      offset: $offset
      limit: $limit
      order_by: { salutation: desc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ salutation: { _ilike: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      salutation
      is_active
    
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query salutation_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    salutation_aggregate(
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ salutation: { _ilike: $searchTerm } }] }]
      }
    ) {
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
    insert_salutation_one(object: { salutation: $salutation, is_active: $is_active }) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_salutation_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
    $order: Int
  ) {
    update_salutation_by_pk(
      pk_columns: { id: $id }
      _set: { salutation: $salutation, is_active: $is_active}
    ) {
      __typename
      id
      is_active
    
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_salutation_order($id: uuid!) {
    update_departments(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Salutation',
  fullLower: 'salutation',
  short: 'Salutation',
  shortLower: 'salutation',
  messages: {
    create: {
      success: 'You have successfully created a department',
      error: 'While creating a department',
    },
    update: {
      success: 'You have successfully updated a department',
      error: 'While updating a department',
    },
    delete: {
      success: 'You have successfully deleted a department',
      error: 'While deleting a department',
    },
  },
  fields: {
    salutation: {
      full: 'Salutation Name',
      fullLower: 'salutation name',
      short: 'Salutation',
      shortLower: 'salutation',
      min: 2,
      example: 'Mr.',
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
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

export const Departments: NextPage = () => {
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
    />
  )
}

export default Departments
