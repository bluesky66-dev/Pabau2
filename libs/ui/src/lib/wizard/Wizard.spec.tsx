import React from 'react'
import { render } from '@testing-library/react'

import Wizard from './Wizard'

describe('Wizard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Wizard active={0} allSteps={2} stepperData={[]} />
    )
    expect(baseElement).toBeTruthy()
  })
})
