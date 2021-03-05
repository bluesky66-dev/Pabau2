import React from 'react'
import { Layout, Button, TabMenu, MobileHeader, Breadcrumb } from '@pabau/ui'
import { Typography, Input } from 'antd'
import { FilterOutlined, LeftOutlined, SearchOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import Invoice from '../../components/Account/Invoice'
import Payments from '../../components/Account/Payments'
import Debt from '../../components/Account/Debt'
import CreditNote from '../../components/Account/CreditNote'
import styles from './accounts.module.less'
import Link from 'next/link'

/* eslint-disable-next-line */
export interface AccountProps {}

const tabMenuItems = ['Invoices', 'Payments', 'Debt', 'Credit Notes']

export function Account(props: AccountProps) {
  const { Title } = Typography
  return (
    <React.Fragment>
      <MobileHeader
        className={classNames(
          styles.desktopViewNone,
          styles.mobileHeaderContainer
        )}
      >
        <div style={{ display: 'flex' }}>
          <Link href="/">
            <LeftOutlined style={{ fontSize: 20 }} />
          </Link>
          <Title level={5} style={{ marginLeft: 16 }}>
            Accounts
          </Title>
        </div>
      </MobileHeader>
      <Layout active={'account'}>
        <div
          className={classNames(styles.desktopHeader, styles.mobileViewNone)}
        >
          <div>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Finance', path: '' },
                { breadcrumbName: 'Accounts', path: '' },
              ]}
            />
            <Title>Accounts</Title>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Input
              placeholder="Search by Invoice or clients"
              prefix={<SearchOutlined />}
              className={styles.searchInput}
            />
            <Button type="ghost">Manage Options</Button>
            <Button type="ghost">
              <FilterOutlined />
              Filter
            </Button>
          </div>
        </div>
        <TabMenu tabPosition="top" menuItems={tabMenuItems}>
          <Invoice />
          <Payments />
          <Debt />
          <CreditNote />
        </TabMenu>
      </Layout>
    </React.Fragment>
  )
}

export default Account
