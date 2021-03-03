import React from 'react'
import { render } from '@testing-library/react'
import { monthlyTicks, series, meta, services, employees, years } from './mock'

import TeamReportChart from './TeamReportChart'

describe('TeamReportChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TeamReportChart
        type="monthly"
        ticks={monthlyTicks}
        series={series}
        meta={meta}
        services={services}
        employees={employees}
        years={years}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
