import React from 'react'
import { render } from '@testing-library/react'

import PeerFeedback from './PeerFeedback'

import {
  title,
  users,
  lastSendOut,
  reviewDate,
  reviewFilled,
  filled,
  reviewData,
  employees,
  reports,
} from './data'

describe('PeerFeedback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PeerFeedback
        title={title}
        users={users}
        lastSendOut={lastSendOut}
        reviewDate={reviewDate}
        reviewFilled={reviewFilled}
        filled={filled}
        reviewData={reviewData}
        employees={employees}
        reports={reports}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
