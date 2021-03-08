import React from 'react'
import StaffPerformanceReview from './StaffPerformanceReview'

export default {
  component: StaffPerformanceReview,
  title: 'UI/StaffPerformanceReview',
  args: {
    reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    reviewPeriod: 'Every 3 Months',
    isNote: true,
  },
}

const StaffPerformanceReviewStory = ({ ...args }) => (
  <StaffPerformanceReview
    reviewDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
    {...args}
  />
)
export const staffPerformanceReview = StaffPerformanceReviewStory.bind({})

const StaffPerformanceReviewNote = ({ ...args }) => (
  <StaffPerformanceReview
    reviewDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
    isNote={true}
    {...args}
  />
)
export const staffPerformanceReviewNote = StaffPerformanceReviewNote.bind({})

staffPerformanceReview.args = {
  reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
  reviewPeriod: 'Every 3 Months',
  isNote: false,
}
