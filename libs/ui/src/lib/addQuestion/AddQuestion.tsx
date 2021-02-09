import React, { FC, useState } from 'react'
import { Input as AntInput } from 'antd'
import { Button, QuestionBankModal } from '@pabau/ui'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { data, menuOptions } from '../questionBank/mock'
import { IQuestionOptions } from '../questionBank/QuestionBank'

import styles from './AddQuestion.module.less'

export interface QuestionField {
  title: string
  key: number
}

export interface AddQuestionProps {
  onQuestionBankAddButton: (
    questions: Array<IQuestionOptions> | undefined
  ) => void
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
  onQuestionBankAddButton,
}) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)

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
        onClick={() => setModalVisible(true)}
      >
        {goToButtonLabel}
      </Button>
      <QuestionBankModal
        title={'Question Bank'}
        questions={data}
        options={menuOptions}
        onAdd={onQuestionBankAddButton}
        visible={isModalVisible}
        onCancel={() => setModalVisible(false)}
      />
    </div>
  )
}

export default AddQuestion
