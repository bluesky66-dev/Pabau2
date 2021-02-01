import React, { FC, useEffect, useState } from 'react'
import { Modal, Tabs, Row, Col } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { ModalProps } from 'antd/lib/modal'
import {
  QuestionBankProps,
  IQuestionOptions,
} from '../questionBank/QuestionBank'

import { menuOptions } from '../questionBank/mock'

import QuestionBank from '../questionBank/QuestionBank'
import Button from '../button/button'

import customStyles from './QuestionBankModal.module.less'
import styles from '../modal/basicmodal.module.less'

interface P extends ModalProps {
  title: string
}

const QuestionBankModal: FC<P & QuestionBankProps> = ({
  title,
  questions,
  options,
  onSelect,
  onChecked,
  onClick,
  ...props
}) => {
  const { TabPane } = Tabs

  const [width, setWidth] = useState<number>(window.innerWidth)
  const [checkedQuestions, setCheckedQuestions] = useState<
    Array<IQuestionOptions> | undefined
  >(undefined)

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const data = questions?.filter(({ checked }) => checked)
    setCheckedQuestions(data)
  }, [onChecked, questions])

  const preparePreviewContent = () => {
    return (
      <>
        <div className={customStyles.previewContainer}>
          {checkedQuestions?.map(({ key, question }) => (
            <Row
              key={`question-${key}`}
              className={customStyles.questionRow}
              justify={'space-between'}
            >
              <Col span={24}>
                <p className={customStyles.questionContent}>{question}</p>
              </Col>
            </Row>
          ))}
        </div>
        <Row>
          <Col span={24} className={customStyles.btnWrap}>
            <Button
              className={
                checkedQuestions?.length === 0
                  ? customStyles.disabledBtn
                  : customStyles.addButton
              }
              disabled={checkedQuestions?.length === 0}
              type={'primary'}
            >
              + Add ({checkedQuestions?.length}) Questions
            </Button>
          </Col>
        </Row>
      </>
    )
  }

  const renderContent = () => {
    return (
      <Tabs defaultActiveKey="1" className={customStyles.tabContainer}>
        <TabPane tab="Questions" key="1">
          <QuestionBank
            questions={questions}
            options={menuOptions}
            onSelect={onSelect}
            onChecked={onChecked}
            onClick={onClick}
          />
        </TabPane>
        <TabPane tab="Preview" key="2">
          {preparePreviewContent()}
        </TabPane>
      </Tabs>
    )
  }

  return (
    <div className={customStyles.wrapperQuestion}>
      {width < 768 ? (
        <div className={customStyles.mobDevice}>
          <div className={customStyles.queBank}>
            <LeftOutlined />
            Question Bank
          </div>
          {renderContent()}
        </div>
      ) : (
        <Modal
          title={title}
          {...props}
          footer={null}
          wrapClassName={styles.modal + ' ' + customStyles.questionBankModal}
        >
          <div className={customStyles.questionBankModalBody}>
            {renderContent()}
          </div>
        </Modal>
      )}
    </div>
  )
}

export default QuestionBankModal
