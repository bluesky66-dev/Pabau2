import React, { FC } from 'react'
import { Layout as AntLayout } from 'antd'
import { LayoutProps } from 'antd/lib/layout'
const AntHeader = AntLayout.Header

export const MobileHeader: FC<LayoutProps> = (props) => {
  return <AntHeader {...props}>{props.children}</AntHeader>
}

export default MobileHeader
