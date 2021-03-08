import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React, { useContext, useEffect } from 'react'
import CrudLayout from '../../components/CrudLayout/CrudLayout'
import { useTranslationI18 } from '../../hooks/useTranslationI18'
import { UserContext } from '../../context/UserContext'
import { languageMapper } from '../../helper/languageMapper'

console.log(UserContext)

const LIST_QUERY = gql`
  query marketing_sources(
    $public: Int = 1
    $searchTerm: String = ""
    $offset: Int = 0
    $limit: Int = 10
    $companyId: Int!
  ) {
    marketingSources(
      first: $offset
      last: $limit
      orderBy: { name: desc }
      where: {
        company_id: { equals: $companyId }
        isActive: { equals: $public }
        OR: [{ AND: [{ name: { contains: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      name
      isActive
    }
  }
`

const LIST_AGGREGATE_QUERY = gql`
  query marketing_source_aggregate(
    $public: Int = 1
    $searchTerm: String = ""
    $companyId: Int!
  ) {
    marketingSourcesCount(
      where: {
        company_id: { equals: $companyId }
        isActive: { equals: $public }
        OR: [{ AND: [{ name: { contains: $searchTerm } }] }]
      }
    )
  }
`
const DELETE_MUTATION = gql`
  mutation delete_marketing_source($id: Int) {
    deleteOneMarketingSource(where: { id: $id }) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation add_marketing_source(
    $imported: Int = 0
    $is_active: Int = 1
    $name: String!
    $custom_id: Int = 0
    $companyId: Int!
  ) {
    createOneMarketingSource(
      data: {
        company: { connect: { id: $companyId } }
        imported: $imported
        source_name: $name
        public: $is_active
        custom_id: $custom_id
      }
    ) {
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_marketing_source_by_pk(
    $id: Int!
    $source_name: String
    $public: Int = 1
  ) {
    updateOneMarketingSource(
      data: { source_name: { set: $source_name }, public: { set: $public } }
      where: { id: $id }
    ) {
      id
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

  useEffect(() => {
    if (user) {
      const lan = user.company?.details?.language
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
      source_name: {
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
      public: {
        full: t('marketingsource-tableColumn-active.translation'),
        type: 'number',
        defaultvalue: 1,
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
