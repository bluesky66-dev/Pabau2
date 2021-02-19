import { gql, useMutation } from '@apollo/client'
import { NextPage } from 'next'
import React, { useState } from 'react'
import CrudLayout from '../../../components/CrudLayout/CrudLayout'
import {
  FullScreenReportModal,
  PhoneNumberInput,
  Switch,
  Button,
  Notification,
  NotificationType,
} from '@pabau/ui'
import { Form, Select, Input } from 'antd'
import { useFormik } from 'formik'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import csc from 'country-state-city'

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
      phone
      website
      is_active
      country
      city
      street
      post_code
      invoice_template
      invoice_prefix
      invoice_starting_number
      vat_registered
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
    $companyName: String!
    $phone: numeric!
    $website: String!
    $country: String!
    $city: String!
    $street: String!
    $postCode: numeric!
    $invoiceTemplate: String!
    $invoicePrefix: String!
    $invoiceStartingNumber: numeric!
    $vatRegistered: Boolean!
  ) {
    insert_issuing_company_one(
      object: {
        name: $companyName
        phone: $phone
        website: $website
        country: $country
        city: $city
        street: $street
        post_code: $postCode
        invoice_template: $invoiceTemplate
        invoice_prefix: $invoicePrefix
        invoice_starting_number: $invoiceStartingNumber
        vat_registered: $vatRegistered
        is_active: true
      }
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
  ) {
    update_issuing_company_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, is_active: $is_active }
    ) {
      __typename
      id
      is_active
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

interface inputTypes {
  companyName?: string
  phone?: string
  website?: string
  country?: string
  city?: string
  street?: string
  postCode?: string
  invoiceTemplate?: string
  invoicePrefix?: string
  invoiceStartingNumber?: string
  vatRegistered?: boolean
}

interface editFieldsTypes {
  id?: string
  name?: string
  phone?: string
  website?: string
  country?: string
  city?: string
  street?: string
  post_code?: string
  invoice_template?: string
  invoice_prefix?: string
  invoice_starting_number?: string
  vat_registered?: boolean
}
export const IssuingCompany: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [defaultChecked, setdefaultChecked] = useState(true)
  const { Option } = Select
  const [countryCode, setCountryCode] = useState(null)
  const [focused, setFocused] = useState({})
  const [addMutation] = useMutation(ADD_MUTATION, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully created an issuing company`
      )
    },
    onError(err) {
      console.log('ERROR WHILE CREATING:', err)
      Notification(
        NotificationType.error,
        `Error! While creating an issuing company`
      )
    },
  })
  const [editPage, setEditPage] = useState<editFieldsTypes>({})

  countries.registerLocale(english)
  const countriesName = countries.getNames('en')

  const createOptions = (type) => {
    let options = []
    if (type === 'country') {
      options = Object.keys(countriesName).map((c) => (
        <Option key={c} value={countriesName[c]}>
          {countriesName[c]}
        </Option>
      ))
    } else if (type === 'city') {
      const cities = csc.getCitiesOfCountry(countryCode)
      options = cities.map((city) => (
        <Option key={city.name} value={city.name}>
          {city.name}
        </Option>
      ))
    }
    return options
  }

  const validate = (values) => {
    const errors: inputTypes = {}

    if (!values.companyName) {
      errors.companyName = 'Company name is required'
    }

    if (!values.website) {
      errors.website = 'Website is required'
    } else if (!/^[\w%+.-]+\.[\d.a-z-]+\.[a-z]{2,4}$/i.test(values.website)) {
      errors.website = 'Invalid website name'
    }

    if (!values.country) {
      errors.country = 'Country is required'
    }

    if (!values.city) {
      errors.city = 'City is required'
    }

    if (!values.street) {
      errors.street = 'Street is required'
    }

    if (!values.postCode) {
      errors.postCode = 'Post code is required'
    }

    if (!values.invoiceTemplate) {
      errors.invoiceTemplate = 'Invoice template is required'
    }

    if (!values.invoicePrefix) {
      errors.invoicePrefix = 'Invoice prefix is required'
    }

    if (!values.invoiceStartingNumber) {
      errors.invoiceStartingNumber = 'Invoice starting number is required'
    }

    return errors
  }

  const setEditFields = () => {
    if (editPage.id) {
      const editObj = {
        id: editPage.id,
        companyName: editPage.name,
        phone: editPage.phone,
        website: editPage.website,
        country: editPage.country,
        city: editPage.city,
        street: editPage.street,
        postCode: editPage.post_code,
        invoiceTemplate: editPage.invoice_template,
        invoicePrefix: editPage.invoice_prefix,
        invoiceStartingNumber: editPage.invoice_starting_number,
        vatRegistered: editPage.vat_registered,
      }
      // setFocused({ general: true, address: true, financial: true })
      return editObj
    } else {
      return {
        companyName: '',
        phone: undefined,
        website: '',
        country: '',
        city: '',
        street: '',
        postCode: undefined,
        invoiceTemplate: '',
        invoicePrefix: '',
        invoiceStartingNumber: undefined,
        vatRegistered: false,
      }
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: setEditFields(),
    validate,
    onSubmit: async (values) => {
      console.log('submitted values values:', values)
      await addMutation({
        variables: values,
        optimisticResponse: {},
      })
    },
  })

  console.log('ERRORS:', formik.errors)

  const onchange = (name, key) => {
    const value = typeof name === 'object' ? name.target.value : name
    formik.setFieldValue(key, value)
  }

  const createPageOnClick = () => {
    setShowModal(true)
  }
  const onChecked = () => {
    setdefaultChecked(!defaultChecked)
    onchange(defaultChecked, 'vatRegistered')
  }

  const headerContent = () => {
    return (
      <div className={styles.issuesCompanyHeader}>
        <h4>Create Issuing Comapny</h4>
        <div className={styles.issueRegister}>
          <div className={styles.vatReg}>
            <small>VAT registered</small>{' '}
            <Switch checked={formik.values.vatRegistered} onClick={onChecked} />
          </div>
          <div className={styles.btnCancel}>
            <Button type="default" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </div>
          <div className={styles.btnDraft}>
            <Button type="default">Save as draft</Button>
          </div>
          <div>
            {defaultChecked || !formik.values.vatRegistered ? (
              <Button type="primary" disabled={true}>
                Create
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => formik.handleSubmit()}
              >
                Create
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }
  const handleSelectCountry = (value) => {
    const code = Object.keys(countriesName).find(
      (c) => countriesName[c] === value
    )
    setCountryCode(code)
    onchange(value, 'country')
    onchange('', 'city')
  }

  const handleFocusElement = (name, status) => {
    setFocused({ [name]: status })
  }
  console.log('initial values:', formik.values)

  const modalContents = () => {
    return (
      <div className={styles.mainWrapper}>
        <Form
          layout="vertical"
          //  onSubmitCapture={formik.handleSubmit}
        >
          <div
            className={
              focused['general']
                ? styles.focusedContentWrapper
                : styles.contentWrapper
            }
            onFocus={() => handleFocusElement('general', true)}
            onBlur={() => handleFocusElement('general', false)}
          >
            <h3>General</h3>
            <div className={styles.customForm}>
              <Form.Item label="Company name">
                <Input
                  name="companyName"
                  placeholder="Enter company name"
                  // onChange={(e) => onchange(e, 'companyName')}
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                />
                {formik.errors.companyName ? (
                  <div className={styles.error}>
                    {formik.errors.companyName}
                  </div>
                ) : null}
              </Form.Item>
              <Form.Item>
                <PhoneNumberInput
                  label="Phone"
                  onChange={(e) => {
                    onchange(e, 'phone')
                  }}
                />
              </Form.Item>
              <Form.Item label="Website">
                <Input
                  name="website"
                  placeholder="Enter webisite"
                  // onChange={(e) => {
                  //   onchange(e, 'website')
                  // }}
                  onChange={formik.handleChange}
                  value={formik.values.website}
                />
                {formik.errors.website ? (
                  <div className={styles.error}>{formik.errors.website}</div>
                ) : null}
              </Form.Item>
            </div>
          </div>
          <div
            className={
              focused['address']
                ? styles.focusedContentWrapper
                : styles.contentWrapper
            }
            onFocus={() => handleFocusElement('address', true)}
            onBlur={() => handleFocusElement('address', false)}
          >
            <h3>{'Address information'}</h3>
            <div className={styles.customForm}>
              <Form.Item label={'Country'}>
                <Select
                  showSearch
                  defaultValue={
                    formik.values.country
                      ? formik.values.country
                      : 'Select country'
                  }
                  value={formik.values.country}
                  onChange={(e) => handleSelectCountry(e)}
                >
                  {createOptions('country')}
                </Select>
                {formik.errors.website ? (
                  <div className={styles.error}>{formik.errors.country}</div>
                ) : null}
              </Form.Item>
              <Form.Item label={'City'}>
                <Select
                  showSearch
                  disabled={countryCode ? false : true}
                  defaultValue={
                    formik.values.city && countryCode
                      ? formik.values.city
                      : 'Select city'
                  }
                  value={formik.values.city}
                  onChange={(e) => onchange(e, 'city')}
                >
                  {createOptions('city')}
                </Select>
                {formik.errors.website ? (
                  <div className={styles.error}>{formik.errors.city}</div>
                ) : null}
              </Form.Item>
              <Form.Item label="Street">
                <Input
                  name="street"
                  placeholder="Enter street"
                  className="input-style"
                  // onChange={(e) => onchange(e, 'street')}
                  onChange={formik.handleChange}
                  value={formik.values.street}
                />
                {formik.errors.website ? (
                  <div className={styles.error}>{formik.errors.street}</div>
                ) : null}
              </Form.Item>
              <Form.Item label="Post code">
                <Input
                  name="postCode"
                  placeholder="Enter post code"
                  className="input-style"
                  // onChange={(e) => onchange(e, 'postCode')}
                  onChange={formik.handleChange}
                  value={formik.values.postCode}
                />
                {formik.errors.website ? (
                  <div className={styles.error}>{formik.errors.postCode}</div>
                ) : null}
              </Form.Item>
            </div>
          </div>
          <div
            className={
              focused['invoice']
                ? styles.focusedContentWrapper
                : styles.contentWrapper
            }
            onFocus={() => handleFocusElement('invoice', true)}
            onBlur={() => handleFocusElement('invoice', false)}
          >
            <h3>Finanacial Information</h3>
            <div className={styles.customForm}>
              <Form.Item label="Invoice template">
                <Select
                  defaultValue="Select invoice template"
                  onChange={(e) => onchange(e, 'invoiceTemplate')}
                  value={formik.values.invoiceTemplate}
                >
                  <Option value="">Select invoice template</Option>
                  <Option value="test">test</Option>
                </Select>
                {formik.errors.website ? (
                  <div className={styles.error}>
                    {formik.errors.invoiceTemplate}
                  </div>
                ) : null}
              </Form.Item>
              <Form.Item label="Invoice prefix">
                <Input
                  name="invoicePrefix"
                  placeholder="Enter invoice prefix"
                  // onChange={(e) => onchange(e, 'invoicePrefix')}
                  onChange={formik.handleChange}
                  value={formik.values.invoicePrefix}
                />
                {formik.errors.website ? (
                  <div className={styles.error}>
                    {formik.errors.invoicePrefix}
                  </div>
                ) : null}
              </Form.Item>
              <Form.Item label="Invoice starting number">
                <Input
                  name="invoiceStartingNumber"
                  placeholder="Enter Invoice starting number"
                  // onChange={(e) => onchange(e, 'invoiceStartingNumber')}
                  onChange={formik.handleChange}
                  value={formik.values.invoiceStartingNumber}
                />
                {formik.errors.website ? (
                  <div className={styles.error}>
                    {formik.errors.invoiceStartingNumber}
                  </div>
                ) : null}
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    )
  }
  return (
    <>
      {/* {createcountryOptions()} */}
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
        setEditPage={setEditPage}
      />
      <FullScreenReportModal
        title={headerContent}
        visible={showModal}
        header={true}
        onBackClick={() => setShowModal(false)}
        content={modalContents}
      />
    </>
  )
}

export default IssuingCompany
