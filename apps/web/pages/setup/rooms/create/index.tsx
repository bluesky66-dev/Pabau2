import React, { FC } from 'react'
import { Layout, Breadcrumb, Checkbox, Button, MobileHeader } from '@pabau/ui'
import { useFormik } from 'formik'
import { Form, Input, Typography, Tabs, Card, Switch, Radio } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { useMedia } from 'react-use'
import {
  LeftOutlined,
  CloseOutlined,
  PercentageOutlined,
  DollarOutlined,
  CheckOutlined,
} from '@ant-design/icons'

import styles from './index.module.less'
const { TabPane } = Tabs
const { Title, Paragraph } = Typography

export const Index: FC = () => {
  const isMobile = useMedia('(max-width: 768px)', false)
  const router = useRouter()

  const { handleSubmit, setFieldValue, values } = useFormik({
    initialValues: {
      roomName: '',
      allServices: false,
      isActive: false,
      services: [],
      advancedSetting: 'currency',
      roomFee: '$50',
    },
    onSubmit: async (values) => {
      router.push('/setup/rooms')
    },
  })
  const renderForm = () => {
    return (
      <div className={styles.basicInfo}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#F7F7F9',
              }}
            >
              <Card
                title="Details"
                style={{ alignSelf: 'center', width: 500, margin: 50 }}
              >
                <Form.Item label="Room Name">
                  <Input
                    value={values.roomName}
                    onChange={(e) => setFieldValue('roomName', e.target.value)}
                    placeholder="e.g. Room no 1"
                  />
                </Form.Item>
                <Form.Item>
                  <Switch
                    checked={values.allServices}
                    onChange={() =>
                      setFieldValue('allServices', !values.allServices)
                    }
                  />{' '}
                  All Services can be performed in this room
                </Form.Item>
              </Card>
              <Card
                title="Services"
                style={{ alignSelf: 'center', width: 500 }}
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Form.Item>
                  <Checkbox
                    checked={
                      values.services.length === 8 &&
                      values.services.every((item) => item)
                    }
                    onChange={() => {
                      if (
                        values.services.length === 8 &&
                        values.services.every((item) => item)
                      ) {
                        setFieldValue('services', [])
                      } else {
                        setFieldValue(
                          'services',
                          Array.from({ length: 8 }).fill(true)
                        )
                      }
                    }}
                  >
                    Select All
                  </Checkbox>
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
                      <Checkbox
                        checked={values.services[index]}
                        onChange={() => {
                          setFieldValue(
                            `services[${index}]`,
                            !values.services[index]
                          )
                        }}
                      >
                        {text}
                      </Checkbox>
                    </Form.Item>
                  )
                })}
              </Card>
              <Card
                title="Advanced Settings"
                style={{ alignSelf: 'center', width: 500, margin: 50 }}
              >
                <Form.Item>
                  <Radio.Group
                    value={values.advancedSetting}
                    onChange={(e) =>
                      setFieldValue('advancedSetting', e.target.value)
                    }
                    size="large"
                  >
                    {[
                      {
                        label: 'Percentage',
                        icon: PercentageOutlined,
                        value: 'percent',
                      },
                      {
                        label: 'Currency',
                        icon: DollarOutlined,
                        value: 'currency',
                      },
                    ].map((item, index) => {
                      const { label, icon: Icon } = item
                      return (
                        <Radio.Button
                          style={{
                            height: 100,
                            width: 200,
                            backgroundColor:
                              item.value === values.advancedSetting
                                ? '#EEF7FB'
                                : 'white',
                          }}
                          key={index}
                          value={item.value}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              textAlign: 'center',
                              marginTop: 24,
                            }}
                          >
                            {item.value === values.advancedSetting && (
                              <CheckOutlined
                                style={{
                                  position: 'absolute',
                                  right: 12,
                                  top: 12,
                                }}
                              />
                            )}
                            <Icon style={{ fontSize: 30 }} />
                            <Paragraph>{label}</Paragraph>
                          </div>
                        </Radio.Button>
                      )
                    })}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Room Fee">
                  <Input
                    placeholder="$"
                    value={values.roomFee}
                    onChange={(e) => setFieldValue('roomFee', e.target.value)}
                  />
                </Form.Item>
              </Card>
            </div>
          </TabPane>
          <TabPane tab="Location" key="2">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#F7F7F9',
              }}
            >
              <Card
                title="Location"
                style={{ alignSelf: 'center', width: 500, margin: 50 }}
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Form.Item>
                  <Checkbox>Select All</Checkbox>
                </Form.Item>
                {[
                  'The London Clinic',
                  'Sloan Medical Centre',
                  'Sheffield Late Night Pharmacy',
                  'Sloan Medical Centre',
                  'The London Clinic',
                  'Sloan Medical Centre',
                  'Sheffield Late Night Pharmacy',
                  'Sloan Medical Centre',
                ].map((text, index) => {
                  return (
                    <Form.Item key={index}>
                      <CaretDownOutlined />
                      <Checkbox>{text}</Checkbox>
                    </Form.Item>
                  )
                })}
              </Card>
            </div>
          </TabPane>
        </Tabs>
      </div>
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
              <p>Create</p>
              <Switch
                className={styles.checkActivate}
                disabled={false}
                checked={values.isActive}
                onChange={() => setFieldValue('isActive', !values.isActive)}
              />
              <Button
                className={styles.cancelBtn}
                onClick={() => router.push('/setup/rooms')}
              >
                <CloseOutlined />
              </Button>
              <Button className={styles.cancelBtn}>Delete</Button>
              <Button
                disabled
                className={styles.createBtn}
                type="primary"
                htmlType="submit"
              >
                Create
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
                <Title>Create</Title>
              </div>
              <div className={styles.creatRight}>
                <span>Active</span>
                <Switch
                  className={styles.checkActivate}
                  disabled={false}
                  checked={values.isActive}
                  onChange={() => setFieldValue('isActive', !values.isActive)}
                />
                <Button
                  className={styles.cancelBtn}
                  onClick={() => router.push('/setup/rooms')}
                >
                  Cancel
                </Button>
                <Button className={styles.cancelBtn}>Delete</Button>
                <Button
                  disabled
                  className={styles.createBtn}
                  type="primary"
                  htmlType="submit"
                >
                  Create
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
