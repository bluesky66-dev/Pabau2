import React, { FC } from 'react'
import { Pagination as AntPagination } from 'antd'
import { PaginationProps } from 'antd/es/pagination'
import styles from './Pagination.module.less'

export const Pagination: FC<PaginationProps> = ({ ...props }) => {
  return (
    <div className={styles.tableFooter}>
      <div>
        <p className={styles.paginationText}>
          Showing <span>10</span> results from <span>50</span>
        </p>
      </div>
      <AntPagination {...props} className={styles.tblPagination} />
    </div>
  )
}
