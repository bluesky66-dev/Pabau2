import React, { FC, useCallback, useEffect, useState } from 'react'
import { Input as AntInput, Button } from 'antd'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'

import styles from './AddQuestion.module.less'

/* eslint-disable-next-line */
export interface AddQuestionProps {
  description?: string
  questions?: string[]
}

export const AddQuestion: FC<AddQuestionProps> = ({
  description,
  questions,
}) => {
  const [question, setQuestions] = useState<string[]>([])

  const onChange = (value: string, index: number) => {
    const data = [...question]
    data[index] = value
    setQuestions(data)
  }

  const onAddQuestion = useCallback(() => {
    const data = [...question, '']
    setQuestions(data)
  }, [question])

  const onDeleteButton = (index: number) => {
    const data = [...question]
    const questions = data.filter((a, key) => key !== index)
    setQuestions(questions)
  }

  useEffect(() => {
    setQuestions([...(questions ?? '')])
  }, [questions])

  return (
    <div className={styles.questionWrapper}>
      <h1>Questions</h1>
      <div className={styles.para}>{description}</div>
      <div className={styles.questionWrapperList}>
        {question?.map((que, index) => (
          <div className={styles.queList} key={index}>
            <div>Question {index + 1}</div>
            <div className={styles.inputWrap}>
              <AntInput
                value={que}
                onChange={(e) => onChange(e.target.value, index)}
              />
              <div
                className={styles.close}
                onClick={() => onDeleteButton(index)}
              >
                <CloseOutlined />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.linkBtn}>
        <div onClick={onAddQuestion}>
          <PlusOutlined /> Add Question
        </div>
      </div>
      <Button className={styles.btnBank}>Go to Question Bank</Button>
    </div>
  )
}

export default AddQuestion
