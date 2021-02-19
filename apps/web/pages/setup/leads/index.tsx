import { gql } from '@apollo/client'
import React from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'
import { useRouter } from 'next/router'

/* eslint-disable-next-line */
export interface LeadsProps {}

const LIST_QUERY = gql`
  query leads(
    $isActive: Boolean = true
    $offset: Int
    $limit: Int
    $searchTerm: String = ""
  ) {
    leads(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ lead_name: { _ilike: $searchTerm } }] }]
      }
    ) {
      id
      lead_name
      order
      status
      is_active
      email
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query leads_aggregate($searchTerm: String = "") {
    leads_aggregate(
      where: { _or: [{ _and: [{ lead_name: { _ilike: $searchTerm } }] }] }
    ) {
      aggregate {
        count
      }
    }
  }
`
const DELETE_MUTATION = gql`
  mutation delete_leads_by_pk($id: uuid!) {
    delete_leads_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_leads(
    $imported: Int = 0
    $is_active: Int = 1
    $name: String!
    $custom_id: Int = 0
    $company_id: Int = 8901 #TODO refactor with actual company_id
  ) {
    insert_leads(
      data: { source_name: $name, public: $is_active, custom_id: $custom_id }
    ) {
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_leads_by_pk(
    $id: uuid!
    $lead_name: String
    $is_active: Boolean = true
  ) {
    update_leads_by_pk(
      pk_columns: { id: $id }
      _set: { lead_name: $lead_name, is_active: $is_active }
    ) {
      __typename
      id
      is_active
      order
    }
  }
`
/**
 * TODO refactor UPDATE_ORDER_MUTATION with legacy db
 */
const UPDATE_ORDER_MUTATION = gql`
  mutation update_leads_order($id: uuid!, $order: Int) {
    update_leads(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Leads View',
  fullLower: 'leads view',
  short: 'Leads',
  shortLower: 'leads',
  messages: {
    create: {
      success: 'New leads created.',
      error: 'While creating leads',
    },
    update: {
      success: 'Leads updated.',
      error: 'While updating leads',
    },
    delete: {
      success: 'Leads deleted.',
      error: 'While deleting leads',
    },
  },
  deleteBtnLabel: 'Yes, Delete leads',

  fields: {
    lead_name: {
      full: 'Lead Name',
      fullLower: 'lead name',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Facebook',
      description: 'name description',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
    },
    is_active: {
      full: 'Status',
      type: 'number',
      defaultvalue: true,
    },
  },
}

export function Leads(props: LeadsProps) {
  const router = useRouter()

  const createPageOnClick = () => {
    router.push('/setup/leads/create')
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

export default Leads
