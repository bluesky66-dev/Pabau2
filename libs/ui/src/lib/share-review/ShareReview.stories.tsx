import React from 'react'
import ShareReview from './ShareReview'

export default {
  title: 'UI/ShareReview',
  args: {
    text:
      'I felt safe visiting the surgery, everything was in place to maintain a COVID safe environment. The staff are very professional, respectful and courteous. Treatment were fully explained and ...',
    reviewScore: 5,
    logo:
      'https://thegrovepractice.co.uk/wp-content/uploads/2020/05/grove-square-logo-white-bg.png',
    companyName: 'The Grove Practice: Leamington Spa Dentist',
    date: new Date(),
  },
  argTypes: {
    text: { control: { type: 'text' } },
    reviewScore: { control: { type: 'number' } },
    logo: { control: { type: 'text' } },
    companyName: { control: { type: 'text' } },
    date: { control: { type: 'date' } },
  },
}

const ShareReviewStory = ({
  text,
  reviewScore,
  logo,
  companyName,
  date,
  ...args
}) => (
  <ShareReview {...{ text, reviewScore, logo, companyName, date, ...args }} />
)
export const ShareReviewButton = ShareReviewStory.bind({
  text:
    'I felt safe visiting the surgery, everything was in place to maintain a COVID safe environment. The staff are very professional, respectful and courteous. Treatment were fully explained and ...',
  reviewScore: 5,
  logo:
    'https://thegrovepractice.co.uk/wp-content/uploads/2020/05/grove-square-logo-white-bg.png',
  companyName: 'The Grove Practice: Leamington Spa Dentist',
  date: new Date(),
})
ShareReviewButton.args = {}
