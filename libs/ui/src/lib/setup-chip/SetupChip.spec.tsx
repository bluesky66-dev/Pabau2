import React from 'react'
import { render } from '@testing-library/react'
import { EditOutlined } from '@ant-design/icons'
import SetupChip from './SetupChip'

describe('SetupChip', () => {
  it('should render successfully', () => {
    const props = {
      title: 'title',
      subTitle: 'subTitle',
      image: <EditOutlined />,
    }
    const { baseElement } = render(<SetupChip {...props} />)
    expect(baseElement).toBeTruthy()
  })
})
