import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React, { useState } from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'
import { FullScreenReportModal } from '@pabau/ui'
import { Form, Select, Input } from 'antd'

import styles from './issuing-company.module.less'

/* eslint-disable graphql/template-strings */
const LIST_QUERY = gql`
  query issuing_company(
    $isActive: Boolean = true
    $offset: Int
    $limit: Int
    $searchTerm: String = ""
  ) {
    issuing_company(
      offset: $offset
      limit: $limit
      order_by: { name: desc }
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      __typename
      id
      name
      is_active
      address
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query issuing_company_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    issuing_company_aggregate(
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
  mutation delete_issuing_company_by_pk($id: uuid!) {
    delete_issuing_company_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const ADD_MUTATION = gql`
  mutation insert_issuing_company_one(
    $name: String!
    $is_active: Boolean
    $address: String!
  ) {
    insert_issuing_company_one(
      object: { name: $name, is_active: $is_active, address: $address }
    ) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_issuing_company_by_pk(
    $id: uuid!
    $name: String!
    $is_active: Boolean
    $address: String!
  ) {
    update_issuing_company_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, is_active: $is_active, address: $address }
    ) {
      __typename
      id
      is_active
      address
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_issuing_company_order($id: uuid!) {
    update_issuing_company(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Issuing Company',
  fullLower: 'issuing company',
  short: 'issuing company',
  shortLower: 'issuing company',
  messages: {
    create: {
      success: 'You have successfully created a IssuingCompany',
      error: 'While creating a issuingCompany',
    },
    update: {
      success: 'You have successfully updated a IssuingCompany',
      error: 'While updating a issuingCompany',
    },
    delete: {
      success: 'You have successfully deleted a IssuingCompany',
      error: 'While deleting a IssuingCompany',
    },
  },
  fields: {
    name: {
      full: 'Issuing Company',
      fullLower: 'issuing company',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'Company Name',
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
      cssWidth: 'max',
      type: 'string',
    },
    address: {
      full: 'Issuing Company',
      fullLower: 'issuing company',
      short: 'Address',
      shortLower: 'address',
      min: 2,
      example: '13 Pleasent Road',
      // description: 'A friendly name',
      // extra: <i>Please note: blah blah blahh</i>,
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

export const IssuingCompany: NextPage = () => {
  const [showModal, setShowModal] = useState(false)

  const createPageOnClick = () => {
    setShowModal(true)
  }

  const modalContents = () => {
    return (
      <div className={styles.mainWrapper}>
        <div
          className={styles.contentWrapper}
          // className={
          //   focused ? styles.focusedContentWrapper : styles.contentWrapper
          // }
          // onFocus={() => handleFocusElement(true)}
          // onBlur={() => handleFocusElement(false)}
        >
          <h3>{'Address information'}</h3>
          <Form
            layout="vertical"
            // onSubmitCapture={formik.handleSubmit}
          >
            <div className={styles.customForm}>
              <Form.Item label={'Country'}>
                <Select defaultValue={'Select country'}>
                  <option value="">Select country</option>
                  <option value="value1">value1</option>
                </Select>
              </Form.Item>
              <Form.Item label={'City'}>
                <Select defaultValue={'Select city'}>
                  <option value="">Select city</option>
                  <option value="value1">value1</option>
                </Select>
              </Form.Item>
              <Form.Item label="Street">
                <Input
                  placeholder="Enter street"
                  className="input-style"
                  value={''}
                  // defaultValue={text}
                  // size={size}
                  // onChange={(e) => onchange(e, 'companyName')}
                  // text={formik.values.companyName}
                />
              </Form.Item>
              <Form.Item label="Post code">
                <Input
                  placeholder="Enter post code"
                  className="input-style"
                  value={''}
                />
              </Form.Item>
            </div>
          </Form>
        </div>
        <div
          className={styles.contentWrapper}
          // className={
          //   focused ? styles.focusedContentWrapper : styles.contentWrapper
          // }
          // onFocus={() => handleFocusElement(true)}
          // onBlur={() => handleFocusElement(false)}
        >
          <h3>Finanacial Information</h3>
          <Form
            layout="vertical"
            // onSubmitCapture={formik.handleSubmit}
          >
            <div className={styles.customForm}>
              <Form.Item label="Invoice template">
                <Select defaultValue="Select invoice template">
                  <option value="">Select invoice template</option>
                  <option value="test">test</option>
                </Select>
              </Form.Item>
              <Form.Item label="Invoice prefix">
                <Input
                  placeholder="Enter invoice prefix"
                  // onChange={(e) => onchange(e, 'companyName')}
                  // text={formik.values.companyName}
                />
              </Form.Item>
              <Form.Item label="Invoice starting number">
                <Input
                  placeholder="Enter Invoice starting number"
                  // onChange={(e) => onchange(e, 'companyName')}
                  // text={formik.values.companyName}
                />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    )
  }
  return (
    <>
      <CrudLayout
        schema={schema}
        tableSearch={false}
        addQuery={ADD_MUTATION}
        deleteQuery={DELETE_MUTATION}
        listQuery={LIST_QUERY}
        editQuery={EDIT_MUTATION}
        aggregateQuery={LIST_AGGREGATE_QUERY}
        updateOrderQuery={UPDATE_ORDER_MUTATION}
        addFilter={false}
        createPage={true}
        createPageOnClick={createPageOnClick}
      />
      <FullScreenReportModal
        title="Create Issuing Company"
        visible={showModal}
        onBackClick={() => setShowModal(false)}
        content={modalContents}
      />
    </>
  )
}

export default IssuingCompany
