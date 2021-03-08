const reviewScheduleValue = {
  reviewDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
}

const peerQuestionList = {
  peerSelfAssessmentQuestion: [
    {
      key: 1,
      value:
        '(Name) takes careful consideration before attempting tasks, before executing them with perfection.',
    },
    {
      key: 2,
      value:
        '(Name) takes time to help the team, often taken time away from performing their own tasks.',
    },
    {
      key: 3,
      value:
        '(Name) turns up to work with enthuism and energy to plough through.',
    },
    {
      key: 4,
      value: '(Name) is dedicated to his job.',
    },
  ],
  questionEmployee: [
    {
      key: 1,
      value: 'Good Thinker',
    },
    {
      key: 2,
      value: 'Team Player',
    },
    {
      key: 3,
      value: 'Motivated',
    },
    {
      key: 4,
      value: 'Dedication',
    },
  ],
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
  peerAssessmentList: peerQuestionList,
}

const peopleList = [
  { name: 'Jessica Winter', selected: false },
  { name: 'Jeff Hackley', selected: false },
  { name: 'Alexander Wang', selected: false },
  { name: 'Linda Davis', selected: false },
  { name: 'William Tyson', selected: false },
  { name: 'Max Starck', selected: false },
  { name: 'Kyle Walsh', selected: false },
  { name: 'Owen Phillips', selected: false },
  { name: 'Aidan Kelly', selected: false },
  { name: 'Ewan Morgan', selected: false },
  { name: 'Jordan Martin', selected: false },
  { name: 'Grant Dudley', selected: false },
]

export const PerformanceConfigObj = {
  review: {
    date: reviewScheduleValue.reviewDate,
  },
  assessment: AssessmentList,
  peopleList: { peopleList: peopleList },
}
