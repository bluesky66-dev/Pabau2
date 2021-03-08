import React from 'react'
import {
  CalendarOutlined,
  FileDoneOutlined,
  MailOutlined,
  MessageOutlined,
  RightOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { ChooseModalItem } from '@pabau/ui'
// import notificationBannerImage from '../../../assets/images/notification-image.png'
import { ReactComponent as LetterOutlined } from '../../../assets/images/form-type/consent-selected.svg'
import { ReactComponent as MarketingOutlined } from '../../../assets/images/form-type/marketing.svg'

/*--- Choose Modal Props ---*/
const addOnStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid var(--border-color-base)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--grey-text-color)',
  fontSize: '16px',
}

export const chooseModalTypeItems: ChooseModalItem[] = [
  {
    title: 'Email',
    icon: <MailOutlined />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
  {
    title: 'SMS',
    icon: <MessageOutlined />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
  {
    title: 'Letter',
    icon: <LetterOutlined />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
]

export const chooseModalEmailItems: ChooseModalItem[] = [
  {
    title: 'General',
    description: 'Services booked by one client in a single visit',
    icon: <CalendarOutlined />,
  },
  {
    title: 'Confirmations',
    icon: <FileDoneOutlined />,
    description: 'Use Pabau’s online video conferencing',
  },
  {
    title: 'Leads',
    icon: <TeamOutlined />,
    description: 'Sell multiple services as a packaged bundle',
  },
  {
    title: 'Marketing',
    icon: <MarketingOutlined />,
    description: 'Sell multiple services as a packaged bundle',
  },
]

export const chooseModalSMSItems: ChooseModalItem[] = [
  {
    title: 'General',
    description: 'Services booked by one client in a single visit',
    icon: <CalendarOutlined />,
  },
  {
    title: 'Confirmations',
    icon: <FileDoneOutlined />,
    description: 'Use Pabau’s online video conferencing',
  },
  {
    title: 'Leads',
    icon: <TeamOutlined />,
    description: 'Sell multiple services as a packaged bundle',
  },
  {
    title: 'Marketing',
    icon: <MarketingOutlined />,
    description: 'Sell multiple services as a packaged bundle',
  },
]

export const chooseTemplateStepArgs = [
  {
    SelectType: {
      title: 'Select the type of template you wish to create',
      subTitle: 'Step 1 of 2',
      items: chooseModalTypeItems,
    },
  },
  {
    Email: {
      title: 'What type of email template are you creating',
      subTitle: 'Step 2 of 2',
      items: chooseModalEmailItems,
    },
    SMS: {
      title: 'What type of sms template are you creating',
      subTitle: 'Step 2 of 2',
      items: chooseModalSMSItems,
    },
    Letter: {
      title: 'What type of letter template are you creating',
      subTitle: 'Step 2 of 2',
      items: chooseModalTypeItems,
    },
  },
]

export interface ChooseTemplateState {
  _step: number
  _type: string
}

export const defaultChooseTemplateState: ChooseTemplateState = {
  _step: 0,
  _type: 'SelectType',
}

/*--- Choose Modal Props End ---*/
