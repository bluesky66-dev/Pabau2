import React, { useState } from 'react'
import QuestionBank from './QuestionBank'

import { data, menuOptions } from './mock'

export default {
  component: QuestionBank,
  title: 'UI/QuestionBank',
}

export function QuestionBankStory(): JSX.Element {
  const [questions, setQuestions] = useState(data)

  const handleChange = (e, key: number) => {
    const data = menuOptions.filter(({ key }) => key === e.key)
    setQuestions(
      questions.map((i) =>
        i.key === key ? { ...i, selectedValue: data[0].value } : i
      )
    )
  }

  return (
    <div>
      <QuestionBank
        questions={questions}
        options={menuOptions}
        onClick={handleChange}
      />
    </div>
  )
}
