import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query marketing_sources_TODO1(
    $isActive: Boolean = true
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    rota_templates(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      name
      days
      start_time
      end_time
      status
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query marketing_source_aggregate_2(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    marketing_source_aggregate(
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
  mutation delete_marketing_source_2($id: uuid!) {
    delete_marketing_source_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_marketing_source_2($name: String!, $is_active: Boolean) {
    insert_marketing_source_one(
      object: { name: $name, is_active: $is_active }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_marketing_source_by_pk_2(
    $id: uuid!
    $name: String!
    $is_active: Boolean
    $order: Int
  ) {
    update_marketing_source_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, is_active: $is_active, order: $order }
    ) {
      __typename
      id
      name
      days
      start_time
      end_time
      status
    }
  }
`
const UPDATE_ORDER_MUTATION = gql`
  mutation update_marketing_source_order_2($id: uuid!, $order: Int) {
    update_marketing_source(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`
const schema: Schema = {
  full: 'Rota Template',
  fullLower: 'rota template',
  short: 'Rota Template',
  shortLower: 'rota template',
  fields: {
    name: {
      full: 'Rota Template',
      fullLower: 'rota template',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Facebook',
      description: 'A rota template',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
    },
    days: {
      full: 'Rota Template',
      fullLower: 'rota template',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Facebook',
      description: 'A rota template',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max'
    },
  },
}

export const RotaTemplate: NextPage = () => {
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

export default RotaTemplate
