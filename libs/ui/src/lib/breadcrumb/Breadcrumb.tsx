import React, { FC } from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'
import styles from './Breadcrumb.module.less'
import Link from 'next/link'
export interface BreadcrumbItemInterface {
  path: string
  breadcrumbName: string
  children?: Array<{
    path: string
    breadcrumbName: string
  }>
}
interface P {
  breadcrumbItems: BreadcrumbItemInterface[]
}

export const Breadcrumb: FC<P> = ({ breadcrumbItems }) => {
  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link href={'/' + paths}>{route.breadcrumbName}</Link>
    )
  }

  return (
    <AntBreadcrumb
      separator=">"
      className={styles.breadcrumb}
      itemRender={itemRender}
      routes={breadcrumbItems}
    />
  )
}

export default Breadcrumb
