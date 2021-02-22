import React, { ReactText, useState } from 'react'
import { SingleReport } from '../SingleReport/SingleReport'
import { ShowMore } from '../ShowMore/ShowMore'
import { v4 as uuidv4 } from 'uuid'

import styles from './ReportsCard.module.less'

import Highcharts from 'highcharts'
import {
  HighchartsProvider,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Tooltip,
  AreaSeries,
} from 'react-jsx-highcharts'

interface report {
  id: number
  reportCode: string
  reportName: string
  isNew: boolean
  favorite: boolean
}

interface ReportsCardProps {
  catHeading?: string
  description?: string
  graphDescription?: string
  chartLabel?: string
  reports?: report[]
  graphData?: ReactText[][]
}

export const ReportsCard: React.FC<ReportsCardProps> = ({
  reports = [],
  catHeading = '',
  graphDescription = '',
  description = '',
  chartLabel = '',
  graphData = [],
}) => {
  const [showAll, setShowAll] = useState(false)
  const id = reports[0] ? reports[reports.length - 1].id + 1 : 1

  const showMoreHandler = () => setShowAll((showAll) => !showAll)

  return (
    <div className={styles.reportsCard}>
      <h3 className={styles.reportsCardTitle}>{catHeading}</h3>
      <p className={styles.reportsCardDescription}>{description}</p>
      <div className={styles.reportsCardGraphDescContainer}>
        <span>{graphDescription}</span>
        <span>{chartLabel}</span>
      </div>

      <div className={styles.reportsCardGraph}>
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsChart>
            <Chart
              height="36px"
              borderRadius={3}
              marginBottom={0}
              backgroundColor="rgba(236, 237, 240, 0.2)"
              type="area"
            />

            <Tooltip
              formatter={function () {
                return `${this.key} - ${chartLabel + this.y}`
              }}
            />

            <XAxis id={uuidv4()} visible={false}></XAxis>

            <YAxis id={uuidv4()} visible={false}>
              <AreaSeries id={uuidv4()} name={catHeading} data={graphData} />
            </YAxis>
          </HighchartsChart>
        </HighchartsProvider>
      </div>

      {showAll
        ? reports.map((report, i) => {
            if (i === reports.length - 1) {
              return (
                <>
                  <SingleReport
                    key={report.id}
                    reportCode={report.reportCode}
                    reportName={report.reportName}
                    isNew={report.isNew}
                    favorite={report.favorite}
                  />
                  <ShowMore
                    key={id}
                    length={reports.length}
                    showAll={showAll}
                    showMoreHandler={showMoreHandler}
                  />
                </>
              )
            }
            return (
              <SingleReport
                key={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
              />
            )
          })
        : reports.length > 10
        ? reports.map((report, i) =>
            i > 8 ? (
              i < 10 ? (
                <ShowMore
                  key={id}
                  length={reports.length}
                  showAll={showAll}
                  showMoreHandler={showMoreHandler}
                />
              ) : (
                ''
              )
            ) : (
              <SingleReport
                key={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
              />
            )
          )
        : [
            ...reports,
            // eslint-disable-next-line unicorn/no-new-array
            ...new Array(10 - reports.length).fill(''),
          ].map((report) => {
            return report ? (
              <SingleReport
                key={report.id}
                reportCode={report.reportCode}
                reportName={report.reportName}
                isNew={report.isNew}
                favorite={report.favorite}
              />
            ) : (
              <div key={id} className={styles.reportsCardCell}></div>
            )
          })}
    </div>
  )
}
