import React from 'react'
import { render } from '@testing-library/react'

import Preloader from './Preloader'

describe('Preloader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Preloader />)
    expect(baseElement).toBeTruthy()
  })
})
