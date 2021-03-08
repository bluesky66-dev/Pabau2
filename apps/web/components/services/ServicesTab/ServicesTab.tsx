import React, { FC, useState, useEffect } from 'react'
import {
  TabMenu,
  Table,
  DotButton,
  Pagination,
  Avatar,
  BasicModal as CreateServiceGroup,
  CreateService,
  Input,
  Switch,
  SearchTags,
  ImageSelectorModal,
} from '@pabau/ui'
import { Button, Dropdown, Menu, Popover, Tooltip } from 'antd'
import {
  CaretDownFilled,
  MenuFoldOutlined,
  PlusOutlined,
  EditOutlined,
  VideoCameraOutlined,
  PlusCircleFilled,
  DeleteOutlined,
} from '@ant-design/icons'
import { Donate, File, Folder, Injection, Key, Team, Globe } from '../assets'
import { ReactComponent as Bupa } from '../../../assets/images/bupa.svg'
import { ReactComponent as AxaPPP } from '../../../assets/images/axa-ppp.svg'
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
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
    color: '#faad14',
    edit: true,
  },
]

const columnsView1 = [
  {
    title: 'Name',
    dataIndex: 'name',
    visible: true,
    render: function renderSourceName(val, rowData) {
      return (
        <div className={styles.serviceName}>
          <span
            className={styles.dot}
            style={{
              backgroundColor: `${rowData?.color}`,
              borderColor: `${rowData?.color}`,
            }}
          ></span>
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

const columnsView2 = [
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

const rooms = ['Botox', ' Theraphy', 'Massage', 'Lab']

const equipment = [
  'Equipment A',
  'Equipment B',
  'Equipment C',
  'Equipment D',
  'Equipment E',
  'Equipment F',
  'Equipment G',
]

const contracts = [
  {
    logo: <Bupa />,
    name: 'BUPA',
    type: 'Insurance',
  },
  {
    logo: <AxaPPP />,
    name: 'AXA PPP',
    type: 'Insurance',
  },
]

const employees = [
  { name: 'Jessica Winter', selected: false },
  { name: 'Jeff Hackley', selected: false },
  { name: 'Alexander Wang', selected: false },
  { name: 'Linda Davis', selected: false },
  { name: 'William Tyson', selected: false },
  { name: 'Max Starck', selected: false },
  { name: 'Kyle Walsh', selected: false },
  { name: 'Owen Phillips', selected: false },
  { name: 'Aidan Kelly', selected: false },
  { name: 'Ewan Morgan', selected: false },
  { name: 'Jordan Martin', selected: false },
  { name: 'Grant Dudley', selected: false },
]

const locations = [
  {
    location: 'The London Clinic',
    detail: '20 Devonshire Pl, Marylebone, London W1G 6BW, UK',
    selected: false,
  },
  {
    location: 'Sloan Medical Centre',
    detail: '2 Little London Rd, Meersbrook, Sheffield S8 0YH, UK',
    selected: false,
  },
  {
    location: 'Sheffield Late Night Pharmacy',
    detail: '277 Fulwood Rd, Sheffield S10 3BD, UK',
    selected: false,
  },
]

export interface SP {
  showCreateServiceModal: boolean
  onCloseCreateServiceModal?: () => void
  searchTerm?: string
  updatedCategories?: []
}

export const ServicesTab: FC<SP> = ({
  searchTerm,
  updatedCategories,
  showCreateServiceModal,
  onCloseCreateServiceModal,
}) => {
  const services = ['Seasonal Offers', 'The Beauty & Skin Clinic – Prepaid']
  const togglesViews = ['Standard View', 'Detailed View']
  const [showCreateGroup, setShowCreateGroup] = useState(false)
  const [showImageSelector, setShowImageSelector] = useState(false)
  const [columns, setColumns] = useState(columnsView1)
  const [selectedToggleView, setSelectedToggleView] = useState(togglesViews[0])
  const [selectedService, setSelectedService] = useState(services[0])
  const [paginationState] = useState(true)
  const [sourceData, setSourceData] = useState(null)
  const GroupsItem = ({ onClick }) => {
    const [showOps, setShowOps] = useState(false)
    return (
      <div
        className={styles.groupsItem}
        onMouseEnter={() => setShowOps(true)}
        onMouseLeave={() => setShowOps(false)}
      >
        <span>Groups</span>
        {showOps && (
          <PlusCircleFilled
            style={{
              color: 'var(--primary-color)',
              fontSize: '24px',
              cursor: 'pointer',
            }}
            onClick={() => onClick()}
          />
        )}
      </div>
    )
  }
  const TabMenuItem = ({ title, onEdit, onDelete }) => {
    const [showOps, setShowOps] = useState(false)
    return (
      <div
        className={styles.tabMenuItem}
        onMouseEnter={() => setShowOps(true)}
        onMouseLeave={() => setShowOps(false)}
      >
        <span>{title}</span>
        {showOps && (
          <div className={styles.tabMenuItemOps}>
            <div onClick={() => onEdit()}>
              <EditOutlined />
            </div>
            <div onClick={() => onDelete()}>
              <DeleteOutlined />
            </div>
          </div>
        )}
      </div>
    )
  }
  const LeftTabMenuItems = [
    <React.Fragment key="groups">
      <GroupsItem onClick={() => setShowCreateGroup(true)} />
    </React.Fragment>,
    <React.Fragment key="appointment">
      <TabMenuItem
        title="Appointments"
        onEdit={() => {
          return
        }}
        onDelete={() => {
          return
        }}
      />
    </React.Fragment>,
    <React.Fragment key="enrollments">
      <TabMenuItem
        title="Enrollments"
        onEdit={() => {
          return
        }}
        onDelete={() => {
          return
        }}
      />
    </React.Fragment>,
    <React.Fragment key="Arrivals">
      <TabMenuItem
        title="Arrivals"
        onEdit={() => {
          return
        }}
        onDelete={() => {
          return
        }}
      />
    </React.Fragment>,
    <React.Fragment key="Pricing">
      <TabMenuItem
        title="Pricing"
        onEdit={() => {
          return
        }}
        onDelete={() => {
          return
        }}
      />
    </React.Fragment>,
    <React.Fragment key="Contracts">
      <TabMenuItem
        title="Contracts"
        onEdit={() => {
          return
        }}
        onDelete={() => {
          return
        }}
      />
    </React.Fragment>,
    <React.Fragment key="Injectables">
      <TabMenuItem
        title="Injectables"
        onEdit={() => {
          return
        }}
        onDelete={() => {
          return
        }}
      />
    </React.Fragment>,
  ]

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
          disabledKeys={[0]}
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
                scroll={{ x: 'max-content' }}
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
      <CreateService
        visible={showCreateServiceModal}
        onClose={() => onCloseCreateServiceModal?.()}
        rooms={rooms}
        equipment={equipment}
        contracts={contracts}
        employees={employees}
        locations={locations}
      />
      <CreateServiceGroup
        visible={showCreateGroup}
        modalWidth={500}
        wrapClassName={styles.createServiceGroup}
        title="Create service group"
        onCancel={() => setShowCreateGroup(false)}
      >
        <div className="nameInput">
          <label>Name</label>
          <Input placeHolderText="Enter Name" />
        </div>
        <div style={{ marginTop: '30px' }}>
          <SearchTags
            items={rooms}
            description="Service categories"
            itemType="room"
          />
        </div>
        <div className="chooseImageInput">
          <label>Image</label>
          <Button
            type="default"
            size="small"
            className={styles.chooseImgBtn}
            onClick={() => setShowImageSelector(true)}
          >
            <PlusOutlined />
            Choose from Library
          </Button>
        </div>
        <div className="footerBtnInput">
          <div>
            <label>Active</label>
            <Switch defaultChecked={true} />
          </div>
          <div>
            <Button
              type="default"
              size="large"
              onClick={() => setShowCreateGroup(false)}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button type="primary" size="large">
              Create
            </Button>
          </div>
        </div>
      </CreateServiceGroup>
      <ImageSelectorModal
        visible={showImageSelector}
        initialSearch={''}
        onOk={(image) => {
          setShowImageSelector(false)
        }}
        onCancel={() => {
          setShowImageSelector(false)
        }}
      />
    </div>
  )
}

export default ServicesTab
