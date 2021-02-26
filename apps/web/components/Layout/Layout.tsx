import React, { FC, useEffect, useState } from 'react'
import {
  Layout as PabauLayout,
  LayoutProps,
  Notification,
  NotificationType,
} from '@pabau/ui'
import { gql, useMutation } from '@apollo/client'
import Search from '../Search'
import Login from '../../pages/login'

const onMessageType = (e) => {
  //add mutation for send message textbox
}

const onCreateChannel = (name, description, isPrivate) => {
  //add mutation for create Channel here
  console.log('onCreateChannel--', name, description, isPrivate)
}

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  const [authenticated, authenticate] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      authenticate(true)
    }
  }, [authenticated])
  return authenticated ? (
    <PabauLayout
      searchRender={() => <Search />}
      onCreateChannel={onCreateChannel}
      onMessageType={onMessageType}
      {...props}
    >
      {children}
    </PabauLayout>
  ) : (
    <Login />
  )
}

export default Layout
