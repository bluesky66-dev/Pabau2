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
      is_active
      order
    }
  }
`

// const LIST_LIBRARY_QUERY = gql`
//   query third_parties(
//     $isActive: Boolean = true
//     $company: Boolean
//     $offset: Int
//     $limit: Int
//     $searchTerm: String = ""
//   ) {
//     third_parties(
//       offset: $offset
//       limit: $limit
//       order_by: { order: desc }
//       where: {
//         is_active: { _eq: $isActive }
//         company: { _is_null: $company }
//         _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
//       }
//     ) {
//       id
//       name
//       provider_no
//       type
//       email
//       phone
//       is_active
//       order
//     }
//   }
// `

const LIST_AGGREGATE_QUERY = gql`
  query third_parties_aggregate(
    $isActive: Boolean = true
    $company: Boolean
    $searchTerm: String = ""
  ) {
    third_parties_aggregate(
      where: {
        is_active: { _eq: $isActive }
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

// const LIST_LIBRARY_AGGREGATE_QUERY = gql`
//   query third_parties_aggregate(
//     $isActive: Boolean = true
//     $searchTerm: String = ""
//   ) {
//     third_parties_aggregate(
//       where: {
//         is_active: { _eq: $isActive }
//         company: { _eq: "ID goes here" }
//         _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//   }
// `

const ADD_MUTATION = gql`
  mutation insert_third_parties_one(
    $name: String
    $type: String
    $email: String
    $phone: Int
    $provider_no: String
    $isActive: Boolean
  ) {
    insert_third_parties_one(
      object: {
        name: $name
        type: $type
        email: $email
        provider_no: $provider_no
        phone: $phone
        is_active: $isActive
      }
    ) {
      id
      name
      email
      phone
      provider_no
      type
    }
  }
`

const EDIT_MUTATION = gql`
  mutation update_job_title_by_pk(
    $id: uuid!
    $name: String
    $type: String
    $paidBlockOut: Boolean = false
    $backgroundColor: String
    $defaultTime: Int
    $isActive: Boolean
  ) {
    update_third_parties_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        type: $type
        paidBlockOut: $paidBlockOut
        backgroundColor: $backgroundColor
        defaultTime: $defaultTime
        is_active: $isActive
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
  // messages: {
  //   create: {
  //     success: 'You have successfully created a department',
  //     error: 'While creating a department',
  //   },
  //   update: {
  //     success: 'You have successfully updated a department',
  //     error: 'While updating a department',
  //   },
  //   delete: {
  //     success: 'You have successfully deleted a department',
  //     error: 'While deleting a department',
  //   },
  // },
  fields: {
    // name: {
    //   full: 'Department Name',
    //   fullLower: 'department name',
    //   short: 'Name',
    //   shortLower: 'name',
    //   min: 2,
    //   example: 'Surgical Department',
    //   // description: 'A friendly name',
    //   // extra: <i>Please note: blah blah blahh</i>,
    //   cssWidth: 'max',
    //   type: 'string',
    // },
    // is_active: {
    //   full: 'Status',
    //   type: 'boolean',
    //   defaultvalue: true,
    // },
  },
}
