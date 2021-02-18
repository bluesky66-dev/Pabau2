import React from 'react'
import { render } from '@testing-library/react'

import ReportsPermissionTable from './ReportsPermissionTable'
import { title, subtitle, data, columns } from './mock'

describe('ReportsPermissionTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReportsPermissionTable
        dataSource={data}
        columns={columns}
        pageTitle={title}
        subTitle={subtitle}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
