import { FC } from 'react'
import { Layout as PabauLayout, LayoutProps } from '@pabau/ui'
import Search from '../Search'

const Layout: FC<LayoutProps> = ({ children }) => (
  <PabauLayout searchRender={() => <Search />}>{children}</PabauLayout>
)

export default Layout
