import React, { useState } from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'
import { CreateMedicalCondition, LibraryCard } from '@pabau/ui'
import { gql } from '@apollo/client'
const schema: Schema = {
  full: 'Invoice Templates',
  fullLower: 'invoice templates',
  short: 'invoice template',
  shortLower: 'Invoice Template',
  createButtonLabel: 'New Condition',
  messages: {
    create: {
      success: 'You have successfully created a invoice template',
      error: 'While creating a invoice template',
    },
    update: {
      success: 'You have successfully updated a invoice template',
      error: 'While updating a invoice template',
    },
    delete: {
      success: 'You have successfully deleted a invoice template',
      error: 'While deleting a invoice template',
    },
  },
  fields: {
    name: {
      full: 'condition Name',
      fullLower: 'condition name',
      short: 'Condition Name',
      shortLower: 'condition name',
      min: 2,
      example: 'Diabetic',
      cssWidth: 'max',
      type: 'string',
    },
    integration: {
      full: 'Common',
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
export const MedicalConditions = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <CrudLayout
        schema={schema}
        tableSearch
        addQuery={ADD_MUTATION}
        deleteQuery={DELETE_MUTATION}
        listQuery={LIST_QUERY}
        editQuery={EDIT_MUTATION}
        aggregateQuery={LIST_AGGREGATE_QUERY}
        updateOrderQuery={UPDATE_ORDER_MUTATION}
        createPage
        createPageOnClick={() => setVisible(true)}
      />
      {[
        {
          title: 'Entire Database',
          bundleCount: 1040,
        },
        {
          title: 'Top 100 Most Used',
          bundleCount: 1000,
        },
      ].map((item, index) => {
        const { title, bundleCount } = item
        return (
          <LibraryCard key={index} title={title} bundleCount={bundleCount} />
        )
      })}
      <CreateMedicalCondition
        visible={visible}
        onClose={() => setVisible(false)}
        onCreate={() => setVisible(false)}
      />
    </div>
  )
}
export default MedicalConditions
