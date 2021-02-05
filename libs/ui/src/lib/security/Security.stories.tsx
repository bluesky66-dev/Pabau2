import React from 'react'
import Security from './Security'
import {
  VideoCameraOutlined,
  TabletOutlined,
  UnlockOutlined,
  MailOutlined,
  KeyOutlined,
} from '@ant-design/icons'

export default {
  component: Security,
  title: 'Business Details/Security',
  args: {
    percent: 30,
    data: [],
  },
  argTypes: {
    percent: { control: { type: 'number' } },
  },
}

const SecurityStory = ({ ...args }) => {
  return <Security {...args}></Security>
}

const securityToolsData = [
  {
    id: '1',
    title: 'Force 2FA',
    name: 'Start a video call from your conversations',
    imgSrc: <VideoCameraOutlined />,
    isActive: true,
    modalType: 1,
    modalTitle: 'Force 2FA',
    modalContent:
      'Two-factor authentication adds an extra layer of security to your Pabau account. By asking you to enter a verification code after entering the correct email address and password, it will protect you from potential attackers who also might have gained access to your email address. It will ensure that the secure data you share with your clients stays secure, as they will need to enter a verification code as well. /n*SMS credits are mandatory, in order for the two-factor authentication to work.',
  },
  {
    id: '2',
    title: 'Autorized Devices',
    name: 'Create details and send conversations to Pipedrive',
    imgSrc: <TabletOutlined />,
    isActive: true,
    modalType: 2,
  },
  {
    id: '3',
    title: 'Password Expiration',
    name: 'Create details and send conversations to Pipedrive',
    imgSrc: <UnlockOutlined />,
    isActive: false,
    modalType: 2,
    modalTitle: 'Password Expiration',
    modalMenu: [
      'User password expire in',
      'Enforce password history',
      'Maximum invalid login attemts',
      'Lockout effective period',
    ],
    modalContent: [
      ['90 days', '180 days', '365 days'],
      [
        '3 passwords remembered',
        '4 passwords remembered',
        '5 passwords remembered',
      ],
      ['5 attempts', '10 attempts', '15 attempts'],
      ['5 minutes', '10 minutes', '15 minutes'],
    ],
    okbtn: 'Save',
  },
  {
    id: '4',
    title: 'Encrypted Emails',
    name: 'Create details and send conversations to Pipedrive',
    imgSrc: <MailOutlined />,
    isActive: true,
    modalType: 3,
    modalTitle: 'Encrypted Emails',
    modalContent: 'Would you like to encrypt your emails?',
    okbtn: 'Encrypt emails',
  },
  {
    id: '5',
    title: 'Encrypted Encryption',
    name: 'Create details and send conversations to Pipedrive',
    imgSrc: <KeyOutlined />,
    isActive: false,
    modalType: 4,
  },
]

export const Basic = SecurityStory.bind({})
Basic.args = {
  percent: 76,
  data: securityToolsData,
}
