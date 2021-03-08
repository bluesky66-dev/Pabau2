import React from 'react'
import { render } from '@testing-library/react'

import TreeSelectCheckBox from './TreeSelectCheckBox'

describe('TreeSelectCheckBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TreeSelectCheckBox />)
    expect(baseElement).toBeTruthy()
  })
})
