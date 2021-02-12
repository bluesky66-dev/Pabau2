import React, { FC, useState, useEffect } from 'react'
import { Typography, Badge, Form, Row, Col, Radio } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import {
  TabMenu,
  Breadcrumb,
  NotificationBanner,
  SimpleDropdown,
  Slider,
  Switch,
  Stepper,
  Button,
  ColorPicker,
} from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../CommonHeader'
import reviewsConfigBanner from '../../../assets/images/reviews-config-banner.png'
import { ReactComponent as ExternalLink } from '../../../assets/images/external-link.svg'
import { ReactComponent as ExternalLinkGrey } from '../../../assets/images/external-link-grey.svg'
import { stepData } from './mock'
import styles from './index.module.less'

interface FeedbackSurveyBuilder {
  color: string
  logotypePosition: string
  logotypeSize: number
  clientName: string
  notifications: {
    email: boolean
    sms: boolean
  }
  voucherReward: string
}

export interface ReviewsConfigProps {
  currentStep: number
  builderSetting: FeedbackSurveyBuilder
}

const defaultBuilderSetting: FeedbackSurveyBuilder = {
  color: '',
  logotypePosition: 'Left',
  logotypeSize: 32,
  clientName: 'First Name',
  notifications: {
    email: true,
    sms: true,
  },
  voucherReward: '£5.00 Review Voucher Scheme',
}

export const Index: FC<ReviewsConfigProps> = ({
  currentStep = 0,
  builderSetting = defaultBuilderSetting,
}) => {
  const [form] = Form.useForm()
  const [showBanner, setShowBanner] = useState(false)
  const [setting, setSetting] = useState<FeedbackSurveyBuilder>(
    defaultBuilderSetting
  )
  const [step, setStep] = useState(0)
  const handleChangeSetting = (key, val) => {
    const builder = { ...setting }
    builder[key] = val
    setSetting({ ...builder })
  }

  const BuilderPanel = () => (
    <>
      <div className={styles.section}>
        <h3>Apperance</h3>
        <h4>
          Customize the look and feel of your survey page, as well as
          customizing features such as displaying the clients full name or
          aninymously
        </h4>
        <ColorPicker
          heading="Colour sheme"
          onSelected={(val) => handleChangeSetting('color', val)}
        />
        <div className={styles.sectionItem}>
          <SimpleDropdown
            label="Logo Position"
            value={setting.logotypePosition}
            dropdownItems={['Left', 'Middle', 'Right']}
            onSelected={(val) => handleChangeSetting('logotypePosition', val)}
          />
        </div>
        <div className={styles.sectionItem}>
          <Slider
            title="Logo size"
            value={setting.logotypeSize}
            onChange={(val) => handleChangeSetting('logotypeSize', val)}
            calculatedValue={`${setting.logotypeSize}px`}
          />
        </div>
        <div className={styles.sectionItem}>
          <SimpleDropdown
            label="Display client name"
            value={setting.clientName}
            dropdownItems={['Full Name', 'First Name', 'Initials']}
            onSelected={(val) => handleChangeSetting('clientName', val)}
          />
        </div>
      </div>
      <div className={styles.section}>
        <h3>Notifications</h3>
        <h4>
          The way in which you request feedback from clients who visit you.
          Changes in client notifications.
        </h4>
        <div className={styles.sectionItem}>
          <Row>
            <Col span={12}>
              <Form form={form} layout="vertical">
                <Form.Item label="Email">
                  <Badge
                    status={setting.notifications.email ? 'success' : 'default'}
                    text={setting.notifications.email ? 'Enabled' : 'Disabled'}
                  />
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Form form={form} layout="vertical">
                <Form.Item label="SMS">
                  <Badge
                    status={setting.notifications.sms ? 'success' : 'default'}
                    text={setting.notifications.sms ? 'Enabled' : 'Disabled'}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
        <div className={styles.sectionItem}>
          <div className={styles.changeInClientNotifications}>
            Change in client notifications{' '}
            <ExternalLinkGrey style={{ marginLeft: '0.5rem' }} />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h3>Incentive</h3>
        <h4>Reward clients for writing a review</h4>
        <div className={styles.sectionItem}>
          <SimpleDropdown
            label="Voucher reward"
            value={setting.voucherReward}
            dropdownItems={['£5.00 Review Voucher Scheme']}
            onSelected={(val) => handleChangeSetting('voucherReward', val)}
          />
        </div>
      </div>
    </>
  )

  const PreviewPanel = () => (
    <div className={styles.previewPanel}>
      <Radio.Group buttonStyle="solid" defaultValue="a">
        <Radio.Button value="a">Listing</Radio.Button>
        <Radio.Button value="b">Read</Radio.Button>
      </Radio.Group>
      <div className={styles.templatePanel} />
      <Radio.Group buttonStyle="solid" defaultValue="a">
        <Radio.Button value="a">Email</Radio.Button>
        <Radio.Button value="b">SMS Text</Radio.Button>
      </Radio.Group>
      <div className={styles.templatePanel} />
    </div>
  )

  useEffect(() => {
    setSetting(builderSetting)
    setStep(currentStep)
  }, [currentStep, builderSetting])

  return (
    <>
      <CommonHeader />
      <Layout>
        <NotificationBanner
          title="Reviews"
          desc="Increase the number of reviews your clients complete by by 72% by enabling feedback requests via SMS"
          imgPath={reviewsConfigBanner}
          allowClose={true}
          setHide={[showBanner, setShowBanner]}
        />
        <div className={styles.reviewsConfigContainer}>
          <div className={styles.reviewsConfigHeader}>
            <div className={styles.reviewsConfigBreadcrumb}>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: '/setup' },
                  {
                    breadcrumbName: 'Feedback Survey',
                    path: '/setup/reviews-config',
                  },
                ]}
              />
              <Typography.Title>Feedback Survey</Typography.Title>
            </div>
            <div className={styles.reviewsConfigBreadcrumbMobile}>
              <Typography.Title>
                <LeftOutlined /> Feedback Survey
              </Typography.Title>
            </div>
            <div className={styles.reviewsConfigOps}>
              <div className={styles.reviewLink}>
                Review Link <Switch size="small" />
              </div>
              <a href="https://www.pabau.com/reviews/cadogan-clinic">
                www.pabau.com/reviews/cadogan-clinic <ExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.reviewsConfigStep}>
            <div>
              <Stepper datasource={stepData} step={step} />
            </div>
          </div>
          <div className={styles.reviewsConfigBody}>
            <div className={styles.reviewsConfigBodyDesktop}>
              <div>
                <h2>Builder</h2>
                <BuilderPanel />
              </div>
              <div>
                <PreviewPanel />
              </div>
            </div>
            <div className={styles.reviewsConfigBodyMobile}>
              <TabMenu
                menuItems={['BUILDER', 'PREVIEW']}
                tabPosition="top"
                minHeight="1px"
              >
                <div className={styles.tabContainer}>
                  <BuilderPanel />
                </div>
                <PreviewPanel />
              </TabMenu>
            </div>
          </div>
          <div className={styles.reviewsConfigFooter}>
            <Button
              type="primary"
              disabled={step <= 0}
              onClick={() => setStep(step - 1)}
            >
              <LeftOutlined /> Previous Step
            </Button>
            <p>{`Step ${step + 1}/4`}</p>
            <Button
              type="primary"
              disabled={step >= 3}
              onClick={() => setStep(step + 1)}
            >
              Next Step <RightOutlined />
            </Button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
