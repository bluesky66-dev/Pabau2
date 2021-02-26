import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'
import { gql } from '@apollo/client'
import { useLiveQuery } from '@pabau/ui'

const LIST_QUERY = gql`
  query prototype($isActive: Boolean = true, $offset: Int, $limit: Int) {
    prototype(
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
  query prototype_aggregate($isActive: Boolean = true) {
    prototype_aggregate(where: { is_active: { _eq: $isActive } }) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_prototype_by_pk($id: uuid!) {
    delete_prototype_by_pk(id: $id) {
      __typename
      id
    }
  }
`

const ADD_MUTATION = gql`
  mutation insert_prototype_one($name: String!, $is_active: Boolean) {
    insert_prototype_one(object: { name: $name, is_active: $is_active }) {
      __typename
      id
    }
  }
`

const EDIT_MUTATION = gql`
  mutation update_prototype_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
    $order: Int
  ) {
    update_prototype_by_pk(
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
  mutation update_prototype_order($id: uuid!, $order: Int) {
    update_prototype(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Prototype',
  fullLower: 'prototype',
  short: 'Prototype',
  shortLower: 'prototype',
  fields: {
    name: {
      full: 'Prototype Name',
      fullLower: 'prototype name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'prototype',
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

export const Prototype: NextPage = () => {
  const [prototypeData, setPrototypeData] = useState()
  const { data } = useLiveQuery(LIST_QUERY)

  useEffect(() => {
    if (data[0].__typename === 'prototype') {
      setPrototypeData(data)
    }
  }, [data, prototypeData])

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

export default Prototype
