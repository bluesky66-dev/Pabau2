import React from 'react'
import { render } from '@testing-library/react'

import ViewSchedule from './ViewSchedule'

describe('ViewSchedule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ViewSchedule discoverAndLearn={[]} schedule={[]} />
    )
    expect(baseElement).toBeTruthy()
  })
})
