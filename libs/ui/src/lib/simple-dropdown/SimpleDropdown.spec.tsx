import React from 'react'
import { render } from '@testing-library/react'

import SimpleDropdown from './SimpleDropdown'

describe('SimpleDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleDropdown menuItems={[]} onSelected={(val) => val} />)
    expect(baseElement).toBeTruthy()
  })
})
