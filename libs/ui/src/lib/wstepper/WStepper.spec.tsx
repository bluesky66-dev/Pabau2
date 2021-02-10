import React from 'react'
import { render } from '@testing-library/react'

import WStepper from './WStepper'

describe('WStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WStepper active={0} breadcrumbTxt={''} headerTxt={''} data={[]}/>
    )
    expect(baseElement).toBeTruthy()
  })
})
