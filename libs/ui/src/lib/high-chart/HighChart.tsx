import React, { FC } from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './HighChart.module.less'

export const HighChart: FC = (props: HighchartsReact.Props) => {
  const { ClicksLabel, OpensLabel, ChartTitle, OpensColor, ClicksColor } = props
  const options: Highcharts.Options = {
    title: {
      text: ChartTitle,
      align: 'left',
    },
    legend: {
      align: 'left',
    },
    series: [
      {
        name: OpensLabel,
        type: 'area',
        data: [
          [0, 1],
          [1, 3],
          [3, 4],
          [5, 6],
          [6, 7],
        ],
        fillColor: OpensColor,
        lineColor: '#54B2D3',
        color: '#54B2D3',
      },
      {
        name: ClicksLabel,
        type: 'area',
        data: [
          [0, 1],
          [1, 2],
          [3, 3],
          [5, 5],
          [6, 6],
        ],
        fillColor: ClicksColor,
        lineColor: '#65CD98',
        color: '#65CD98',
        className: '',
      },
    ],
    yAxis: {
      categories: ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%'],
      title: {
        text: '',
      },
      gridLineWidth: 1,
      gridLineColor: '#F1F1F1',
    },
    xAxis: {
      categories: ['12h', '24h', '36h', '48h', '60h', '72h'],
      gridLineWidth: 1,
      gridLineColor: '#F1F1F1',
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        shadow: false,
        dataLabels: {
          align: 'left',
        },
        marker: {
          enabled: false,
          symbol: 'circle',
          fillColor: 'white',
          radius: 3,
          lineColor: OpensColor,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
      scatter: {
        dataLabels: {
          enabled: true,
        },
      },
    },
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  )
}

export default HighChart
