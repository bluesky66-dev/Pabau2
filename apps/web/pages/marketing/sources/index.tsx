import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'
/* eslint-disable graphql/template-strings */

const LIST_QUERY = gql`
  query marketing_sources(
    $public: Int
    $searchTerm: String
    $offset: Int
    $limit: Int
  ) {
    marketingSources(
      first: $offset
      last: $limit
      where: {
        public: { equals: $public }
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
    $public: Boolean = true
    $searchTerm: String = ""
  ) {
    marketing_source_aggregate(
      where: {
        public: { _eq: $public }
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
  mutation add_marketing_source(
    $imported: Int = 0
    $is_active: Int = 1
    $name: String!
    $custom_id: Int = 0
    $company_id: Int = 8901 #TODO refactor with actual company_id
  ) {
    createOneMarketingSource(
      data: {
        company: { connect: { id: $company_id } }
        imported: $imported
        source_name: $name
        public: $is_active
        custom_id: $custom_id
      }
    ) {
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
/**
 * TODO refactor UPDATE_ORDER_MUTATION with legacy db
 */
const UPDATE_ORDER_MUTATION = gql`
  mutation update_marketing_source_order($id: uuid!, $order: Int) {
    update_marketing_source(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`
const schema: Schema = {
  full: 'Marketing Source',
  fullLower: 'marketing source',
  short: 'Source',
  shortLower: 'source',
  messages: {
    create: {
      success: 'New marketings source created.',
      error: 'While creating marketing source.',
    },
    update: {
      success: 'Marketings source updated.',
      error: 'While updating marketings source.',
    },
    delete: {
      success: 'Marketings source deleted.',
      error: 'While deleting marketing sources.',
    },
  },
  deleteBtnLabel: 'Yes, Delete Source',
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
      type: 'string',
    },
    public: {
      full: 'Active',
      type: 'number',
      defaultvalue: 1,
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
      updateOrderQuery={UPDATE_ORDER_MUTATION}
    />
  )
}

export default Index
