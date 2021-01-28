import React, { FC } from 'react'
import { Row, Col, Dropdown, Button, Menu } from 'antd'
import { CheckCircleFilled, DownOutlined } from '@ant-design/icons'

import styles from './QuestionBank.module.less'

interface IQuestionOptions {
  key: number
  question: string
  showDropdown: boolean
  selectedValue?: string
  onClick?(): void
}

interface IMenuOptions {
  key: string
  value: string
}

interface P {
  questions: IQuestionOptions[]
  options: IMenuOptions[]
  onClick(e, key: number): void
}

export const QuestionBank: FC<P> = (props) => {
  const { questions, options, onClick } = props

  const prepareOptions = (key: number) => {
    return (
      <Menu onClick={(e) => onClick(e, key)}>
        {options.map(({ key, value }) => (
          <Menu.Item key={key}>{value}</Menu.Item>
        ))}
      </Menu>
    )
  }

  const prepareContent = () => {
    return (
      <div className={styles.questionBankContainer}>
        {questions?.map(({ key, question, showDropdown, selectedValue }) => (
          <Row
            key={`question-${key}`}
            className={styles.questionRow}
            justify={'space-between'}
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
              <CheckCircleFilled className={styles.checkCircle} />
            </Col>
          </Row>
        ))}
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
