import React from 'react'
import { render } from '@testing-library/react'

import SocialMediaCheckbox from './SocialMediaCheckbox'

describe('SocialMediaCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMediaCheckbox />)
    expect(baseElement).toBeTruthy()
  })
})
