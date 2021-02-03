import React, { FC } from 'react'
import { Input as AntInput, Button } from 'antd'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'

import styles from './AddQuestion.module.less'

export interface QuestionField {
  title: string
  key: number
}

export interface AddQuestionProps {
  description?: string
  questions?: QuestionField[]
  title?: string
  questionLabel?: string
  addQuestionLabel?: string
  goToButtonLabel?: string
  onChange?: (value: string, index: number) => void
  onAddQuestion?: () => void
  onDeleteButton?: (index: number) => void
}

export const AddQuestion: FC<AddQuestionProps> = ({
  description,
  questions,
  title,
  questionLabel,
  addQuestionLabel,
  goToButtonLabel,
  onChange,
  onAddQuestion,
  onDeleteButton,
}) => {
  return (
    <div className={styles.questionWrapper}>
      <h1>{title}</h1>
      <div className={styles.para}>{description}</div>
      <div className={styles.questionWrapperList}>
        {questions?.map((que, index) => (
          <div className={styles.queList} key={que.key}>
            <div>
              {questionLabel} {index + 1}
            </div>
            <div className={styles.inputWrap}>
              <AntInput
                value={que.title}
                onChange={(e) => onChange?.(e.target.value, index)}
              />
              <div
                className={styles.close}
                onClick={() => onDeleteButton?.(que.key)}
              >
                <CloseOutlined />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.linkBtn}>
        <div onClick={onAddQuestion}>
          <PlusOutlined /> {addQuestionLabel}
        </div>
      </div>
      <Button className={styles.btnBank}>{goToButtonLabel}</Button>
    </div>
  )
}

export default AddQuestion
