import React, { FC } from 'react'
import PeerFeedback, { PeerFeedbackProps } from './PeerFeedback'

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

export default {
  component: PeerFeedback,
  title: 'UI/Peer Feedback',
  args: {
    title,
    users,
    lastSendOut,
    reviewDate,
    reviewFilled,
    filled,
    reviewData,
    employees,
    reports,
  },
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const PeerFeedbackStory: FC<PeerFeedbackProps> = ({ ...args }) => (
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
