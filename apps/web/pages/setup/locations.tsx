import React from 'react'
import { gql } from '@apollo/client'
import LocationTable from '../../components/LocationTable'

/* eslint-disable-next-line */
export interface LocationsProps {}

const LIST_QUERY = gql`
  query locations(
    $isActive: Boolean = true
    $offset: Int
    $limit: Int
    $searchTerm: String = ""
  ) {
    locations(
      offset: $offset
      limit: $limit
      order_by: { order: asc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      name
      address
      is_parking
      is_time
      is_day
      is_night
      is_pharmacy
      order
      image
      is_active
      order
    }
  }
`

/**
 * TODO refactor UPDATE_ORDER_MUTATION with legacy db
 */
const UPDATE_ORDER_MUTATION = gql`
  mutation update_locations_order($id: uuid!, $order: Int) {
    update_locations(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Locations',
  fullLower: 'locations',
  short: 'Location',
  shortLower: 'location',
  createButtonLabel: 'Create Location',
  searchPlaceholder: 'Search by name, city or tag',
  fields: {},
}

export function Locations(props: LocationsProps) {
  return (
    <LocationTable
      schema={schema}
      listQuery={LIST_QUERY}
      updateOrderQuery={UPDATE_ORDER_MUTATION}
    />
  )
}

export default Locations
