import React, { FC } from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'
import styles from './Breadcrumb.module.less'

interface P {
  breadcrumbItems: string[]
}

export const Breadcrumb: FC<P> = ({ breadcrumbItems }) => {
  return (
    <AntBreadcrumb separator=">" className={styles.breadcrumb}>
      {breadcrumbItems.map((breadCrumb, index) => {
        return <AntBreadcrumb.Item key={index}>{breadCrumb}</AntBreadcrumb.Item>
      })}
    </AntBreadcrumb>
  )
}
