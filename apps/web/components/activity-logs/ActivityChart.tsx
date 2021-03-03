import React, { FC } from 'react'

import {
  Chart,
  HighchartsChart,
  HighchartsProvider,
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
            <HighchartsChart
              chart={{ type: 'column' }}
              xAxis={{
                visible: false,
              }}
              yAxis={{
                categories: ['0', '10', '20', '30', '40', '50', '60', '70'],
                labels: {
                  style: { color: '#9292A3', fontSize: '14px' },
                },
              }}
              series={[
                {
                  // name: '',
                  type: 'column',
                  data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
                  color: '#CFCFD7',
                },
                // {
                //     // name: '',
                //     type: 'column',
                //     data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
                //     color: '#CFCFD7',
                // },
              ]}
            >
              <Chart height="120px" width={240} />
            </HighchartsChart>
          </HighchartsProvider>
        </div>
      </div>
    </div>
  )
}

export default ActivityChart
