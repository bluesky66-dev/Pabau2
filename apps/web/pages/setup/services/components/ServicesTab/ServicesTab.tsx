import React, { FC, useState, useEffect } from 'react'
import { TabMenu, Table, DotButton } from '@pabau/ui'
import { Button, Dropdown, Menu } from 'antd'
import {
  CaretDownFilled,
  MenuFoldOutlined,
  PlusOutlined,
  EditOutlined,
} from '@ant-design/icons'
import styles from './services_tab.module.less'

const data = [
  {
    id: 1,
    key: '1',
    name: 'Paracetamol (Acetominophen)',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 1,
    index: 0,
  },
  {
    id: 2,
    key: '2',
    name: 'From a friend',
    unit: 'Mg',
    frequency: 'coffee',
    route: 'Monday, 4 Feb 2019',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 1,
  },
  {
    id: 3,
    key: '3',
    name: 'Instagram',
    unit: 'Mg',
    frequency: 'clock',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 2,
  },
  {
    id: 4,
    key: '4',
    name: 'Imported',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 1,
    index: 3,
  },
  {
    id: 5,
    key: '5',
    name: 'Walk-in',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 1,
    index: 4,
  },
  {
    id: 6,
    key: '6',
    name: 'Facebook',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 5,
  },
  {
    id: 7,
    key: '7',
    name: 'Fresha',
    unit: 'Mg',
    frequency: '1 per day',
    route: 'Orally',
    comment: 'Twice per 6 hours after treatment',
    is_active: 0,
    index: 6,
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'leftPadding',
    visible: true,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Units',
    dataIndex: 'unit',
    visible: true,
    sorter: (a, b) => a.unit.length - b.unit.length,
  },
  {
    title: 'Frequency',
    dataIndex: 'frequency',
    visible: true,
    filters: [
      {
        text: '1 per day',
        value: '1 per day',
      },
      {
        text: '6-8 hour',
        value: '6-8 hour',
      },
    ],
    onFilter: (value, record) => record.frequency.indexOf(value) === 0,
    sorter: (a, b) => a.frequency.length - b.frequency.length,
  },
  {
    title: 'Route',
    dataIndex: 'route',
    visible: true,
    sorter: (a, b) => a.route.length - b.route.length,
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    visible: true,
    sorter: (a, b) => a.comment.length - b.comment.length,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    visible: true,
  },
]

export interface SP {
  searchTerm?: string
}

const ServicesTab: FC<SP> = ({ searchTerm, ...rest }) => {
  const services = ['Seasonal Offers', 'The Beauty & Skin Clinic – Prepaid']
  const togglesViews = ['Standard View', 'Detailed View']
  const LeftTabMenuItems = [
    'Classes',
    'Appointments',
    'Enrollments',
    'Arrivals',
    'Pricing',
    'Contracts',
    'Injectables',
  ]
  const [selectedService, setSelectedService] = useState(services[0])
  const [selectedToggleView, setSelectedToggleView] = useState(togglesViews[0])
  const [sourceData, setSourceData] = useState(null)

  useEffect(() => {
    setSourceData(data)
  }, [setSourceData])

  const servicesOverlay = (
    <Menu>
      {services.map((service, key) => (
        <Menu.Item
          key={`page-size-${key}`}
          onClick={() => {
            setSelectedService(service)
          }}
          className={selectedService === service && 'active'}
        >
          {service}
        </Menu.Item>
      ))}
    </Menu>
  )

  const toggleOverlay = (
    <Menu>
      {togglesViews.map((serviceView, key) => (
        <Menu.Item
          key={`page-size-${key}`}
          onClick={() => {
            setSelectedToggleView(serviceView)
          }}
          className={selectedToggleView === serviceView && 'active'}
        >
          {serviceView}
        </Menu.Item>
      ))}
    </Menu>
  )

  const moreBtnOverlay = (
    <Menu>
      <Menu.Item>
        <PlusOutlined /> Add new service
      </Menu.Item>
      <Menu.Item>
        <EditOutlined /> Edit service
      </Menu.Item>
    </Menu>
  )

  const serviceHeader = () => {
    return (
      <div className={styles.servicesSectionHeading}>
        <Dropdown
          overlay={servicesOverlay}
          trigger={['hover']}
          placement="bottomLeft"
        >
          <div>
            <div>{selectedService}</div> <CaretDownFilled />
          </div>
        </Dropdown>
        <div>
          <Dropdown
            overlay={toggleOverlay}
            trigger={['click']}
            placement="bottomRight"
            arrow
          >
            <Button type="default" size="large">
              <MenuFoldOutlined /> Toggle
            </Button>
          </Dropdown>
          <Dropdown
            overlay={moreBtnOverlay}
            trigger={['click']}
            placement="bottomRight"
            arrow
          >
            <span>
              <DotButton />
            </span>
          </Dropdown>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.servicesTabMain}>
      <div>
        <TabMenu
          tabPosition="left"
          menuItems={LeftTabMenuItems}
          className={styles.leftTabMenu}
          disabledKeys={['Classes']}
          activeDefaultKey="1"
          size="large"
        >
          <div></div>
          <div className={styles.appointments}>
            <div>{serviceHeader()}</div>
            <div>
              <Table
                draggable={true}
                dataSource={sourceData?.map((e: { id }) => ({
                  key: e.id,
                  ...e,
                }))}
                columns={columns}
                pagination={false}
                searchTerm={searchTerm}
                noDataBtnText="Services"
                noDataText="service"
              />
            </div>
          </div>
          <div className={styles.appointments}>{serviceHeader()}</div>
          <div className={styles.appointments}>{serviceHeader()}</div>
          <div className={styles.appointments}>{serviceHeader()}</div>
          <div className={styles.appointments}>{serviceHeader()}</div>
          <div className={styles.appointments}>{serviceHeader()}</div>
        </TabMenu>
      </div>
    </div>
  )
}

export default ServicesTab
