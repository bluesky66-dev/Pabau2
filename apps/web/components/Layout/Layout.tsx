import React, { FC } from 'react'
import { Layout as PabauLayout, LayoutProps, Offline } from '@pabau/ui'
import Search from '../Search'
import { Offline as OfflineProvider } from 'react-detect-offline'
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
      <OfflineProvider polling={{ url: 'https://ipv4.icanhazip.com' }}>
        <Offline
          time={15}
          message="Connection lost. Reconnecting in"
          iconColor="#008000"
          buttonLabel="Reconnect"
        />
      </OfflineProvider>
      {children}
    </PabauLayout>
  )
}

export default Layout
