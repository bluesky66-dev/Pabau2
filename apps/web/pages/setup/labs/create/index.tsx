import React, { FC } from 'react'
import {
  Layout,
  Breadcrumb,
  Button,
  PhoneNumberInput,
  Notification,
  NotificationType,
  MobileHeader,
} from '@pabau/ui'
import { Typography } from 'antd'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, Input, SubmitButton, Checkbox } from 'formik-antd'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'
import { useMedia } from 'react-use'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'

import styles from './index.module.less'

const { Title } = Typography

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
export interface CreateLabFormProps {
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

export const Index: FC = () => {
  const isMobile = useMedia('(max-width: 768px)', false)
  const router = useRouter()
  const [addMutation] = useMutation(ADD_MUTATION, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully created a lab`
      )
    },
    onError(err) {
      Notification(NotificationType.error, `Error! While creating a lab`)
    },
  })

  const renderForm = (setFieldValue) => {
    return (
      <div>
        <div className={styles.basicInfo}>
          <h6>Basic information</h6>
          <div className={styles.infoList}>
            <Form.Item className={styles.listing} label="Name" name="name">
              <Input name="name" autoComplete="off" placeholder="eg Biolabs" />
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

  return isMobile ? (
    <div>
      <MobileHeader className={styles.createLabMobileHeader}>
        <Formik
          initialValues={{
            name: '',
            providerNumber: undefined,
            phone: '',
            email: '',
            country: undefined,
            city: undefined,
            street: undefined,
            street2: undefined,
            postalCode: undefined,
            isActive: true,
          }}
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
          onSubmit={async (values: CreateLabFormProps) => {
            console.log('asdasdasdasdas', values)
            await addMutation({
              variables: values,
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
                  <p>Create Lab</p>
                  <Checkbox className={styles.checkActivate} name="isActive">
                    Active
                  </Checkbox>
                  <Button
                    className={styles.cancelBtn}
                    onClick={() => router.push('/setup/labs')}
                  >
                    <CloseOutlined />
                  </Button>
                  <SubmitButton
                    className={styles.createBtn}
                    type="primary"
                    htmlType="submit"
                  >
                    Create Lab
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
      <div className={styles.labWrapper}>
        <Formik
          initialValues={{
            name: '',
            providerNumber: undefined,
            phone: '',
            email: '',
            country: undefined,
            city: undefined,
            street: undefined,
            street2: undefined,
            postalCode: undefined,
            isActive: true,
          }}
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
          onSubmit={async (values: CreateLabFormProps) => {
            console.log('asdasdasdasdas', values)
            await addMutation({
              variables: values,
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
              <div className={styles.createHeaderWrapper}>
                <div className={styles.creatHead}>
                  <div className={styles.headBreadTitle}>
                    <Breadcrumb
                      breadcrumbItems={[
                        { breadcrumbName: 'Setup', path: 'setup' },
                        { breadcrumbName: 'Labs', path: 'setup/labs' },
                        { breadcrumbName: 'Create Lab', path: '' },
                      ]}
                    />
                    <Title>Create Lab</Title>
                  </div>
                  <div className={styles.creatRight}>
                    <Checkbox name="isActive" className={styles.checkActivate}>
                      Active
                    </Checkbox>
                    <Button
                      className={styles.cancelBtn}
                      onClick={() => router.push('/setup/labs')}
                    >
                      Cancel
                    </Button>
                    <SubmitButton className={styles.createBtn} type="primary">
                      Create Lab
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
