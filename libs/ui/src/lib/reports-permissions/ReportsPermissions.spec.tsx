import React from 'react'
import { render } from '@testing-library/react'

import ReportsPermissions from './ReportsPermissions'
import { title, subtitle, data, permissions } from './data'

describe('ReportsPermissions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReportsPermissions
        data={data}
        permissions={permissions}
        pageTitle={title}
        subTitle={subtitle}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
