import React, { useState, useEffect, useCallback, FC } from 'react'
import AddQuestion, { QuestionField, AddQuestionProps } from './AddQuestion'
import {
  title,
  description,
  questions,
  addQuestionLabel,
  goToButtonLabel,
  questionLabel,
} from './mock'

export default {
  component: AddQuestion,
  title: 'Basics/AddQuestion',
  args: {
    description,
    questions,
    title,
    addQuestionLabel,
    goToButtonLabel,
    questionLabel,
  },
  argTypes: {
    description: { control: { type: 'text' } },
    questions: { control: { type: 'object' } },
  },
  onChange: { action: 'onChange' },
}

export const AddQuestionStory: FC<AddQuestionProps> = ({
  description,
  questions,
  title,
  addQuestionLabel,
  goToButtonLabel,
  questionLabel,
}) => {
  const [question, setQuestions] = useState<QuestionField[]>([])

  const onChange = (value: string, index: number) => {
    const tempQuestions = [...question]
    tempQuestions.forEach((question, key) => {
      if (key === index) {
        question.title = value
      }
    })
    setQuestions(tempQuestions)
  }

  const onAddQuestion = useCallback(() => {
    const data = [...question, { title: '', key: question.length + 1 }]
    setQuestions(data)
  }, [question])

  const onDeleteButton = (key: number) => {
    const data = [...question]
    const questions = data.filter((a) => a.key !== key)
    setQuestions(questions)
  }

  useEffect(() => {
    if (questions) setQuestions([...questions])
  }, [questions])

  return (
    <AddQuestion
      description={description}
      questions={question}
      title={title}
      addQuestionLabel={addQuestionLabel}
      goToButtonLabel={goToButtonLabel}
      questionLabel={questionLabel}
      onChange={onChange}
      onAddQuestion={onAddQuestion}
      onDeleteButton={onDeleteButton}
    />
  )
}
