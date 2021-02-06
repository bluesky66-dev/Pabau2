import React, { useState, useEffect, FC } from 'react'
import NewsletterDelivery, {
  cardData,
  NewsletterDeliveryProps,
} from './NewsletterDelivery'
import { data } from './mock'

export default {
  component: NewsletterDelivery,
  title: 'Basics/NewsletterDelivery',
  args: { data },
  argTypes: {
    data: { control: { type: 'object' } },
  },
}

export const NewsLetterDeliveryStory: FC<NewsletterDeliveryProps> = ({
  data,
}) => {
  const [cardInfo, setCardInfo] = useState<cardData[]>([])

  useEffect(() => {
    if (data) setCardInfo([...data])
  }, [data])

  return <NewsletterDelivery data={cardInfo} />
}
