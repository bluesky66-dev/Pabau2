import React, { FC, useState, useEffect } from 'react'
import { TabMenu, Table, DotButton, Pagination, Avatar } from '@pabau/ui'
import { Button, Dropdown, Menu, Popover, Tooltip } from 'antd'
import {
  CaretDownFilled,
  MenuFoldOutlined,
  PlusOutlined,
  EditOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Donate, File, Folder, Injection, Key, Team, Globe } from '../assets'
import Label from '../StatusLabel/label'
import styles from './services_tab.module.less'

const data = [
  {
    id: 1,
    key: '1',
    name: 'Online Consulation',
    duration: '1 hour 25 min',
    staff: '4',
    price: '£100–300',
    index: 1,
    status: 'sell',
    edit: true,
  },
  {
    id: 2,
    key: '2',
    name: '3 ml Contour',
    duration: '1 hour 25 min',
    staff: '8',
    price: '£300',
    index: 2,
    status: 'both',
    edit: true,
  },
  {
    id: 3,
    key: '3',
    name: '2 ml Contour',
    duration: '1 hour 25 min',
    staff: '12',
    price: '£900',
    index: 3,
    status: 'both',
    edit: true,
  },
  {
    id: 4,
    key: '4',
    name: 'Elemis peptide facial & brow wax & tint',
    duration: '1 hour 25 min',
    staff: '5',
    price: '£900',
    index: 4,
    status: 'sell',
    edit: true,
  },
  {
    id: 5,
    key: '5',
    name: '1 ml filler',
    duration: '1 hour 25 min',
    staff: '4',
    price: '£900',
    index: 5,
    status: 'both',
    edit: true,
  },
  {
    id: 6,
    key: '6',
    name: 'Facebook',
    duration: '1 hour 25 min',
    staff: '8',
    price: '£900',
    index: 6,
    status: 'sell',
    edit: true,
  },
  {
    id: 7,
    key: '7',
    name: 'Fresha',
    duration: '1 hour 25 min',
    staff: '10',
    price: '£900',
    index: 7,
    status: 'both',
    edit: true,
  },
  {
    id: 8,
    key: '8',
    name: 'Fresha',
    duration: '1 hour 25 min',
    staff: '6',
    price: '£900',
    index: 8,
    status: 'both',
    edit: true,
  },
  {
    id: 9,
    key: '9',
    name: 'Fresha',
    duration: '1 hour 25 min',
    staff: '19',
    price: '£900',
    index: 9,
    status: 'sell',
    edit: true,
  },
  {
    id: 10,
    key: '10',
    name: 'Fresha',
    duration: '1 hour 25 min',
    staff: '14',
    price: '£900',
    index: 10,
    status: 'sell',
    edit: true,
  },
]

const columnsView2 = [
  {
    title: 'Name',
    dataIndex: 'name',
    visible: true,
    render: function renderSourceName(val) {
      return (
        <div className={styles.serviceName}>
          <span className={styles.dot}></span>
          <span>
            <VideoCameraOutlined />
          </span>
          <span>{val}</span>
        </div>
      )
    },
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    visible: true,
  },
  {
    title: 'Staff assigned',
    dataIndex: 'staff',
    visible: true,
    render: function renderSourceName(val) {
      return (
        <div className={styles.staff}>
          <Popover
            trigger="hover"
            content={() => {
              return (
                <div className="avatarsPopover">
                  <span>
                    <Avatar name={val} />
                  </span>
                  <span>
                    <Avatar name={val} />
                  </span>
                  <span>
                    <Avatar name={val} />
                  </span>
                  <span>
                    <Avatar name={val} />
                  </span>
                </div>
              )
            }}
          >
            <span className={styles.staffCount}>{val}</span>
          </Popover>
        </div>
      )
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    visible: true,
  },
]

const columnsView1 = [
  {
    title: 'Name',
    dataIndex: 'name',
    visible: true,
    width: '50%',
    render: function renderSourceName(val) {
      return (
        <div className={styles.serviceName}>
          <span>{val}</span>
        </div>
      )
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    visible: true,
    width: '25%',
    render: function renderSourceName(val) {
      return (
        <div>
          <Label type={`${val}`} />
        </div>
      )
    },
  },
  {
    title: '',
    dataIndex: 'edit',
    visible: true,
    width: '25%',
    render: function renderSourceName() {
      return (
        <div className={styles.editIconsDiv}>
          <Tooltip placement="top" title="Prompt Text">
            <span>
              <Donate />
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <span>
              <Key />
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <span>
              <File />
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <span>
              <Globe />
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <span>
              <Folder />
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <span>
              <Injection />
            </span>
          </Tooltip>
          <Tooltip placement="top" title="Prompt Text">
            <span>
              <Team />
            </span>
          </Tooltip>
        </div>
      )
    },
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

  const [columns, setColumns] = useState(columnsView2)
  const [selectedToggleView, setSelectedToggleView] = useState(togglesViews[1])
  const [selectedService, setSelectedService] = useState(services[0])
  const [paginationState] = useState(true)
  const [sourceData, setSourceData] = useState(null)

  useEffect(() => {
    setSourceData(data)
  }, [setSourceData])

  const setTableView = (view) => {
    setSelectedToggleView(view)
    switch (view) {
      case togglesViews[0]:
        setColumns(columnsView1)
        break
      case togglesViews[1]:
        setColumns(columnsView2)
        break
      default:
        return
    }
  }

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
          onClick={() => setTableView(serviceView)}
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
        <EditOutlined /> Edit category
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

  const serviceFooter = () => {
    return (
      <div>
        {paginationState && (
          <div className={styles.paginationDiv}>
            <Pagination
              showingRecords={sourceData?.length}
              defaultCurrent={1}
              total={sourceData?.length}
              pageSize={10}
            />
          </div>
        )}
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
          minHeight="50vh"
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
                footer={serviceFooter}
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
