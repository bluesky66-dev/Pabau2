import React from 'react'
import { render } from '@testing-library/react'

import VersionHistory from './VersionHistory'

describe('VersionHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VersionHistory
        history={{
          last_week: [
            {
              version: 'Current verison',
              updatedBy: 'William Brandham',
              date: 'January 22, 2:27 PM',
            },
            {
              version: 'Version 2',
              updatedBy: 'Meri Redjepi',
              date: 'January 22, 1:26 PM',
            },
            {
              version: 'Version 1',
              updatedBy: 'Meri Redjepi',
              date: 'January 22, 2:27 PM',
            },
          ],
        }}
        visible={true}
        onVisibleChange={() => true}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
