import React, { FC } from 'react'
import { Typography, Card } from 'antd'

import styles from './GeneralLayout.module.less'

interface P {
  title: string
  description: string
  bodyContent: JSX.Element
}

const GeneralLayout: FC<P> = ({ title, description, bodyContent }) => {
  const { Title } = Typography
  return (
    <div className={styles.generalLayoutContainer}>
      <Card className={styles.generalLayoutHead}>
        <Title>{title}</Title>
        <span>{description}</span>
      </Card>
      <div className={styles.containerBody}>{bodyContent}</div>
    </div>
  )
}

export default GeneralLayout
