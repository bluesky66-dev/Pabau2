import React, { FC, useState } from 'react'
import {
  Layout,
  Breadcrumb,
  Checkbox,
  Button,
  PhoneNumberInput,
  Notification,
  NotificationType,
  MobileHeader,
} from '@pabau/ui'
import { useFormik } from 'formik'
import { Form, Input, Typography, Tabs, Card, Switch, Radio } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'
import { useMedia } from 'react-use'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'

import styles from './index.module.less'
const { TabPane } = Tabs
const { Title } = Typography

const ADD_MUTATION = gql`
  mutation insert_Labs_one(
    $city: String!
    $country: String!
    $email: String!
    $isActive: Boolean
    $name: String!
    $phone: String!
    $postalCode: numeric
    $providerNumber: numeric
    $street: String!
    $street2: String!
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

export const Index: FC = () => {
  const isMobile = useMedia('(max-width: 768px)', false)
  const [value, setValue] = useState('currency')
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

  const { handleSubmit, setFieldValue, values, handleChange } = useFormik({
    initialValues: {
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
    onSubmit: async (values) => {
      await addMutation({
        variables: values,
        optimisticResponse: {},
      })
      router.push('/setup/labs')
    },
  })

  const renderForm = () => {
    return (
      <>
        <div className={styles.basicInfo}>
          <h6>Basic information</h6>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Name Is Required',
                },
              ]}
            >
              <Input
                name="name"
                placeholder="eg London View"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className={styles.listing}
              label="Provider No"
              name="providerNo"
              rules={[
                {
                  required: true,
                  message: 'Provide No is required',
                },
              ]}
            >
              <Input
                name="providerNumber"
                type="number"
                value={values.providerNumber}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              rules={[
                {
                  required: true,
                  message: 'Phone is required',
                },
              ]}
            >
              <PhoneNumberInput
                label="Phone"
                onChange={(value) => setFieldValue('phone', value)}
              />
            </Form.Item>
            <Form.Item
              className={styles.listing}
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email is required',
                },
                {
                  type: 'email',
                  message: 'Please enter valid email!',
                },
              ]}
            >
              <Input
                name="email"
                placeholder="email@company.com"
                value={values.email}
                onChange={handleChange}
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
              rules={[
                {
                  required: true,
                  message: 'Country is required',
                },
              ]}
            >
              <Input
                name="country"
                placeholder="eg London View"
                value={values.country}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: 'City is required',
                },
              ]}
            >
              <Input name="city" value={values.city} onChange={handleChange} />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="Street"
              name="street"
              rules={[
                {
                  required: true,
                  message: 'Street is required',
                },
              ]}
            >
              <Input
                name="street"
                value={values.street}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="Street2"
              name="street2"
              rules={[
                {
                  required: true,
                  message: 'Street2 is required',
                },
              ]}
            >
              <Input
                name="street2"
                value={values.street2}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <div className={styles.infoList}>
            <Form.Item
              className={styles.listing}
              label="Postal Code"
              name="postalCode"
              rules={[
                {
                  required: true,
                  message: 'Postal Code is required',
                },
              ]}
            >
              <Input
                type="number"
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
        </div>
      </>
    )
  }

  return isMobile ? (
    <div>
      <MobileHeader className={styles.createLabMobileHeader}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <div className={styles.allContentAlignMobile}>
            <div className={styles.labTextStyle}>
              <LeftOutlined onClick={() => router.push('/setup/rooms')} />
              <p>Create Lab</p>
              <Checkbox
                className={styles.checkActivate}
                disabled={false}
                checked={values.isActive}
                onChange={(e) => setFieldValue('isActive', e.target.checked)}
              >
                Active
              </Checkbox>
              <Button
                className={styles.cancelBtn}
                onClick={() => router.push('/setup/labs')}
              >
                <CloseOutlined />
              </Button>
              <Button
                className={styles.createBtn}
                type="primary"
                htmlType="submit"
              >
                Create Lab
              </Button>
            </div>
          </div>
          {renderForm()}
        </Form>
      </MobileHeader>
    </div>
  ) : (
    <Layout active={'Lab'}>
      <div className={styles.labWrapper}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <div className={styles.createHeaderWrapper}>
            <div className={styles.creatHead}>
              <div className={styles.headBreadTitle}>
                <Breadcrumb
                  breadcrumbItems={[
                    { breadcrumbName: 'Setup', path: 'setup' },
                    { breadcrumbName: 'Rooms', path: 'setup/rooms' },
                    { breadcrumbName: 'Create Room', path: '' },
                  ]}
                />
                <Title>Create Room</Title>
              </div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Details" key="1">
                  <div
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Card
                      title="Details"
                      style={{ alignSelf: 'center', width: 300 }}
                    >
                      <Form.Item label="Room Name">
                        <Input placeholder="e.g. Room no 1" />
                      </Form.Item>
                      <Form.Item>
                        <Switch />
                        All Services can be performed in this room
                      </Form.Item>
                    </Card>
                    <Card
                      title="Services"
                      style={{ alignSelf: 'center', width: 300 }}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                      </p>
                      <Form.Item>
                        <Checkbox>Select All</Checkbox>
                      </Form.Item>
                      {[
                        'Travel Clinic',
                        'Vaccination Services',
                        'COVID-19 Antibody Testing System',
                        'Period Delay Service',
                        'Mole Screening Service',
                        'Health Checks',
                        'Aesthetic Services',
                        'Sexual Health Services',
                      ].map((text, index) => {
                        return (
                          <Form.Item key={index}>
                            <CaretDownOutlined />
                            <Checkbox>{text}</Checkbox>
                          </Form.Item>
                        )
                      })}
                    </Card>
                    <Card title="Advanced Settings">
                      <Radio.Group
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      >
                        <Radio.Button>Percentage</Radio.Button>
                        <Radio.Button>Currnecy</Radio.Button>
                      </Radio.Group>
                    </Card>
                  </div>
                </TabPane>
                <TabPane tab="Location" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </div>
          </div>
          {/* {renderForm()} */}
        </Form>
      </div>
    </Layout>
  )
}

export default Index
