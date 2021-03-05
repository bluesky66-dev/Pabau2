import React from 'react'
import { render } from '@testing-library/react'
import {
  ticks,
  series,
  meta,
  serviceGroups,
  employees,
  yearsData,
} from './mock'

import TeamReportChart from './TeamReportChart'

describe('TeamReportChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TeamReportChart
        ticks={ticks.monthly}
        series={series}
        meta={meta}
        serviceGroups={serviceGroups}
        employees={employees}
        years={yearsData.monthly}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
