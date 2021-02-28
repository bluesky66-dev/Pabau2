import React, { FC, useState } from 'react'
import { Modal, Tabs } from 'antd'

import Layout from '../../Layout/Layout'
import {
  Breadcrumb,
  Avatar,
  Button,
  PabauPlus,
  AvatarUploader,
} from '@pabau/ui'
import styles from './UserDetail.module.less'
import { userDetail, fields, graphData } from '../../../mocks/UserDetail'
import PersonalDetail from './PersonalDetail/PersonalDetail'
import Permission from './Permissions/Permissions'
import CustomizeFields from './PersonalDetail/CustomizeFields'
import AvatarImage from '../../../assets/images/avatar.png'
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

const Index: FC = () => {
  const [tabKey, setTabKey] = useState<string>('1')
  const [userImage, setUserImage] = useState<string>(AvatarImage)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showAvatarUploader, setShowAvatarUploader] = useState(false)
  const [fieldsData, setFieldsData] = useState<customFieldsProps[]>(fields)

  const handleSaveCustomFields = (field: customFieldsProps[]) => {
    setFieldsData(field)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleShowAvatarUploader = () => {
    setShowAvatarUploader(true)
  }

  const handleChangeImage = (image: string) => {
    setUserImage(image)
  }

  const handleTabChange = (key: string) => {
    setTabKey(key)
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
                <div onClick={handleShowAvatarUploader}>
                  <Avatar src={userImage} size={'large'} />
                </div>
                <div className={styles.userHeadTitle}>
                  <h2>{userDetail.name}</h2>
                  <p>{userDetail.post}</p>
                </div>
              </div>
            </div>
            {tabKey === '1' && (
              <div className={styles.customizeBtn}>
                <Button
                  className={styles.customizeFieldsBtn}
                  type={'primary'}
                  onClick={() => setShowModal(true)}
                >
                  Customize fields
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.userDetailLeftTabs}>
          <Tabs tabPosition={'left'} onChange={handleTabChange}>
            <TabPane tab={<span>Personal Details</span>} key="1">
              <PersonalDetail field={fieldsData} graphData={graphData} />
            </TabPane>
            <TabPane tab={<span>Services</span>} key="2">
              Content of Tab
            </TabPane>
            <TabPane tab={<span>Permissions</span>} key="3">
              <Permission />
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
          </Tabs>
        </div>
        {tabKey === '1' && (
          <div className={styles.customizeBtn}>
            <Button
              className={styles.customizeFieldsBtn}
              type={'primary'}
              onClick={() => setShowModal(true)}
            >
              Customize fields
            </Button>
          </div>
        )}
      </div>
      <Modal
        title={'Customize fields for all employees'}
        visible={showModal}
        footer={false}
        width={682}
        className={styles.customModal}
        onCancel={() => handleCloseModal()}
      >
        <CustomizeFields
          field={fieldsData}
          handleSaveCustomFields={handleSaveCustomFields}
          handleCloseModal={handleCloseModal}
        />
      </Modal>
      <AvatarUploader
        visible={showAvatarUploader}
        title={'Edit Photo'}
        imageURL={AvatarImage}
        onCreate={handleChangeImage}
        onCancel={() => setShowAvatarUploader(false)}
      />
    </Layout>
  )
}

export default Index
