import React from 'react'
import { Layout } from '@pabau/ui'
import './users.module.less'

/* eslint-disable-next-line */
export interface UsersProps {}

export function Users(props: UsersProps) {
  return (
    <div>
      <Layout active={'/team/users'}>
        <h1>Welcome to users!</h1>
      </Layout>
    </div>
  )
}

export default Users
