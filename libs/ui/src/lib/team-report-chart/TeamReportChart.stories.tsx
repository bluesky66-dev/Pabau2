import React from 'react'
import TeamReportChartComponent, {
  TeamReportChartProps,
} from './TeamReportChart'
import { monthlyTicks, series, meta, services, employees, years } from './mock'

export default {
  component: TeamReportChartComponent,
  title: 'UI/Team Report Chart',
  args: {
    type: 'monthly',
    ticks: monthlyTicks,
    series: series,
    meta: meta,
    services: services,
    employees: employees,
    years: years,
  },
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

const TeamReportChartStory = ({ ...args }: TeamReportChartProps) => {
  return <TeamReportChartComponent {...args} />
}

export const TeamReportChart = TeamReportChartStory.bind({})
