import React, { useState, FC } from 'react'
import {
  Breadcrumb,
  Button,
  FullScreenReportModal,
  PhoneNumberInput,
  Switch,
  TabbedTable,
} from '@pabau/ui'
import { Card, Col, Row, Typography, Divider, Input, Form, Select } from 'antd'

import { CheckCircleFilled } from '@ant-design/icons'
import ThirdPartyTable from '../../components/Setup/Table/ThirdPartyTable'
import { thirdPartySchema } from '../../components/Setup/Table/Schema'
import { LibraryTable } from '../../components/Setup/Table/LibraryTable'
import Layout from '../../components/Layout/Layout'
import AddButton from '../../components/AddButton'
import styles from './third-parties.module.less'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThirdPartiesProps {}

const ThirdParties: FC<ThirdPartiesProps> = (ThirdPartiesProps) => {
  const { Title } = Typography
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(true)
  }

  const handleBackClick = () => {
    setShowModal(false)
  }

  const headerContent = () => {
    return (
      <div className={styles.thirdPartiesHeader}>
        <h4> Create Third parties</h4>
        <div className={styles.thirdPartiesStatus}>
          <div className={styles.active}>
            <small>Activate</small>{' '}
            <Switch checked={true} onClick={() => alert('clicked')} />
          </div>

          <div className={styles.btnCancel}>
            <Button type="default" onClick={handleBackClick}>
              Cancel
            </Button>
          </div>
          <div className={styles.btnDelete}>
            <Button type="default">Save as draft</Button>
          </div>
          <div>
            <Button>Create</Button>
          </div>
        </div>
      </div>
    )
  }

  const modelContent = () => {
    return (
      <div className={styles.mainWrapper}>
        <Form layout="vertical">
          <div className={styles.contentWrapper}>
            <h3>Type</h3>
            <div className={styles.customForm}>
              <Form.Item label="Type">
                <CheckCircleFilled />
              </Form.Item>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <h3>General</h3>
            <div className={styles.customForm}>
              <Form.Item label="Name">
                <Input name="Name" placeholder="Enter Name" />
              </Form.Item>
              <Form.Item label="Provider No.">
                <Input name="providerNo." placeholder="Enter provider number" />
              </Form.Item>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <h3>Contact information</h3>
            <div className={styles.customForm}>
              <Form.Item>
                <PhoneNumberInput
                  label="Phone"
                  onChange={() => alert('hello')}
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input name="email" placeholder="company@company.com" />
              </Form.Item>
              <Form.Item label="Website">
                <Input name="website" placeholder="www.company.com" />
              </Form.Item>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <h3>Address information</h3>
            <div className={styles.customForm}>
              <Form.Item label={'Country'}>
                <Select placeholder="Select Country">
                  <option>aa</option>
                </Select>
              </Form.Item>
              <Form.Item label={'City'}>
                <Input name="city" placeholder="Enter city" />
              </Form.Item>
              <Form.Item label={'Street'}>
                <Input name="street" placeholder="Enter street" />
              </Form.Item>
              <Form.Item label={'Post code'}>
                <Input name="postCode" placeholder="Enter post code" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    )
  }
  const [activeTab, setActiveTab] = useState('0')
  const [searchTerm, setSearchTerm] = useState('')
  const [isActive, setIsActive] = useState(true)

  const onSearch = (value) => {
    if (searchTerm !== value) {
      setSearchTerm(value)
    }
  }

  const onFilterSource = () => {
    setIsActive((e) => !e)
  }

  const handleTabClick = (activeKey) => {
    setActiveTab(activeKey)
  }

  return (
    <Layout>
      {console.log(activeTab)}
      <Card bodyStyle={{ padding: 0 }}>
        <Row className={styles.headerContainer}>
          <Col>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'third-parties', path: '' },
              ]}
            />
            <Title>Third Parties</Title>
          </Col>
          <Col>
            <AddButton
              onClick={() => openModal()}
              onFilterSource={onFilterSource}
              onSearch={onSearch}
              // schema={activeTab === '0' ? thirdPartySchema : libraryTableSchema}
              schema={thirdPartySchema}
              tableSearch={true}
              needTranslation={false}
              addFilter={true}
            />
          </Col>
        </Row>
      </Card>
      <Divider style={{ margin: 0 }} />
      <div style={{ background: '#fff' }}>
        <TabbedTable
          tabItems={['Third parties', 'Library']}
          tabClick={(activeKey) => handleTabClick(activeKey)}
        >
          <ThirdPartyTable
            searchTerm={searchTerm}
            isActive={isActive}
            openModal={openModal}
          />
          <LibraryTable
            searchTerm={searchTerm}
            isActive={isActive}
            openModal={openModal}
          />
        </TabbedTable>
      </div>
      <FullScreenReportModal
        visible={showModal}
        content={modelContent}
        title={headerContent}
        header={true}
        onBackClick={handleBackClick}
      />
    </Layout>
  )
}

export default ThirdParties
