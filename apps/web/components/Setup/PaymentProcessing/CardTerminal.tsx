import React, { FC, useState, useEffect } from 'react'
import { Row, Col, Form, Input, InputNumber } from 'antd'
import classNames from 'classnames'
import { BasicModal } from '@pabau/ui'
import SectionTitle from './SectionTitle'
import styles from './index.module.less'
import terminalIcon from '../../../assets/images/terminal.png'

const { TextArea } = Input

interface TerminalData {
  amount: number
  description: string
  descriptor: string
}

const CardTerminal: FC = () => {
  const [form] = Form.useForm()
  const [visibleModal, setVisibleModal] = useState(false)
  const balance = 7883.18
  const [terminal, setTerminal] = useState<TerminalData | null>({
    amount: 0,
    description: '',
    descriptor: '',
  })
  const { amount, description, descriptor } = terminal
  const [, forceUpdate] = useState({})

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onCloseModal = () => {
    setVisibleModal(false)
  }

  const onRequestTerminal = () => {
    setVisibleModal(true)
  }

  const onPayout = () => {
    console.log('onPayout')
  }

  const onFormFinish = (values) => {
    console.log('Finish:', values)
  }

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  }

  return (
    <div>
      <div className={classNames(styles.sectionPadding, styles.sectionBorder)}>
        <SectionTitle
          title="Card Terminals"
          description="Request and manage your card terminals to process card and contactless payments at checkout."
          showButton
          buttonText="Request terminal"
          onClick={onRequestTerminal}
        />
      </div>
      <div className={styles.sectionPadding}>
        <Row className={styles.terminalCard}>
          <div className={styles.terminalIcon}>
            <img src={terminalIcon} alt="terminal" />
          </div>
          <div className={styles.terminalCardBody}>
            <div>
              <h4>Pabau Terminal</h4>
              <span>Active</span>
            </div>
            <p>
              Send events about certain actions to Google Analytics and create
              goals based on events to track conversations
            </p>
          </div>
        </Row>
      </div>
      <BasicModal
        title="Pay out funds to your bank account"
        visible={visibleModal}
        modalWidth={682}
        dangerButtonText="Cancel"
        newButtonText={`Pay out £${amount}`}
        newButtonDisable={false}
        isValidate={true}
        closable
        onCancel={onCloseModal}
        onDelete={onCloseModal}
        onOk={() => onPayout()}
      >
        <Form
          {...formItemLayout}
          layout="horizontal"
          form={form}
          className={styles.payoutModalForm}
          onFinish={onFormFinish}
        >
          <Row>
            <Col
              md={12}
              sm={24}
              xs={24}
              className={classNames(
                styles.noBordered,
                styles.inputMarginBottom
              )}
            >
              <label>Available balance</label>
              <p>£{balance}</p>
            </Col>
            <Col
              md={12}
              sm={24}
              xs={24}
              className={classNames(
                styles.noBordered,
                styles.inputMarginBottom
              )}
            >
              <label>Send payout to</label>
              <p>Santander **** 3420</p>
            </Col>
          </Row>
          <Row className={styles.inputMarginBottom}>
            <Col span={24}>
              <Form.Item label="Amount to pay out" required>
                <InputNumber
                  placeholder="Amount to pay out"
                  value={amount}
                  max={balance}
                  formatter={(value) =>
                    `£ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/£\s?|(,*)/g, '')}
                  onChange={(value) =>
                    setTerminal({
                      ...terminal,
                      amount: Number.parseFloat(value as string),
                    })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Description">
                <TextArea
                  placeholder="Add some description"
                  rows={4}
                  value={description}
                  onChange={(event) =>
                    setTerminal({
                      ...terminal,
                      description: event.target.value,
                    })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Statement descriptor"
                tooltip={'Statement descriptor'}
                required
              >
                <Input
                  placeholder="Statement descriptor"
                  value={descriptor}
                  onChange={(event) =>
                    setTerminal({ ...terminal, descriptor: event.target.value })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </BasicModal>
    </div>
  )
}

export default CardTerminal
