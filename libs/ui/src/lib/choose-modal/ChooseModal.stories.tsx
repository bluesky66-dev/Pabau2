import React, { FC, useState } from 'react'
import { Button, Notification, NotificationType } from '@pabau/ui'
import {
  MailOutlined,
  MessageOutlined,
  RightOutlined,
  CalendarOutlined,
  TeamOutlined,
  FileDoneOutlined,
} from '@ant-design/icons'
import { ReactComponent as Consent } from '../../assets/images/form-type/consent-selected.svg'
import { ChooseModal, ChooseModalItem, ChooseModalProps } from './ChooseModal'

export default {
  title: 'Modals/ChooseModal',
  component: ChooseModal,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

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

const itemsWithAddon: ChooseModalItem[] = [
  {
    title: 'General',
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
    title: 'SMS',
    icon: <Consent />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
]

const defaultItems: ChooseModalItem[] = [
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
]

const ChooseServiceStory: FC<ChooseModalProps> = ({ ...args }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Choose Service Type
      </Button>
      <ChooseModal
        {...args}
        visible={visible}
        onClose={() => setVisible(false)}
        onSelected={(item: ChooseModalItem) => {
          Notification(
            NotificationType.info,
            `Seleted Service Type: ${item.title}`
          )
          setVisible(false)
        }}
      />
    </>
  )
}

export const Default = ChooseServiceStory.bind({})
Default.args = {
  title: 'What type of email template are you creating',
  subTitle: 'Step 2 of 2',
  items: defaultItems,
}

export const WithAddOn = ChooseServiceStory.bind({})
WithAddOn.args = {
  title: 'Select the type of template you wish to create',
  subTitle: 'Step 1 of 2',
  items: itemsWithAddon,
}
