import React, { FC } from 'react'
import styles from '../UserDetail.module.less'
import {
  Chart,
  HighchartsChart,
  HighchartsProvider,
} from 'react-jsx-highcharts'
import Highcharts from 'highcharts'
import { Button } from '@pabau/ui'
import { ClockCircleOutlined } from '@ant-design/icons'
import { GraphDataProps } from './PersonalDetail'

interface GraphDetailProps {
  graphData: GraphDataProps
}

const GraphDetail: FC<GraphDetailProps> = ({ graphData }) => {
  return (
    <div>
      <div className={styles.chartBox}>
        <p>This week</p>
        <span>{graphData.daysLeft}</span>
        <div className={styles.customGraphicChart}>
          <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsChart
              chart={{ type: 'column' }}
              xAxis={{
                categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                labels: {
                  style: { color: '#9292A3', fontSize: '12px' },
                },
              }}
              yAxis={{
                visible: false,
              }}
              plotOptions={{
                column: {
                  stacking: 'percent',
                },
              }}
              series={[
                {
                  // name: '',
                  type: 'column',
                  data: graphData.seriesData[0],
                  color: '#eef7fb',
                },
                {
                  // name: '',
                  type: 'column',
                  data: graphData.seriesData[1],
                  color: '#54B2D3',
                },
              ]}
            >
              <Chart height="120px" width={240} />
            </HighchartsChart>
          </HighchartsProvider>
        </div>
        <Button>
          <ClockCircleOutlined />
          {graphData.time}
        </Button>
      </div>
      <div className={styles.remainPortion}>
        <p>{graphData.holidayRemaining} days</p>
        <span>Holidays Remaining</span>
      </div>
    </div>
  )
}

export default GraphDetail
