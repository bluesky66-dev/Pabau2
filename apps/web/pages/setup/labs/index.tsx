import { gql } from '@apollo/client'
import React from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'
import { NotificationBanner } from '@pabau/ui'
import { useRouter } from 'next/router'
import notificationBannerLabPageImage from '../../../assets/images/notification-image-lab-page.png'

/* eslint-disable-next-line */
export interface LabsProps {
}

const schema: Schema = {
  full: 'Labs',
  fullLower: 'labs',
  short: 'Lab',
  shortLower: 'lab',
  createButtonLabel: 'Create Lab',
  messages: {
    create: {
      success: 'You have successfully created a lab',
      error: 'While creating a lab',
    },
    update: {
      success: 'You have successfully updated a lab',
      error: 'While updating a lab',
    },
    delete: {
      success: 'You have successfully deleted a lab',
      error: 'While deleting a lab',
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
      order_by: { order: desc }
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
      order
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
  mutation insert_Labs_one(
    $city: String
    $country: String
    $email: String!
    $isActive: Boolean
    $name: String!
    $phone: String!
    $postalCode: numeric
    $providerNumber: numeric
    $street: String
    $street2: String
  ) {
    insert_Labs_one(
      object: {
        city: $city
        country: $country
        email: $email
        is_active: $isActive
        name: $name
        phone: $phone
        postal_code: $postalCode
        provider_number: $providerNumber
        street: $street
        street2: $street2
      }
    ) {
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
  mutation update_Labs_order($id: uuid!, $order: Int) {
    update_Labs(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

export function Labs(props: LabsProps) {
  const router = useRouter()
  const NotificationRender = () => {
    const [hideBanner, setHideBanner] = React.useState(false)
    return (
      <NotificationBanner
        title="Automate Results"
        desc="Have your labs send back results to this email address below to auto match to a client:"
        imgPath={notificationBannerLabPageImage}
        allowClose={true}
        setHide={[hideBanner, setHideBanner]}
        showPaymentButton={false}
        showEmail={true}
        email="3143+bloods@automation.pabau.com"
      />
    )
  }

  const createPageOnClick = () => {
    router.push('/setup/labs/create')
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
        notificationBanner={<NotificationRender />}
        editPage={true}
        editPageRouteLink="/setup/labs/edit"
      />
    </div>
  )
}

export default Labs
