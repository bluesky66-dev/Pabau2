import React, { FC } from 'react'
import { Row } from 'antd'
import { Button } from '@pabau/ui'
import styles from './index.module.less'
import checkboxOutlined from '../../../assets/images/checkbox-outlined.svg'

interface P {
  method: string
  listItems: Array<string>
  icon: string
  iconClass: string
}

const PaymentMethod: FC<P> = ({
  children,
  method,
  listItems,
  icon,
  iconClass,
}) => {
  const listItemRender = listItems.map((listItem, i) => {
    return (
      <div key={i} className={styles.listItem}>
        <img src={checkboxOutlined} alt="check outlined" />
        <span>{listItem}</span>
      </div>
    )
  })

  return (
    <Row className={styles.paymentMethodCard}>
      <div className={styles.methodIconBox}>
        <img src={icon} className={iconClass} alt={method} />
      </div>
      <div className={styles.methodMain}>
        <div>
          <h4>{method}</h4>
          {listItemRender}
        </div>
        <Button className={styles.methodButton}>Connect</Button>
      </div>
    </Row>
  )
}

export default PaymentMethod
