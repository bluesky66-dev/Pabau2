import React, { FC } from 'react'
import { Layout as PabauLayout, LayoutProps } from '@pabau/ui'
import Search from '../Search'

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  const onCreateChannel = (name, description, isPrivate) => {
    //add mutation for create Channel here
    console.log('onCreateChannel--', name, description, isPrivate)
  }

  const onMessageType = (e) => {
    //add mutation for send message textbox
  }

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
