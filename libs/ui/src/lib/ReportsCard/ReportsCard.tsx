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
  onReportFavorite?: (reportId: number, favorite: boolean) => void
}

export const ReportsCard: React.FC<ReportsCardProps> = ({
  reports = [],
  catHeading = '',
  graphDescription = '',
  description = '',
  chartLabel = '',
  graphData = [],
  onReportFavorite,
}) => {
  const [showAll, setShowAll] = useState(false)

  const showMoreHandler = () => setShowAll((showAll) => !showAll)

  const reportsData = showAll
    ? reports
    : reports?.slice(0, reports?.length > 10 ? 9 : 10)

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
              backgroundColor="#ECEDF008"
              type="area"
              spacingLeft={0}
              spacingRight={0}
            />

            <Tooltip
              formatter={function () {
                return `${this.key} - ${chartLabel + this.y}`
              }}
            />

            <XAxis id="XAxis" visible={false} />

            <YAxis id="YAxis" visible={false}>
              <AreaSeries
                id={catHeading}
                name={catHeading}
                data={graphData}
                color="#54B2D3"
                fillColor="#EEF7FB"
                fillOpacity={1}
                lineWidth={1}
                marker={{
                  radius: 2,
                }}
              />
            </YAxis>
          </HighchartsChart>
        </HighchartsProvider>
      </div>

      {reportsData.map((report) => (
        <SingleReport
          key={report.id}
          reportCode={report.reportCode}
          reportName={report.reportName}
          isNew={report.isNew}
          favorite={report.favorite}
          onReportFavorite={(isFav) => onReportFavorite?.(report.id, isFav)}
        />
      ))}

      {reports?.length < 10 &&
        Array.from({ length: 10 - reports.length })
          .fill('')
          .map(() => <div key={uuidv4()} className={styles.reportsCardCell} />)}

      {reports.length > 10 && (
        <ShowMore
          key={uuidv4()}
          length={reports.length}
          showAll={showAll}
          showMoreHandler={showMoreHandler}
        />
      )}
    </div>
  )
}
