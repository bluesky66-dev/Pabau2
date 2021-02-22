import React from 'react'
import ReviewChoice from './ReviewChoice'
import PabauLogo from '../../assets/images/brands/Pabau.svg'
import FacebookLogo from '../../assets/images/brands/Facebook.svg'
import GoogleLogo from '../../assets/images/brands/Google.svg'
import TrustpilotLogo from '../../assets/images/brands/Trustpilot.svg'
import DoctifyLogo from '../../assets/images/brands/Doctify.svg'

export default {
  component: ReviewChoice,
  title: 'UI/ReviewChoice',
  args: {
    reviewData: [
      {
        header: 'Pabau reviews',
        description: 'Feedback results would feed directly in Papau',
        logo: PabauLogo,
      },
    ],
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const ReviewChoiceStory = ({ ...args }) => <ReviewChoice {...args} />
export const reviewChoice = ReviewChoiceStory.bind({})
reviewChoice.args = {
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
