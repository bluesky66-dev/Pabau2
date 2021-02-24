import React, { FC, useState } from 'react'
import { Tabs } from 'antd'

import Layout from '../../Layout/Layout'
import { Breadcrumb, Avatar, Button, BasicModal, PabauPlus } from '@pabau/ui'
import styles from './UserDetail.module.less'
import { userDetail, fields } from '../../../mocks/UserDetail'
import AvatarImage from '../../../assets/images/avatar.png'
import PersonalDetail from './PersonalDetail'
import CustomizeFields from './CustomizeFields'

const { TabPane } = Tabs

export interface customFieldsProps {
  id: string
  label: string
  name?: string
  value?: string
  control?: string
  type?: string
  options?: string[]
  placeholder?: string
}

const UserDetailMain: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [fieldsData, setFieldsData] = useState<customFieldsProps[]>(fields)

  const handleSaveCustomFields = (field: customFieldsProps[]) => {
    setFieldsData(field)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <Layout>
      <div className={styles.userDetailMainWrapper}>
        <div className={styles.userDetailWrapper}>
          <div className={styles.userDetailHeader}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: 'setup' },
                  { breadcrumbName: 'User Detail', path: '' },
                  { breadcrumbName: userDetail.name, path: '' },
                ]}
              />
              <div className={styles.userHead}>
                <Avatar src={AvatarImage} size={'large'} />
                <div className={styles.userHeadTitle}>
                  <h2>{userDetail.name}</h2>
                  <p>{userDetail.post}</p>
                </div>
              </div>
            </div>
            <div className={styles.customizeBtn}>
              <Button
                className={styles.customizeFieldsBtn}
                type={'primary'}
                onClick={() => setShowModal(true)}
              >
                Customize fields
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.userDetailLeftTabs}>
          <Tabs tabPosition={'left'}>
            <TabPane tab={<span>Personal Details</span>} key="1">
              <PersonalDetail field={fieldsData} />
            </TabPane>
            <TabPane tab={<span>Services</span>} key="2">
              Content of Tab
            </TabPane>
            <TabPane tab={<span>Permissions</span>} key="3">
              Content of Tab
            </TabPane>
            <TabPane tab={<span>Documents</span>} key="4">
              Content of Tab
            </TabPane>
            <TabPane tab={<span>Emergency</span>} key="5">
              Content of Tab
            </TabPane>
            <TabPane tab={<span>Training</span>} key="6">
              Content of Tab
            </TabPane>
            <TabPane
              tab={
                <span>
                  Performance <PabauPlus label={'Plus'} />
                </span>
              }
              key="7"
            >
              Content of Tab
            </TabPane>
            <TabPane
              tab={
                <span>
                  Commission <PabauPlus label={'Plus'} />
                </span>
              }
              key="8"
            >
              Content of Tab
            </TabPane>
          </Tabs>
        </div>
      </div>
      <BasicModal
        visible={showModal}
        onCancel={() => handleCloseModal()}
        title={'Customize fields for all employees'}
        footer={false}
        width={682}
      >
        <CustomizeFields
          field={fieldsData}
          handleSaveCustomFields={handleSaveCustomFields}
          handleCloseModal={handleCloseModal}
        />
      </BasicModal>
    </Layout>
  )
}

export default UserDetailMain
