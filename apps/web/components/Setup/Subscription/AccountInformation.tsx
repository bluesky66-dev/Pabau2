import React, { FC } from 'react'
import { Card, Row, Col, Typography } from 'antd'
import {
  LinkOutlined,
  UserOutlined,
  FileTextOutlined,
  CheckOutlined,
} from '@ant-design/icons'
import { SubscriptionInfo, Avatar } from '@pabau/ui'
import location from '../../../assets/images/icons/location.png'
import profileImg from '../../../assets/images/icons/img.png'
import paymentTerminal from '../../../assets/images/icons/payment_terminal.png'
import styles from './subscriptionComponents.module.less'

const AccountInformation: FC = () => {
  const { Text, Paragraph, Link } = Typography

  const CheckedItem = (text: string) => {
    return (
      <Col span={24}>
        <Row gutter={18}>
          <Col>
            <CheckOutlined className={styles.link} />
          </Col>
          <Paragraph className={styles.blackText}>{text}</Paragraph>
        </Row>
      </Col>
    )
  }

  const AccountSummery = () => {
    return (
      <Card bodyStyle={{ padding: 20 }}>
        <div className={styles.subTitle}>Account Summary</div>
        <Row style={{ marginTop: 16 }}>
          <Avatar src={profileImg} size="large" />
          <Col style={{ marginLeft: 12 }}>
            <Text className={styles.blackText}>Mick Gibbons</Text>
            <Paragraph type="secondary">Account Owner</Paragraph>
          </Col>
        </Row>
        <Paragraph className={styles.font12p} style={{ marginTop: 10 }}>
          Your Pabau URL:
        </Paragraph>
        <Row>
          <LinkOutlined
            className={styles.link}
            style={{ fontSize: 13, marginTop: 4 }}
          />
          <Link className={styles.link} style={{ marginLeft: 8 }}>
            perfectskin.pabau.me
          </Link>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Col span={12}>
            <Paragraph className={styles.font12p}>Active Employees:</Paragraph>
            <UserOutlined className={styles.link} style={{ fontSize: 13 }} />
            <Text className={styles.link} style={{ marginLeft: 8 }}>
              86
            </Text>
          </Col>
          <Col span={12}>
            <Paragraph className={styles.font12p}>Server name:</Paragraph>
            <img src={location} height={13} alt="logo" />
            <Text className={styles.link} style={{ marginLeft: 8 }}>
              UK 1
            </Text>
          </Col>
        </Row>
        <div style={{ marginTop: 16 }}>
          <Paragraph className={styles.font12p}>File Storage:</Paragraph>
          <FileTextOutlined className={styles.link} style={{ fontSize: 13 }} />
          <Text className={styles.link} style={{ marginLeft: 8 }}>
            33.0MB of 12.4GB
          </Text>
        </div>
      </Card>
    )
  }

  const PaymentHistory = () => {
    return (
      <Card bodyStyle={{ padding: 20 }}>
        <Text className={styles.subTitle}>Pabau Payments</Text>
        <Row gutter={24} style={{ marginTop: 16 }}>
          <Col>
            <div className={styles.iconBtn}>
              <img src={paymentTerminal} height={18} alt="logo" />
            </div>
          </Col>
          <Col span={20}>
            <Paragraph className={styles.subTitle} style={{ marginBottom: 4 }}>
              Lorem ipsum dolor sit amet
            </Paragraph>
            <Paragraph type="secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </Col>
        </Row>
        <Row gutter={[0, 12]}>
          {CheckedItem('Lorem ipsum dolor sit amet.')}
          {CheckedItem('Lorem ipsum dolor sit amet.')}
          {CheckedItem('Lorem ipsum dolor sit amet.')}
          {CheckedItem('Lorem ipsum dolor sit amet.')}
          {CheckedItem('Lorem ipsum dolor sit amet.')}
        </Row>
      </Card>
    )
  }

  return (
    <Row gutter={24} style={{ padding: 20 }}>
      <Col span={9}>
        <SubscriptionInfo
          subscriptionName="Solo"
          inTrial
          trialDaysRemaining={7}
          goPlusActive
          goPlusStartDate={new Date('03-02-2020')}
          teamPlusActive
          teamPlusStartDate={new Date('03-02-2020')}
        />
      </Col>
      <Col span={15}>
        <Row gutter={24} style={{ display: 'flex' }}>
          <Col span={12}>
            <AccountSummery />
          </Col>
          <Col span={12}>
            <Card bodyStyle={{ padding: 20 }}>
              <Paragraph
                className={styles.subTitle}
                style={{ marginBottom: 2 }}
              >
                Account Manager
              </Paragraph>
              <Paragraph type="secondary" style={{ maxWidth: '90%' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </Paragraph>
              <Link className={styles.learnMoreLink}>Learn more</Link>
            </Card>
          </Col>
        </Row>
        <div style={{ marginTop: 24 }}>
          <PaymentHistory />
        </div>
      </Col>
    </Row>
  )
}

export default AccountInformation
