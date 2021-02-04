/* eslint-disable */
import React from 'react'
import NewsletterDelivery from './NewsletterDelivery'
import { NewsletterSentProps } from './NewsletterSent'

export default {
  component: NewsletterDelivery,
  title: 'Basics/NewsletterDelivery',
  args: { label: 'SENT', value: '1000' },
  argTypes: {
    label: { control: { type: 'text' } },
  },
}

const NewsletterStory = ({ ...args }: NewsletterSentProps) => (
  <NewsletterDelivery {...args} />
)

export const NewsLetterDelivery = NewsletterStory.bind({})
NewsLetterDelivery.args = {
  label: 'SENT',
  value: 3244,
}
