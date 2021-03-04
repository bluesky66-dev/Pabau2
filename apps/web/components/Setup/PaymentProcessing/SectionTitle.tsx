import React, { FC } from 'react'
import { Row, Col } from 'antd'
import styles from './index.module.less'

interface P {
  title?: string
  subTitle?: string
  description?: string
  showButton?: boolean
  buttonText?: string
}

const SectionTitle: FC<P> = ({
  title = '',
  subTitle = '',
  description,
  showButton = false,
  buttonText = '',
}) => {
  return (
    <Row className={styles.sectionHeader}>
      <Col>
        {title && <h1>{title}</h1>}
        {subTitle && <h4>{subTitle}</h4>}
        {description && <p>{description}</p>}
      </Col>
    </Row>
  )
}

export default SectionTitle
