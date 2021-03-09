import React, { FC, useState, useEffect } from 'react'
import {
  Switch,
  Input,
  InputNumber,
  Checkbox,
  FullScreenReportModal,
  OperationType,
} from '@pabau/ui'
import { Collapse, Radio, Typography } from 'antd'
import {
  DollarOutlined,
  PercentageOutlined,
  CheckCircleFilled,
  CaretRightOutlined,
} from '@ant-design/icons'
import styles from './CreateRoom.module.less'
const { Panel } = Collapse
const { Paragraph } = Typography
export interface CreateRoomProps {
  visible: boolean
  onClose: () => void
  onCreate?: () => void
}

const ALL_SERVICES = [
  'Travel Clinic',
  'Vaccination Services',
  'COVID-19 Antibody Testing System',
  'Period Delay Service',
  'Mole Screening Service',
  'Health Checks',
  'Aesthetic Services',
  'Sexual Health Services',
]

export const CreateRoom: FC<CreateRoomProps> = ({
  visible,
  onClose,
  onCreate,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [advancedSetting, setAdvancedSetting] = useState('currency')
  const [allServicesSelected, setAllServicesSelected] = useState(true)
  const [selectedServices, setSelectedServices] = useState<string[]>(
    ALL_SERVICES
  )

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
            <Switch
              size="small"
              className={styles.switchBtn}
              checked={allServicesSelected}
              onChange={(isSelected) => setAllServicesSelected(isSelected)}
            />
            <span className={styles.subtitle}>
              All services can be performed in this room
            </span>
          </div>
        </div>

        {allServicesSelected && (
          <div className={styles.createServiceSection}>
            <h2 className={styles.createServiceSectionTitle}>Services</h2>
            <span className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className={styles.createServiceSectionItem} />
            <div className={styles.createServiceSectionItem}>
              <Checkbox
                className={styles.checkbox}
                checked={selectedServices.length === ALL_SERVICES.length}
                onChange={(event) => {
                  const { checked } = event.target
                  if (checked) {
                    setSelectedServices(ALL_SERVICES)
                  } else {
                    setSelectedServices([])
                  }
                }}
              />{' '}
              Select All
            </div>
            <div className={styles.createServiceSectionItem}>
              {ALL_SERVICES.map((service, index) => {
                return (
                  <div key={index} className={styles.listContainer}>
                    <span className={styles.icon}>
                      <CaretRightOutlined />
                    </span>
                    <Checkbox
                      className={styles.checkbox}
                      checked={selectedServices.indexOf(service) !== -1}
                      onChange={(event) => {
                        const { checked } = event.target
                        if (checked) {
                          setSelectedServices((prev) => [...prev, service])
                        } else {
                          const index = selectedServices.indexOf(service)
                          const selServices = [...selectedServices]
                          selServices.splice(index, 1)
                          setSelectedServices(selServices)
                        }
                      }}
                    />
                    <span className={styles.serviceTitle}>{service}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className={styles.advancedSettings}>
          <Collapse ghost>
            <Panel
              header={<span className={styles.header}>Advanced settings</span>}
              key="advanced-settings"
            >
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
                            <CheckCircleFilled
                              style={{
                                position: 'absolute',
                                right: 12,
                                top: 12,
                              }}
                            />
                          )}
                          <Icon
                            style={{
                              fontSize: 24,
                              color:
                                item.value === advancedSetting
                                  ? '#54B2D3'
                                  : '#9292A3',
                            }}
                          />
                          <Paragraph>{label}</Paragraph>
                        </div>
                      </Radio.Button>
                    )
                  })}
                </Radio.Group>
                <div
                  className={`${styles.createServiceSectionItem} ${styles.roomFeeInput}`}
                >
                  <InputNumber
                    label="Room Fee"
                    placeHolderText="$ 50"
                    showCurrency
                    currency="$"
                  />
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className={styles.createServicePricing}>
        <div className={styles.createServiceSection}>
          <h2 className={styles.createServiceSectionTitle}>Services</h2>
          <span className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <div className={styles.createServiceSectionItem} />
          <div className={styles.createServiceSectionItem}>
            <Checkbox className={styles.checkbox} /> Select All
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
                <div key={index} className={styles.listContainer}>
                  <span className={styles.icon}>
                    <CaretRightOutlined />
                  </span>
                  <Checkbox className={styles.checkbox} />
                  <span className={styles.serviceTitle}>{service}</span>
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
