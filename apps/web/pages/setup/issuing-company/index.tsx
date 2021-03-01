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
  BasicModal as Modal,
} from '@pabau/ui'
import { Form, Select, Input } from 'antd'
import { CloseOutlined, DeleteFilled } from '@ant-design/icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
import { useMedia } from 'react-use'

import styles from './issuing-company.module.less'

/* eslint-disable graphql/template-strings */
const LIST_QUERY = gql`
  query issuing_company($isActive: Boolean = true, $offset: Int, $limit: Int) {
    issuing_company(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: { is_active: { _eq: $isActive } }
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
      is_draft
      order
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query issuing_company_aggregate($isActive: Boolean = true) {
    issuing_company_aggregate(where: { is_active: { _eq: $isActive } }) {
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
    $phone: String
    $website: String
    $country: String
    $city: String
    $street: String
    $postCode: numeric
    $invoiceTemplate: String
    $invoicePrefix: String
    $invoiceStartingNumber: numeric
    $vatRegistered: Boolean
    $isDraft: Boolean
    $isActive: Boolean
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
        is_draft: $isDraft
        is_active: $isActive
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
    $companyName: String!
    $phone: String
    $website: String
    $country: String
    $city: String
    $street: String
    $postCode: numeric
    $invoiceTemplate: String
    $invoicePrefix: String
    $invoiceStartingNumber: numeric
    $vatRegistered: Boolean
    $isDraft: Boolean
    $isActive: Boolean
  ) {
    update_issuing_company_by_pk(
      pk_columns: { id: $id }
      _set: {
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
        is_draft: $isDraft
        is_active: $isActive
      }
    ) {
      __typename
      id
      is_active
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_issuing_company_order($id: uuid!, $order: Int) {
    update_issuing_company(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`

const schema: Schema = {
  full: 'Issuing Company',
  fullLower: 'issuing company',
  short: 'issuing company',
  shortLower: 'issuing company',
  createButtonLabel: 'Create Issuing Company',
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
  isDraft?: boolean
  isActive?: boolean
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
  is_active?: boolean
  is_draft?: boolean
}

interface focusedTypes {
  general?: boolean
  address?: boolean
  financial?: boolean
}

export const IssuingCompany: NextPage = () => {
  const isMobile = useMedia('(max-width: 768px)', false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { Option } = Select
  const [focused, setFocused] = useState<focusedTypes>({})
  const [addMutation] = useMutation(ADD_MUTATION, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully created an issuing company`
      )
      setShowModal(false)
    },
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! While creating an issuing company`
      )
    },
  })

  const [editMutation] = useMutation(EDIT_MUTATION, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully updated an issuing company`
      )
      setShowModal(false)
    },
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! While updating an issuing company`
      )
    },
  })

  const [deleteMutation] = useMutation(DELETE_MUTATION, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully deleted an issuing company`
      )
    },
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! While deleting an issuing company`
      )
    },
  })

  const [editPage, setEditPage] = useState<editFieldsTypes>({})
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)

  countries.registerLocale(english)
  const countriesName = countries.getNames('en')

  const createOptions = () => {
    const options = Object.keys(countriesName).map((c) => (
      <Option key={c} value={countriesName[c]}>
        {countriesName[c]}
      </Option>
    ))
    return options
  }

  const setEditFields = () => {
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
      isActive: editPage.is_active,
      isDraft: editPage.is_draft,
    }
    return editObj
  }

  const formikFields = () => {
    const initialValues: inputTypes = {
      companyName: '',
      phone: undefined,
      website: null,
      country: null,
      city: null,
      street: null,
      postCode: undefined,
      invoiceTemplate: null,
      invoicePrefix: null,
      invoiceStartingNumber: undefined,
      vatRegistered: false,
      isDraft: false,
      isActive: true,
    }
    return initialValues
  }

  const issuingCompanySchema = Yup.object({
    companyName: Yup.string().required('Company name is required'),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: editPage?.id ? setEditFields() : formikFields(),
    validationSchema: issuingCompanySchema,
    onSubmit: (values) => {
      formik.validateForm().then(async () => {
        await (!editPage.id
          ? addMutation({
              variables: values,
              optimisticResponse: {},
            })
          : editMutation({
              variables: values,
              optimisticResponse: {},
            }))
      })
    },
  })

  const showDeleteConfirmDialog = () => {
    setShowDeleteModal(true)
  }

  const onchange = (name: string | boolean | number, key: string) => {
    formik.setFieldValue(key, name)
  }

  const createPageOnClick = () => {
    setEditPage({})
    setFocused({ general: false, address: false, financial: false })
    setShowModal(true)
  }
  const onChecked = (value: boolean, key: string) => {
    formik.setFieldValue(key, value)
  }

  const handleFocusElement = (name: string, status: boolean) => {
    setFocused({ [name]: status })
  }

  const handleSetEditPage = (value: editFieldsTypes) => {
    setFocused({ general: true, address: true, financial: true })
    setEditPage(value)
    setShowModal(true)
  }

  const handlePhoneInputValue = (): string => {
    return formik.values.phone
  }

  const handleFullScreenModalBackClick = (e) => {
    setShowModal(false)
    formik.handleReset(e)
  }

  const showActionButtons = () => {
    return !isMobile ? 'Delete' : <DeleteFilled />
  }

  const headerContent = () => {
    return (
      <div className={styles.issuingCompanyHeader}>
        <h4>{!editPage.id ? 'Create' : 'Edit'} Issuing Company</h4>
        <div className={styles.issueRegister}>
          <div className={styles.vatReg}>
            <small>VAT registered</small>{' '}
            <Switch
              checked={formik.values.vatRegistered}
              onClick={() =>
                onChecked(!formik.values.vatRegistered, 'vatRegistered')
              }
            />
          </div>
          <div className={styles.active}>
            <small>Active</small>{' '}
            <Switch
              checked={formik.values.isActive}
              onClick={() => onChecked(!formik.values.isActive, 'isActive')}
            />
          </div>
          <div className={styles.btnCancel}>
            <Button
              type="default"
              onClick={(e) => handleFullScreenModalBackClick(e)}
            >
              {!isMobile ? 'Cancel' : <CloseOutlined />}
            </Button>
          </div>
          {editPage.id && (
            <div className={styles.btnDelete}>
              <Button type="default" onClick={showDeleteConfirmDialog}>
                {showActionButtons()}
              </Button>
            </div>
          )}
          <div>
            <Button type="primary" onClick={() => formik.handleSubmit()}>
              {!editPage.id ? 'Create' : 'Save'}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const modalContents = () => {
    return (
      <div className={styles.mainWrapper}>
        <Form layout="vertical">
          <div
            className={
              focused.general
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
                  value={handlePhoneInputValue()}
                  onChange={(e: string) => onchange(e, 'phone')}
                />
              </Form.Item>
              <Form.Item label="Website">
                <Input
                  name="website"
                  placeholder="https://www.company.com"
                  onChange={formik.handleChange}
                  value={formik.values.website}
                />
              </Form.Item>
            </div>
          </div>
          <div
            className={
              focused.address
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
                  value={
                    formik.values.country
                      ? formik.values.country
                      : 'Select country'
                  }
                  onChange={(e) => onchange(e, 'country')}
                >
                  {createOptions()}
                </Select>
              </Form.Item>
              <Form.Item label={'City'}>
                <Input
                  name="city"
                  placeholder="Enter city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
              </Form.Item>
              <Form.Item label="Street">
                <Input
                  name="street"
                  placeholder="Enter street"
                  className="input-style"
                  onChange={formik.handleChange}
                  value={formik.values.street}
                />
              </Form.Item>
              <Form.Item label="Post code">
                <Input
                  name="postCode"
                  placeholder="Enter post code"
                  className="input-style"
                  onChange={formik.handleChange}
                  value={formik.values.postCode}
                />
              </Form.Item>
            </div>
          </div>
          <div
            className={
              focused.financial
                ? styles.focusedContentWrapper
                : styles.contentWrapper
            }
            onFocus={() => handleFocusElement('financial', true)}
            onBlur={() => handleFocusElement('financial', false)}
          >
            <h3>Finanacial Information</h3>
            <div className={styles.customForm}>
              <Form.Item label="Invoice template">
                <Select
                  onChange={(e) => onchange(e, 'invoiceTemplate')}
                  value={
                    formik.values.invoiceTemplate
                      ? formik.values.invoiceTemplate
                      : 'Select invoice template'
                  }
                >
                  <Option value="I">I</Option>
                  <Option value="II">II</Option>
                  <Option value="III">III</Option>
                  <Option value="IV">IV</Option>
                  <Option value="V">V</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Invoice prefix">
                <Input
                  name="invoicePrefix"
                  placeholder="Enter invoice prefix"
                  onChange={formik.handleChange}
                  value={formik.values.invoicePrefix}
                />
              </Form.Item>
              <Form.Item label="Invoice starting number">
                <Input
                  name="invoiceStartingNumber"
                  placeholder="Enter Invoice starting number"
                  onChange={formik.handleChange}
                  value={formik.values.invoiceStartingNumber}
                />
              </Form.Item>
            </div>
          </div>
        </Form>
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
        addFilter={true}
        createPage={true}
        createPageOnClick={createPageOnClick}
        setEditPage={handleSetEditPage}
      />
      <FullScreenReportModal
        title={headerContent}
        visible={showModal}
        header={true}
        onBackClick={(e) => handleFullScreenModalBackClick(e)}
        content={modalContents}
      />
      <Modal
        modalWidth={682}
        centered={true}
        onCancel={() => {
          setShowDeleteModal(false)
        }}
        onOk={async () => {
          const { id } = editPage as { id: string }
          await deleteMutation({
            variables: { id },
            optimisticResponse: {},
          })
          setShowDeleteModal(false)
          setShowModal(false)
        }}
        visible={showDeleteModal}
        title={`Delete ${schema.short}?`}
        newButtonText={schema.deleteBtnLabel || 'Yes, Delete'}
        isValidate={true}
      >
        <span
          style={{
            fontFamily: 'Circular-Std-Book',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#9292A3',
          }}
        >
          {editPage?.name} will be deleted. This action is irreversable
        </span>
      </Modal>
    </>
  )
}

export default IssuingCompany
