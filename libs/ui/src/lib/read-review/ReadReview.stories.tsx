import React, { FC } from 'react'
import ReadReview from './ReadReview'

import {
  title,
  bodyContent,
  updatedAt,
  avatarSrc,
  name,
  defaultRating,
} from './mock'

export default {
  component: ReadReview,
  title: 'UI/ReadReview',
  args: {
    title,
    bodyContent,
    updatedAt,
    avatarSrc,
    name,
    defaultRating,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    bodyContent: { control: { type: 'text' } },
    avatarSrc: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    defaultRating: { control: { type: 'number' } },
    updatedAt: { control: { type: 'text' } },
  },
}

interface P {
  title: string
  bodyContent: string
  updatedAt: string
  avatarSrc: string
  name: string
  defaultRating: number
}

export const ReadReviewStory: FC<P> = ({
  title,
  bodyContent,
  avatarSrc,
  defaultRating,
  name,
  updatedAt,
}) => {
  return (
    <ReadReview
      title={title}
      bodyContent={bodyContent}
      avatarSrc={avatarSrc}
      defaultRating={defaultRating}
      name={name}
      updatedAt={updatedAt}
    />
  )
}
