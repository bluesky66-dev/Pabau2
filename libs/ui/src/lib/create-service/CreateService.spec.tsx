import React from 'react'
import { render } from '@testing-library/react'

import CreateService from './CreateService'

describe('CreateService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CreateService
        visible={true}
        onClose={() => {
          return
        }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
