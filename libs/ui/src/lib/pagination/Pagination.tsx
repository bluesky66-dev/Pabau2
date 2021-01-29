import React, { FC } from 'react'
import { Pagination as AntPagination } from 'antd'
import { PaginationProps } from 'antd/es/pagination'
import styles from './Pagination.module.less'

interface PaginateProps {
  showingRecords: number
}
export const Pagination: FC<PaginateProps & PaginationProps> = ({
  showingRecords,
  ...props
}) => {
  return (
    <div className={styles.tableFooter}>
      <div>
        <p className={styles.paginationText}>
          Showing <span>{showingRecords}</span> results from{' '}
          <span>{props.total}</span>
        </p>
      </div>
      <AntPagination {...props} className={styles.tblPagination} />
    </div>
  )
}
