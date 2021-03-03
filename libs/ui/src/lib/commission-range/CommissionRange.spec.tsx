import React from 'react'
import { render } from '@testing-library/react'
import CommissionRange from './CommissionRange'
import { servicesData } from './mock'

describe('CommissionRange', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CommissionRange
        rangeItems={servicesData.rangeItems}
        type={servicesData.type}
        users={servicesData.users}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
