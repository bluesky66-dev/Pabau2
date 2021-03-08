import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import {
  Button,
  TabMenu,
  Switch,
  Input,
  Checkbox,
  Slider,
  Employees,
  Employee,
  SearchTags,
  ChooseModal,
  FullScreenReportModal,
  OperationType,
  ImageSelectorModal,
} from '@pabau/ui'
import {
  Collapse,
  Form,
  Select,
  Tooltip,
  InputNumber,
  Divider,
  Input as AntInput,
} from 'antd'
import {
  CalendarOutlined,
  VideoCameraOutlined,
  TeamOutlined,
  PictureOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  CheckCircleFilled,
  PercentageOutlined,
} from '@ant-design/icons'
import { ReactComponent as Read } from '../../assets/images/pricing/read.svg'
import { ReactComponent as Money } from '../../assets/images/pricing/money.svg'
import { ReactComponent as Botox } from '../../assets/images/botox.svg'
import { ReactComponent as Treatment } from '../../assets/images/form-type/treatment.svg'
import { ReactComponent as MedicalHistory } from '../../assets/images/form-type/medical-history.svg'
import styles from './CreateService.module.less'

const { Panel } = Collapse
const { Option, OptGroup } = Select

interface LocationItem {
  location: string
  selected: boolean
}

export interface CreateServiceProps {
  employees: Employee[]
  locations: Array<string>
  rooms: Array<string>
  equipment: Array<string>
  visible: boolean
  onClose: () => void
  onCreate?: () => void
}

export const CreateService: FC<CreateServiceProps> = ({
  employees,
  locations,
  rooms,
  equipment,
  visible,
  onClose,
  onCreate,
}) => {
  const [form] = Form.useForm()
  const [showModal, setShowModal] = useState(false)
  const [showImageSelector, setShowImageSelector] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [showChooseModal, setShowChooseModal] = useState(false)
  const [serviceType, setServiceType] = useState('')
  const [serviceName, setServiceName] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [category, setCategory] = useState('')
  const [servicePrice, setServicePrice] = useState('0')
  const [sliderValue, setSliderValue] = useState(0)
  const [paymentUnit, setPaymentUnit] = useState('%')
  const [locationItems, setLocationItems] = useState<LocationItem[]>([])
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
  const durations = [
    '5min',
    '10min',
    '15min',
    '20min',
    '25min',
    '30min',
    '35min',
    '40min',
    '45min',
    '50min',
    '55 min',
    '1h',
    '1h 5min',
    '1h 10min',
    '1h 15min',
    '1h 20min',
    '1h 25min',
    '1h 30min',
    '1h 35min',
    '1h 40min',
    '1h 45min',
    '1h 50min',
    '1h 55 min',
    '2h',
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
  const [paymentProcessing, setPaymentProcessing] = useState([
    {
      type: 'Amount',
      selected: false,
    },
    {
      type: 'Percent',
      selected: true,
    },
  ])
  const [patientBookings, setPatientBookings] = useState([
    {
      type: 'Existing & New',
      selected: true,
    },
    {
      type: 'Existing',
      selected: false,
    },
    {
      type: 'New',
      selected: false,
    },
  ])
  const [availableOn, setAvailableOn] = useState([
    {
      weekDay: 'Mon',
      isAvailable: false,
    },
    {
      weekDay: 'Tue',
      isAvailable: false,
    },
    {
      weekDay: 'Wed',
      isAvailable: false,
    },
    {
      weekDay: 'Thu',
      isAvailable: false,
    },
    {
      weekDay: 'Fri',
      isAvailable: false,
    },
    {
      weekDay: 'Sat',
      isAvailable: false,
    },
    {
      weekDay: 'Sun',
      isAvailable: false,
    },
  ])
  const handleSelectPricingOption = (item) => {
    const options = [...pricingOptions]
    for (const option of options) {
      option.selected = option.title === item.title
    }
    setPricingOptions([...options])
  }
  const handleSelectPaymentProcessingOption = (item) => {
    const options = [...paymentProcessing]
    for (const option of options) {
      option.selected = option.type === item.type
      if (option.type === item.type) {
        setPaymentUnit(option.type === 'Amount' ? '£' : '%')
      }
    }
    setPaymentProcessing([...options])
  }
  const handleSelectPatientBookings = (item) => {
    const options = [...patientBookings]
    for (const option of options) {
      option.selected = option.type === item.type
    }
    setPatientBookings([...options])
  }
  const handleChangeAvailableOn = (weekDay, status) => {
    const options = [...availableOn]
    for (const option of options) {
      if (option.weekDay === weekDay) option.isAvailable = status
    }
    setAvailableOn([...options])
  }
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const items = [...locationItems]
      for (const item of items) {
        item.selected = true
      }
      setLocationItems([...items])
    }
  }
  const handleCheckLocation = (e, location) => {
    const items = [...locationItems]
    for (const item of items) {
      item.selected =
        location.location === item.location ? e.target.checked : item.selected
    }
    setLocationItems([...items])
  }
  useEffect(() => {
    setShowChooseModal(visible)
    setShowModal(false)
  }, [visible])
  useEffect(() => {
    setLocationItems([
      ...locations.map((location) => ({ location, selected: false })),
    ])
  }, [locations])
  return (
    <>
      <ChooseModal
        title="Choose a service type to add to your menu"
        items={[
          {
            title: 'Service',
            description: 'Services booked by one client in a single visit',
            icon: <CalendarOutlined />,
          },
          {
            title: 'Virtual',
            description: 'Use Pabau’s online video conferencing',
            icon: <VideoCameraOutlined />,
          },
          {
            title: 'Class',
            description:
              'Services booked by multiple clients in scheduled sessions',
            icon: <TeamOutlined />,
          },
        ]}
        visible={showChooseModal}
        onSelected={(item) => {
          setShowChooseModal(false)
          setShowModal(true)
          setServiceType(item.title)
        }}
        onClose={() => {
          setShowChooseModal(false)
          setShowModal(false)
        }}
      />
      <FullScreenReportModal
        visible={showModal}
        title={`Create ${serviceType}`}
        operations={[
          OperationType.active,
          OperationType.cancel,
          OperationType.create,
        ]}
        activated={true}
        cancelBtnText="Cancel"
        createBtnText="Create"
        enableCreateBtn={!!serviceName && !!servicePrice && !!category}
        subMenu={[
          'General',
          'Pricing',
          'Staff & Resources',
          'Online Booking',
          <div
            key="client-pathway"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Client pathway{' '}
            <span
              style={{
                display: 'inline-block',
                padding: '3px 12px',
                fontFamily: 'var(--font-family)',
                fontSize: '12px',
                lineHeight: '14px',
                fontWeight: 400,
                color: 'var(--primary-color)',
                backgroundColor: '#eef7fb',
                borderRadius: '6px',
                marginLeft: '8px',
              }}
            >
              Plus
            </span>
          </div>,
        ]}
        onCancel={() => {
          setShowModal(false)
          setShowChooseModal(false)
          onClose()
        }}
        onCreate={() => {
          onCreate?.()
        }}
      >
        <div className={styles.createServiceGeneral}>
          <div className={styles.createServiceSection}>
            <h2 className={styles.createServiceSectionTitle}>Service info</h2>
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
                <Form form={form} layout="vertical">
                  <Form.Item label="Max number clients allowed">
                    <Slider
                      title={''}
                      value={sliderValue}
                      onChange={(val) => setSliderValue(val)}
                      calculatedValue={`${sliderValue}`}
                      min={0}
                      max={50}
                    />
                  </Form.Item>
                </Form>
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
              <p className={styles.appointmentColorTitle}>Appointment colour</p>
              <div className={styles.appointmentColorItems}>
                {appointmentColors.map((color) => (
                  <div
                    key={color}
                    className={
                      color === selectedColor
                        ? classNames(
                            styles.appointmentColorItem,
                            styles.appointmentColorSelected
                          )
                        : styles.appointmentColorItem
                    }
                    onClick={() => setSelectedColor(color)}
                  >
                    <div
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className={styles.createServiceSectionItemTitle}>Image</p>
                <div
                  className={styles.createServiceImageContainer}
                  style={{ backgroundImage: `url(${selectedImage})` }}
                >
                  {!selectedImage && (
                    <PictureOutlined
                      style={{
                        color: 'var(--light-grey-color)',
                        fontSize: '32px',
                      }}
                    />
                  )}
                </div>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => setShowImageSelector(true)}
                >
                  Choose from library
                </Button>
                <ImageSelectorModal
                  visible={showImageSelector}
                  onOk={(image) => {
                    console.log(image)
                    setSelectedImage(image.source)
                    setShowImageSelector(false)
                  }}
                  onCancel={() => {
                    setShowImageSelector(false)
                  }}
                />
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
                    onClick={() => handleSelectPricingOption(option)}
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
                    <Tooltip title="lorem ipsum" mouseLeaveDelay={2}>
                      <div className={styles.tooltipContainer} />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.createServiceSectionItem}>
              <Form form={form} layout="vertical">
                <Form.Item label="Service price">
                  <div className={styles.currencyInput}>
                    <NumberFormat
                      className="ant-input"
                      prefix="£"
                      defaultValue="0"
                      thousandSeparator={true}
                      inputMode="numeric"
                      value={servicePrice}
                      onValueChange={(val: NumberFormatValues) =>
                        setServicePrice(val.value)
                      }
                    />
                  </div>
                </Form.Item>
              </Form>
            </div>
            <div className={styles.createServiceSectionItem}>
              <Form form={form} layout="vertical">
                <Form.Item label="Duration">
                  <Select placeholder="Select duration">
                    {durations.map((duration) => (
                      <Option key={duration} value={duration}>
                        {duration}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form>
            </div>
            <div className={styles.createServiceSectionItem}>
              <Form form={form} layout="vertical">
                <Form.Item label="Tax">
                  <Select placeholder="Select tax">
                    <Option value="defaultSetting">Default setting</Option>
                  </Select>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className={styles.createServiceSection}>
            <h2
              className={styles.createServiceSectionTitle}
              style={{ margin: 0 }}
            >
              Deposits & Online Payments
            </h2>
            <h3
              className={styles.createServiceSectionSubTitle}
              style={{ marginBottom: '1rem' }}
            >
              Setup payments processing with Stripe in order to bill online for
              services
            </h3>
            <div className={styles.createServiceSectionItem}>
              <div className={styles.paymentProcessing}>
                {paymentProcessing.map((option) => (
                  <div
                    key={option.type}
                    className={
                      option.selected
                        ? styles.paymentProcessingOptionSelected
                        : ''
                    }
                    onClick={() => handleSelectPaymentProcessingOption(option)}
                  >
                    <div className={styles.paymentProcessingOptionLogos}>
                      {option.type === 'Amount' && <Money />}
                      {option.type === 'Percent' && <PercentageOutlined />}
                    </div>
                    <div className={styles.paymentProcessingOptionTitle}>
                      {option.type}
                    </div>
                    <div className={styles.paymentProcessingChecked}>
                      <CheckCircleFilled />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.createServiceSectionItem}>
              <Form form={form} layout="vertical">
                <Form.Item label="Amount">
                  <div className={styles.currencyInput}>
                    <NumberFormat
                      className="ant-input"
                      prefix={paymentUnit}
                      defaultValue={0}
                    />
                  </div>
                </Form.Item>
              </Form>
            </div>
            <div className={styles.createServiceSectionItem}>
              <Checkbox defaultChecked={false}>
                Require payment before completing booking
              </Checkbox>
            </div>
            <div className={styles.enableOnlinePayment}>
              <p>Enable online payment</p>
              <p>
                Activate payments with Pabau to befeit from deposit during and
                after sale and get access to no show protection, payment
                terminals, safe online paymets and many more.
              </p>
              <p>Enable Reviews</p>
            </div>
          </div>
        </div>
        <TabMenu
          menuItems={['Employees', 'Resources', 'Locations']}
          tabPosition="top"
          minHeight="1px"
        >
          <div className={styles.employeesContainer}>
            <div className={styles.createServiceSection}>
              <Employees employees={employees} />
            </div>
          </div>
          <div className={styles.resoucesContainer}>
            <div className={styles.createServiceSection}>
              <SearchTags
                title="Rooms"
                description="Search rooms"
                items={rooms}
                itemType="room"
              />
            </div>
            <div className={styles.createServiceSection}>
              <SearchTags
                title="Equipment"
                description="Select equipment"
                items={equipment}
                itemType="equipment"
              />
            </div>
          </div>
          <div className={styles.locationsContainer}>
            <div className={styles.createServiceSection}>
              <h2
                className={styles.createServiceSectionTitle}
                style={{ margin: 0 }}
              >
                Locations
              </h2>
              <h3
                className={styles.createServiceSectionSubTitle}
                style={{ marginBottom: '1rem' }}
              >
                Choose the locations this discount can be applied
              </h3>
              <div className={styles.locationItem}>
                <Checkbox
                  defaultChecked={false}
                  onChange={(e) => handleSelectAll(e)}
                >
                  Select all
                </Checkbox>
              </div>
              {locationItems?.map((location) => (
                <div key={location.location} className={styles.locationItem}>
                  <Checkbox
                    defaultChecked={location.selected}
                    checked={location.selected}
                    onChange={(e) => handleCheckLocation(e, location)}
                  >
                    {location.location}
                  </Checkbox>
                </div>
              ))}
            </div>
          </div>
        </TabMenu>
        <div className={styles.createServiceOnlineBooking}>
          <div className={styles.createServiceSection}>
            <h2 className={styles.createServiceSectionTitle}>General</h2>
            <div className={styles.createServiceSectionItem}>
              <div className={styles.enableServiceOnline}>
                <Switch
                  size="small"
                  defaultChecked={true}
                  style={{ marginRight: '8px' }}
                />{' '}
                Enable this service online
              </div>
            </div>
            <div className={styles.createServiceSectionItem}>
              <Input
                label="Friendly name"
                placeHolderText="Enter friendly name"
                tooltip="lorem ipsum"
              />
            </div>
            <div
              className={styles.createServiceSectionItem}
              style={{ margin: 0 }}
            >
              <Form form={form} layout="vertical">
                <Form.Item label="Description">
                  <AntInput.TextArea
                    rows={4}
                    placeholder="e.g. the world’s most spectacular product"
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className={styles.advancedSettings}>
            <Collapse ghost>
              <Panel header="Advanced settings" key="advanced-settings">
                <div className={styles.createServiceSection}>
                  <h2 className={styles.createServiceSectionTitle}>
                    Restrict patient bookings to
                  </h2>
                  <div className={styles.patientBookings}>
                    {patientBookings.map((option) => (
                      <div
                        key={option.type}
                        className={
                          option.selected ? styles.patientBookingsSelected : ''
                        }
                        onClick={() => handleSelectPatientBookings(option)}
                      >
                        <div className={styles.patientBookingsChecked}>
                          <CheckCircleFilled />
                        </div>
                        <div className={styles.patientBookingsTitle}>
                          {option.type}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.createServiceSection}>
                  <h2 className={styles.createServiceSectionTitle}>
                    Available on
                  </h2>
                  <div className={styles.availableOn}>
                    {availableOn.map((option) => (
                      <div
                        className={styles.availableOnItem}
                        key={option.weekDay}
                      >
                        <Checkbox
                          defaultChecked={option.isAvailable}
                          onChange={(e) =>
                            handleChangeAvailableOn(
                              option.weekDay,
                              e.target.checked
                            )
                          }
                        />
                        <span>{option.weekDay}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
        <div className={styles.createServiceClientPathway}>
          <div className={styles.createServiceClientPathwayItemsContainer}>
            <div className={styles.createServiceSection}>
              <h2
                className={styles.createServiceSectionTitle}
                style={{ margin: 0 }}
              >
                Precare
              </h2>
              <h3
                className={styles.createServiceSectionSubTitle}
                style={{ marginBottom: '1rem' }}
              >
                This is the communication to be set prior to someone having this
                service
              </h3>
              <div className={styles.createServiceClientPathwayItems}>
                <div className={styles.createServiceClientPathwayItem}>
                  <div>
                    <Botox />
                  </div>
                  <p>Botox Precare</p>
                </div>
                <div className={styles.createServiceClientPathwayItem}>
                  <div>
                    <MedicalHistory />
                  </div>
                  <p>Medical History</p>
                </div>
                <div className={styles.createServiceClientPathwayItem}>
                  <div>
                    <Treatment />
                  </div>
                  <p>Appointment reminder</p>
                </div>
              </div>
            </div>
            <div className={styles.createServiceSection}>
              <h2
                className={styles.createServiceSectionTitle}
                style={{ margin: 0 }}
              >
                During
              </h2>
              <h3
                className={styles.createServiceSectionSubTitle}
                style={{ marginBottom: '1rem' }}
              >
                These are the forms to be used during this service
              </h3>
              <div className={styles.createServiceClientPathwayItems}>
                <div className={styles.createServiceClientPathwayItem}>
                  <div>
                    <Botox />
                  </div>
                  <p>Botox treatment form</p>
                </div>
                <div className={styles.createServiceClientPathwayItem}>
                  <div>
                    <Botox />
                  </div>
                  <p>Botox consent</p>
                </div>
              </div>
            </div>
            <div className={styles.createServiceSection}>
              <h2
                className={styles.createServiceSectionTitle}
                style={{ margin: 0 }}
              >
                Aftercare
              </h2>
              <h3
                className={styles.createServiceSectionSubTitle}
                style={{ marginBottom: '1rem' }}
              >
                Here are the communications to be sent after the service has
                been checked out
              </h3>
              <div className={styles.createServiceClientPathwayItems}>
                <div className={styles.createServiceClientPathwayItem}>
                  <div>
                    <Botox />
                  </div>
                  <p>Botox aftercare</p>
                </div>
                <div className={styles.createServiceClientPathwayItem}>
                  <div>
                    <Botox />
                  </div>
                  <p>Botox recall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullScreenReportModal>
    </>
  )
}

export default CreateService
