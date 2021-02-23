import React, { FC, useState } from 'react'
import { Tabs, Row, Col } from 'antd'
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
  visible: boolean
  onCancel?: () => void
}

export const QuestionBankModal: FC<P> = ({
  title,
  questions,
  options,
  onAdd,
  visible,
  onCancel,
  ...props
}) => {
  const { TabPane } = Tabs

  const [checkedQuestions, setCheckedQuestions] = useState<
    Array<IQuestionOptions>
  >([])
  const [questionList, setQuestionList] = useState<Array<IQuestionOptions>>(
    questions
  )

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

  const handleClose = () => {
    setCheckedQuestions([])
    const data = questionList?.map((i) => {
      return { ...i, checked: false }
    })
    setQuestionList(data)
    onCancel?.()
  }

  const handleAddQuestion = (checkedQuestions: Array<IQuestionOptions>) => {
    onAdd(checkedQuestions)
    setCheckedQuestions([])
    onCancel?.()
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
              onClick={() => handleAddQuestion(checkedQuestions)}
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
    <BasicModal
      {...props}
      visible={visible}
      onCancel={handleClose}
      title={title}
      modalWidth={682}
      footer={false}
      wrapClassName={customStyles.questionBankModal}
    >
      <div className={customStyles.questionBankModalBody}>
        {renderContent()}
      </div>
    </BasicModal>
  )
}

export default QuestionBankModal
