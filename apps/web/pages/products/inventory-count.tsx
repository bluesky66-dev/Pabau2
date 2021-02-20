import React from 'react'
import { Layout } from '@pabau/ui'
import './inventory-count.module.less'

/* eslint-disable-next-line */
export interface InventoryCountProps {}

export function InventoryCount(props: InventoryCountProps) {
  return (
    <div>
      <Layout active={'products/inventory-count'}>
        <h1>Welcome to inventory-count!</h1>
      </Layout>
    </div>
  )
}

export default InventoryCount
