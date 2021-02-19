import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'

const LIST_QUERY = gql`
  query family_relationships(
    $isActive: Boolean = true
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    family_relationships(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ relation_name: { _ilike: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      relation_name
      reserve_relation
      is_active
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query family_relationships_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    family_relationships_aggregate(
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ relation_name: { _ilike: $searchTerm } }] }]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_family_relationships($id: uuid!) {
    delete_family_relationships_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_family_relationships(
    $relation_name: String!
    $reserve_relation: String!
    $is_active: Boolean
  ) {
    insert_family_relationships_one(
      object: {
        relation_name: $relation_name
        reserve_relation: $reserve_relation
        is_active: $is_active
      }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_family_relationships(
    $id: uuid!
    $relation_name: String!
    $reserve_relation: String!
    $is_active: Boolean
    $order: Int
  ) {
    update_family_relationships_by_pk(
      pk_columns: { id: $id }
      _set: {
        relation_name: $relation_name
        reserve_relation: $reserve_relation
        is_active: $is_active
        order: $order
      }
    ) {
      __typename
      id
      relation_name
      reserve_relation
      is_active
      order
    }
  }
`
const UPDATE_ORDER_MUTATION = gql`
  mutation update_family_relationships_order($id: uuid!, $order: Int) {
    update_family_relationships(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`
const schema: Schema = {
  full: 'Family Relationship',
  fullLower: 'family relationship',
  short: 'Family Relationship',
  shortLower: 'family relationship',
  messages: {
    create: {
      success: 'You have successfully created a family relationship',
      error: 'While creating a family relationship',
    },
    update: {
      success: 'You have successfully updated a family relationship',
      error: 'While updating a family relationship',
    },
    delete: {
      success: 'You have successfully deleted a family relationship',
      error: 'While deleting a family relationship',
    },
  },
  fields: {
    relation_name: {
      full: 'Relation Name',
      fullLower: 'relation name',
      short: 'Relation Name',
      shortLower: 'relation',
      min: 2,
      example: 'is pasent of',
      description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
    },
    reserve_relation: {
      full: 'Reserve Family Relation',
      fullLower: 'relation name',
      short: 'Reserve Family Relation',
      shortLower: 'relation',
      example: 'is child of',
      description: 'is child of',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'select',
      defaultvalue: 'is child of',
      selectOptions: [
        {
          label: 'is parent of',
          value: 'is parent of',
        },
        {
          label: 'is brother of',
          value: 'is brother of',
        },
        {
          label: 'is cousin of',
          value: 'is cousin of',
        },
      ],
    },
    is_active: {
      full: 'Active',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const FamilyRelationships: NextPage = () => {
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

export default FamilyRelationships
