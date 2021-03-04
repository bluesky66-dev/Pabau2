import React from 'react'
import { render } from '@testing-library/react'
import { ShowMore } from '@pabau/ui'

describe('ShowMore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowMore />)
    expect(baseElement).toBeTruthy()
  })
})
