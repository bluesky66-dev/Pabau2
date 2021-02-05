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

  const handleAdd = (questions: Array<IQuestionOptions> | undefined): void => {
    console.log('Question added', questions)
  }

  return (
    <QuestionBankModal
      {...args}
      title={'Question Bank'}
      questions={questions}
      options={menuOptions}
      onAdd={handleAdd}
    />
  )
}
