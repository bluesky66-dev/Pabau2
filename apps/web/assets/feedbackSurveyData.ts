import PabauLogo from './images/brands/Pabau.png'
import FacebookLogo from './images/brands/Facebook.png'
import GoogleLogo from './images/brands/Google.png'
import TrustpilotLogo from './images/brands/Trustpilot.png'
import DoctifyLogo from './images/brands/Doctify.png'

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

export const integrations = {
  reviewData: [
    {
      header: 'Google reviews',
      description:
        'Send events about certain actions to Google Analytics and create goals based on events to track conversations',
      logo: GoogleLogo,
      prefix: '',
    },
    {
      header: 'Facebook reviews',
      description:
        'Use Facebook Ads Pixel to track events, and create audiences based on their activities',
      logo: FacebookLogo,
      prefix: 'https://www.facebook.com/',
    },
    {
      header: 'Trust Pilot',
      description:
        'Use Facebook Ads Pixel to track events, and create audiences based on their activities',
      logo: TrustpilotLogo,
      prefix: 'https://uk.trustpilot.com/evaluate/',
    },
    {
      header: 'Doctify',
      description:
        'Use Facebook Ads Pixel to track events, and create audiences based on their activities',
      logo: DoctifyLogo,
      prefix: 'https://www.doctify.co.uk/review/',
    },
  ],
  reviewedData: [
    {
      header: 'Pabau reviews',
      description: 'Feedback results would feed directly in Papau',
      logo: PabauLogo,
    },
  ],
}
