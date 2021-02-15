import React, { FunctionComponent } from 'react'
import Layout from '../../components/Layout/Layout'
import CommonHeader from '../../pages/setup/CommonHeader'
import { UserTile } from '@pabau/ui'
import styles from './Users.module.less'

//TODO Using dummy images, refactor later on for production
import austin from '../../../../libs/ui/src/assets/images/users/austin.png'
import james from '../../../../libs/ui/src/assets/images/users/james.png'
import linda from '../../../../libs/ui/src/assets/images/users/linda.png'
import arya from '../../../../libs/ui/src/assets/images/users/arya.png'
import alex from '../../../../libs/ui/src/assets/images/users/alex.png'

const dummyUsers = [
  //TODO Remove once users endpoints are implemented
  {
    id: 1,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    img: austin,
    vacationPending: true,
    available: true,
    active: true,
    owner: true,
  },
  {
    id: 2,
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: alex,
    vacation: {
      scheduled: false,
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
      scheduled: false,
    },
    available: true,
  },
  {
    id: 4,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacation: {
      scheduled: false,
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
      scheduled: false,
    },
    available: true,
  },
  {
    id: 7,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacation: {
      scheduled: false,
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
    vacation: {
      scheduled: false,
      start: '2020-02-02',
      end: '2020-02-15',
    },
  },
  {
    id: 10,
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacation: {
      scheduled: false,
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
      scheduled: false,
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
  },
  {
    id: 24,
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacationPending: true,
    vacation: {
      scheduled: false,
      start: '2020-02-02',
      end: '2020-02-15',
    },
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
    vacationPending: true,
    vacation: {
      scheduled: false,
      start: '2020-02-02',
      end: '2020-02-15',
    },
    available: false,
  },
]

const Index: FunctionComponent = () => {
  return (
    <>
      <CommonHeader />
      <div>
        <Layout>
          <div className={styles.container}>
            {dummyUsers &&
              dummyUsers.map((user) => {
                return (
                  <UserTile
                    key={user.id}
                    name={user.name}
                    surname={user.surname}
                    title={user.title}
                    vacation={user.vacation}
                    active={user.active}
                    available={user.available}
                    img={user.img}
                    owner={user.owner}
                  />
                )
              })}
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Index
