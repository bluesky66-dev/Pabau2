import React, { useState } from 'react'
import TeamReportChartComponent, {
  TeamReportChartProps,
  TeamReportMeta,
} from './TeamReportChart'
import {
  ticks,
  series,
  seriesData,
  meta,
  serviceGroups,
  employees,
  yearsData,
} from './mock'

export default {
  component: TeamReportChartComponent,
  title: 'UI/Team Report Chart',
  parameters: {
    layout: 'fullscreen',
  },
}

const TeamReportChartTemplate = ({ ...args }: TeamReportChartProps) => {
  const [mockSeries, setMockSeries] = useState(args.series)
  const [mockMeta, setMockMeta] = useState(args.meta)
  const [mockTicks, setMockTicks] = useState(args.ticks)
  const [mockYears, setMockYears] = useState(args.years)
  const mockChangeMeta = (newMeta: TeamReportMeta): void => {
    if (newMeta.type !== mockMeta.type) {
      newMeta.years = [yearsData[newMeta.type][0]]
    }
    setMockMeta(newMeta)

    setMockYears(yearsData[newMeta.type])

    setMockTicks(ticks[newMeta.type])

    setMockSeries(
      seriesData.filter((serie) => newMeta.services.includes(serie.serviceName))
    )
  }

  return (
    <TeamReportChartComponent
      {...args}
      onChangeMeta={mockChangeMeta}
      series={mockSeries}
      meta={mockMeta}
      years={mockYears}
      ticks={mockTicks}
    />
  )
}

export const TeamReportChartStory = TeamReportChartTemplate.bind({})
TeamReportChartStory.args = {
  ticks: ticks.monthly,
  years: yearsData.monthly,
  serviceGroups: serviceGroups,
  employees: employees,
  series: series,
  meta: meta,
}
