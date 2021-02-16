import React, { FunctionComponent, useState } from 'react'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../../setup/CommonHeader'
import { Pagination, UserTile, TabMenu, UserProps, Breadcrumb } from '@pabau/ui'
import { Filter } from '../../../components/Setup/Users'
import { Typography } from 'antd'
import styles from './Users.module.less'

//TODO remove dummy image data
import austin from '../../../../../libs/ui/src/assets/images/users/austin.png'
import james from '../../../../../libs/ui/src/assets/images/users/james.png'
import linda from '../../../../../libs/ui/src/assets/images/users/linda.png'
import arya from '../../../../../libs/ui/src/assets/images/users/arya.png'
import alex from '../../../../../libs/ui/src/assets/images/users/alex.png'
const { Title } = Typography

const mockUsers = [
  //TODO Remove once users endpoints are implemented
  {
    id: 1,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    img: austin,
    vacation: {
      scheduled: true,
    },
    owner: true,
    available: true,
    active: true,
    admin: true,
  },
  {
    id: 2,
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: alex,
    vacation: {
      scheduled: true,
    },
    available: true,
    active: true,
  },
  {
    id: 3,
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacation: {
      scheduled: true,
      startDate: '19/02/2021',
      endDate: '27/03/2021',
    },
    available: true,
    admin: true,
  },
  {
    id: 4,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacation: {
      scheduled: true,
      startDate: '19/02/2021',
      endDate: '27/03/2021',
    },
    available: true,
    active: true,
    img: james,
  },
  {
    id: 5,
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
  },
  {
    id: 6,
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacation: {
      scheduled: true,
      startDate: '19/02/2021',
      endDate: '27/03/2021',
    },
    available: true,
    admin: true,
  },
  {
    id: 7,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacation: {
      scheduled: true,
      startDate: '19/02/2021',
      endDate: '27/03/2021',
    },
    available: true,
    active: false,
    img: austin,
  },
  {
    id: 8,
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: james,
    active: true,
  },
  {
    id: 9,
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacationPending: true,
    available: false,
  },
  {
    id: 10,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacation: {
      scheduled: true,
      startDate: '19/02/2021',
      endDate: '27/03/2021',
    },
    available: true,
    active: true,
    img: austin,
  },
  {
    id: 11,
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
  },
  {
    id: 22,
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: linda,
    active: false,
    vacation: {
      scheduled: true,
      startDate: '19/02/2021',
      endDate: '27/03/2021',
    },
    available: true,
  },
  {
    id: 23,
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
    admin: true,
  },
  {
    id: 24,
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacationPending: true,
    available: false,
  },
  {
    id: 25,
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
  },
  {
    id: 26,
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: alex,
    active: false,
    available: false,
  },
]

const Index: FunctionComponent = () => {
  const [users] = useState<UserProps[]>(mockUsers)

  return (
    <>
      <CommonHeader />
      <div>
        <Layout>
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <Breadcrumb
                breadcrumbItems={[
                  {
                    path: '/team',
                    breadcrumbName: 'Team',
                  },
                  {
                    path: '/team/users',
                    breadcrumbName: 'Users',
                  },
                ]}
              />
              <Title>Users</Title>
            </div>
            <div className={styles.headerFilter}>
              <Filter
                onSearch={() => console.log('search')}
                onFilterSource={() => console.log('filter')}
                schema={null}
              >
                Filter
              </Filter>
            </div>
          </div>
          <div className={styles.tabWrapper}>
            <TabMenu
              menuItems={['Staff Members', 'Group Permissions']}
              tabPosition={'top'}
              minHeight={'0'}
            >
              <div className={styles.container}>
                {users?.map((user) => {
                  return (
                    <UserTile
                      key={user.id}
                      name={user.name}
                      surname={user.surname}
                      title={user.title}
                      vacation={user.vacation}
                      active={user.active}
                      available={user.available}
                      owner={user.owner}
                      img={user.img}
                      admin={user.admin}
                    />
                  )
                })}
              </div>
              <div>
                <div className={styles.container} />
              </div>
            </TabMenu>
          </div>
          <div className={styles.footer}>
            <Pagination
              total={16}
              defaultPageSize={10}
              showSizeChanger={false}
              onChange={() => console.log('on change')}
              pageSize={40}
              current={1}
              showingRecords={16}
            />
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Index
