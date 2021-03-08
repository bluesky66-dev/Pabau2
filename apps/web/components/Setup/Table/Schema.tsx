import { gql } from '@apollo/client'
export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Provider No',
    dataIndex: 'provider_no',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    className: 'drag-visible',
    visible: true,
  },

  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
    width: '160px',
  },
]

/* eslint-disable graphql/template-strings */
const LIST_QUERY = gql`
  query third_parties(
    $isActive: Boolean = true
    $type: [String!]
    $company: Boolean
    $offset: Int
    $limit: Int
    $searchTerm: String = ""
  ) {
    third_parties(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: {
        is_active: { _eq: $isActive }
        type: { _in: $type }
        company: { _is_null: $company }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      id
      name
      provider_no
      type
      email
      phone
      website
      health_code_identifier
      country
      city
      street
      post_code
      is_active
      company
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query third_parties_aggregate(
    $isActive: Boolean = true
    $type: [String!]
    $company: Boolean
    $searchTerm: String = ""
  ) {
    third_parties_aggregate(
      where: {
        is_active: { _eq: $isActive }
        type: { _in: $type }
        company: { _is_null: $company }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`

const ADD_MUTATION = gql`
  mutation insert_third_parties_one(
    $name: String!
    $providerNo: String
    $type: String
    $email: String
    $phone: String
    $website: String
    $healthCodeIdentifier: String
    $country: String
    $city: String
    $street: String
    $postCode: String
    $isActive: Boolean
    $company: String
  ) {
    insert_third_parties_one(
      object: {
        name: $name
        provider_no: $providerNo
        type: $type
        email: $email
        phone: $phone
        website: $website
        health_code_identifier: $healthCodeIdentifier
        country: $country
        city: $city
        street: $street
        post_code: $postCode
        is_active: $isActive
        company: $company
      }
    ) {
      __typename
      id
    }
  }
`

const EDIT_MUTATION = gql`
  mutation update_job_title_by_pk(
    $id: uuid!
    $name: String!
    $providerNo: String
    $type: String
    $email: String
    $phone: String
    $website: String
    $healthCodeIdentifier: String
    $country: String
    $city: String
    $street: String
    $postCode: String
    $isActive: Boolean
    $company: String
  ) {
    update_third_parties_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        provider_no: $providerNo
        type: $type
        email: $email
        phone: $phone
        website: $website
        health_code_identifier: $healthCodeIdentifier
        country: $country
        city: $city
        street: $street
        post_code: $postCode
        is_active: $isActive
        company: $company
      }
    ) {
      id
    }
  }
`

const DELETE_MUTATION = gql`
  mutation delete_third_parties_by_pk($id: uuid!) {
    delete_third_parties_by_pk(id: $id) {
      id
    }
  }
`
const UPDATE_ORDER_MUTATION = gql`
  mutation update_third_parties_order($id: uuid!, $order: Int) {
    update_third_parties(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

export const Queries = {
  LIST_QUERY: LIST_QUERY,
  LIST_AGGREGATE_QUERY: LIST_AGGREGATE_QUERY,
}

export const Mutations = {
  ADD_MUTATION: ADD_MUTATION,
  EDIT_MUTATION: EDIT_MUTATION,
  DELETE_MUTATION: DELETE_MUTATION,
  UPDATE_ORDER_MUTATION: UPDATE_ORDER_MUTATION,
}

export const thirdPartySchema: Schema = {
  full: 'Third Parties',
  fullLower: 'third parties',
  short: 'third parties',
  shortLower: 'third parties',
  createButtonLabel: 'Create Third Party',
  fields: {},
}
