import React, { FC, useState } from 'react'
import { useMedia } from 'react-use'
import { Tabs, Row, Col } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import { IQuestionOptions } from '../questionBank/QuestionBank'

import { menuOptions } from '../questionBank/mock'

import QuestionBank from '../questionBank/QuestionBank'
import Button from '../button/button'
import BasicModal, { BasicModalProps } from '../modal/basicmodal'

import customStyles from './QuestionBankModal.module.less'

interface IMenuOption {
  key: string
  value: string
}

interface P extends BasicModalProps {
  title: string
  questions: Array<IQuestionOptions>
  options: Array<IMenuOption>
  onAdd: (questions: Array<IQuestionOptions> | undefined) => void
}

export const QuestionBankModal: FC<P> = ({
  title,
  questions,
  options,
  onAdd,
  ...props
}) => {
  const { TabPane } = Tabs

  const [checkedQuestions, setCheckedQuestions] = useState<
    Array<IQuestionOptions> | undefined
  >(undefined)
  const [questionList, setQuestionList] = useState<Array<IQuestionOptions>>(
    questions
  )

  const isMobile = useMedia('(max-width: 768px)', false)

  const handleChange = (e, key: number) => {
    const data = menuOptions.find(({ key }) => key === e.key)
    setQuestionList(
      questionList?.map((i) =>
        i.key === key ? { ...i, selectedValue: data?.value } : i
      )
    )
  }

  const handleChecked = (key: number) => {
    const data = questionList?.map((i) =>
      i.key === key ? { ...i, checked: !i.checked } : i
    )
    setQuestionList(data)
    setCheckedQuestions(data.filter(({ checked }) => checked))
  }

  const handleClick = (key: number) => {
    console.log('Question ' + key + ' is clicked')
  }

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
              onClick={() => onAdd(checkedQuestions)}
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
            questions={questionList}
            options={menuOptions}
            onSelect={handleChange}
            onChecked={handleChecked}
            onClick={handleClick}
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
      {isMobile ? (
        <div className={customStyles.mobDevice}>
          <div className={customStyles.queBank}>
            <LeftOutlined />
            Question Bank
          </div>
          {renderContent()}
        </div>
      ) : (
        <BasicModal
          {...props}
          title={title}
          modalWidth={682}
          footer={false}
          wrapClassName={customStyles.questionBankModal}
        >
          <div className={customStyles.questionBankModalBody}>
            {renderContent()}
          </div>
        </BasicModal>
      )}
    </div>
  )
}

export default QuestionBankModal
