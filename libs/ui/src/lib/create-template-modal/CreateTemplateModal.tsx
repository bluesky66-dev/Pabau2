import {
  CalendarOutlined,
  FileDoneOutlined,
  FileTextFilled,
  LeftOutlined,
  MoreOutlined,
} from '@ant-design/icons'
import { ChooseModalItem } from '@pabau/ui'
import { Button, Layout, Modal } from 'antd'

import React, { FC } from 'react'
import { boolean } from 'yup/lib/locale'
import CommunicationTemplatePreview from '../communication-template-preview/CommunicationTemplatePreview'
import CreateTemplateBar from '../create-template-bar/CreateTemplateBar'

import styles from './CreateTemplateModal.module.less'

/* eslint-disable-next-line */

// const { Header, Footer, Sider, Content } = Layout
const { Sider, Content } = Layout

const chooseModalTypeItems: ChooseModalItem[] = [
  {
    title: 'General',
    description: 'Services booked by one client in a single visit',
    icon: <CalendarOutlined />,
  },
  {
    title: 'Confirmations',
    icon: <FileDoneOutlined />,
    description: 'Use Pabau’s online video conferencing',
  },
  // {
  //   title: 'Marketing',
  //   icon: <MarketingOutlined />,
  //   description: 'Sell multiple services as a packaged bundle',
  // },
]

const createTemplateBarProps = {
  visible: boolean,
  chooseTypeGroupProps: { items: chooseModalTypeItems },
}

export interface CreateTemplateModalProps {
  visible: boolean
}

export const CreateTemplateModal: FC<CreateTemplateModalProps> = ({
  visible,
}) => {
  return (
    <Modal
      visible={visible}
      closable={false}
      footer={null}
      width={'100%'}
      wrapClassName={styles.fullScreenModal}
    >
      <>
        <div className={styles.fullScreenModalHeader}>
          <div>
            <LeftOutlined
              // onClick={() => onBackClick?.()}
              style={{
                color: 'var(--light-grey-color)',
                marginRight: '24px',
                fontSize: '24px',
              }}
            />
            <FileTextFilled
              // onClick={() => onBackClick?.()}
              style={{
                color: '#54B2D3',
                marginRight: '24px',
                fontSize: '24px',
              }}
            />
            {'Create SMS Template'}
          </div>
          <div className={styles.fullScreenModalOps}>
            <Button
              // onClick={() => onSave?.()}
              className={styles.button}
              style={{ marginRight: '1rem' }}
              type="primary"
            >
              {'Save'}
            </Button>
            <MoreOutlined style={{ fontSize: '21px', fontWeight: 'bold' }} />
            {/* {operations.map((operation) => (
              <React.Fragment key={operation}>
                {operation === OperationType.vat && (
                  <div className={styles.operationSwitch}>
                    VAT registered{' '}
                    <Switch
                      size="small"
                      defaultChecked={vatRegistered || true}
                      onChange={(checked) => onVatRegistered?.(checked)}
                      style={{ marginLeft: '12px' }}
                    />
                  </div>
                )}
                {operation === OperationType.active && (
                  <div className={styles.operationSwitch}>
                    Active{' '}
                    <Switch
                      size="small"
                      defaultChecked={activated || true}
                      onChange={(checked) => onActivated?.(checked)}
                      style={{ marginLeft: '12px' }}
                    />
                  </div>
                )}
                {operation === OperationType.reset && (
                  <Button
                    onClick={() => onReset?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {resetBtnText || 'Reset'}
                  </Button>
                )}
                {operation === OperationType.delete && (
                  <Button
                    onClick={() => onDelete?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {deleteBtnText || 'Delete'}
                  </Button>
                )}
                {operation === OperationType.save && (
                  <Button
                    onClick={() => onSave?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {saveBtnText || 'Save'}
                  </Button>
                )}
                {operation === OperationType.cancel && (
                  <Button
                    onClick={() => onCancel?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {cancelBtnText || 'Cancel'}
                  </Button>
                )}
                {operation === OperationType.create && (
                  <Button
                    type="primary"
                    disabled={!enableCreateBtn}
                    onClick={() => onCreate?.()}
                  >
                    {createBtnText || 'Create'}
                  </Button>
                )}
              </React.Fragment>
            ))} */}
          </div>
        </div>
        <div className={styles.fullScreenModalBody}>
          <Layout>
            <Sider
              className={styles.casd}
              style={{ background: 'white', width: '336px !important' }}
            >
              <CreateTemplateBar {...createTemplateBarProps} />
            </Sider>
            <Layout>
              {/* <Header>Header</Header> */}
              <Content>
                <CommunicationTemplatePreview />
              </Content>
              {/* <Footer>Footer</Footer> */}
            </Layout>
          </Layout>
          {/* {subMenu.length > 0 ? (
            <TabMenu menuItems={subMenu} tabPosition="top" minHeight="1px">
              {children
                ? children
                : subMenu.map((menu) => <div key={menu}>{menu}</div>)}
            </TabMenu>
          ) : (
            children
          )} */}
        </div>
      </>
    </Modal>
  )
}

export default CreateTemplateModal
