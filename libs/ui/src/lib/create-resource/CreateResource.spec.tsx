import React from 'react'
import { render } from '@testing-library/react'

import CreateResource from './CreateResource'

describe('CreateResource', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CreateResource
        visible={true}
        onClose={() => {
          return
        }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
