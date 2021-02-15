import React from 'react'
import { Row, Col, Tabs } from 'antd'
import classNames from 'classnames'
import LeadFormBuilder from './LeadFormBuilder'
import LeadFormPreview from './LeadFormPreview'
import styles from './Lead-forms.module.less'

const { TabPane } = Tabs

export const LeadCustomizeForm: React.FC = () => {
  return (
    <Row wrap={false} className={styles.leadFormPage}>
      <Col
        flex={'392px'}
        className={classNames(styles.builderColumn, styles.mobileViewNone)}
      >
        <LeadFormBuilder />
      </Col>
      <Col
        flex="auto"
        className={classNames(styles.previewColumn, styles.mobileViewNone)}
      >
        <LeadFormPreview />
      </Col>
      <Col className={styles.desktopViewNone}>
        <Tabs className={styles.tabWidthFull}>
          <TabPane tab="Builder" key="1">
            <LeadFormBuilder />
          </TabPane>
          <TabPane tab="Preview" key="2">
            <LeadFormPreview />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

export default LeadCustomizeForm
