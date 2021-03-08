import { Button, Layout, Modal } from 'antd'

import React, { FC } from 'react'

import { FileTextFilled, LeftOutlined, MoreOutlined } from '@ant-design/icons'

import CommunicationTemplatePreview from '../communication-template-preview/CommunicationTemplatePreview'
import CreateTemplateBar from '../create-template-bar/CreateTemplateBar'

import styles from './CreateTemplateModal.module.less'

// const { Header, Footer, Sider, Content } = Layout
const { Sider, Content } = Layout

export interface CreateTemplateModalProps {
  templateType?: string
  title?: string
  visible?: boolean
  icon?: React.Component
  onClosed?: () => void
  workingLabel?: string
  workingLabelVisible?: boolean
  buttonLabel?: string
  buttonClick?: () => void
  // createTemplateBarProps?: CreateTemplateBarProps
  sidebarComponent?: React.Component
  contentComponent?: React.Component
}

export const CreateTemplateModal: FC<CreateTemplateModalProps> = ({
  templateType,
  title,
  visible,
  icon,
  workingLabel,
  workingLabelVisible = false,
  buttonLabel,
  // createTemplateBarProps,
  buttonClick,
  onClosed,
  sidebarComponent = <CreateTemplateBar />,
  contentComponent = <CommunicationTemplatePreview />,
}) => {
  return (
    <Modal
      visible={visible ?? false}
      closable={false}
      footer={null}
      width={'100%'}
      wrapClassName={styles.fullScreenModal}
    >
      <>
        <div className={styles.fullScreenModalHeader}>
          <div>
            {icon ?? (
              <LeftOutlined
                onClick={() => (onClosed ? onClosed() : null)}
                style={{
                  color: 'var(--light-grey-color)',
                  marginRight: '24px',
                  fontSize: '24px',
                }}
              />
            )}
            <FileTextFilled
              style={{
                color: '#54B2D3',
                marginRight: '24px',
                fontSize: '24px',
              }}
            />
            {title ?? 'Create SMS Template'}
            {workingLabelVisible ? (
              <span>{workingLabel ?? 'Saving...'}</span>
            ) : null}
          </div>
          <div className={styles.fullScreenModalOps}>
            <Button
              onClick={() => buttonClick?.()}
              className={styles.button}
              style={{ marginRight: '1rem' }}
              type="primary"
            >
              {buttonLabel ?? 'Save'}
            </Button>
            <MoreOutlined style={{ fontSize: '21px', fontWeight: 'bold' }} />
          </div>
        </div>
        <div className={styles.fullScreenModalBody}>
          <Layout>
            <Sider style={{ background: 'white', width: '336px !important' }}>
              {sidebarComponent}
            </Sider>
            <Layout>
              {/* <Header>Header</Header> */}
              <Content>{contentComponent}</Content>
              {/* <Footer>Footer</Footer> */}
            </Layout>
          </Layout>
        </div>
      </>
    </Modal>
  )
}

export default CreateTemplateModal
