import React, { FC, useState, useEffect } from 'react'
import { Row, Col, Form, Input, InputNumber, Select } from 'antd'
import classNames from 'classnames'
import { BasicModal } from '@pabau/ui'
import styles from './index.module.less'

const { TextArea } = Input
const { Option } = Select

interface TerminalData {
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
  const [terminal, setTerminal] = useState<TerminalData | null>({
    amount: 0,
    description: '',
    descriptor: '',
  })
  const { amount, description } = terminal
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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue="44">
        <Option value="44">+44</Option>
        <Option value="45">+45</Option>
      </Select>
    </Form.Item>
  )

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
            className={classNames(styles.payOutItem, styles.itemMdPaddingRight)}
          >
            <Form.Item label="Are you currently using a card terminal">
              <Select defaultValue="yes">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            md={12}
            sm={24}
            xs={24}
            className={classNames(styles.payOutItem, styles.itemMdPaddingLeft)}
          >
            <Form.Item label="If you are, which payment solution are you using?">
              <Select defaultValue="">
                <Option value="">Select an option</Option>
                <Option value="iZettle">iZettle</Option>
                <Option value="SumUp">SumUp</Option>
                <Option value="WorldPay">WorldPay</Option>
                <Option value="Square">Square</Option>
                <Option value="Paypal">Paypal</Option>
                <Option value="Stripe">Stripe</Option>
                <Option value="Clover">Clover</Option>
                <Option value="Sage">Sage</Option>
                <Option value="Barclaycard">Barclaycard</Option>
                <Option value="Paymentsense">Paymentsense</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} className={styles.payOutItem}>
            <Form.Item label="How much money do you expect to pay out?">
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
          <Col span={24} className={styles.payOutItem}>
            <Form.Item label="Tell us any additional information">
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
        <Row className={styles.contactDetails}>
          <Col>
            <h2>Your contact details</h2>
            <p>
              There are the contact details we&apos;ll reply to your request on.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            sm={24}
            xs={24}
            className={classNames(styles.payOutItem, styles.itemMdPaddingRight)}
          >
            <Form.Item label="First name">
              <Input placeholder="First name" />
            </Form.Item>
          </Col>
          <Col
            md={12}
            sm={24}
            xs={24}
            className={classNames(styles.payOutItem, styles.itemMdPaddingLeft)}
          >
            <Form.Item label="Last name">
              <Input placeholder="Last name" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            sm={24}
            xs={24}
            className={classNames(styles.payOutItem, styles.itemMdPaddingRight)}
          >
            <Form.Item label="Phone number">
              <Input placeholder="Phone number" addonBefore={prefixSelector} />
            </Form.Item>
          </Col>
          <Col
            md={12}
            sm={24}
            xs={24}
            className={classNames(styles.payOutItem, styles.itemMdPaddingLeft)}
          >
            <Form.Item
              label="Email address"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ]}
            >
              <Input placeholder="Email address" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </BasicModal>
  )
}

export default PayOutModal
