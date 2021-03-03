import React, { FC } from 'react'
import {
  Chart,
  HighchartsChart,
  HighchartsProvider,
  XAxis,
  YAxis,
  ColumnSeries,
} from 'react-jsx-highcharts'
import Highcharts from 'highcharts'

export const ActivityChart: FC = () => {
  return (
    <div>
      <div>
        <p>786 events have been logged the last 30 days</p>
        <div>
          <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsChart>
              <Chart type="column" height={231} width={637} />
              <XAxis id="categories" type="category" visible={false} />
              <YAxis
                id="number"
                labels={{ style: { color: '#9292A3', fontSize: '12px' } }}
                tickInterval={10}
              >
                <ColumnSeries
                  id="return-contribution"
                  name="Column Name"
                  color="#CFCFD7"
                  data={[
                    20,
                    27,
                    38,
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
                />
              </YAxis>
            </HighchartsChart>
          </HighchartsProvider>
        </div>
      </div>
    </div>
  )
}
export default ActivityChart
