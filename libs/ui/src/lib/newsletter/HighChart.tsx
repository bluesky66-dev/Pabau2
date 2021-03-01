import React, { FC } from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options: Highcharts.Options = {
  title: {
    text: 'High Charts',
  },
  series: [
    {
      type: 'line',
      data: [1, 2, 3],
    },
    {
      type: 'line',
      data: [6, 7, 9],
    },
  ],
  yAxis: {
    categories: ['0%', '5%', '10%', '15%', '20%', '25%'],
  },
  xAxis: {
    categories: ['12h', '24h', '36h'],
  },
}

export const HighChart: FC = (props: HighchartsReact.Props) => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  )
}

export default HighChart
