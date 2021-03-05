import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query job_title($isActive: Boolean = true, $offset: Int, $limit: Int) {
    job_title(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: { is_active: { _eq: $isActive } }
    ) {
      __typename
      id
      name
      is_active
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query job_title_aggregate($isActive: Boolean = true) {
    job_title_aggregate(where: { is_active: { _eq: $isActive } }) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_job_title_by_pk($id: uuid!) {
    delete_job_title_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_job_title_one($name: String!, $is_active: Boolean) {
    insert_job_title_one(object: { name: $name, is_active: $is_active }) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_job_title_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
    $order: Int
  ) {
    update_job_title_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, is_active: $is_active, order: $order }
    ) {
      __typename
      id
      is_active
      order
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_job_title_order($id: uuid!, $order: Int) {
    update_job_title(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Job Title',
  fullLower: 'job title',
  short: 'Job Title',
  shortLower: 'job title',
  createButtonLabel: 'Create Job Title',
  messages: {
    create: {
      success: 'You have successfully created a job title',
      error: 'While creating a job title',
    },
    update: {
      success: 'You have successfully updated a job title',
      error: 'While updating a job title',
    },
    delete: {
      success: 'You have successfully deleted a job title',
      error: 'While deleting a job title',
    },
  },
  fields: {
    name: {
      full: 'Job Name',
      fullLower: 'friendly name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      max: 50,
      example: 'Therapist',
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const JobTitle: NextPage = () => {
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

export default JobTitle
