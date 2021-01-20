import { Button, Col, Descriptions, Divider, Form, Input, Row, Select } from 'antd'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const { TextArea } = Input

const ReactQuill = dynamic(() => import('../../../components/MyReactQuill'), {
  ssr: false,
})
const LanguageList = dynamic(() => import('../../../components/LanguageList'), {
  ssr: false,
})
const MyAvatar = dynamic(() => import('../../../components/MyAvatar'), {
  ssr: false,
})

const Profile: FC = () => {
  const { Option } = Select

  const uploadPhoto = () => {
    return
  }
  const deletePhoto = () => {
    return
  }
  return (
    <>
      <Descriptions title="Profile">
        <Descriptions.Item>
          Choose how you want to be notified with certain interactions occur on Pabau
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <MyAvatar />
          <Button style={{ margin: '0 16px', verticalAlign: 'middle' }} onClick={uploadPhoto}>
            Upload Photo
          </Button>
          <Button style={{ verticalAlign: 'middle' }} onClick={deletePhoto}>
            Delete
          </Button>
        </Form.Item>
        <Row>
          <Col span={11}>
            <Form.Item label="First name">
              <Input placeholder="First name" />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <Form.Item label="Last name">
              <Input placeholder="Last name" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Mobile phone">
              <Input placeholder="Mobile phone" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Biography">
              <TextArea placeholder="Biography" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Email signature">
              <ReactQuill />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Language">
              <LanguageList />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Timezone">
              <Select defaultValue="london" placeholder="Language">
                <Option value="london">London/Europe</Option>
                <Option value="beijing">Bejing/China</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Profile
