import React, { FC } from 'react'
import Reviews, { ReviewFieldType } from './Reviews'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import {
  sourceFieldTitle,
  scoreFieldTitle,
  reviewFieldTitle,
  mostRecentTitle,
} from './mock'

const fields = [
  {
    icon: <Logo />,
    score: '4/5',
    reviews: 20,
    mostRecent: '2 months ago',
    isPlus: false,
    key: 1,
  },
  {
    icon: <FacebookOutlined />,
    score: '4/5',
    reviews: 20,
    mostRecent: '2 months ago',
    isPlus: true,
    key: 2,
  },
  {
    icon: <GoogleOutlined />,
    score: '4/5',
    reviews: 20,
    mostRecent: '2 months ago',
    isPlus: true,
    key: 3,
  },
]

export default {
  component: Reviews,
  title: 'UI/Reviews',
  args: {
    sourceFieldTitle,
    scoreFieldTitle,
    reviewFieldTitle,
    mostRecentTitle,
    fields,
  },
  argTypes: {
    sourceFieldTitle: { control: { type: 'text' } },
    scoreFieldTitle: { control: { type: 'text' } },
    reviewFieldTitle: { control: { type: 'text' } },
    mostRecentTitle: { control: { type: 'text' } },
    fields: { control: { type: 'object' } },
  },
}

interface P {
  sourceFieldTitle: string
  scoreFieldTitle: string
  reviewFieldTitle: string
  mostRecentTitle: string
  fields: ReviewFieldType[]
}

export const ReviewsStory: FC<P> = ({
  sourceFieldTitle,
  scoreFieldTitle,
  reviewFieldTitle,
  mostRecentTitle,
  fields,
}) => {
  return (
    <Reviews
      sourceFieldTitle={sourceFieldTitle}
      scoreFieldTitle={scoreFieldTitle}
      reviewFieldTitle={reviewFieldTitle}
      mostRecentTitle={mostRecentTitle}
      fields={fields}
    />
  )
}
