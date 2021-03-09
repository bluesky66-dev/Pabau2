import React, { FC, useState, useEffect } from 'react'
import { Row, Col, Form, Input, InputNumber } from 'antd'
import classNames from 'classnames'
import { BasicModal } from '@pabau/ui'
import styles from './index.module.less'

const { TextArea } = Input

interface PayOutData {
  amount: number
  description: string
  descriptor: string
}

interface P {
  visible: boolean
  onCloseModal?: () => void
}

const PayOutModal: FC<P> = ({ visible, onCloseModal }) => {
  const [form] = Form.useForm()
  const balance = 7883.18
  const [terminal, setTerminal] = useState<PayOutData | null>({
    amount: balance,
    description: '',
    descriptor: '',
  })
  const { amount, description, descriptor } = terminal
  const [, forceUpdate] = useState({})

  useEffect(() => {
    forceUpdate({})
  }, [])

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
    <BasicModal
      title="Pay out funds to your bank account"
      visible={visible}
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
            className={classNames(styles.noBordered, styles.inputMarginBottom)}
          >
            <label>Available balance</label>
            <p>£{balance}</p>
          </Col>
          <Col
            md={12}
            sm={24}
            xs={24}
            className={classNames(styles.noBordered, styles.inputMarginBottom)}
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
  )
}

export default PayOutModal
