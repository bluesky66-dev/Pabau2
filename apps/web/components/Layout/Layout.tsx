import React, { FC } from 'react'
import { Layout as PabauLayout, LayoutProps } from '@pabau/ui'
import Search from '../Search'

const onMessageType = () => {
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
