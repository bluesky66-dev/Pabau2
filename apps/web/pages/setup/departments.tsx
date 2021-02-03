/* eslint-disable */
import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query departments(
    $isActive: Boolean = true
    $offset: Int
    $limit: Int
    $searchTerm: String = ""
  ) {
    departments(
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
  query departments_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    departments_aggregate(
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
  mutation delete_departments_by_pk($id: uuid!) {
    delete_departments_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_departments_one($name: String!, $is_active: Boolean) {
    insert_departments_one(object: { name: $name, is_active: $is_active }) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_departments_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
  ) {
    update_departments_by_pk(
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
  full: 'Departments',
  fullLower: 'department',
  short: 'Department',
  shortLower: 'department',
  fields: {
    name: {
      full: 'Department Name',
      fullLower: 'department name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Surgical Department',
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
    },
    is_active: {
      full: 'Active',
      type: 'boolean',
      default: true,
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
    />
  )
}

export default Departments
