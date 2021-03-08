import React from 'react'
import { render } from '@testing-library/react'

import CreateService from './CreateService'

describe('CreateService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CreateService
        visible={true}
        contracts={[]}
        employees={[]}
        rooms={[]}
        equipment={[]}
        locations={[]}
        onClose={() => {
          return
        }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
