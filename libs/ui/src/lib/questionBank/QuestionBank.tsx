import React, { FC } from 'react'
import { Row, Col } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

import styles from './QuestionBank.module.less'

interface IOptions {
  key: number
  question: string
  onClick?(): void
}

export interface QuestionBankProps {
  questions: IOptions[]
}

export const QuestionBank: FC<QuestionBankProps> = (props) => {
  const { questions } = props

  const prepareContent = () => {
    return (
      <div className={styles.questionBankContainer}>
        {questions &&
          questions.map((i) => (
            <Row key={`question-${i.key}`} className={styles.questionRow}>
              <Col span={14}>
                <p>{i.question}</p>
              </Col>
              <Col span={8}>{/* //TODO: add dropdown */}</Col>
              <Col span={2} className={styles.checkCircle}>
                <CheckCircleFilled />
                {/* <Button shape='circle' icon={<CheckCircleFilled />}/> */}
              </Col>
            </Row>
          ))}
        <div>
          <span>{questions && questions.length}</span>
          <span> QUESTIONS</span>
        </div>
      </div>
    )
  }

  return <>{prepareContent()}</>
}

export default QuestionBank
