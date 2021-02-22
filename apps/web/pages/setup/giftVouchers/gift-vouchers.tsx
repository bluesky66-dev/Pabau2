import React, { FC } from 'react'
import className from 'classnames'
import { VoucherCard, TabMenu } from '@pabau/ui'
import styles from './gift-vouchers.module.less'

/* eslint-disable-next-line */
export interface GiftVouchersProps {}

const GiftVouchers: FC<GiftVouchersProps> = () => {
  return (
    <div className={className(styles.giftVouchersMain)}>
      <h1>Welcome to giftVouchers!</h1>
    </div>
  )
}

export default GiftVouchers
