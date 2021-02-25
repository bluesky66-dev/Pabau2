import React from 'react'
import Layout from '../../components/Layout/Layout'
import './suppliers.module.less'

/* eslint-disable-next-line */
export interface SuppliersProps {}

export function Suppliers(props: SuppliersProps) {
  return (
    <div>
      <Layout active={'products/suppliers'}>
        <h1>Welcome to suppliers!</h1>
      </Layout>
    </div>
  )
}

export default Suppliers
