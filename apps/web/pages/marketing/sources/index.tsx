import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query marketing_sources(
    $isActive: Int
    $searchTerm: String
    $offset: Int
    $limit: Int
  ) {
    marketingSources(
      first: $offset
      last: $limit
      where: {
        public: { equals: $isActive }
        OR: [{ AND: [{ source_name: { contains: $searchTerm } }] }]
      }
    ) {
      id
      source_name
      public
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query marketing_source_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    marketing_source_aggregate(
      where: {
        public: { _eq: $isActive }
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
  mutation delete_marketing_source($id: Int) {
    deleteOneMarketingSource(where: { id: $id }) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_marketing_source($name: String!, $is_active: Boolean) {
    insert_marketing_source_one(object: { name: $name, public: $is_active }) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_marketing_source_by_pk(
    $id: Int!
    $source_name: String
    $public: Int = 1
  ) {
    updateOneMarketingSource(
      data: { source_name: { set: $source_name }, public: { set: $public } }
      where: { id: $id }
    ) {
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
    source_name: {
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
    public: {
      full: 'Active',
      type: 'number',
      default: 1,
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
