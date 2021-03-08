import React, { FC, useState } from 'react'
import { Typography, Input } from 'antd'
import { Button, Breadcrumb, TabMenu } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import styles from './index.module.less'
import CommonHeader from '../../setup/common-header'
import { SearchOutlined } from '@ant-design/icons'
import CodeSet from '../../../components/Diagnostic/codeset'
import Code from '../../../components/Diagnostic/codes'
import Library from '../../../components/Diagnostic/library'
import CreateCodesetModal from '../../../components/Diagnostic/createCodesetModal'
import CreateCodeModal from '../../../components/Diagnostic/createCodeModal'
const { Title } = Typography

const Index: FC = () => {
  const [openCodesetModal, setOpenCodesetModal] = useState(false)
  const [openCodeModal, setOpenCodeModal] = useState(false)
  const [activeTab, setActiveTab] = useState('0')
  const [searchTerms, setSearchTerms] = useState('')
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.diagnosticHead}>
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
            {activeTab === '0' && (
              <div className={styles.searchWithBtn}>
                <Input
                  size="large"
                  placeholder="Search by name, barcode, SKU"
                  prefix={<SearchOutlined />}
                  onChange={(e) => {
                    setSearchTerms(e.target.value.toLowerCase())
                  }}
                />
                <Button
                  className={styles.newCodeSetButton}
                  size="large"
                  type="primary"
                  onClick={() => {
                    setOpenCodesetModal(true)
                  }}
                >
                  New Codeset
                </Button>
              </div>
            )}
            {activeTab === '1' && (
              <div className={styles.searchWithBtn}>
                <Input
                  size="large"
                  placeholder="Search by name, barcode, SKU"
                  prefix={<SearchOutlined />}
                  onChange={(e) => {
                    setSearchTerms(e.target.value.toLowerCase())
                  }}
                />
                <Button
                  className={styles.newCodeSetButton}
                  style={{
                    margin: '1em 8px',
                    height: '40px',
                    fontSize: '14px',
                  }}
                  type="primary"
                  onClick={() => {
                    setOpenCodeModal(true)
                  }}
                >
                  New Code
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.diagnosticTabs}>
          <TabMenu
            tabPosition="top"
            menuItems={['Your Codesets', 'Codes', 'Library']}
            minHeight="592px"
            onTabClick={(activeKey) => setActiveTab(activeKey)}
          >
            <CodeSet searchTerms={searchTerms} />
            <Code searchTerms={searchTerms} />
            <Library />
          </TabMenu>
        </div>
        {openCodesetModal && (
          <CreateCodesetModal
            visible={openCodesetModal}
            onCancel={() => setOpenCodesetModal(false)}
          />
        )}
        {openCodeModal && (
          <CreateCodeModal
            visible={openCodeModal}
            onCancel={() => setOpenCodeModal(false)}
          />
        )}
      </Layout>
    </>
  )
}

export default Index
