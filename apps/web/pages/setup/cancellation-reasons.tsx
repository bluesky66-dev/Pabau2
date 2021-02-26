import React from 'react'
import { gql } from '@apollo/client'
import { NextPage } from 'next'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

import './cancellation-reasons.module.less'

const LIST_QUERY = gql`
  query cancellation_reasons(
    $isActive: Boolean = true
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    cancellation_reasons(
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
      order
      type
      cancellation_policy
      is_active
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query cancellation_reasons_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    cancellation_reasons_aggregate(
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
  mutation delete_cancellation_reasons($id: uuid!) {
    delete_cancellation_reasons_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_cancellation_reasons(
    $cancellation_policy: String
    $is_active: Boolean
    $name: String
    $type: String
  ) {
    insert_cancellation_reasons_one(
      object: {
        cancellation_policy: $cancellation_policy
        is_active: $is_active
        name: $name
        type: $type
      }
    ) {
      __typename
      cancellation_policy
      created_at
      id
      is_active
      name
      order
      type
      updated_at
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_cancellation_reasons_by_pk(
    $id: uuid!
    $cancellation_policy: String
    $is_active: Boolean
    $name: String
    $type: String
  ) {
    update_cancellation_reasons_by_pk(
      pk_columns: { id: $id }
      _set: {
        cancellation_policy: $cancellation_policy
        is_active: $is_active
        name: $name
        type: $type
      }
    ) {
      __typename
      cancellation_policy
      created_at
      id
      is_active
      name
      order
      type
      updated_at
    }
  }
`
const UPDATE_ORDER_MUTATION = gql`
  mutation update_cancellation_reasons_order($id: uuid!, $order: Int) {
    update_cancellation_reasons(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Cancellation Reasons',
  fullLower: 'cancellation reasons',
  short: 'cancellation reasons',
  shortLower: 'cancellation reasons',
  messages: {
    create: {
      success: 'New cancellation reasons created.',
      error: 'While creating cancellation reasons.',
    },
    update: {
      success: 'Cancellation reasons updated.',
      error: 'While updating cancellation reasons.',
    },
    delete: {
      success: 'Cancellation reasons deleted.',
      error: 'While deleting cancellation reasons.',
    },
  },
  deleteBtnLabel: 'Yes, Delete Source',
  fields: {
    name: {
      full: 'Friendly Name',
      fullLower: 'friendly name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Name',
      description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
    },
    type: {
      full: 'Cancellation type',
      fullLower: 'cancellation type',
      short: 'Type',
      shortLower: 'type',
      min: 2,
      description: 'type of the cancellation reason',
      cssWidth: 'max',
      defaultvalue: 'Early cancellation / Late cancellation',
      type: 'select',
      selectOptions: [
        {
          label: 'Early Cancel',
          value: 'early cancel',
        },
        {
          label: 'Late Cancel',
          value: 'late cancel',
        },
      ],
    },
    cancellation_policy: {
      full: 'Apply the corresponding cancellation policy',
      fullLower: 'apply the corresponding cancellation policy',
      short: 'Application Cancellation Policy',
      shortLower: 'application cancellation policy',
      min: 2,
      description: 'order of the cancellation reason',
      cssWidth: 'max',
      defaultvalue: 'Yes / No',
      type: 'select',
      selectOptions: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: '5-hour cancellation policy',
          value: '5-hour cancellation policy',
        },
      ],
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const CancellationReasons: NextPage = () => {
  return (
    <CrudLayout
      schema={schema}
      tableSearch={false}
      addFilter={false}
      addQuery={ADD_MUTATION}
      deleteQuery={DELETE_MUTATION}
      listQuery={LIST_QUERY}
      editQuery={EDIT_MUTATION}
      aggregateQuery={LIST_AGGREGATE_QUERY}
      updateOrderQuery={UPDATE_ORDER_MUTATION}
    />
  )
}

export default CancellationReasons
