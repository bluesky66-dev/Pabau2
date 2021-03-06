import React, { FC, useState, useEffect } from 'react'
import CommonHeader from '../common-header'
import Layout from '../../../components/Layout/Layout'
import { CustomScrollbar } from '../../../components/CustomScrollbar'
import { Typography, Row, Popover, List } from 'antd'
import {
  Breadcrumb,
  SetupSearchInput,
  Checkbox,
  EmployeeListModel,
} from '@pabau/ui'
import styles from './index.module.less'
import dynamic from 'next/dynamic'
import Highlighter from 'react-highlight-words'
import { UserOutlined, FileFilled } from '@ant-design/icons'
import Logo from '../../../assets/images/logo.svg'
import userAvatar from '../../../assets/images/user-avatar.svg'

const ActivityChart = dynamic(
  () => import('../../../components/activity-logs/ActivityChart'),
  {
    ssr: false,
  }
)

const filterRecords = {
  marketingSourceFilterData: [
    {
      key: 0,
      title: 'All marketing source activity',
      value: false,
    },
    {
      key: 1,
      title: 'Created marketing sources',
      value: false,
    },
    {
      key: 2,
      title: 'Updated marketing sources',
      value: false,
    },
    {
      key: 3,
      title: 'Deleted marketing sources',
      value: false,
    },
  ],
  mediaFilterData: [
    {
      key: 0,
      title: 'All media activity',
      value: false,
    },
    {
      key: 1,
      title: 'Added media',
      value: false,
    },
  ],
  securityFilterData: [
    {
      key: 0,
      title: 'Failed login attempt',
      value: false,
    },
    {
      key: 1,
      title: 'Successful login',
      value: false,
    },
  ],
}
export interface FilerDataItems {
  key: number
  title: string
  value: boolean
}
const Data = [
  {
    key: 8,
    icon: <UserOutlined />,
    user: 'Anonymous user from 5.9.113.0',
    time: '10:21',
    updated_time: '20 minutes ago',
    upload_file_title:
      'Failed to login with username “Pabau” (incorrect password entered)',
    file_name: '',
    file_size: '12 Mb',
    file_attachment: false,
  },
  {
    key: 1,
    icon: Logo,
    user: 'You',
    time: '10:21',
    updated_time: 'about 5 hour ago',
    upload_file_title: 'Updated page',
    file_name: 'Care plus',
    file_size: '12 Mb',
    file_attachment: false,
  },
  {
    key: 2,
    icon: Logo,
    user: 'You',
    time: '10:21',
    updated_time: 'about 5 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '20 Mb',
  },
  {
    key: 3,
    icon: Logo,
    user: 'You',
    time: '9:25',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '2 Mb',
  },
  {
    key: 4,
    icon: Logo,
    user: 'You',
    time: '9:20',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '657 Kb',
  },
  {
    key: 5,
    icon: Logo,
    user: 'You',
    time: '9:20',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Edited file',
    file_name: 'Go Paperless Health Records',
    file_attachment: false,
    file_size: '657 Kb',
  },
  {
    key: 4,
    icon: Logo,
    user: 'You',
    time: '9:20',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '657 Kb',
  },
]

const list = [
  { label: 'Last 7 Days', value: false, key: 0 },
  { label: 'Last 14 Days', value: false, key: 1 },
  { label: 'Last 30 Days', value: false, key: 2 },
  { label: 'Last 60 Days', value: false, key: 3 },
  { label: 'Last 90 Days', value: false, key: 4 },
]

const userList = [
  {
    userId: '1',
    userAvatar: userAvatar,
    username: ' Will Lawsons',
    isSelected: false,
  },
  {
    userId: '2',
    userAvatar: userAvatar,
    username: ' Will Lawsons',
    isSelected: false,
  },
  {
    userId: '3',
    userAvatar: userAvatar,
    username: ' Will Lawsons',
    isSelected: false,
  },
  {
    userId: '4',
    userAvatar: userAvatar,
    username: ' Will Lawsons',
    isSelected: false,
  },
]

export interface FilerDataProps {
  [key: string]: FilerDataItems[]
}

export const Index: FC = () => {
  const [filterData, setFilterData] = useState<FilerDataProps>(filterRecords)
  const [isFilterVisible, setFilterVisible] = useState<boolean>(false)
  const [isDayFilterVisible, setDayFilterVisible] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentFilter, setCurrentFilter] = useState<FilerDataItems[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [daysList, setDaysList] = useState([...list])
  const [day, setDay] = useState('')

  const onFilterChange = (key: string, value: boolean, index: number) => {
    const tempRecords = { ...filterData }
    tempRecords[key][index].value = value
    setFilterData(tempRecords)
  }

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm)
    if (searchTerm !== '') {
      const temp = { ...filterRecords }
      const filterObject = {}
      for (const key of Object.keys(temp)) {
        const data = temp[key]
        const response = []
        for (const a of data) {
          if (a.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            response.push(a)
          }
        }
        filterObject[key] = response
      }
      setFilterData(filterObject)
    } else {
      setFilterData(filterRecords)
    }
  }

  useEffect(() => {
    const temp = { ...filterData }
    const response = []
    for (const key of Object.keys(temp)) {
      const data = temp[key]
      for (const a of data) {
        if (a.value === true) {
          response.push(a)
        }
      }
    }
    setCurrentFilter(response)
  }, [filterData])

  const onChangeDay = (val, name) => {
    const selectedList = [...daysList]
    for (const item of selectedList) {
      if (item.label === name) {
        item.value = val
        setDay(item.label)
      } else {
        item.value = false
      }
    }
    setDaysList(selectedList)
  }

  const content = (
    <div className={styles.actionsContent}>
      <CustomScrollbar autoHide={true} className={styles.customScrollbar}>
        <SetupSearchInput onChange={handleSearch} />
        {filterData.marketingSourceFilterData.length > 0 && (
          <span className={styles.actionsTitle}>Marketing Sources</span>
        )}
        <div className={styles.marketingWrapper}>
          {filterData.marketingSourceFilterData.map((data) => (
            <div key={data.key} className={styles.actionsList}>
              <Checkbox
                checked={data.value}
                onChange={(e) =>
                  onFilterChange(
                    'marketingSourceFilterData',
                    e.target.checked,
                    data.key
                  )
                }
              >
                <Highlighter
                  searchWords={[searchValue]}
                  textToHighlight={data.title}
                />
              </Checkbox>
            </div>
          ))}
        </div>
        {filterData.mediaFilterData.length > 0 && (
          <span className={styles.actionsTitle}>Media</span>
        )}
        <div className={styles.mediaWrapper}>
          {filterData.mediaFilterData.map((data) => (
            <div key={data.key} className={styles.actionsList}>
              <Checkbox
                checked={data.value}
                onChange={(e) =>
                  onFilterChange('mediaFilterData', e.target.checked, data.key)
                }
              >
                <Highlighter
                  searchWords={[searchValue]}
                  textToHighlight={data.title}
                />
              </Checkbox>
            </div>
          ))}
        </div>
        {filterData.securityFilterData.length > 0 && (
          <span className={styles.actionsTitle}>security</span>
        )}
        <div className={styles.securityWrapper}>
          {filterData.securityFilterData.map((data) => (
            <div key={data.key} className={styles.actionsList}>
              <Checkbox
                checked={data.value}
                onChange={(e) =>
                  onFilterChange(
                    'securityFilterData',
                    e.target.checked,
                    data.key
                  )
                }
              >
                <Highlighter
                  searchWords={[searchValue]}
                  textToHighlight={data.title}
                />
              </Checkbox>
            </div>
          ))}
        </div>
      </CustomScrollbar>
    </div>
  )

  const model = (
    <div className={styles.actionsContent}>
      {daysList.map((item) => (
        <div className={styles.actionsList} key={item.key}>
          <Checkbox
            checked={item.value}
            onChange={(e) => onChangeDay(e.target.checked, item.label)}
          >
            {item.label}
          </Checkbox>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.activityMainWrapper}>
          <div className={styles.activityHead}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: 'setup' },
                  {
                    breadcrumbName: 'Activity Logs',
                    path: '',
                  },
                ]}
              />
              <Typography.Title>Activity Logs</Typography.Title>
            </div>
            <div className={styles.activitySerach}>
              <SetupSearchInput />
            </div>
          </div>
          <div className={styles.activityShowingInfo}>
            <Row>
              <div>
                <span className={styles.text}>Showing</span>
                <EmployeeListModel
                  userList={userList}
                  label={'All Employees'}
                  ListTitle={'Select an Employee'}
                />
                <span className={styles.text}>By</span>
                <Popover
                  content={content}
                  title="Select actions"
                  placement="bottomRight"
                  trigger="click"
                  visible={isFilterVisible}
                  onVisibleChange={(visible) => setFilterVisible(visible)}
                  overlayClassName={styles.actionsPopover}
                >
                  <span
                    className={styles.highlightText}
                    onClick={() => setFilterVisible(true)}
                  >
                    {' '}
                    All Actions
                  </span>
                </Popover>
                <span className={styles.text}>For the</span>
                <Popover
                  content={model}
                  title="Select days"
                  placement="bottomRight"
                  trigger="click"
                  visible={isDayFilterVisible}
                  onVisibleChange={(visible) => setDayFilterVisible(visible)}
                  overlayClassName={styles.actionsPopover}
                >
                  <span
                    className={styles.highlightText}
                    onClick={() => setDayFilterVisible(true)}
                  >
                    {' '}
                    {day === '' ? 'Last 30 days' : day}
                  </span>
                </Popover>
              </div>
            </Row>
          </div>

          <div className={styles.chartBlock}>
            <div className={styles.chartCard}>
              <ActivityChart />
            </div>
          </div>

          <div className={styles.activityListBlock}>
            <div className={styles.activityListCard}>
              <List
                itemLayout="horizontal"
                className={styles.list}
                dataSource={Data}
                renderItem={(item) => (
                  <List.Item>
                    <div className={styles.box}>
                      <List.Item.Meta
                        className={styles.icon}
                        avatar={
                          typeof item.icon === 'object' ? (
                            item.icon
                          ) : (
                            <img src={item.icon} alt="" />
                          )
                        }
                      />
                      <div className={styles.content}>
                        <div className={styles.userTime}>
                          {item.user} &middot; <span>{item.time}</span>&nbsp;
                          <span>({item.updated_time})</span>
                        </div>
                        <div className={styles.userContent}>
                          <span>{item.upload_file_title}</span>&nbsp;
                          <span className={styles.label}>
                            {item.file_name === '' ? null : (
                              <q> {item.file_name}</q>
                            )}
                          </span>
                        </div>
                        {item.file_attachment === true && (
                          <div className={styles.userFile}>
                            <FileFilled />
                            <span className={styles.fileSize}>
                              {item.file_size}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
