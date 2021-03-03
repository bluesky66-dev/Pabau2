import React, { FC } from 'react'

import {
  Chart,
  HighchartsChart,
  HighchartsProvider,
  ColumnSeries,
  XAxis,
  YAxis,
} from 'react-jsx-highcharts'
import Highcharts from 'highcharts'
// import styles from './index.module.less'

export const ActivityChart: FC = () => {
  return (
    <div>
      <div>
        <p>786 events have been logged the last 30 days</p>
        <div>
          <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsChart>
              <Chart height="319px" width={757} />
              <XAxis visible={false}>
                <ColumnSeries
                  id={'chart'}
                  name={'chart'}
                  data={[
                    1,
                    2,
                    4,
                    10,
                    15,
                    45,
                    34,
                    45,
                    45,
                    65,
                    56,
                    65,
                    23,
                    45,
                    41,
                    12,
                    35,
                    45,
                    56,
                    34,
                    52,
                    11,
                    35,
                    6,
                    34,
                    14,
                    34,
                    63,
                    55,
                    63,
                  ]}
                  color={'#CFCFD7'}
                />
              </XAxis>
              <YAxis
                id="YAxis"
                categories={['0', '10', '20']}
                labels={{
                  style: { color: '#9292A3', fontSize: '12px' },
                  enabled: true,
                }}
              ></YAxis>
            </HighchartsChart>
          </HighchartsProvider>
        </div>
      </div>
    </div>
  )
}

export default ActivityChart
