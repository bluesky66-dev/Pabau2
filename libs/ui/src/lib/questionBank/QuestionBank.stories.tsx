import React, { useState, useEffect } from 'react'
import QuestionBank from './QuestionBank'
import { IQuestionOptions } from './QuestionBank'

import { data, menuOptions } from './mock'

export default {
  component: QuestionBank,
  title: 'UI/QuestionBank',
  args: { data: data },
  argTypes: {
    data: { control: { type: 'object' } },
  },
}

interface P {
  data: IQuestionOptions[]
}

export const QuestionBankStory = ({ data }: P): JSX.Element => {
  const [questions, setQuestions] = useState(data)

  useEffect(() => {
    setQuestions(data)
  }, [data])

  const handleChange = (e, key: number) => {
    const data = menuOptions.find(({ key }) => key === e.key)
    setQuestions(
      questions.map((i) =>
        i.key === key ? { ...i, selectedValue: data.value } : i
      )
    )
  }

  const handleChecked = (key: number) => {
    setQuestions(
      questions.map((i) => (i.key === key ? { ...i, checked: !i.checked } : i))
    )
  }

  const handleClick = (key: number) => {
    console.log('Question ' + key + ' is clicked')
  }

  return (
    <div>
      <QuestionBank
        questions={questions}
        options={menuOptions}
        onSelect={handleChange}
        onChecked={handleChecked}
        onClick={handleClick}
      />
    </div>
  )
}
