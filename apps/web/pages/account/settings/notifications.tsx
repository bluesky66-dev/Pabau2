import { CheckOutlined } from '@ant-design/icons'
import { Button, Checkbox, Descriptions, Divider, Form } from 'antd'
import React, { FC } from 'react'

const Notification: FC = () => {
  const btnOptions = [
    { key: 1, label: 'iOS', icon: <CheckOutlined />, chked: 'chkActive' },
    { key: 2, label: 'Email', icon: <CheckOutlined />, chked: 'chkActive' },
    { key: 3, label: 'SMS', icon: <CheckOutlined />, chked: 'chkActive' },
    { key: 4, label: 'Pabau Web', icon: '', chked: 'chkInActive' },
  ]
  return (
    <>
      <Descriptions title="Notification">
        <Descriptions.Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <h1>GENERAL</h1>
        </Form.Item>
        <Form.Item>
          <h2>Feed Post</h2>
          <span>When someone makes a post to the buzzfeeed</span>
          <br />
          <br />
          {btnOptions.map(({ key, label, icon, chked }) => (
            <Button
              key={key}
              shape="round"
              icon={icon}
              className={chked}
              style={{ marginRight: '10px' }}
            >
              {label}
            </Button>
          ))}
        </Form.Item>
        <Divider />
        <Form.Item>
          <h2>Like a post</h2>
          <span>When someone likes their wall post</span>
          <br />
          <br />
          {btnOptions.map(({ key, label, icon, chked }) => (
            <Button
              key={key}
              shape="round"
              icon={icon}
              className={chked}
              style={{ marginRight: '10px' }}
            >
              {label}
            </Button>
          ))}
        </Form.Item>
        <Divider />
        <Form.Item>
          <h2>Scheduled report</h2>
          <span>When a scheduled report is delivered to you</span>
          <br />
          <br />
          {btnOptions.map(({ key, label, icon, chked }) => (
            <Button
              key={key}
              shape="round"
              icon={icon}
              className={chked}
              style={{ marginRight: '10px' }}
            >
              {label}
            </Button>
          ))}
        </Form.Item>
        <Divider />
        <Form.Item>
          <h2>Appointment booked</h2>
          <span>When an appointment is booked with them</span>
          <br />
          <br />
          {btnOptions.map(({ key, label, icon, chked }) => (
            <Button
              key={key}
              shape="round"
              icon={icon}
              className={chked}
              style={{ marginRight: '10px' }}
            >
              {label}
            </Button>
          ))}
        </Form.Item>
        <Divider />
        <Form.Item>
          <h2>Appointment cancelled</h2>
          <span>When an appointment is cancelled</span>
          <br />
          <br />
          {btnOptions.map(({ key, label, icon, chked }) => (
            <Button
              key={key}
              shape="round"
              icon={icon}
              className={chked}
              style={{ marginRight: '10px' }}
            >
              {label}
            </Button>
          ))}
        </Form.Item>
        <Divider />
        <Form.Item>
          <h2>Lead Enquiry</h2>
          <span>When you receive new enquiry</span>
          <br />
          <br />
          {btnOptions.map(({ key, label, icon, chked }) => (
            <Button
              key={key}
              shape="round"
              icon={icon}
              className={chked}
              style={{ marginRight: '10px' }}
            >
              {label}
            </Button>
          ))}
        </Form.Item>
        <Divider />
        <Form.Item>
          <h1 className="nofiticaionApp">APPLICATION</h1>
          <Checkbox>News and announcements</Checkbox>
          <br />
          <Checkbox>New feature release</Checkbox>
          <br />
          <Checkbox>New feature release</Checkbox>
        </Form.Item>
      </Form>
    </>
  )
}

export default Notification
