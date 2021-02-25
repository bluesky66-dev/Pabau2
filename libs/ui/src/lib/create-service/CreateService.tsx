import React, { FC, useState, useEffect } from 'react'
import { Button, TabMenu, Switch, Input, Checkbox, Slider } from '@pabau/ui'
import {
  Modal,
  Collapse,
  Form,
  Select,
  Tooltip,
  InputNumber,
  Divider,
} from 'antd'
import {
  CalendarOutlined,
  VideoCameraOutlined,
  TeamOutlined,
  CloseOutlined,
  LeftOutlined,
  PictureOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  CheckCircleFilled,
} from '@ant-design/icons'
import { ReactComponent as Read } from '../../assets/images/pricing/read.svg'
import { ReactComponent as Money } from '../../assets/images/pricing/money.svg'
import styles from './CreateService.module.less'

const { Panel } = Collapse
const { Option, OptGroup } = Select

export interface CreateServiceProps {
  visible: boolean
  onClose: () => void
  onCreate?: () => void
}

export const CreateService: FC<CreateServiceProps> = ({
  visible,
  onClose,
  onCreate,
}) => {
  const [form] = Form.useForm()
  const [showModal, setShowModal] = useState(false)
  const [serviceType, setServiceType] = useState('')
  const [isSelected, setIsSelected] = useState(false)
  const [serviceName, setServiceName] = useState('')
  const [category, setCategory] = useState('')
  const [servicePrice, setServicePrice] = useState('')
  const [sliderValue, setSliderValue] = useState(0)
  const appointmentColors = [
    '#7986cb',
    '#64b5f6',
    '#4dd0e1',
    '#9575cd',
    '#ba68c8',
    '#d46bd4',
    '#ff679b',
    '#fff176',
    '#a1887f',
    '#4db6ac',
    '#81c784',
    '#90a4ae',
    '#ffc38e',
    '#d2a3a3',
  ]
  const categories = [
    {
      groupTitle: 'Hair',
      groupItems: [
        'Japanese straightening',
        'Haircuts and hairdressing',
        'Hair transplants',
      ],
    },
  ]
  const [pricingOptions, setPricingOptions] = useState([
    {
      title: 'Book & Sell',
      isBook: true,
      isSell: true,
      selected: true,
    },
    {
      title: 'Book',
      isBook: true,
      isSell: false,
      selected: false,
    },
    {
      title: 'Sell',
      isBook: false,
      isSell: true,
      selected: false,
    },
  ])
  const hanldeSelectPricingOption = (item) => {
    const options = [...pricingOptions]
    for (const option of options) {
      option.selected = option.title === item.title
    }
    setPricingOptions([...options])
  }
  useEffect(() => {
    setShowModal(visible)
  }, [visible])
  const ChooseServiceType = () => {
    return (
      <div className={styles.chooseServiceType}>
        <h1>Choose a service type to add to your menu</h1>
        <div
          className={styles.chooseServiceTypeItem}
          onClick={() => {
            setServiceType('Service')
            setIsSelected(true)
          }}
        >
          <div>
            <CalendarOutlined />
          </div>
          <div>
            <p>Service</p>
            <p>Services booked by one client in a single visit</p>
          </div>
        </div>
        <div
          className={styles.chooseServiceTypeItem}
          onClick={() => {
            setServiceType('Virtual')
            setIsSelected(true)
          }}
        >
          <div>
            <VideoCameraOutlined />
          </div>
          <div>
            <p>Virtual</p>
            <p>Use Pabau’s online video conferencing</p>
          </div>
        </div>
        <div
          className={styles.chooseServiceTypeItem}
          onClick={() => {
            setServiceType('Class')
            setIsSelected(true)
          }}
        >
          <div>
            <TeamOutlined />
          </div>
          <div>
            <p>Class</p>
            <p>Services booked by multiple clients in scheduled sessions</p>
          </div>
        </div>
        <div
          className={styles.closeChooseServiceType}
          onClick={() => {
            setShowModal(false)
            onClose()
          }}
        >
          <span>Esc</span>
          <div>
            <CloseOutlined />
          </div>
        </div>
      </div>
    )
  }
  return (
    <Modal
      visible={showModal}
      width="100%"
      wrapClassName={styles.createService}
      footer={null}
    >
      {!isSelected && <ChooseServiceType />}
      {isSelected && (
        <React.Fragment>
          <div className={styles.createServiceHeader}>
            <div>
              <LeftOutlined
                style={{
                  color: 'var(--light-grey-color)',
                  marginRight: '24px',
                  fontSize: '24px',
                }}
              />
              {`Create ${serviceType}`}
            </div>
            <div className={styles.createServiceOps}>
              <div className={styles.createServiceActive}>
                Active{' '}
                <Switch
                  size="small"
                  defaultChecked={true}
                  style={{ marginLeft: '12px' }}
                />
              </div>
              <Button
                onClick={() => {
                  setShowModal(false)
                  setIsSelected(false)
                  onClose()
                }}
                style={{
                  marginRight: '1rem',
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                disabled={!serviceName || !servicePrice || !category}
                onClick={() => onCreate?.()}
              >
                Create
              </Button>
            </div>
          </div>
          <div className={styles.createServiceBody}>
            <TabMenu
              tabPosition="top"
              menuItems={[
                'General',
                'Pricing',
                'Staff & Resources',
                'Online Booking',
                'Client pathway',
              ]}
              minHeight="1px"
            >
              <div className={styles.createServiceGeneral}>
                <div className={styles.createServiceSection}>
                  <h2 className={styles.createServiceSectionTitle}>General</h2>
                  <div className={styles.createServiceSectionItem}>
                    <Input
                      label="Service name"
                      placeHolderText="Enter service name"
                      text={serviceName}
                      onChange={(val) => setServiceName(val)}
                    />
                  </div>
                  {serviceType !== 'Service' && (
                    <div className={styles.createServiceSectionItem}>
                      <Slider
                        title={''}
                        value={sliderValue}
                        onChange={(val) => setSliderValue(val)}
                        calculatedValue={`${sliderValue}`}
                        min={0}
                        max={50}
                      />
                    </div>
                  )}
                  <div className={styles.createServiceSectionItem}>
                    <Input
                      label="Service code"
                      placeHolderText="Enter service code"
                    />
                  </div>
                  <div className={styles.createServiceSectionItem}>
                    <Form form={form} layout="vertical">
                      <Form.Item label="Category">
                        <Select
                          style={{ width: '100%' }}
                          placeholder="Select Category"
                          onSelect={(val: string) => setCategory(val)}
                        >
                          {categories.map((item) => (
                            <OptGroup
                              label={
                                <span
                                  style={{
                                    color: 'var(--grey-text-color)',
                                    fontSize: '14px',
                                  }}
                                >
                                  {item?.groupTitle}
                                </span>
                              }
                              key={item?.groupTitle}
                            >
                              {item?.groupItems?.map((subItem) => (
                                <Option key={subItem} value={subItem}>
                                  {subItem}
                                </Option>
                              ))}
                            </OptGroup>
                          ))}
                        </Select>
                      </Form.Item>
                    </Form>
                  </div>
                  <div className={styles.appointmentColor}>
                    <p className={styles.appointmentColorTitle}>
                      Appointment colour
                    </p>
                    <div className={styles.appointmentColorItems}>
                      {appointmentColors.map((color) => (
                        <div
                          key={color}
                          className={styles.appointmentColorItem}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div>
                      <p className={styles.createServiceSectionItemTitle}>
                        Image
                      </p>
                      <div className={styles.createServiceImageContainer}>
                        <PictureOutlined
                          style={{
                            color: 'var(--light-grey-color)',
                            fontSize: '32px',
                          }}
                        />
                      </div>
                      <Button icon={<PlusOutlined />}>
                        Choose from library
                      </Button>
                    </div>
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
                          Bundling{' '}
                          <Tooltip title="lorem ipsum">
                            <QuestionCircleOutlined
                              style={{
                                color: 'var(--light-grey-color)',
                                marginLeft: '5px',
                              }}
                            />
                          </Tooltip>
                        </h2>
                        <h3
                          className={styles.createServiceSectionSubTitle}
                          style={{ marginBottom: '1rem' }}
                        >
                          Which items work well with a{' '}
                          {serviceName || '{Service name}'}
                        </h3>
                        <div className={styles.createServiceBundling}>
                          <div>
                            <Select placeholder="Type"></Select>
                          </div>
                          <div>
                            <Select placeholder="Select service or product"></Select>
                          </div>
                          <div>
                            <InputNumber placeholder="0" />
                          </div>
                        </div>
                        <Button icon={<PlusOutlined />}>Add bundle item</Button>
                      </div>
                      <div className={styles.createServiceSection}>
                        <h2 className={styles.createServiceSectionTitle}>
                          Auto consumption{' '}
                          <Tooltip title="lorem ipsum">
                            <QuestionCircleOutlined
                              style={{
                                color: 'var(--light-grey-color)',
                                marginLeft: '5px',
                              }}
                            />
                          </Tooltip>
                        </h2>
                        <div className={styles.createServiceAutoConsumption}>
                          <div>
                            <Select placeholder="Select product"></Select>
                          </div>
                          <div>
                            <InputNumber placeholder="0" />
                          </div>
                        </div>
                        <div>
                          <Checkbox defaultChecked={false}>
                            Consumable deduction
                          </Checkbox>
                        </div>
                        <Divider style={{ margin: '15px 0' }} />
                        <Button icon={<PlusOutlined />}>Add new item</Button>
                      </div>
                      <div
                        className={styles.createServiceSection}
                        style={{ margin: 0 }}
                      >
                        <h2 className={styles.createServiceSectionTitle}>
                          Financial information
                        </h2>
                        <div className={styles.createServiceSectionItem}>
                          <Input label="SKU" placeHolderText="Enter SKU" />
                        </div>
                        <div className={styles.createServiceSectionItem}>
                          <Input
                            label="Procedure code"
                            placeHolderText="Enter procedure code"
                          />
                        </div>
                        <div className={styles.createServiceSectionItem}>
                          <Input
                            label="Invoice item name"
                            placeHolderText="Enter invoice item name"
                            tooltip="lorem ipsum"
                          />
                        </div>
                        <div className={styles.createServiceSectionItem}>
                          <Input
                            label="Display text on invoice"
                            placeHolderText="Enter display text"
                            tooltip="lorem ipsum"
                          />
                        </div>
                        <div>
                          <Checkbox defaultChecked={false}>
                            Use a package sessio to pay for the service{' '}
                            <Tooltip title="lorem ipsum">
                              <QuestionCircleOutlined
                                style={{
                                  color: 'var(--light-grey-color)',
                                  marginLeft: '5px',
                                }}
                              />
                            </Tooltip>
                          </Checkbox>
                        </div>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
              <div className={styles.createServicePricing}>
                <div className={styles.createServiceSection}>
                  <h2
                    className={styles.createServiceSectionTitle}
                    style={{ margin: 0 }}
                  >
                    Pricing & Duration{' '}
                    <Tooltip title="lorem ipsum">
                      <QuestionCircleOutlined
                        style={{
                          color: 'var(--light-grey-color)',
                          marginLeft: '5px',
                        }}
                      />
                    </Tooltip>
                  </h2>
                  <h3
                    className={styles.createServiceSectionSubTitle}
                    style={{ marginBottom: '1rem' }}
                  >
                    Add the pricing options and duration of the service
                  </h3>
                  <div className={styles.createServiceSectionItem}>
                    <div className={styles.pricingOptions}>
                      {pricingOptions.map((option) => (
                        <div
                          key={option.title}
                          className={
                            option.selected ? styles.pricingOptionSelected : ''
                          }
                          onClick={() => hanldeSelectPricingOption(option)}
                        >
                          <div className={styles.pricingOptionLogos}>
                            {option.isBook && <Read />}
                            {option.isSell && <Money />}
                          </div>
                          <div className={styles.pricingOptionTitle}>
                            {option.title}
                          </div>
                          <div className={styles.pricingChecked}>
                            <CheckCircleFilled />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.createServiceSectionItem}>
                    <Input
                      label="Service price"
                      text={servicePrice}
                      onChange={(val) => setServicePrice(val)}
                      placeHolderText="£"
                    />
                  </div>
                  <div className={styles.createServiceSectionItem}>
                    <Form form={form} layout="vertical">
                      <Form.Item label="Duration">
                        <Select placeholder="Select duration"></Select>
                      </Form.Item>
                    </Form>
                  </div>
                  <div className={styles.createServiceSectionItem}>
                    <Form form={form} layout="vertical">
                      <Form.Item label="Tax">
                        <Select placeholder="Select tax"></Select>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </TabMenu>
          </div>
        </React.Fragment>
      )}
    </Modal>
  )
}

export default CreateService
