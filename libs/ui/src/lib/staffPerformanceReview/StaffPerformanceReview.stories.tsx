import React from 'react'
import StaffPerformanceReview from './StaffPerformanceReview'

export default {
  component: StaffPerformanceReview,
  title: 'UI/StaffPerformanceReview',
  args: {
    reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    reviewPeriod: 'annual',
  },
}

const StaffPerformanceReviewStory = ({ ...args }) => (
  <StaffPerformanceReview
    reviewDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
    {...args}
  />
)
export const staffPerformanceReview = StaffPerformanceReviewStory.bind({})
staffPerformanceReview.args = {
  reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
  reviewPeriod: 'annual',
}
