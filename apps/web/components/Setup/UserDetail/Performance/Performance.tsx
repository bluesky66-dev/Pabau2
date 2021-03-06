import React, { useState } from 'react'
import {
  StaffPerformanceReview,
  TabMenu,
  PeerFeedback,
  ReportProps,
} from '@pabau/ui'
import styles from '../UserDetail.module.less'
import { performance } from '../../../../mocks/UserDetail'

const Performance = () => {
  const [reports, setReports] = useState<ReportProps[]>(performance.reports)

  const onReportDelete = (reportId: number) => {
    const newReports: ReportProps[] = reports.filter(
      (thread) => thread.id !== reportId
    )
    setReports([...newReports])
  }

  return (
    <div className={styles.performanceMainWrapper}>
      <h4>Performance</h4>
      <div className={styles.performanceCustom}>
        <StaffPerformanceReview
          reviewDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
        />
      </div>
      <TabMenu
        className={styles.tabSetPerformance}
        tabPosition={'top'}
        menuItems={['Peer Feedback', 'Assessment']}
      >
        <PeerFeedback
          title={'Yearly appraisal 2017'}
          users={performance.users}
          lastSendOut={performance.lastSendOut}
          reviewDate={performance.reviewDate}
          reviewFilled={performance.reviewFilled}
          filled={performance.filled}
          reviewData={performance.reviewData}
          employees={performance.employees}
          reports={reports}
          onReportDelete={onReportDelete}
        />
        <div>Content of Assessment</div>
      </TabMenu>
    </div>
  )
}

export default Performance
