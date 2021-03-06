import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React, { useContext, useEffect } from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'
/* eslint-disable graphql/template-strings */
import { useTranslationI18 } from '../../hooks/useTranslationI18'
import { UserContext } from '../../context/UserContext'
import { languageMapper } from '../../helper/languageMapper'

const LIST_QUERY = gql`
  query marketing_sources(
    $isActive: Boolean = true
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    marketing_source(
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
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query marketing_source_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    marketing_source_aggregate(
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
  mutation delete_marketing_source($id: uuid!) {
    delete_marketing_source_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_marketing_source($name: String!, $is_active: Boolean) {
    insert_marketing_source_one(
      object: { name: $name, is_active: $is_active }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_marketing_source_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
    $order: Int
  ) {
    update_marketing_source_by_pk(
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
  mutation update_marketing_source_order($id: uuid!, $order: Int) {
    update_marketing_source(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`

export const Index: NextPage = () => {
  const { t, i18n } = useTranslationI18()

  const user = useContext(UserContext)

  console.log('asdasdasdasdasd', user)

  useEffect(() => {
    if (user) {
      const lan = user.company.details.language
      const lanCode = lan ? languageMapper(lan) : 'en'
      i18n.changeLanguage(lanCode)
    }
  }, [user, i18n])

  const schema: Schema = {
    full: t('marketingsource-title.translation'),
    fullLower: t('marketingsource-title.translation'),
    short: 'Source',
    shortLower: 'source',
    createButtonLabel: 'Create Source',
    messages: {
      create: {
        success: 'New marketings source created.',
        error: 'While creating marketing source.',
      },
      update: {
        success: 'Marketings source updated.',
        error: 'While updating marketings source.',
      },
      delete: {
        success: 'Marketings source deleted.',
        error: 'While deleting marketing sources.',
      },
    },
    deleteBtnLabel: 'Yes, Delete Source',
    fields: {
      name: {
        full: 'Friendly Name',
        fullLower: 'friendly name',
        short: t('marketingsource-name-textfield.translation'),
        shortLower: 'name',
        min: 2,
        example: t('marketingsource-name-textfield.translation'),
        description: 'A friendly name',
        // extra: <i>Please note: blah blah blahh</i>,
        cssWidth: 'max',
        type: 'string',
      },
      is_active: {
        full: t('marketingsource-tableColumn-active.translation'),
        type: 'boolean',
        defaultvalue: true,
      },
    },
  }
  return (
    <CrudLayout
      schema={schema}
      addQuery={ADD_MUTATION}
      deleteQuery={DELETE_MUTATION}
      listQuery={LIST_QUERY}
      editQuery={EDIT_MUTATION}
      aggregateQuery={LIST_AGGREGATE_QUERY}
      updateOrderQuery={UPDATE_ORDER_MUTATION}
      needTranslation={true}
    />
  )
}
export default Index
