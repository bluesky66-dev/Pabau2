import React from 'react'
import { TeamReport } from './TeamReport'
import { dataSource, columns } from './mock'

export default {
  component: TeamReport,
  title: 'Basics/Table',
  args: {
    loading: false,
    source: dataSource,
    columns: columns,
  },
  argTypes: {
    loading: { control: { type: 'boolean' } },
  },
}

const TeamReportStory = (args) => (
  <TeamReport
    loading={args.loading}
    source={args.source}
    columns={args.columns}
  />
)

export const reportTable = TeamReportStory.bind({})
reportTable.args = {
  loading: false,
}
