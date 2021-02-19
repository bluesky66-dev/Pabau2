import React, { FC } from 'react'
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
import { Typography } from 'antd'
import { useFormik } from 'formik'
import { Form, Input } from 'antd'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'
import { useMedia } from 'react-use'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'

import styles from './index.module.less'

const { Title } = Typography

const ADD_MUTATION = gql`
  mutation MyMutation {
    insert_leads_one(
      object: {
        email: "nido_i@hotmail.com"
        interest: "xyz"
        is_active: true
        lead_age: 30
        lead_name: "aysha"
        lead_owner: "rulaa"
        lead_source: "xyz"
        lead_status: "married"
        location: "gilgit"
        order: 2
        phone: "45455545454"
        status: true
        id: "123e4567-e89b-12d3-a456-426614174011"
      }
    ) {
      email
      id
      is_active
      order
      lead_age
      interest
      lead_name
      lead_owner
      lead_source
      lead_status
      location
      phone
      status
    }
  }
`

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
              <LeftOutlined onClick={() => router.push('/setup/labs')} />
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
                    { breadcrumbName: 'Labs', path: 'setup/labs' },
                    { breadcrumbName: 'Create Lab', path: '' },
                  ]}
                />
                <Title>Create Lab</Title>
              </div>
              <div className={styles.creatRight}>
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
                  Cancel
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
          </div>
          {renderForm()}
        </Form>
      </div>
    </Layout>
  )
}

export default Index
