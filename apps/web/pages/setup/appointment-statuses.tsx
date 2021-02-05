/* eslint-disable */
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
  query marketing_source_aggregate(
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
  mutation delete_marketing_source($id: uuid!) {
    delete_marketing_source_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_appointment_status_one($name: String!, $is_active: Boolean,) {
    insert_appointment_status_one(
      object: { name: $name, is_active: $is_active }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_marketing_source_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
  ) {
    update_marketing_source_by_pk(
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
  full: 'Appointment Status',
  fullLower: 'appointment status',
  short: 'Appointment Status',
  shortLower: 'appointment statuses',
  shemaType: 'Appointment Status',
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
      default: 'Line',
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
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
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
      default: true,
      visible: false,
    },
    is_active: {
      full: 'Active',
      type: 'boolean',
      default: true,
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
    />
  )
}

export default AppointmentStatuses
