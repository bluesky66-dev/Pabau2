import React, { useState, FC } from 'react'
import {
  Breadcrumb,
  OperationType,
  FullScreenReportModal,
  PhoneNumberInput,
  TabbedTable,
  Notification,
  NotificationType,
  BasicModal as Modal,
  MobileHeader,
} from '@pabau/ui'
import countries from 'i18n-iso-countries'
import * as Yup from 'yup'
import english from 'i18n-iso-countries/langs/en.json'
import { Card, Col, Row, Typography, Divider } from 'antd'
import { Form, Input, Select } from 'formik-antd'
import classNames from 'classnames'
import { LeftOutlined } from '@ant-design/icons'
import Layout from '../../components/Layout/Layout'
import AddButton from '../../components/AddButton'
import styles from './third-parties.module.less'
import active from '../../assets/images/active.svg'
import company from '../../assets/images/company.svg'
import activeCompany from '../../assets/images/active-company.svg'
import insurance from '../../assets/images/insurance.svg'
import activeInsurance from '../../assets/images/active-insurance.svg'

import ThirdPartyTable from '../../components/Setup/Table/ThirdPartyTable'
import {
  thirdPartySchema,
  Mutations,
} from '../../components/Setup/Table/Schema'
import LibraryTable from '../../components/Setup/Table/LibraryTable'
import { useMutation } from '@apollo/client'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import { Formik } from 'formik'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThirdPartiesProps {}

interface EditFieldsType {
  id: string
  type: string
  name: string
  provider_no: string
  phone: string
  email: string
  website: string
  country: string
  city: string
  street: string
  post_code: string
  healthCodeIdentifier: string
  is_active: boolean
  company: string
}

const ThirdParties: FC<ThirdPartiesProps> = (ThirdPartiesProps) => {
  const isMobile = useMedia('(max-width: 768px)', false)
  const { Title } = Typography
  const { Option } = Select
  // const [activeTab, setActiveTab] = useState('0')
  const [searchTerm, setSearchTerm] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const router = useRouter()

  const formikEditFields = () => {
    const fields: EditFieldsType = {
      id: '',
      type: '',
      name: '',
      provider_no: '',
      phone: '',
      email: '',
      website: '',
      country: '',
      city: '',
      street: '',
      post_code: '',
      healthCodeIdentifier: '',
      is_active: true,
      company: 'ID goes here',
    }
    return fields
  }
  const [editPage, setEditPage] = useState<EditFieldsType>(formikEditFields())

  countries.registerLocale(english)
  const countriesName = countries.getNames('en')

  const [addMutation] = useMutation(Mutations.ADD_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully created a third parties`
      )
    },
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! While creating a third parties`
      )
    },
  })

  const [editMutation] = useMutation(Mutations.EDIT_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully edited a third parties`
      )
    },
    onError() {
      Notification(
        NotificationType.error,
        `Error! While editing a third parties`
      )
    },
  })

  const [deleteMutation] = useMutation(Mutations.DELETE_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully deleted a third parties`
      )
    },
    onError() {
      Notification(
        NotificationType.error,
        `Error! While deleting a third parties`
      )
    },
  })

  const initialValues = {
    type: '',
    name: '',
    providerNo: '',
    phone: '',
    email: '',
    website: '',
    country: '',
    city: '',
    street: '',
    postCode: '',
    healthCodeIdentifier: '',
    isActive: true,
    company: 'ID goes here',
  }

  const setEditFields = () => {
    const editObj = {
      id: editPage.id,
      type: editPage.type,
      name: editPage.name,
      providerNo: editPage.provider_no,
      phone: editPage.phone,
      email: editPage.email,
      website: editPage.website,
      country: editPage.country,
      city: editPage.city,
      street: editPage.street,
      postCode: editPage.post_code,
      healthCodeIdentifier: editPage.healthCodeIdentifier,
      isActive: editPage.is_active,
      company: editPage.company,
    }
    return editObj
  }

  const handleBack = () => {
    router.back()
  }

  const openModal = (setFieldValue) => {
    setFieldValue('type', 'Company')
    setShowModal(true)
  }

  const handleBackClick = (e, handleReset) => {
    handleReset(e)
    setEditPage(formikEditFields())
    setShowModal(false)
  }

  const handleThirdPartyType = (type, setFieldValue) => {
    setFieldValue('type', type)
  }

  const onSearch = (value) => {
    if (searchTerm !== value) {
      setSearchTerm(value)
    }
  }

  const onFilterSource = () => {
    setIsActive((e) => !e)
  }

  const handleTabClick = (activeKey, setFieldValue) => {
    if (activeKey === '0') {
      setFieldValue('company', 'ID goes here')
    } else if (activeKey === '1') {
      setFieldValue('company', null)
    }
    // setActiveTab(activeKey)
  }

  const handleOperationsType = () => {
    return !editPage.id
      ? [OperationType.active, OperationType.cancel, OperationType.create]
      : [
          OperationType.active,
          OperationType.cancel,
          OperationType.delete,
          OperationType.save,
        ]
  }

  const handleEditPage = (data) => {
    setEditPage(data)
    setShowModal(true)
  }

  const showDelteConfirmDialog = () => {
    setShowDeleteModal(true)
  }

  const onSubmit = async (values, { resetForm }) => {
    !editPage.id
      ? await addMutation({
          variables: values,
          optimisticResponse: {},
        })
      : await editMutation({
          variables: values,
          optimisticResponse: {},
        })
    resetForm()
    setEditPage(formikEditFields())
    setShowModal(false)
  }

  const countryOptions = () => {
    const options = Object.keys(countriesName).map((c) => (
      <Option key={c} value={countriesName[c]}>
        {countriesName[c]}
      </Option>
    ))
    return options
  }

  const thirdPartiesSchema = Yup.object({
    name: Yup.string().required('Name is required'),
  })

  const modelContent = (setFieldValue, values) => {
    return (
      <div className={styles.mainWrapper}>
        <Form layout="vertical">
          <div className={styles.contentWrapper}>
            <h3>Type</h3>
            <div className={styles.thirdPartyType}>
              <div
                className={
                  values.type === 'Company'
                    ? classNames(styles.typeWrapper, styles.active)
                    : styles.typeWrapper
                }
                onClick={() => handleThirdPartyType('Company', setFieldValue)}
              >
                {values.type === 'Company' ? (
                  <img src={activeCompany} alt="companyLogo" />
                ) : (
                  <img src={company} alt="companyLogo" />
                )}
                <span>Company</span>
                <img className={styles.imgActive} src={active} alt="checked" />
              </div>
              <div
                className={
                  values.type === 'Insurance'
                    ? classNames(styles.typeWrapper, styles.active)
                    : styles.typeWrapper
                }
                onClick={() => handleThirdPartyType('Insurance', setFieldValue)}
              >
                {values.type === 'Insurance' ? (
                  <img src={activeInsurance} alt="insuranceLogo" />
                ) : (
                  <img src={insurance} alt="insuranceLogo" />
                )}
                <span>Insurance</span>
                <img className={styles.imgActive} src={active} alt="checked" />
              </div>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <h3>General</h3>
            <div className={styles.customForm}>
              <Form.Item label="Name" name="name">
                <Input name="name" placeholder="Enter Name" />
              </Form.Item>
              <Form.Item label="Provider No." name="providerNo">
                <Input name="providerNo" placeholder="Enter provider number" />
              </Form.Item>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <h3>Contact information</h3>
            <div className={styles.customForm}>
              <Form.Item name="phone">
                <PhoneNumberInput
                  label="Phone"
                  value={values.phone}
                  onChange={(e) => setFieldValue('phone', e)}
                />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input name="email" placeholder="company@company.com" />
              </Form.Item>
              <Form.Item label="Website" name="website">
                <Input name="website" placeholder="www.company.com" />
              </Form.Item>
              {values.type === 'Insurance' && (
                <Form.Item
                  label="Healthcode identifier"
                  name="healthCodeIdentifier"
                  tooltip="Contact your Healthcode representative to obtain this code"
                >
                  <Input
                    name="healthCodeIdentifier"
                    placeholder="www.company.com"
                  />
                </Form.Item>
              )}
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <h3>Address information</h3>
            <div className={styles.customForm}>
              <Form.Item label={'Country'} name="country">
                <Select
                  name="country"
                  showSearch
                  placeholder="Select Country"
                  value={values.country ? values.country : 'Select country'}
                >
                  {countryOptions()}
                </Select>
              </Form.Item>
              <Form.Item label={'City'} name="city">
                <Input name="city" placeholder="Enter city" />
              </Form.Item>
              <Form.Item label={'Street'} name="street">
                <Input name="street" placeholder="Enter street" />
              </Form.Item>
              <Form.Item label={'Post code'} name="postCode">
                <Input name="postCode" placeholder="Enter post code" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    )
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={editPage.id ? setEditFields() : initialValues}
      validationSchema={thirdPartiesSchema}
      onSubmit={(values, { resetForm }) => {
        const newValues = { ...values }
        if (values.type === 'company') {
          delete newValues.healthCodeIdentifier
        }
        onSubmit(newValues, { resetForm })
      }}
    >
      {({ setFieldValue, handleSubmit, handleReset, values }) => (
        <>
          {isMobile && (
            <MobileHeader className={styles.createThirdParties}>
              <div className={styles.allContentMobile}>
                <div className={styles.textStyle}>
                  <LeftOutlined onClick={handleBack} />
                  <p>{thirdPartySchema.full || thirdPartySchema.short}</p>
                </div>
                <AddButton
                  onClick={() => openModal(setFieldValue)}
                  onFilterSource={onFilterSource}
                  onSearch={onSearch}
                  schema={thirdPartySchema}
                  tableSearch={true}
                  needTranslation={false}
                  addFilter={true}
                />
              </div>
            </MobileHeader>
          )}
          <Layout>
            <Card bodyStyle={{ padding: 0 }}>
              {!isMobile && (
                <Row className={styles.headerContainer}>
                  <Col>
                    <Breadcrumb
                      breadcrumbItems={[
                        { breadcrumbName: 'Setup', path: 'setup' },
                        { breadcrumbName: 'third-parties', path: '' },
                      ]}
                    />
                    <Title>Third Parties</Title>
                  </Col>
                  <Col>
                    <AddButton
                      onClick={() => openModal(setFieldValue)}
                      onFilterSource={onFilterSource}
                      onSearch={onSearch}
                      schema={thirdPartySchema}
                      tableSearch={true}
                      needTranslation={false}
                      addFilter={true}
                    />
                  </Col>
                </Row>
              )}
            </Card>
            <Divider style={{ margin: 0 }} />
            <div className={styles.thirdPartiesTabs}>
              <TabbedTable
                tabItems={['Third parties', 'Library']}
                tabClick={(activeKey) =>
                  handleTabClick(activeKey, setFieldValue)
                }
              >
                <ThirdPartyTable
                  searchTerm={searchTerm}
                  isActive={isActive}
                  openModal={() => openModal(setFieldValue)}
                  setEditPage={handleEditPage}
                />
                <LibraryTable
                  searchTerm={searchTerm}
                  isActive={isActive}
                  openModal={() => openModal(setFieldValue)}
                  setEditPage={handleEditPage}
                />
              </TabbedTable>
            </div>
            <FullScreenReportModal
              title={`${!editPage.id ? 'Create' : 'Edit'} Third Parties`}
              visible={showModal}
              operations={handleOperationsType()}
              enableCreateBtn={true}
              onCancel={(e) => handleBackClick(e, handleReset)}
              onBackClick={(e) => handleBackClick(e, handleReset)}
              activated={values.isActive}
              onActivated={(value) => setFieldValue('isActive', value)}
              onDelete={showDelteConfirmDialog}
              onCreate={handleSubmit}
              onSave={handleSubmit}
            >
              {modelContent(setFieldValue, values)}
            </FullScreenReportModal>
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
                setEditPage(formikEditFields())
                setShowDeleteModal(false)
                setShowModal(false)
              }}
              visible={showDeleteModal}
              title={`Delete ${thirdPartySchema.short}?`}
              newButtonText={thirdPartySchema.deleteBtnLabel || 'Yes, Delete'}
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
          </Layout>
        </>
      )}
    </Formik>
  )
}

export default ThirdParties
