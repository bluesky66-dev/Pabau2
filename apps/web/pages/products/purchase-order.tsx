import React from 'react'
import { Layout } from '@pabau/ui'
import './purchase-order.module.less'

/* eslint-disable-next-line */
export interface PurchaseOrderProps {}

export function PurchaseOrder(props: PurchaseOrderProps) {
  return (
    <div>
      <Layout active={'products/purchase-order'}>
        <h1>Welcome to purchase-order!</h1>
      </Layout>
    </div>
  )
}

export default PurchaseOrder
