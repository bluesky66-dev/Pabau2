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
export const staffPerformanceReviewAnnual = StaffPerformanceReviewStory.bind({})
staffPerformanceReviewAnnual.args = {
  reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
  reviewPeriod: 'annual',
}

export const staffPerformanceReviewAnnualAndToday = StaffPerformanceReviewStory.bind(
  {}
)
staffPerformanceReviewAnnualAndToday.args = {
  reviewDate: new Date(),
  reviewPeriod: 'annual',
}

export const staffPerformanceReviewThreeMonths = StaffPerformanceReviewStory.bind({})
staffPerformanceReviewThreeMonths.args = {
  reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 4)),
  reviewPeriod: 'threeMonth',
}

export const staffPerformanceReviewThreeMonthsAndToday = StaffPerformanceReviewStory.bind(
  {}
)
staffPerformanceReviewThreeMonthsAndToday.args = {
  reviewDate: new Date(),
  reviewPeriod: 'threeMonth',
}
