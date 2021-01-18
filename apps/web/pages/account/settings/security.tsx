import { EyeInvisibleOutlined, EyeTwoTone, LaptopOutlined, MobileOutlined } from '@ant-design/icons'
import { Button, Descriptions, Divider, Form, Input } from 'antd'
import React, { FC } from 'react'
const Security: FC = () => {
  return (
    <>
      <Descriptions title="Security">
        <Descriptions.Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <h2>Change password</h2>
          <span>Changing your password will sign out of all your devices.</span>
        </Form.Item>
        <Form.Item label="Old password">
          <Input.Password placeholder="Old password" iconRender={(visible) => <EyeTwoTone />} />
        </Form.Item>
        <Form.Item label="New password">
          <Input.Password
            placeholder="New password"
            iconRender={(visible) => <EyeInvisibleOutlined />}
          />
        </Form.Item>
        <Form.Item label="Confirm password">
          <Input.Password
            placeholder="Confirm password"
            iconRender={(visible) => <EyeInvisibleOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Button>Change Password</Button>
        </Form.Item>
      </Form>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <h2>Passcode</h2>
          <span>Your 4-digit code used to access Pabau Go (for iPad/iPhone)</span>
          <br />
          <br />
          <Input.Password
            placeholder="Passcode"
            iconRender={(visible) => <EyeInvisibleOutlined />}
          />
        </Form.Item>
      </Form>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <h2>Two-factor authentication</h2>
          <span>
            Two factor authentication adds an extra layer of security to your Pabau account.
          </span>
          <br />
          <span>Details</span>
          <br />
          <br />
          <Button>Enable</Button>
        </Form.Item>
      </Form>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <h2>Security questions</h2>
          <span>Some description here.</span>
          <br />
          <br />
          <Button>Edit</Button>
        </Form.Item>
      </Form>
      <Divider />
      <Form layout="vertical">
        <Form.Item>
          <h2>Where you logged in</h2>
          <span>Some description here.</span>
          <br />
          <Divider />
          <div className="whereLoggedIn">
            <div className="iCon">
              <LaptopOutlined />
            </div>
            <div className="whereDescription">
              <div className="osInfo">Windows PC | Bicester, United Kingdom</div>
              <div className="appInfo">
                Chrome | <span className="active">Active now</span>
              </div>
            </div>
          </div>
          <Divider />
          <div className="whereLoggedIn">
            <div className="iCon">
              <MobileOutlined />
            </div>
            <div className="whereDescription">
              <div className="osInfo">iPhone | Bicester, United Kingdom</div>
              <div className="appInfo">
                iOS | <span>About an hour ago</span>
              </div>
            </div>
          </div>
          <Divider />
          <span>Show more</span>
        </Form.Item>
      </Form>
    </>
  )
}

export default Security
