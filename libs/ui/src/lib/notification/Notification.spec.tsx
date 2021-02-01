import React from 'react'
import { render } from '@testing-library/react'

import Reconnect from './ReconnectNotification'

describe('ReconnectNotification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reconnect message={'Testing'} delay={10} />)
    expect(baseElement).toBeTruthy()
  })
})
