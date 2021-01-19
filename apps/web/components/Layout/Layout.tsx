import React, { FC } from 'react'
import { Layout as PabauLayout, LayoutProps, CheckIsMobileDevice, PabauProvider } from '@pabau/ui'
import Search from '../Search'

const Layout: FC<LayoutProps> = ({ children, ...props }) => (
  <PabauProvider value={{ isMobileDevice: CheckIsMobileDevice() }}>
    <PabauLayout searchRender={() => <Search />} {...props}>
      {children}
    </PabauLayout>
  </PabauProvider>
)

export default Layout
