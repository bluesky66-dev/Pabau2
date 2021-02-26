import React from 'react'
import Layout from '../../components/Layout/Layout'
import './list.module.less'

/* eslint-disable-next-line */
export interface ListProps {}

export function List(props: ListProps) {
  return (
    <div>
      <Layout active={'products/list'}>
        <h1>Welcome to list!</h1>
      </Layout>
    </div>
  )
}

export default List
