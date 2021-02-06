import React, { FC, ReactNode } from 'react'
import { PabauPlus } from '../badge/Badge'
import styles from './Reviews.module.less'
import { Table } from 'antd'

export interface ReviewFieldType {
  icon: ReactNode
  score: string
  reviews: number
  mostRecent: string
  isPlus: boolean
  key: number
}

export interface ReviewsProps {
  sourceFieldTitle?: string
  scoreFieldTitle?: string
  reviewFieldTitle?: string
  mostRecentTitle?: string
  fields?: ReviewFieldType[]
}

export const Reviews: FC<ReviewsProps> = ({
  sourceFieldTitle,
  scoreFieldTitle,
  reviewFieldTitle,
  mostRecentTitle,
  fields,
}) => {
  const columns = [
    {
      title: sourceFieldTitle,
      dataIndex: 'icon',
      key: 'icon',
    },
    {
      title: scoreFieldTitle,
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: reviewFieldTitle,
      dataIndex: 'reviews',
      key: 'reviews',
    },
    {
      title: mostRecentTitle,
      dataIndex: 'mostRecent',
      key: 'mostRecent',
    },
    {
      title: '',
      dataIndex: 'isPlus',
      key: 'isPlus',
      // eslint-disable-next-line react/display-name
      render: (text, record) => record.isPlus && <PabauPlus label="Plus" />,
    },
  ]

  return (
    <div className={styles.reviewsWrapper}>
      <Table columns={columns} dataSource={fields} pagination={false} />
    </div>
  )
}

export default Reviews
