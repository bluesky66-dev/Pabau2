import React, { FC, useEffect, useState } from 'react'
import { Typography, Input } from 'antd'
import {
  CalendarOutlined,
  FileDoneOutlined,
  MailOutlined,
  MessageOutlined,
  RightOutlined,
  SearchOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import {
  TabMenu,
  Breadcrumb,
  NotificationBanner,
  // MedicalFilter,
  Button,
  ChooseModal,
  ChooseModalItem,
  Notification,
  NotificationType,
} from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import Custom from '../../../components/Setup/Communication/Custom'
import Library from '../../../components/Setup/Communication/Library'
import CommonHeader from '../common-header'
// import notificationBannerImage from '../../../assets/images/notification-image.png'
import icon from '../../../assets/images/notification.png'
import styles from './index.module.less'

const { Title } = Typography

// interface IndexProps {}
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
    title: 'Letter',
    icon: <MessageOutlined />,
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

const createTemplateStepArgs = [
  {
    SelectType: {
      title: 'Select the type of template you wish to create',
      subTitle: 'Step 1 of 2',
      items: itemsWithAddon,
    },
  },
  {
    General: {
      title: 'What type of email template are you creating',
      subTitle: 'Step 2 of 2',
      items: defaultItems,
    },
    SMS: {
      title: 'What type of sms template are you creating',
      subTitle: 'Step 2 of 2',
      items: itemsWithAddon,
    },
    Letter: {
      title: 'What type of letter template are you creating',
      subTitle: 'Step 2 of 2',
      items: itemsWithAddon,
    },
  },
]

interface CreateTemplateState {
  _step: number
  _type: string
}

const defaultCreateTemplateState: CreateTemplateState = {
  _step: 0,
  _type: 'SelectType',
}

export const Index: FC = () => {
  const [hideBanner, setHideBanner] = useState(false)
  const [currentTab, setCurrentTab] = useState('Custom')
  const [query, setQuery] = useState('')

  /*--- Create Template Modal State ---*/
  const [createTemplateVisible, setCreateTemplateVisible] = useState(false)
  const [createTemplateStep, setCreateTemplateStep] = useState(
    defaultCreateTemplateState
  )
  const [createTemplateArgs, setCreateTemplateArgs] = useState(
    createTemplateStepArgs[defaultCreateTemplateState._step][
      defaultCreateTemplateState._type
    ]
  )
  /*--- Create Template Modal State End ---*/

  /*--- Create Template Modal Action ---*/
  function createTemplateAction() {
    setCreateTemplateVisible(!createTemplateVisible)
  }

  useEffect(() => {
    setCreateTemplateArgs(
      createTemplateStepArgs[createTemplateStep._step][createTemplateStep._type]
    )
  }, [createTemplateStep])

  function nextCreateTemplate(item: ChooseModalItem) {
    let _step = createTemplateStep._step + 1
    let _type = item.title
    if (_step === 2) {
      _step = 0
      _type = 'SelectType'
    }
    const _tempStep: CreateTemplateState = {
      _step: _step,
      _type: _type,
    }
    setCreateTemplateStep(_tempStep)
  }
  /*--- Create Template Modal Action End---*/

  return (
    <>
      <CommonHeader />
      <Layout>
        <NotificationBanner
          title="Enable client notifications"
          desc="We recomment enabling enabling your confirmation email so that Pabau will automatically send out your questionnaire to a client at the point of booking an appointment."
          imgPath={icon}
          allowClose={true}
          setHide={[hideBanner, setHideBanner]}
          // hrefPath="/setup/blank"
          // hrefTitle="Enable Now"
          // buttonText={'Enable Now'}
        />
        <div className={styles.medicalFormsContainer}>
          <div className={styles.medicalFormsHeader}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: '' },
                  { breadcrumbName: 'Communication Templates', path: '' },
                ]}
              />
              <Title>{'Communication Templates'}</Title>
            </div>
            <div className={styles.medicalFormsOps}>
              {currentTab === 'Custom' && (
                <>
                  <div>
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      addonAfter={<SearchOutlined />}
                      placeholder="Search in Custom"
                    />
                  </div>
                  <div>{/* <MedicalFilter /> */}</div>
                  <div>
                    <Button
                      type="primary"
                      onClick={() => createTemplateAction()}
                    >
                      {'Create Template'}
                    </Button>
                  </div>
                </>
              )}
              {currentTab === 'Library' && (
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  addonAfter={<SearchOutlined />}
                  placeholder="Search in Library"
                />
              )}
            </div>
          </div>
          <TabMenu
            tabPosition="top"
            minHeight="100vh"
            menuItems={['Custom', 'Library']}
            onChange={(key) => setCurrentTab(key)}
          >
            <Custom />
            <Library />
            <div>Triggers Tab</div>
          </TabMenu>
        </div>
      </Layout>
      {createTemplateArgs && (
        <ChooseModal
          {...(createTemplateStepArgs[createTemplateStep._step][
            createTemplateStep._type
          ] ||
            createTemplateStepArgs[defaultCreateTemplateState._step][
              defaultCreateTemplateState._type
            ])}
          visible={createTemplateVisible}
          onClose={() => createTemplateAction()}
          onSelected={(item: ChooseModalItem) => {
            Notification(
              NotificationType.info,
              `Seleted Service Type: ${item.title}`
            )
            nextCreateTemplate(item)
          }}
        />
      )}
    </>
  )
}

export default Index
