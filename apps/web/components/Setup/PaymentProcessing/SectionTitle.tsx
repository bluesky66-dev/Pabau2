import React, { FC } from 'react'
import { Row, Col } from 'antd'
import { Button, ButtonTypes } from '@pabau/ui'
import styles from './index.module.less'

interface P {
  title?: string
  subTitle?: string
  description?: string
  showButton?: boolean
  buttonText?: string
  onClick?: () => void
}

const SectionTitle: FC<P> = ({
  title = '',
  subTitle = '',
  description,
  showButton = false,
  buttonText = '',
  onClick,
}) => {
  return (
    <Row className={styles.sectionHeader}>
      <Col>
        {title && <h1>{title}</h1>}
        {subTitle && <h4>{subTitle}</h4>}
        {description && <p>{description}</p>}
      </Col>
      {showButton && (
        <Button type={ButtonTypes.primary} size="large" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </Row>
  )
}

export default SectionTitle
