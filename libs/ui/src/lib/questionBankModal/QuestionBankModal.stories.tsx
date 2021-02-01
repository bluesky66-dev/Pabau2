import React, { useState, useEffect } from 'react'
import QuestionBankModal from './QuestionBankModal'
import { IQuestionOptions } from '../questionBank/QuestionBank'
import { data, menuOptions } from '../questionBank/mock'

interface P {
  data: IQuestionOptions[]
}

export default {
  component: QuestionBankModal,
  title: 'UI/QuestionBankModal',
  args: { title: 'Question Bank', data: data, visible: true },
  argsTypes: {
    title: { control: { type: 'text' } },
    data: { control: { type: 'object' } },
    visible: { control: { type: 'boolean' } },
  },
}

export const QuestionBankModalStory = (args: P): JSX.Element => {
  const [questions, setQuestions] = useState(args.data)

  useEffect(() => {
    setQuestions(args.data)
  }, [args.data])

  const handleChange = (e, key: number) => {
    const data = menuOptions.filter(({ key }) => key === e.key)
    setQuestions(
      questions.map((i) =>
        i.key === key ? { ...i, selectedValue: data[0].value } : i
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
    <QuestionBankModal
      {...args}
      title={'Question Bank'}
      questions={questions}
      options={menuOptions}
      onSelect={handleChange}
      onChecked={handleChecked}
      onClick={handleClick}
    />
  )
}
