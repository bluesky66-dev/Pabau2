import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query credit_note_types(
    $isActive: Boolean = true
    $offset: Int
    $limit: Int
  ) {
    credit_note_type(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: { is_active: { _eq: $isActive } }
    ) {
      id
      name
      code
      invoice_prefix
      is_active
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query credit_note_type_aggregate($isActive: Boolean = true) {
    credit_note_type_aggregate(where: { is_active: { _eq: $isActive } }) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_credit_note_type($id: uuid!) {
    delete_credit_note_type_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_credit_note_types(
    $name: String!
    $invoice_prefix: String
    $is_active: Boolean
  ) {
    insert_credit_note_type_one(
      object: {
        name: $name
        is_active: $is_active
        invoice_prefix: $invoice_prefix
      }
    ) {
      name
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_credit_note_type_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
    $invoice_prefix: String
    $order: Int
  ) {
    update_credit_note_type_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        invoice_prefix: $invoice_prefix
        is_active: $is_active
        order: $order
      }
    ) {
      __typename
      id
      is_active
      order
    }
  }
`
const UPDATE_ORDER_MUTATION = gql`
  mutation update_credit_note_type_order($id: uuid!, $order: Int) {
    update_credit_note_type(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Credit note type',
  fullLower: 'Credit note type',
  short: 'Credit Note Type',
  shortLower: 'credit note type',
  createButtonLabel: 'Create Credit Note Type',
  messages: {
    create: {
      success: 'You have successfully created a credit note',
      error: 'While creating a credit note',
    },
    update: {
      success: 'You have successfully updated a credit note',
      error: 'While updating a credit note',
    },
    delete: {
      success: 'You have successfully deleted a credit note',
      error: 'While deleting a credit note',
    },
  },
  fields: {
    name: {
      full: 'Friendly Name',
      fullLower: 'friendly name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      max: 50,
      example: 'Insurance Shortfall',
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
    },
    code: {
      full: 'Code',
      fullLower: 'code',
      short: 'Code',
      shortLower: 'code',
      min: 0,
      max: 50,
      example: 2,
      description: 'A code',
      cssWidth: 'max',
      type: 'number',
      visible: false,
    },
    invoice_prefix: {
      full: 'Invoice Prefix',
      fullLower: 'invoice prefix',
      short: 'Invoice Prefix',
      shortLower: 'invoice prefix',
      example: 'RCN',
      min: 0,
      max: 50,
      description: 'A invoice prefix',
      cssWidth: 'max',
      visible: false,
      type: 'string',
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const CreditNotes: NextPage = () => {
  return (
    <CrudLayout
      schema={schema}
      addQuery={ADD_MUTATION}
      deleteQuery={DELETE_MUTATION}
      listQuery={LIST_QUERY}
      editQuery={EDIT_MUTATION}
      aggregateQuery={LIST_AGGREGATE_QUERY}
      tableSearch={false}
      updateOrderQuery={UPDATE_ORDER_MUTATION}
    />
  )
}

export default CreditNotes
