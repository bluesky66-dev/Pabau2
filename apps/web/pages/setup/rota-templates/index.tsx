import React from 'react'
import { gql } from '@apollo/client'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'

import styles from './index.module.less'

/* eslint-disable-next-line */
export interface RotaTemplateProps {}

const schema: Schema = {
  full: 'Rota Templates',
  fullLower: 'rota templates',
  short: 'Rota Templates',
  shortLower: 'rota templates',
  createButtonLabel: 'Create Rota Template',
  messages: {
    create: {
      success: 'You have successfully created a rota template',
      error: 'While creating a rota template',
    },
    update: {
      success: 'You have successfully updated a rota template',
      error: 'While updating a rota template',
    },
    delete: {
      success: 'You have successfully deleted a rota template',
      error: 'While deleting a rota template',
    },
  },
  fields: {
    name: {
      full: 'Name',
      fullLower: 'name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Weekly Standard',
      cssWidth: 'max',
      type: 'string',
    },
    start_time: {
      full: 'Start Time',
      fullLower: 'start time',
      short: 'Start Time',
      shortLower: 'start time',
      min: 2,
      example: '09:00',
      cssWidth: 'max',
      type: 'time',
      col: 12,
    },
    end_time: {
      full: 'End Time',
      fullLower: 'end time',
      short: 'End Time',
      shortLower: 'end time',
      min: 2,
      example: '17:00',
      cssWidth: 'max',
      type: 'time',
      col: 12,
    },
    days: {
      full: 'Days',
      fullLower: 'days',
      short: 'Days',
      selectOptions: [
        { label: 'Mon', value: 'Mon' },
        { label: 'Tue', value: 'Tue' },
        { label: 'Wed', value: 'Wed' },
        { label: 'Thu', value: 'Thu' },
        { label: 'Fri', value: 'Fri' },
        { label: 'Sat', value: 'Sat' },
        { label: 'Sun', value: 'Sun' },
      ],
      shortLower: 'days',
      min: 2,
      example: 'Mon',
      cssWidth: 'max',
      type: 'days-checkbox',
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

/* eslint-disable graphql/template-strings */
export const LIST_QUERY = gql`
  query rota_templates($isActive: Boolean = true, $offset: Int, $limit: Int) {
    rota_templates(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: { is_active: { _eq: $isActive } }
    ) {
      __typename
      id
      name
      days
      start_time
      end_time
      is_active
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query rota_templates_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    rota_templates_aggregate(where: { is_active: { _eq: $isActive } }) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_rota_templates_by_pk($id: uuid!) {
    delete_rota_templates_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_rota_templates_one(
    $name: String!
    $days: String!
    $start_time: timetz!
    $end_time: timetz!
    $is_active: Boolean
  ) {
    insert_rota_templates_one(
      object: {
        name: $name
        days: $days
        start_time: $start_time
        end_time: $end_time
        is_active: $is_active
      }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_rota_templates_by_pk(
    $id: uuid!
    $name: String
    $days: String
    $start_time: timetz
    $end_time: timetz
    $is_active: Boolean
  ) {
    update_rota_templates_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        days: $days
        start_time: $start_time
        end_time: $end_time
        is_active: $is_active
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
  mutation update_rota_templates_order($id: uuid!, $order: Int) {
    update_rota_templates(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`
export function RotaTemplate(props: RotaTemplateProps) {
  return (
    <div className={styles.customTable}>
      <CrudLayout
        schema={schema}
        tableSearch={false}
        addQuery={ADD_MUTATION}
        deleteQuery={DELETE_MUTATION}
        listQuery={LIST_QUERY}
        editQuery={EDIT_MUTATION}
        aggregateQuery={LIST_AGGREGATE_QUERY}
        updateOrderQuery={UPDATE_ORDER_MUTATION}
        addFilter={true}
      />
      )
    </div>
  )
}

export default RotaTemplate
