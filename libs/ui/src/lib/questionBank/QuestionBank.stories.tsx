import React from 'react'
import QuestionBank from './QuestionBank'

import { data } from './mock'

export default {
  component: QuestionBank,
  title: 'UI/QuestionBank',
}

export function QuestionBankStory(): JSX.Element {
  return (
    <div>
      <QuestionBank questions={data} />
    </div>
  )
}
