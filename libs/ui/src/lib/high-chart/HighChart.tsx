import React, { FC } from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './HighChart.module.less'

export interface HighChartProps {
  ChartTitle: string
  OpensLabel: string
  ClicksLabel: string
  OpensColor: string
  ClicksColor: string
  seriesData1: number[]
  seriesData2: number[]
  xAxisCategories: string[]
  yAxisCategories: string[]
}

export const HighChart: FC<HighChartProps> = (props) => {
  const {
    ChartTitle,
    ClicksLabel,
    OpensLabel,
    OpensColor,
    ClicksColor,
    seriesData1,
    seriesData2,
    xAxisCategories,
    yAxisCategories,
  } = props
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
        data: seriesData1,
        fillColor: OpensColor,
        lineColor: '#54B2D3',
        color: '#54B2D3',
      },
      {
        name: ClicksLabel,
        type: 'area',
        data: seriesData2,
        fillColor: ClicksColor,
        lineColor: '#65CD98',
        color: '#65CD98',
        className: '',
      },
    ],
    yAxis: {
      categories: yAxisCategories,
      title: {
        text: '',
      },
      gridLineWidth: 1,
      gridLineColor: '#F1F1F1',
    },
    xAxis: {
      categories: xAxisCategories,
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
    },
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  )
}

export default HighChart
