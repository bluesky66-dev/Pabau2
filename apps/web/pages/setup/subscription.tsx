import React, { FC, useState } from 'react'
import { Card, Typography, Input, Divider } from 'antd'
import {
  EyeOutlined,
  FilterOutlined,
  FileDoneOutlined,
} from '@ant-design/icons'
import {
  Breadcrumb,
  TabMenu,
  Button,
  Table,
  Notification,
  NotificationType,
} from '@pabau/ui'

import { InvoiceData } from '../../mocks/Subscriptions'
import Layout from '../../components/Layout/Layout'
import EmailSendButton from '../../components/Setup/Subscription/EmailSendButton'
import Styles from './subscription.module.less'

const invoiceColumns = [
  {
    title: 'Invoice Date',
    dataIndex: 'date',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Invoice',
    dataIndex: 'number',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: '',
    dataIndex: 'buttonGp',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: () => (
      <div>
        <EmailSendButton
          className={Styles.emailBtn}
          onClick={() =>
            Notification(
              NotificationType.success,
              'This invoice has been sent to accounts@clinic.com'
            )
          }
        />
        <Button>
          <EyeOutlined /> Preview
        </Button>
      </div>
    ),
  },
]

const Subscription: FC = () => {
  const { Title, Text, Paragraph, Link } = Typography
  const { Search } = Input
  const [activeTab, setActiveTab] = useState('0')

  const handleSearch = (val) => {
    console.log('val', val)
  }

  const renderInvoiceActivity = () => {
    return (
      <div>
        <Table
          pagination={false}
          columns={invoiceColumns}
          dataSource={InvoiceData as never[]}
        />
        <div style={{ margin: 24 }}>
          <Paragraph type="secondary">
            SHOWING <Text>2</Text> RESULTS FROM <Text>2</Text>
          </Paragraph>
        </div>
      </div>
    )
  }

  const renderBillingInformation = () => {
    return (
      <div>
        <div style={{ paddingTop: 25, paddingRight: 24 }}>
          <Title style={{ paddingBottom: 8 }}>Billing Information</Title>
          <Paragraph className={Styles.billingTitleParagraph}>
            Manage details displayed on our invoices issued to you,
          </Paragraph>
          <Paragraph className={Styles.billingTitleParagraph}>
            see the <Link className={Styles.link}>billing activity page</Link>{' '}
            for full billing history.
          </Paragraph>
        </div>
        <Divider />
        <div style={{ padding: '0 24px', display: 'flex' }}>
          <Button
            size="large"
            type="primary"
            shape="circle"
            backgroundColor="#EEF7FB"
            className={Styles.billingBtn}
            icon={<FileDoneOutlined size={28} />}
          />
          <div style={{ marginLeft: 24 }}>
            <Paragraph style={{ marginBottom: 8 }}>Bill estimate</Paragraph>
            <Paragraph className={Styles.blackText}>
              £551.25 (tax inclusive)
            </Paragraph>
            <Paragraph type="secondary" className={Styles.font12p}>
              *Next Charge: Feb 27, 2021
            </Paragraph>
          </div>
        </div>
        <Divider />
        <div style={{ padding: '0 24px' }}>
          <Paragraph className={Styles.subTitle}>Payment Free</Paragraph>
          <Paragraph
            type="secondary"
            style={{ marginTop: 20 }}
            className={Styles.font12p}
          >
            Card Payment
          </Paragraph>
          <Paragraph className={Styles.blackText}>1,29% + 20p Per</Paragraph>
          <Paragraph
            type="secondary"
            style={{ marginTop: 8 }}
            className={Styles.font12p}
          >
            *Fully inclusive of all card processing and bank fees
          </Paragraph>
          <Paragraph className={Styles.paymentFeeParagraph}>
            Rates are exclusive of VAT,{' '}
            <Link className={Styles.link}>learn more about pricing</Link>
          </Paragraph>
        </div>
        <Divider />
        <div style={{ margin: 24 }}>
          <Paragraph className={Styles.subTitle}>Company Details</Paragraph>
          <Paragraph
            type="secondary"
            style={{ marginTop: 20 }}
            className={Styles.font12p}
          >
            Owner of company
          </Paragraph>
          <Paragraph className={Styles.blackText}>Michael Barnes</Paragraph>
          <Paragraph
            type="secondary"
            style={{ marginTop: 16 }}
            className={Styles.font12p}
          >
            Address
          </Paragraph>
          <Paragraph className={Styles.blackText}>
            5 Howardsgate, Welwyn Garden City, England, AL8 6AL
          </Paragraph>
        </div>
      </div>
    )
  }

  const renderPaymentMethod = () => {
    return (
      <div>
        <div className={Styles.paymentMethodTitle}>
          <div>
            <Title style={{ paddingBottom: 8 }}>Your Payment Method</Title>
            <Paragraph className={Styles.billingTitleParagraph}>
              Your card is only used for topping up your account,
            </Paragraph>
            <Paragraph className={Styles.billingTitleParagraph}>
              in case your balance becomes negative
            </Paragraph>
          </div>
          <Button type="primary">Edit payment method</Button>
        </div>
        <Divider />
        <div style={{ padding: '0 24px' }}>
          <Paragraph className={Styles.subTitle}>Card details</Paragraph>
          <Paragraph
            type="secondary"
            style={{ marginTop: 20 }}
            className={Styles.font12p}
          >
            Card owner
          </Paragraph>
          <Paragraph className={Styles.blackText} style={{ marginTop: 2 }}>
            William Brandham
          </Paragraph>
          <div style={{ display: 'flex' }}>
            <div>
              <Paragraph
                type="secondary"
                style={{ marginTop: 16 }}
                className={Styles.font12p}
              >
                Card number
              </Paragraph>
              <Paragraph className={Styles.blackText} style={{ marginTop: 2 }}>
                **** **** **** 2002
              </Paragraph>
            </div>
            <div style={{ marginLeft: 40 }}>
              <Paragraph
                type="secondary"
                style={{ marginTop: 16 }}
                className={Styles.font12p}
              >
                Valid thru
              </Paragraph>
              <Paragraph className={Styles.blackText} style={{ marginTop: 2 }}>
                02/25
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderBillingDetails = () => {
    return (
      <TabMenu
        tabPosition={'left'}
        menuItems={['Billing Information', 'Payment Method']}
      >
        {renderBillingInformation()}
        {renderPaymentMethod()}
      </TabMenu>
    )
  }

  return (
    <Layout>
      <Card bodyStyle={{ padding: 0 }}>
        <div className={Styles.headerContainer}>
          <div>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: '/setup' },
                { breadcrumbName: 'Subscription', path: '' },
              ]}
            />
            <Title>Pabau Subscription</Title>
          </div>
          {activeTab === '0' && (
            <div className={Styles.searchBarContainer}>
              <Search
                placeholder={'Search in Custom'}
                allowClear
                onSearch={handleSearch}
                className={Styles.searchBar}
              />
              <Button>
                <FilterOutlined />
                Filter
              </Button>
            </div>
          )}
        </div>
        <Divider style={{ margin: 0 }} />
        <TabMenu
          tabPosition={'top'}
          menuItems={[
            'Invoice Activity',
            'Billing Details',
            'Account Information',
          ]}
          onTabClick={(activeKey) => setActiveTab(activeKey)}
        >
          {renderInvoiceActivity()}
          {renderBillingDetails()}
          <div>Information</div>
        </TabMenu>
      </Card>
    </Layout>
  )
}

export default Subscription
