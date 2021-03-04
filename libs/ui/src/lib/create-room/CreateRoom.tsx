import React, { FC, useState, useEffect } from 'react'
import {
  Switch,
  Input,
  Checkbox,
  FullScreenReportModal,
  OperationType,
} from '@pabau/ui'
import { Collapse, Radio, Typography } from 'antd'
import {
  CheckOutlined,
  DollarOutlined,
  PercentageOutlined,
  CaretDownOutlined,
} from '@ant-design/icons'
import styles from './CreateRoom.module.less'
const { Panel } = Collapse
const { Paragraph } = Typography
export interface CreateRoomProps {
  visible: boolean
  onClose: () => void
  onCreate?: () => void
}

export const CreateRoom: FC<CreateRoomProps> = ({
  visible,
  onClose,
  onCreate,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [advancedSetting, setAdvancedSetting] = useState('currency')
  useEffect(() => {
    setShowModal(visible)
  }, [visible])
  return (
    <FullScreenReportModal
      visible={showModal}
      title={`Create Room`}
      operations={[
        OperationType.active,
        OperationType.cancel,
        OperationType.delete,
        OperationType.create,
      ]}
      activated={true}
      cancelBtnText="Cancel"
      createBtnText="Create"
      enableCreateBtn
      subMenu={['Details', 'Location']}
      onCancel={() => {
        setShowModal(false)
        onClose()
      }}
      onCreate={() => {
        onCreate?.()
      }}
    >
      <div className={styles.createServiceGeneral}>
        <div className={styles.createServiceSection}>
          <h2 className={styles.createServiceSectionTitle}>Details</h2>
          <div className={styles.createServiceSectionItem} />
          <div className={styles.createServiceSectionItem}>
            <Input label="Room Name" placeHolderText="eg. Room 1" />
          </div>
          <div className={styles.createServiceSectionItem}>
            <Switch />
            All services can be performed in this room
          </div>
        </div>
        <div className={styles.createServiceSection}>
          <h2 className={styles.createServiceSectionTitle}>Services</h2>
          <div className={styles.createServiceSectionItem} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div className={styles.createServiceSectionItem}>
            <Checkbox /> Select All
          </div>
          <div className={styles.createServiceSectionItem}>
            {[
              'Travel Clinic',
              'Vaccination Services',
              'COVID-19 Antibody Testing System',
              'Period Delay Service',
              'Mole Screening Service',
              'Health Checks',
              'Aesthetic Services',
              'Sexual Health Services',
            ].map((service, index) => {
              return (
                <div key={index}>
                  <CaretDownOutlined />
                  <Checkbox /> {service}
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.advancedSettings}>
          <Collapse ghost>
            <Panel header="Advanced settings" key="advanced-settings">
              <div className={styles.createServiceSection}>
                <h2
                  className={styles.createServiceSectionTitle}
                  style={{ margin: 0 }}
                >
                  Advanced
                </h2>
                <Radio.Group
                  value={advancedSetting}
                  onChange={(e) => setAdvancedSetting(e.target.value)}
                  size="large"
                >
                  {[
                    {
                      label: 'Percentage',
                      icon: PercentageOutlined,
                      value: 'percent',
                    },
                    {
                      label: 'Currency',
                      icon: DollarOutlined,
                      value: 'currency',
                    },
                  ].map((item, index) => {
                    const { label, icon: Icon } = item
                    return (
                      <Radio.Button
                        style={{
                          height: 100,
                          width: 200,
                          backgroundColor:
                            item.value === advancedSetting
                              ? '#EEF7FB'
                              : 'white',
                        }}
                        key={index}
                        value={item.value}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginTop: 24,
                          }}
                        >
                          {item.value === advancedSetting && (
                            <CheckOutlined
                              style={{
                                position: 'absolute',
                                right: 12,
                                top: 12,
                              }}
                            />
                          )}
                          <Icon style={{ fontSize: 30 }} />
                          <Paragraph>{label}</Paragraph>
                        </div>
                      </Radio.Button>
                    )
                  })}
                </Radio.Group>
                <div className={styles.createServiceSectionItem}>
                  <Input label="Room Fee" placeHolderText="$ 50" />
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className={styles.createServicePricing}>
        <div className={styles.createServiceSection}>
          <h2 className={styles.createServiceSectionTitle}>Services</h2>
          <div className={styles.createServiceSectionItem} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div className={styles.createServiceSectionItem}>
            <Checkbox /> Select All
          </div>
          <div className={styles.createServiceSectionItem}>
            {[
              'The London Clinic',
              'Sloan Medical Centre',
              'Sheffield Late Night Pharmacy',
              'Sloan Medical Centre',
              'The London Clinic',
              'Sloan Medical Centre',
              'Sheffield Late Night Pharmacy',
              'Sloan Medical Centre',
            ].map((service, index) => {
              return (
                <div key={index}>
                  <Checkbox /> {service}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </FullScreenReportModal>
  )
}

export default CreateRoom
