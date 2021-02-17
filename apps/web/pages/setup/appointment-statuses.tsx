import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query appointment_status(
    $isActive: Boolean = true
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    appointment_status(
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
      appointment_type
      color
      icon
      is_active
      track_time
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query appointment_status_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    appointment_status_aggregate(
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
  mutation delete_appointment_status($id: uuid!) {
    delete_appointment_status_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_appointment_status_one(
    $name: String!
    $appointment_type: String!
    $color: String
    $icon: String
    $track_time: Boolean
    $is_active: Boolean
  ) {
    insert_appointment_status_one(
      object: {
        name: $name
        appointment_type: $appointment_type
        color: $color
        icon: $icon
        track_time: $track_time
        is_active: $is_active
      }
    ) {
      __typename
      id
      name
      appointment_type
      color
      icon
      is_active
      track_time
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_appointment_status_by_pk(
    $id: uuid!
    $name: String!
    $appointment_type: String!
    $color: String
    $icon: String
    $track_time: Boolean
    $is_active: Boolean
    $order: Int
  ) {
    update_appointment_status_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        appointment_type: $appointment_type
        color: $color
        icon: $icon
        track_time: $track_time
        is_active: $is_active
        order: $order
      }
    ) {
      __typename
      id
      name
      appointment_type
      color
      icon
      is_active
      track_time
      order
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_appointment_status_order($id: uuid!, $order: Int) {
    update_appointment_status(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Appointment Status',
  fullLower: 'appointment status',
  short: 'Appointment Status',
  shortLower: 'appointment statuses',
  shemaType: 'Appointment Status',
  messages: {
    create: {
      success: 'You have successfully created a appointment status',
      error: 'While creating a appointment status',
    },
    update: {
      success: 'You have successfully updated a appointment status',
      error: 'While updating a appointment status',
    },
    delete: {
      success: 'You have successfully deleted a appointment status',
      error: 'While deleting a appointment status',
    },
  },
  fields: {
    appointment_type: {
      radio: [
        {
          label: 'Line',
          value: 'Line',
        },
        {
          label: 'Icon',
          value: 'Icon',
        },
      ],
      type: 'radio-group',
      visible: false,
      defaultvalue: 'Line',
    },
    icon: {
      type: 'icon',
      visible: false,
    },
    name: {
      full: 'Friendly Name',
      fullLower: 'friendly name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Running Late',
      cssWidth: 'max',
      type: 'string',
    },
    color: {
      full: 'Color',
      type: 'color-picker',
      visible: false,
    },
    track_time: {
      full: 'Track time',
      type: 'checkbox',
      defaultvalue: true,
      visible: false,
    },
    is_active: {
      full: 'Active',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const AppointmentStatuses: NextPage = () => {
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

export default AppointmentStatuses
