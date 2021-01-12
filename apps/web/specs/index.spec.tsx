import { render } from '@testing-library/react'
import Index from '../pages/index'
import { MockedProvider } from '@apollo/client/testing'

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider>
        <Index />
      </MockedProvider>
    )
    expect(baseElement).toBeTruthy()
  })
})
