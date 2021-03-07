import React from 'react'
import { render } from '@testing-library/react'

import ImageSelectorModal from './ImageSelectorModal'

describe('ImageSelectorModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageSelectorModal />)
    expect(baseElement).toBeTruthy()
  })
})
