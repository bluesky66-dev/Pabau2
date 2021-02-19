import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React, { useState } from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'
import { NotificationBanner } from '@pabau/ui'
import PaymentNotificationImage from '../../assets/images/payment-type-notify-image.png'

const LIST_QUERY = gql`
  query payment_types(
    $isActive: Boolean = true
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    payment_types(
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
      payment_type
      name
      description
      gl_code
      is_active
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query payment_types_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    payment_types_aggregate(
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
  mutation delete_payment_types_by_pk($id: uuid!) {
    delete_payment_types_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_payment_types_one(
    $name: String!
    $payment_type: String
    $description: String
    $gl_code: String
    $is_active: Boolean
  ) {
    insert_payment_types_one(
      object: {
        payment_type: $payment_type
        name: $name
        description: $description
        gl_code: $gl_code
        is_active: $is_active
      }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_payment_types_by_pk(
    $id: uuid!
    $name: String!
    $payment_type: String
    $description: String
    $gl_code: String
    $is_active: Boolean
    $order: Int
  ) {
    update_payment_types_by_pk(
      pk_columns: { id: $id }
      _set: {
        payment_type: $payment_type
        name: $name
        description: $description
        gl_code: $gl_code
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
  mutation update_payment_types_order($id: uuid!, $order: Int) {
    update_payment_types(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Payment Types',
  fullLower: 'payment type',
  short: 'Payment Type',
  shortLower: 'payment type',
  shemaType: 'PaymentTypes',
  messages: {
    create: {
      success: 'You have successfully created a payment type',
      error: 'While creating a payment type',
    },
    update: {
      success: 'You have successfully updated a payment type',
      error: 'While updating a payment type',
    },
    delete: {
      success: 'You have successfully deleted a payment type',
      error: 'While deleting a payment type',
    },
  },
  tooltip: 'payment type',
  fields: {
    payment_type: {
      full: '',
      fullLower: '',
      short: '',
      shortLower: '',
      radio: [
        {
          label: 'Money',
          value: 'Money',
        },
        {
          label: 'Non Money',
          value: 'Non Money',
        },
        {
          label: 'Account Credit',
          value: 'Account Credit',
        },
      ],
      type: 'radio-group',
      defaultvalue: 'Money',
      visible: false,
    },
    name: {
      full: 'Payment Type',
      fullLower: 'payment type',
      short: 'Payment Type',
      shortLower: 'payment type',
      min: 2,
      example: 'Beauty Scheme',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
      visible: true,
    },
    description: {
      full: 'Description',
      fullLower: 'description',
      short: 'Description',
      shortLower: 'description',
      min: 2,
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
    },

    gl_code: {
      full: 'GL code',
      fullLower: 'gl code',
      short: 'GL code',
      shortLower: 'gl code',
      example: 'Lunchbreak',
      extra: <span>Advanced</span>,
      cssWidth: 'max',
      type: 'string',
      visible: false,
      collapsible: true,
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const PaymentTypes: NextPage = () => {
  const [showNotificationBanner, setShowNotificationBanner] = useState(false)
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
      showNotificationBanner={true}
      notificationBanner={
        <NotificationBanner
          title="Enable online payment"
          desc="Activate payments with Fresha to benefit from tip collection during and after sale and get access to no show protection, payment terminals, safe online payments and many more."
          imgPath={PaymentNotificationImage}
          allowClose={true}
          setHide={[showNotificationBanner, setShowNotificationBanner]}
        />
      }
    />
  )
}

export default PaymentTypes
