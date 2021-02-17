import React, { FC } from 'react'
import { Row, Col, Dropdown, Button, Menu } from 'antd'
import { CheckCircleFilled, DownOutlined } from '@ant-design/icons'

import styles from './QuestionBank.module.less'

export interface IQuestionOptions {
  key: number
  question: string
  showDropdown: boolean
  selectedValue?: string
  checked: boolean
}

interface IMenuOptions {
  key: string
  value: string
}

export interface QuestionBankProps {
  questions: IQuestionOptions[]
  options: IMenuOptions[]
  onSelect(e, key: number): void
  onChecked(key: number): void
  onClick(key: number): void
}

export const QuestionBank: FC<QuestionBankProps> = (props) => {
  const { questions, options, onSelect, onChecked, onClick } = props

  const prepareOptions = (key: number) => {
    return (
      <Menu onClick={(e) => onSelect(e, key)}>
        {options.map(({ key, value }) => (
          <Menu.Item key={key}>{value}</Menu.Item>
        ))}
      </Menu>
    )
  }

  const prepareContent = () => {
    return (
      <div className={styles.questionBankContainer}>
        {questions?.map(
          ({ key, question, showDropdown, selectedValue, checked }) => (
            <Row
              key={`question-${key}`}
              className={
                styles.questionRow + ' ' + (checked && styles.activeRow)
              }
              justify={'space-between'}
              onClick={() => onClick(key)}
            >
              <Col span={21}>
                <p className={styles.questionContent}>
                  {question}
                  {showDropdown && (
                    <Dropdown overlay={prepareOptions(key)} trigger={['click']}>
                      <Button className={styles.customDropdown}>
                        {selectedValue} <DownOutlined />
                      </Button>
                    </Dropdown>
                  )}
                </p>
              </Col>
              <Col span={'auto'}>
                <CheckCircleFilled
                  onClick={() => onChecked(key)}
                  className={
                    checked
                      ? styles.checked + ' ' + styles.checkCircle
                      : styles.checkCircle
                  }
                />
              </Col>
            </Row>
          )
        )}
      </div>
    )
  }

  return (
    <>
      {prepareContent()}
      <div className={styles.questionCountBlock}>
        <span className={styles.questionCount}>{questions?.length}</span>
        <span className={styles.questionLength}> QUESTIONS</span>
      </div>
    </>
  )
}

export default QuestionBank
