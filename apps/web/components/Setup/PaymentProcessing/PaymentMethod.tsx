import React, { FC } from 'react'
import { Row } from 'antd'
import { Button, ButtonTypes } from '@pabau/ui'
import styles from './index.module.less'
import checkboxOutlined from '../../../assets/images/checkbox-outlined.svg'

interface P {
  method: string
  listItems: Array<string>
  icon: string
  iconClass: string
  buttonText?: string
}

const PaymentMethod: FC<P> = ({
  method,
  listItems,
  icon,
  iconClass,
  buttonText = 'Connect',
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
        <Button type={ButtonTypes.primary} className={styles.methodButton}>
          {buttonText}
        </Button>
      </div>
    </Row>
  )
}

export default PaymentMethod
