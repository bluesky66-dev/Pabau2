/* eslint-disable */
import React from 'react'
import NewsletterDelivery from './NewsletterDelivery'

export default {
  component: NewsletterDelivery,
  title: 'Basics/NewsletterDelivery',
  args: {},
  argTypes: {},
}

const NewsletterStory = ({ ...args }) => <NewsletterDelivery {...args} />
export const NewsLetterDelivery = NewsletterStory.bind({})
NewsLetterDelivery.args = {}
