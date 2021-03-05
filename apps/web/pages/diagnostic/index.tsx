import React, { FC, useState } from 'react'
import { Typography, Input } from 'antd'
import { Button, Breadcrumb, Table, TabMenu } from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import styles from './index.module.less'
import CommonHeader from '../setup/common-header'
import { SearchOutlined, LockOutlined } from '@ant-design/icons'
// import { apiURL } from '../../../baseUrl'
import { codeSetsData, codeData } from './mock'
const { Title } = Typography
const CodeSetsColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Codes',
    dataIndex: 'codes',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (val: string) =>
      val ? (
        <Button type="default">Active</Button>
      ) : (
        <Button type="default">Inactive</Button>
      ),
  },
  {
    title: '',
    dataIndex: 'is_lock',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_val: string) => (_val ? <LockOutlined /> : ''),
  },
]
const CodesColumns = [
  {
    title: 'Code',
    dataIndex: 'code',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Layer 1',
    dataIndex: 'layer1',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Layer 2',
    dataIndex: 'layer2',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Layer 3',
    dataIndex: 'layer3',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    className: 'drag-visible',
    visible: true,
  },
]

const Index: FC = () => {
  const [codeSetList, setCodeSetList] = useState(codeSetsData)
  const updateDataSource = ({ newData, oldIndex, newIndex }) => {
    setCodeSetList(newData)
  }
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.diagnosticWrapper}>
          <span className={styles.hideSection}>
            <Breadcrumb
              breadcrumbItems={[
                { path: '', breadcrumbName: 'Setup' },
                {
                  path: '/diagnostic',
                  breadcrumbName: 'Diagnostics Codes',
                },
              ]}
            />
          </span>
          <Title>Diagnostics Codes</Title>
        </div>
        <div className={styles.rightSection}>
          <Input
            size="large"
            placeholder="Search by name, barcode, SKU"
            prefix={<SearchOutlined />}
          />
          <Button
            className={styles.newCodeSetButton}
            style={{ margin: '1em 8px', height: '40px', fontSize: '14px' }}
            type="primary"
          >
            New Codeset
          </Button>
        </div>
        <div className={styles.tabSection}>
          <TabMenu
            tabPosition="top"
            menuItems={['Your Codesets', 'Codes', 'Library']}
            minHeight="592px"
          >
            <Table
              dataSource={codeSetList as never[]}
              updateDataSource={updateDataSource}
              padlocked={[]}
              draggable={true}
              columns={CodeSetsColumns}
            />
            <Table
              dataSource={codeData as never[]}
              padlocked={[]}
              draggable={true}
              columns={CodesColumns}
            />
            <div></div>
          </TabMenu>
        </div>
      </Layout>
    </>
  )
}

export default Index
