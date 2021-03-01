import React, { FC, useEffect, useState } from 'react'
import {
  Layout as PabauLayout,
  LayoutProps,
  Notification,
  NotificationType,
} from '@pabau/ui'
import Search from '../Search'

const onMessageType = (e) => {
  //add mutation for send message textbox
}

const onCreateChannel = (name, description, isPrivate) => {
  //add mutation for create Channel here
  console.log('onCreateChannel--', name, description, isPrivate)
}

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <PabauLayout
      searchRender={() => <Search />}
      onCreateChannel={onCreateChannel}
      onMessageType={onMessageType}
      {...props}
    >
      {children}
    </PabauLayout>
  )
}

export default Layout
