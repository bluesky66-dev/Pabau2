import React, { FC } from 'react'
import { Row, Col, Radio } from 'antd'
import styles from './ClientNotification.module.less'

interface P {
  tabComponent?: React.ReactNode
  previewComponent?: React.ReactNode
}

export const ClientNotification: FC<P> = ({
  tabComponent,
  previewComponent,
}) => {
  return (
    <Row wrap={false} className={styles.notificationPage}>
      <Col flex={'400px'} className={styles.builderColumn}>
        <Row className={styles.headerStyle}>
          <div>BUILDER</div>
        </Row>
        <Row className={styles.tabsAlign}>{tabComponent}</Row>
      </Col>
      <Col flex="auto" className={styles.previewColumn}>
        <Row className={styles.headerStyle}>
          <div>PREVIEW</div>
        </Row>
        <Row justify="center" className={styles.previewButtonGroup}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button className={styles.radioLeftButton} value="a">
              Email
            </Radio.Button>
            <Radio.Button className={styles.radioRightButton} value="b">
              SMS Text
            </Radio.Button>
          </Radio.Group>
        </Row>
        <Row justify="center">
          <div className={styles.previewCard}>{previewComponent}</div>
        </Row>
      </Col>
    </Row>
  )
}

export default ClientNotification
