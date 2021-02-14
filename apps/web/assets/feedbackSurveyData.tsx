export const addQuestionData = {
  title: 'Questions',
  questionLabel: 'Question',
  addQuestionLabel: 'Add Question',
  description:
    'Choose the way in which you request feedback from clients who visit you',
  questions: [
    {
      title: 'How did you rate your consultation',
      key: 1,
    },
    {
      title:
        'How likely will you recommend us to How likely will you recommend us to',
      key: 2,
    },
    {
      title: 'How was your overall experience',
      key: 3,
    },
  ],
  goToButtonLabel: 'Go to Question Bank',
}

export const questionBankMenuOptions = [
  {
    key: 'Item1',
    value: 'Item1',
  },
  {
    key: 'Item2',
    value: 'Item2',
  },
  {
    key: 'Item3',
    value: 'Item3',
  },
]

export const questionBankData = [
  {
    key: 1,
    question:
      'How likely is it that you would recommend to a friend or collegue?',
    showDropdown: true,
    selectedValue: questionBankMenuOptions[0].value,
    checked: false,
  },
  {
    key: 2,
    question: 'How would you rate your consultation?',
    showDropdown: false,
    checked: false,
  },
  {
    key: 3,
    question:
      'How likely is it that you would recommend to a friend or collegue?',
    showDropdown: true,
    selectedValue: questionBankMenuOptions[0].value,
    checked: false,
  },
  {
    key: 4,
    question: 'How would you rate your consultation?',
    showDropdown: false,
    checked: false,
  },
  {
    key: 5,
    question:
      'How likely is it that you would recommend to a friend or collegue?',
    showDropdown: true,
    selectedValue: questionBankMenuOptions[0].value,
    checked: false,
  },
  {
    key: 6,
    question: 'How would you rate your consultation?',
    showDropdown: false,
    checked: false,
  },
  {
    key: 7,
    question:
      'How likely is it that you would recommend to a friend or collegue?',
    showDropdown: true,
    selectedValue: questionBankMenuOptions[0].value,
    checked: false,
  },
]
