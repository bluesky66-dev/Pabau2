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
  MedicalFilter,
  Button,
  ChooseModal,
  ChooseModalItem,
  FullScreenReportModal,
  Notification,
  NotificationType,
  OperationType,
  MedicalFilterProps,
  CreateTemplateModal,
} from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import Custom from '../../../components/Setup/Communication/Custom'
import Library from '../../../components/Setup/Communication/Library'
import CommonHeader from '../common-header'
// import notificationBannerImage from '../../../assets/images/notification-image.png'
import { ReactComponent as LetterOutlined } from '../../../assets/images/form-type/consent-selected.svg'
import { ReactComponent as MarketingOutlined } from '../../../assets/images/form-type/marketing.svg'
import icon from '../../../assets/images/notification.png'
import styles from './index.module.less'

const { Title } = Typography

/*--- Filter Props ---*/

const communicationFilterProps: MedicalFilterProps = {
  filter: {
    language: 'English (UK)',
    status: 'active',
    formtype: {
      medicalHistory: false,
      consent: false,
      treatmentForm: false,
      epaper: false,
      presciption: false,
      labForm: false,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onApply: () => {},
}

/*--- Filter Props End ---*/

/*--- TabMenu Props ---*/

const tabMenuProps: Array<string> = ['Custom', 'Library']

/*--- TabMenu Props End ---*/

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

const chooseModalTypeItems: ChooseModalItem[] = [
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
    icon: <LetterOutlined />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
]

const chooseModalEmailItems: ChooseModalItem[] = [
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

const chooseModalSMSItems: ChooseModalItem[] = [
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
    title: 'Marketing',
    icon: <MarketingOutlined />,
    description: 'Sell multiple services as a packaged bundle',
  },
]

const chooseTemplateStepArgs = [
  {
    SelectType: {
      title: 'Select the type of template you wish to create',
      subTitle: 'Step 1 of 2',
      items: chooseModalTypeItems,
    },
  },
  {
    General: {
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

interface ChooseTemplateState {
  _step: number
  _type: string
}

const defaultChooseTemplateState: ChooseTemplateState = {
  _step: 0,
  _type: 'SelectType',
}

/*--- Choose Modal Props End ---*/

/*--- Template Modal Props ---*/

const defaultCreateTemplateState = {
  title: 'Create SMS Template',
  visible: false,
  operations: [
    OperationType.active,
    OperationType.cancel,
    OperationType.create,
  ],
  cancelBtnText: 'Cancel',
  createBtnText: 'Save',
  enableCreateBtn: true,
  activated: true,
}
/*--- Template Modal Props End ---*/

// interface IndexProps {}

export const Index: FC = () => {
  const [hideBanner, setHideBanner] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [query, setQuery] = useState('')

  /*--- Choose Modal State ---*/
  const [chooseTemplateVisible, setChooseTemplateVisible] = useState(false)
  const [chooseTemplateStep, setChooseTemplateStep] = useState(
    defaultChooseTemplateState
  )
  const [chooseTemplateArgs, setChooseTemplateArgs] = useState(
    chooseTemplateStepArgs[defaultChooseTemplateState._step][
      defaultChooseTemplateState._type
    ]
  )
  /*--- Choose Modal State End ---*/

  /*--- Create Modal State ---*/

  const [createTemplateArgs, setCreateTemplateArgs] = useState(
    defaultCreateTemplateState
  )

  /*--- Create Modal State End ---*/

  /*--- Choose Modal Action ---*/
  function chooseTemplateAction() {
    setChooseTemplateVisible(!chooseTemplateVisible)
  }

  useEffect(() => {
    setChooseTemplateArgs(
      chooseTemplateStepArgs[chooseTemplateStep._step][chooseTemplateStep._type]
    )
  }, [chooseTemplateStep])

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [])

  function nextChooseTemplate(item: ChooseModalItem) {
    let _step = chooseTemplateStep._step + 1
    let _type = item.title
    if (_step === 2) {
      _step = 0
      _type = 'SelectType'
      // chooseTemplateAction()
      createTemplateAction()
    }
    const _tempStep: ChooseTemplateState = {
      _step: _step,
      _type: _type,
    }
    setChooseTemplateStep(_tempStep)
  }
  /*--- Choose Modal Action End---*/

  /*--- Choose Modal Action ---*/

  function createTemplateAction() {
    setCreateTemplateArgs({
      ...createTemplateArgs,
      visible: !createTemplateArgs.visible,
    })
  }

  /*--- Choose Modal Action End ---*/

  return (
    <>
      <CommonHeader />
      <Layout>
        {/* Need to upgrade Last NotificationBanner  */}
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
              {tabMenuProps[currentTab] === 'Custom' && (
                <>
                  <div>
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      addonAfter={<SearchOutlined />}
                      placeholder="Search in Custom"
                    />
                  </div>
                  <div>
                    <MedicalFilter {...communicationFilterProps} />
                  </div>
                  <div>
                    <Button
                      type="primary"
                      onClick={() => chooseTemplateAction()}
                    >
                      {'Create Template'}
                    </Button>
                  </div>
                </>
              )}
              {tabMenuProps[currentTab] === 'Library' && (
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
            menuItems={tabMenuProps}
            onChange={(key) => setCurrentTab(Number.parseInt(key))}
          >
            <Custom />
            <Library />
            <div>Triggers Tab</div>
          </TabMenu>
        </div>
      </Layout>
      {chooseTemplateArgs && (
        <ChooseModal
          {...(chooseTemplateStepArgs[chooseTemplateStep._step][
            chooseTemplateStep._type
          ] ||
            chooseTemplateStepArgs[defaultChooseTemplateState._step][
              defaultChooseTemplateState._type
            ])}
          visible={chooseTemplateVisible}
          onClose={() => chooseTemplateAction()}
          onSelected={(item: ChooseModalItem) => {
            Notification(
              NotificationType.info,
              `Seleted Service Type: ${item.title}`
            )
            nextChooseTemplate(item)
          }}
        />
      )}
      <FullScreenReportModal {...createTemplateArgs} />
      <CreateTemplateModal visible={false} />
    </>
  )
}

export default Index
