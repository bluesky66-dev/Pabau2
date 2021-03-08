import React, { FC, useState } from 'react'

import { Button, Input } from '@pabau/ui'
import { Row, Col } from 'antd'
import GeneralLayout from '../GeneralLayout'
import { PlusCircleOutlined } from '@ant-design/icons'
import styles from '../PosConfiguration/common.module.less'

interface P {
  handleChange: (key: string, obj: assessmentScheduleConfig) => void
  listAssessment: AssessmentList
}

const QuestionTitle = ['Self Assessment Questions:', 'Questions for Manager:']
const peerAssessmentTitle = [
  'Self Assessment Questions:',
  'This question is to determine if the employee is a...',
]

const AssessmentSettings: FC<P> = ({
  handleChange,
  listAssessment: {
    selfAssessmentQuestion,
    questionManager,
    peerAssessmentList: { questionEmployee, peerSelfAssessmentQuestion },
  },
}) => {
  const [assumptionQuestion, setAssumptionQuestion] = useState(
    selfAssessmentQuestion
  )
  const [questionManagerList, setQuestionManager] = useState(questionManager)

  const [questionEmployees, setQuestionEmployee] = useState(questionEmployee)
  const [peerSelfAssessmentQuestions, setPeerSelfAssessmentQuestion] = useState(
    peerSelfAssessmentQuestion
  )

  const handleAddQuestion = () => {
    setAssumptionQuestion((e) => [
      ...e,
      { key: assumptionQuestion.length + 1, value: '' },
    ])
    setQuestionManager((e) => [
      ...e,
      { key: questionManagerList.length + 1, value: '' },
    ])
  }

  const handlePeerAddQuestion = () => {
    setQuestionEmployee((e) => [
      ...e,
      { key: questionEmployees.length + 1, value: '' },
    ])
    setPeerSelfAssessmentQuestion((e) => [
      ...e,
      { key: peerSelfAssessmentQuestions.length + 1, value: '' },
    ])
  }

  const renderContent = (): JSX.Element => {
    return (
      <div className={styles.assessmentContainer}>
        <div>
          <div className={styles.btnWrapper}>
            <Button icon={<PlusCircleOutlined />} onClick={handleAddQuestion}>
              Add Question
            </Button>
          </div>
          <div>
            <Row>
              {QuestionTitle.map((data: string, index) => (
                <Col span={12} key={index}>
                  <span
                    key={index}
                    className={
                      index === 0 ? styles.inputBoxLeft : styles.inputBoxRight
                    }
                  >
                    {data}
                  </span>
                </Col>
              ))}
              <Col span={12}>
                {assumptionQuestion.map((data: FeaturePerformance, index) => (
                  <div className={styles.indexWrap} key={index}>
                    <p>{index + 1}.</p>
                    <Input
                      text={data.value}
                      key={index}
                      className={styles.inputBoxLeft}
                    />
                  </div>
                ))}
              </Col>
              <Col span={12}>
                {questionManagerList.map((data: FeaturePerformance, index) => (
                  <Input
                    text={data.value}
                    key={index}
                    className={styles.inputBoxRight}
                  />
                ))}
              </Col>
            </Row>
            <span className={styles.noteWrapper}>
              *One way to keep our Assessments awesome is by keeping them short.
            </span>
          </div>
        </div>
      </div>
    )
  }

  const renderPeerContent = (): JSX.Element => {
    return (
      <div className={styles.assessmentContainer}>
        <div>
          <div className={styles.btnWrapper}>
            <Button
              icon={<PlusCircleOutlined />}
              onClick={handlePeerAddQuestion}
            >
              Add Question
            </Button>
          </div>
          <div>
            <Row>
              {peerAssessmentTitle.map((data: string, index) => (
                <Col span={12} key={index}>
                  <span
                    key={index}
                    className={
                      index === 0 ? styles.inputBoxLeft : styles.inputBoxRight
                    }
                  >
                    {data}
                  </span>
                </Col>
              ))}
              <Col span={12}>
                {peerSelfAssessmentQuestions.map(
                  (data: FeaturePerformance, index) => (
                    <div className={styles.indexWrap} key={index}>
                      <p>{index + 1}.</p>
                      <Input
                        text={data.value}
                        key={index}
                        className={styles.inputBoxLeft}
                      />
                    </div>
                  )
                )}
              </Col>
              <Col span={12}>
                {questionEmployees.map((data: FeaturePerformance, index) => (
                  <Input
                    text={data.value}
                    key={index}
                    className={styles.inputBoxRight}
                  />
                ))}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <GeneralLayout
        title={'Self & Manager Assessment'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        }
        bodyContent={renderContent()}
      />
      <div className={styles.peerMainWrapper}>
        <GeneralLayout
          title={'Peer Assessment'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          }
          bodyContent={renderPeerContent()}
        />
      </div>
    </div>
  )
}

export default AssessmentSettings
