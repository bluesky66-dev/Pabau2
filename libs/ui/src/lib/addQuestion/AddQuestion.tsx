import React, { FC } from 'react'
import { Input as AntInput } from 'antd'
import { Button } from '@pabau/ui'
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
  isDeleteDisable?: boolean
  onChange?: (value: string, index: number) => void
  onAddQuestion?: () => void
  onDeleteButton?: (index: number) => void
  onGoTo?: () => void
}

export const AddQuestion: FC<AddQuestionProps> = ({
  description,
  questions,
  title,
  questionLabel,
  addQuestionLabel,
  goToButtonLabel,
  isDeleteDisable,
  onChange,
  onAddQuestion,
  onDeleteButton,
  onGoTo,
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
                className={isDeleteDisable ? styles.inActive : styles.active}
                onClick={() => !isDeleteDisable && onDeleteButton?.(que.key)}
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
      <Button
        type="primary"
        className={styles.btnBank}
        onClick={() => onGoTo?.()}
      >
        {goToButtonLabel}
      </Button>
    </div>
  )
}

export default AddQuestion
