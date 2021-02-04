/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { FC } from 'react'
import NewsletterSent, { NewsletterSentProps } from './NewsletterSent'

export const NewsletterDelivery: FC<NewsletterSentProps> = ({
  label,
  value,
}) => {
  return <NewsletterSent value={value} label={label} />
}

export default NewsletterDelivery
