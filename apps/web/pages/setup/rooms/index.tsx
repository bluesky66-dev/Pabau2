import { gql } from '@apollo/client'
import React from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'
import { useRouter } from 'next/router'

/* eslint-disable-next-line */
export interface RoomsProps {
}

const schema: Schema = {
  full: 'Rooms',
  fullLower: 'rooms',
  short: 'Room',
  shortLower: 'room',
  createButtonLabel: 'Create Room',
  messages: {
    create: {
      success: 'You have successfully created a room',
      error: 'While creating a room',
    },
    update: {
      success: 'You have successfully updated a room',
      error: 'While updating a room',
    },
    delete: {
      success: 'You have successfully deleted a room',
      error: 'While deleting a room',
    },
  },
  fields: {
    name: {
      full: 'lab Name',
      fullLower: 'lab name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Surgical lab',
      cssWidth: 'max',
      type: 'string',
    },
    integration: {
      full: 'Integration',
      type: 'boolean',
      defaultvalue: true,
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}
export const LIST_QUERY = gql`
  query Labs(
    $isActive: Boolean = true
    $offset: Int
    $limit: Int
    $searchTerm: String = ""
  ) {
    Labs(
      offset: $offset
      limit: $limit
      order_by: { id: desc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      name
      is_active
      integration
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query Labs_aggregate($isActive: Boolean = true, $searchTerm: String = "") {
    Labs_aggregate(
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
  mutation delete_Labs_by_pk($id: uuid!) {
    delete_Labs_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_departments_one($name: String!, $is_active: Boolean) {
    insert_departments_one(object: { name: $name, is_active: $is_active }) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_Labs_by_pk($id: uuid!, $name: String!, $is_active: Boolean) {
    update_Labs_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, is_active: $is_active }
    ) {
      __typename
      id
      is_active
      order
    }
  }
`
const UPDATE_ORDER_MUTATION = gql`
  mutation update_departments_order($id: uuid!, $order: Int) {
    update_departments(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

export function Labs(props: RoomsProps) {
  const router = useRouter()

  const createPageOnClick = () => {
    router.push('/setup/rooms/create')
  }

  return (
    <div>
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
        createPage={true}
        createPageOnClick={createPageOnClick}
      />
    </div>
  )
}

export default Labs
