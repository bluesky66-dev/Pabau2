import React from 'react'
import { render } from '@testing-library/react'

import ColorPicker from './ColorPicker'

describe('ColorPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ColorPicker heading="Background color" onSelected={(value) => value} />
    )
    expect(baseElement).toBeTruthy()
  })
})
