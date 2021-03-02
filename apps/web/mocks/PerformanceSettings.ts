const reviewScheduleValue = {
  reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
}

const AssessmentList = {
  selfAssessmentQuestion: [
    {
      key: 1,
      value: 'How well daes (Company) recognize my value?',
    },
    {
      key: 2,
      value: 'What would have the greatest impact on my ability to do...',
    },
    {
      key: 3,
      value: 'What are some things I do well?',
    },
    {
      key: 4,
      value: 'How could I improve?',
    },
  ],
  questionManager: [
    {
      key: 1,
      value: 'If (Name) got a job offer elsewhere, I would...',
    },
    {
      key: 2,
      value: 'How engaged is (Name) at work?',
    },
    {
      key: 3,
      value: 'What are some things (Name) does well?',
    },
    {
      key: 4,
      value: 'How could (Name) improve?',
    },
  ],
}

export const PerformanceConfigObj = {
  review: {
    date: reviewScheduleValue.reviewDate,
  },
  assessment: AssessmentList,
}
