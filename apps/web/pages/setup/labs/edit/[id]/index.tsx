import React, { FC, useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useMedia } from 'react-use'
import {
  Layout,
  Breadcrumb,
  Button,
  PhoneNumberInput,
  Notification,
  NotificationType,
  MobileHeader,
  Preloader,
  useLiveQuery,
} from '@pabau/ui'
import { Typography } from 'antd'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, Input, SubmitButton, Checkbox } from 'formik-antd'
import { LeftOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const { Title } = Typography

const GET_RECORD = gql`
  query Labs_by_pk($id: uuid!) {
    Labs_by_pk(id: $id) {
      city
      country
      email
      id
      is_active
      name
      phone
      postal_code
      provider_number
      street
      street2
    }
  }
`
const DELETE_RECORD = gql`
  mutation delete_Labs_by_pk($id: uuid!) {
    delete_Labs_by_pk(id: $id) {
      __typename
      id
    }
  }
`
const EDIT_MUTATION = gql`
  mutation update_Labs_by_pk(
    $id: uuid!
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
    update_Labs_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        is_active: $isActive
        city: $city
        country: $country
        email: $email
        phone: $phone
        postal_code: $postalCode
        provider_number: $providerNumber
        street: $street
        street2: $street2
      }
    ) {
      __typename
      id
      is_active
      order
    }
  }
`

export interface UpdateLabFormProps {
  id: string
  name: string
  providerNumber: number
  phone: string
  email: string
  country: string
  city: string
  street: string
  street2: string
  postalCode: number
  isActive: boolean
}

export interface ResponseProps {
  data: UpdateLabFormProps
  error: string
  loading: boolean
}

/* eslint-disable-next-line */
export interface IndexProps { }

export const Index: FC = () => {
  const [response, setResponse] = useState<ResponseProps>({
    data: {
      id: '',
      name: '',
      providerNumber: undefined,
      phone: '',
      email: '',
      country: '',
      city: '',
      street: '',
      street2: '',
      postalCode: undefined,
      isActive: true,
    },
    error: undefined,
    loading: true,
  })
  const isMobile = useMedia('(max-width: 768px)', false)
  const router = useRouter()
  const { id } = router.query
  const [deleteMutation] = useMutation(DELETE_RECORD, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully deleted a lab`
      )
    },
    onError(err) {
      Notification(NotificationType.error, `Error! While deleting a lab`)
    },
  })
  const [editMutation] = useMutation(EDIT_MUTATION, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully edited a lab`
      )
    },
    onError(err) {
      Notification(NotificationType.error, `Error! While editing a lab`)
    },
  })
  const { data, error, loading } = useLiveQuery(GET_RECORD, {
    skip: id === undefined,
    variables: {
      id,
    },
  })

  if (response.error) {
    Notification(NotificationType.error, `Error! While fetching a lab record`)
    router.push('/setup/labs')
  }

  useEffect(() => {
    if (!loading && data) {
      setResponse({
        data: {
          id: data.id,
          name: data.name,
          providerNumber: data.provider_number,
          phone: data.phone,
          email: data.email,
          country: data.country,
          city: data.city,
          street: data.street,
          street2: data.street2,
          postalCode: data.postal_code,
          isActive: data.is_active,
        },
        loading: loading,
        error: error?.toString(),
      })
    }
  }, [loading, data, error])

  const onDelete = async () => {
    await deleteMutation({
      variables: { id: response.data.id },
      optimisticResponse: {},
    })
    router.push('/setup/labs')
  }

  const renderForm = (setFieldValue) => {
    return (
      <div>
        <div className={styles.basicInfo}>
          <h6>Basic information</h6>
          <div className={styles.infoList}>
            <Form.Item className={styles.listing} label="Name" name="name">
              <Input name="name" placeholder="eg Biolabs" autoComplete="off" />
            </Form.Item>
            <Form.Item
              className={styles.listing}
              label="Provider No"
              name="providerNumber"
            >
              <Input
                name="providerNumber"
                type="number"
                placeholder="eg 1234"
              />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item className={styles.listing} name={'phone'}>
              <PhoneNumberInput
                label="Phone"
                value={response.data.phone}
                onChange={(value) => setFieldValue('phone', value)}
              />
            </Form.Item>
            <Form.Item className={styles.listing} label="Email" name="email">
              <Input
                name="email"
                autoComplete="off"
                placeholder="email@company.com"
              />
            </Form.Item>
          </div>
        </div>
        <div className={styles.basicInfo}>
          <h6>Address information</h6>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="Country"
              name="country"
            >
              <Input name="country" autoComplete="off" />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item className={styles.listing} label="City" name="city">
              <Input name="city" autoComplete="off" />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item className={styles.listing} label="Street" name="street">
              <Input name="street" autoComplete="off" />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="Street2"
              name="street2"
            >
              <Input name="street2" autoComplete="off" />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="Postal Code"
              name="postalCode"
            >
              <Input type="number" name="postalCode" autoComplete="off" />
            </Form.Item>
          </div>
        </div>
      </div>
    )
  }

  return response.loading ? (
    <div>
      <Preloader isLoaderVisible={response.loading} />
    </div>
  ) : isMobile ? (
    <div>
      <MobileHeader className={styles.editLabMobileHeader}>
        <Formik
          enableReinitialize={true}
          initialValues={response.data}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string()
              .email('Please enter valid email id')
              .required('Email is required'),
            providerNumber: Yup.number()
              .required('Provider No is required')
              .positive()
              .integer(),
            phone: Yup.string().required('phone is required'),
          })}
          onSubmit={async (values: UpdateLabFormProps) => {
            await editMutation({
              variables: { id, ...values },
              optimisticResponse: {},
            })
            router.push('/setup/labs')
          }}
        >
          {({ setFieldValue }) => (
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
            >
              <div className={styles.allContentAlignMobile}>
                <div className={styles.labTextStyle}>
                  <LeftOutlined onClick={() => router.push('/setup/labs')} />
                  <p>Edit Lab</p>
                  <Checkbox className={styles.checkActivate} name="isActive">
                    Active
                  </Checkbox>
                  <Button
                    className={styles.cancelBtn}
                    onClick={() => router.push('/setup/labs')}
                  >
                    <CloseOutlined />
                  </Button>
                  <Button className={styles.cancelBtn} onClick={onDelete}>
                    <DeleteOutlined />
                  </Button>
                  <SubmitButton
                    className={styles.editBtn}
                    type="primary"
                    htmlType="submit"
                  >
                    Edit Lab
                  </SubmitButton>
                </div>
              </div>
              {renderForm(setFieldValue)}
            </Form>
          )}
        </Formik>
      </MobileHeader>
    </div>
  ) : (
    <Layout active={'Lab'}>
      <div className={styles.createLabWrapper}>
        <Formik
          enableReinitialize={true}
          initialValues={response.data}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string()
              .email('Please enter valid email id')
              .required('Email is required'),
            providerNumber: Yup.number()
              .required('Provider No is required')
              .positive()
              .integer(),
            phone: Yup.string().required('phone is required'),
          })}
          onSubmit={async (values: UpdateLabFormProps) => {
            await editMutation({
              variables: { id, ...values },
              optimisticResponse: {},
            })
            router.push('/setup/labs')
          }}
        >
          {({ setFieldValue }) => (
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
            >
              <div className={styles.editHeaderWrapper}>
                <div className={styles.editHead}>
                  <div className={styles.headBreadTitle}>
                    <Breadcrumb
                      breadcrumbItems={[
                        { breadcrumbName: 'Setup', path: 'setup' },
                        { breadcrumbName: 'Labs', path: 'setup/labs' },
                        { breadcrumbName: 'Edit Lab', path: '' },
                      ]}
                    />
                    <Title>Edit Lab</Title>
                  </div>
                  <div className={styles.editRight}>
                    <Checkbox name="isActive" className={styles.checkActivate}>
                      Active
                    </Checkbox>
                    <Button
                      className={styles.cancelBtn}
                      onClick={() => router.push('/setup/labs')}
                    >
                      Cancel
                    </Button>
                    <Button className={styles.cancelBtn} onClick={onDelete}>
                      Delete
                    </Button>
                    <SubmitButton className={styles.editBtn} type="primary">
                      Edit Lab
                    </SubmitButton>
                  </div>
                </div>
              </div>
              {renderForm(setFieldValue)}
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Index
