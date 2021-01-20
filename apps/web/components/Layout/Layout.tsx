import React, { FC } from 'react'
import { Layout as PabauLayout, LayoutProps } from '@pabau/ui'
import Search from '../Search'

const Layout: FC<LayoutProps> = ({ children, ...props }) => (
  <PabauLayout searchRender={() => <Search />} {...props}>
    {children}
  </PabauLayout>
)

export default Layout
