import React, { FunctionComponent } from 'react'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../CommonHeader'
import { Pagination, UserTile, TabMenu } from '@pabau/ui'
import { Filter } from '../../../components/modules/setup/users'
import { Breadcrumb } from '@pabau/ui'
import { Typography } from 'antd'
import styles from './Users.module.less'
import { mockUsers } from '../../../components/modules/setup/users/mock'
const { Title } = Typography

const Index: FunctionComponent = () => {
  return (
    <>
      <CommonHeader />
      <div>
        <Layout>
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <Breadcrumb breadcrumbItems={['Setup', 'Users']} />
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
                {mockUsers &&
                  mockUsers.map((user) => {
                    return (
                      <UserTile
                        key={user.id}
                        name={user.name}
                        surname={user.surname}
                        title={user.title}
                        vacation={user.vacationPending}
                        active={user.active}
                        available={user.available}
                        img={user.img}
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
