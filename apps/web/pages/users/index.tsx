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
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    img: austin,
    vacationPending: true,
    available: true,
    active: true,
  },
  {
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: alex,
    vacationPending: false,
    available: true,
    active: true,
  },
  {
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacationPending: false,
    available: true,
  },
  {
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacationPending: false,
    available: true,
    active: true,
    img: james,
  },
  {
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
  },
  {
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacationPending: false,
    available: true,
  },
  {
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacationPending: false,
    available: true,
    active: false,
    img: austin,
  },
  {
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: james,
    active: true,
  },
  {
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacationPending: true,
    available: false,
  },
  {
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    vacationPending: false,
    available: true,
    active: true,
    img: austin,
  },
  {
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
  },
  {
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: linda,
    active: false,
    vacationPending: false,
    available: true,
  },
  {
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
  },
  {
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: arya,
    active: false,
    vacationPending: true,
    available: false,
  },
  {
    name: 'Andrew',
    surname: 'Davis',
    title: 'Aesthetician',
    img: austin,
    active: true,
  },
  {
    name: 'Frances',
    surname: 'Butler',
    title: 'Manager',
    img: alex,
    active: false,
    vacationPending: true,
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
              dummyUsers.map((user, key) => {
                return (
                  <UserTile
                    key={key}
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
        </Layout>
      </div>
    </>
  )
}

export default Index
