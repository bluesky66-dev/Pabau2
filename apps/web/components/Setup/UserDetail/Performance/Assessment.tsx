import React, { useState } from 'react'
import {
  StopOutlined,
  UserOutlined,
  CompassOutlined,
  LockOutlined,
} from '@ant-design/icons'
import { Select, Form, Input, Button } from 'antd'
import classNames from 'classnames'

import styles from '../UserDetail.module.less'
import { performanceAssessmentData } from '../../../../mocks/UserDetail'

const Assessment = () => {
  const {
    isManagerAssessment,
    isSelfAssessment,
    managerAssessment,
    selfAssessment,
  } = performanceAssessmentData

  const [step, setStep] = useState(1)

  return (
    <div className={styles.assessmentWrapper}>
      <div className={styles.assessmentCard}>
        <div
          className={classNames(
            styles.contentWrapper,
            !isSelfAssessment && styles.contentNoData
          )}
        >
          <div
            className={classNames(
              styles.contentHeader,
              isSelfAssessment && styles.headerBorder
            )}
          >
            <div className={styles.contentTitle}>
              <UserOutlined />
              <div>
                <div className={styles.title}>Self assessment</div>
                {isSelfAssessment && (
                  <div className={styles.subTitle}>
                    Completed: ${selfAssessment.completed}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.contentBody}>
            {!isSelfAssessment ? (
              <div className={styles.noContent}>
                <div className={styles.noContentIcon}>
                  <StopOutlined />
                </div>
                <div className={styles.desc}>
                  Self Assessment will show here once completed.
                </div>
              </div>
            ) : (
              <div className={styles.selfAssessmentBlock}>
                <div className={styles.selfAssessmentBox}>
                  <div className={styles.selfAssessmentBoxList}>
                    {selfAssessment.questionAnswer.length > 0 &&
                      selfAssessment.questionAnswer.map((thread) => {
                        return (
                          <div
                            key={thread.key}
                            className={styles.selfAssessmentList}
                          >
                            <div className={styles.selfAssessmentQuestion}>
                              {thread.question}
                            </div>
                            <div className={styles.selfAssessmentAnswer}>
                              {thread.answer}
                            </div>
                          </div>
                        )
                      })}
                  </div>
                  <div className={styles.selfAssessmentBoxList}>
                    {selfAssessment.moreQuestionAnswer.length > 0 &&
                      selfAssessment.moreQuestionAnswer.map((thread) => {
                        return (
                          <div
                            key={thread.key}
                            className={styles.selfAssessmentList}
                          >
                            <div className={styles.selfAssessmentQuestion}>
                              {thread.question}
                            </div>
                            <div className={styles.selfAssessmentAnswer}>
                              {thread.answer}
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
                <div className={styles.selfAssessmentUnlock}>
                  <LockOutlined />
                  <span>
                    <a>Unlock Assessment</a> - Allow Employee to resubmit
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.assessmentCard}>
        <div
          className={classNames(
            styles.contentWrapper,
            !isManagerAssessment && styles.contentNoData
          )}
        >
          <div
            className={classNames(
              styles.contentHeader,
              isManagerAssessment && styles.headerBorder
            )}
          >
            <div className={styles.contentTitle}>
              <CompassOutlined />
              <div>
                <div className={styles.title}>Manager assessment</div>
                {step === 2 && isManagerAssessment && (
                  <div className={styles.subTitle}>
                    Completed: ${managerAssessment.completed}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.contentBody}>
            {!isManagerAssessment ? (
              <div className={styles.noContent}>
                <div className={styles.noContentIcon}>
                  <StopOutlined />
                </div>
                <div className={styles.desc}>
                  Manager Assessment will show here once completed.
                </div>
              </div>
            ) : (
              <div className={styles.managerAssessmentBlock}>
                {step === 1 ? (
                  <div className={styles.managerAssessmentStep1}>
                    <Form layout={'vertical'}>
                      <div
                        className={classNames(
                          styles.managerAssessmentBox,
                          styles.border
                        )}
                      >
                        <span className={styles.managerAssessmentQuestions}>
                          Jennifer WILL NOT SEE Your Answers to These 2
                          Questions
                        </span>
                        {managerAssessment.selectOptions.length > 0 &&
                          managerAssessment.selectOptions.map((thread) => {
                            return (
                              <Form.Item
                                label={thread.label}
                                key={thread.label}
                                className={styles.managerAssessmentList}
                              >
                                <Select size={'large'}>
                                  {thread.options.map((option) => {
                                    return (
                                      <Select.Option
                                        value={option}
                                        key={option}
                                      >
                                        {option}
                                      </Select.Option>
                                    )
                                  })}
                                </Select>
                              </Form.Item>
                            )
                          })}
                      </div>
                      <div className={styles.managerAssessmentBox}>
                        <span className={styles.managerAssessmentQuestions}>
                          Jennifer WILL SEE Your Answers to The Following
                          Questions
                        </span>
                        {managerAssessment.questionAnswer.length > 0 &&
                          managerAssessment.questionAnswer.map((thread) => {
                            return (
                              <Form.Item
                                label={thread.question}
                                key={thread.question}
                                className={styles.managerAssessmentList}
                              >
                                <Input.TextArea
                                  rows={3}
                                  value={thread.answer}
                                />
                              </Form.Item>
                            )
                          })}
                        <div className={styles.managerAssessmentStepSave}>
                          <Button
                            size={'large'}
                            type={'primary'}
                            className={styles.btnRightSpace}
                            onClick={() => setStep(2)}
                          >
                            Submit
                          </Button>
                          <Button size={'large'}>Save & Finish Later</Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                ) : (
                  <div className={styles.managerAssessmentStep2}>
                    <Form layout={'vertical'}>
                      <div
                        className={classNames(
                          styles.managerAssessmentBox,
                          styles.border
                        )}
                      >
                        <span className={styles.managerAssessmentQuestions}>
                          These 2 questions are hidden from Jennifer
                        </span>
                        {managerAssessment.selectOptions.length > 0 &&
                          managerAssessment.selectOptions.map((thread) => {
                            return (
                              <div
                                key={thread.label}
                                className={styles.managerAssessmentOptions}
                              >
                                <div
                                  className={
                                    styles.managerAssessmentOptionsLabel
                                  }
                                >
                                  {thread.label}
                                </div>
                                <div
                                  className={
                                    styles.managerAssessmentOptionsList
                                  }
                                >
                                  {[...Array.from({ length: 5 })].map(
                                    (e, i) => (
                                      <span
                                        key={i}
                                        className={classNames(
                                          i + 1 === thread.count &&
                                            styles.selected,
                                          styles.count
                                        )}
                                      >
                                        {i + 1}
                                      </span>
                                    )
                                  )}
                                </div>
                                <div
                                  className={
                                    styles.managerAssessmentOptionsValue
                                  }
                                >
                                  {thread.value}
                                </div>
                              </div>
                            )
                          })}
                      </div>
                      <div className={styles.managerAssessmentBox}>
                        {managerAssessment.questionAnswer.length > 0 &&
                          managerAssessment.questionAnswer.map((thread) => {
                            return (
                              <Form.Item
                                label={thread.question}
                                key={thread.question}
                                className={styles.managerAssessmentList}
                              >
                                <Input.TextArea
                                  rows={3}
                                  value={thread.answer}
                                />
                              </Form.Item>
                            )
                          })}
                      </div>
                    </Form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assessment
