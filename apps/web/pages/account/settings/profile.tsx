import { Avatar, Button, Col, Descriptions, Divider, Form, Input, Row, Select } from 'antd'
import React, { FC, useState } from 'react'

const ColorList = ['#f0f2f5']
const { TextArea } = Input

const Profile: FC = () => {
  const [color] = useState(ColorList[0])
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
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{ backgroundColor: color, verticalAlign: 'middle' }}
            size={64}
          ></Avatar>
          <Button
            size="small"
            style={{ margin: '0 16px', verticalAlign: 'middle' }}
            onClick={uploadPhoto}
          >
            Upload Photo
          </Button>
          <Button size="small" style={{ verticalAlign: 'middle' }} onClick={deletePhoto}>
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
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Biography">
              <TextArea placeholder="input placeholder" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Email signature">
              <TextArea placeholder="input placeholder" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Language">
              <Select defaultValue="english">
                <Option value="english">English</Option>
                <Option value="chinese">Chinese</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Timezone">
              <Select defaultValue="london">
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
