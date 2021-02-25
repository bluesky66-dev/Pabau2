import React, { Fragment, useState, useEffect } from 'react'
import { Form, Input, Modal, Typography, Slider } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'
import { BasicModal, Button, Switch } from '@pabau/ui'
import styles from './BlockOutOptionsComponents.module.less'
import { LeftOutlined } from '@ant-design/icons'

export interface NewBlockOutOptionsProps {
  visible: boolean
  onCancel: () => void
  onSave: (values) => void
  isEdit?: boolean
  editData?: {
    name: string
    type: string
    is_active: boolean
    paidBlockOut: string
    backgroundColor: string
    defaultTime: number
  }
  onDelete?: () => void
}

export function NewBlockOutOptions(props: NewBlockOutOptionsProps) {
  const [form] = Form.useForm()
  const { Item } = Form
  const { Text, Paragraph } = Typography
  const { visible, onCancel, isEdit, editData, onSave, onDelete } = props

  const [showDelete, setShowDelete] = useState(false)
  const [type, setType] = useState(
    isEdit ? editData?.type || 'Blockout' : 'Blockout'
  )
  const [backgroundColor, setBackgroundColor] = useState(
    isEdit ? editData?.backgroundColor || '54B2D3' : '54B2D3'
  )

  useEffect(() => {
    if (isEdit && editData) {
      setType(editData.type || 'Blockout')
      setBackgroundColor(editData.backgroundColor || '54B2D3')
    }
  }, [editData, isEdit])

  const handleClose = () => {
    form.resetFields()
    onCancel()
  }

  const onTypeCheck = (type: string) => () => {
    setType(type)
  }

  const handleDelete = () => {
    onDelete?.()
    setShowDelete(false)
    handleClose()
  }

  return (
    <Fragment>
      <Modal
        closable={false}
        footer={null}
        width={'100%'}
        visible={visible}
        onCancel={handleClose}
        className={styles.fullScreenModal}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            name: isEdit ? editData?.name || '' : '',
            isActive: isEdit ? !!editData?.is_active : true,
            paidBlockOut: isEdit ? !!editData?.paidBlockOut : true,
            backgroundColor: isEdit
              ? editData?.backgroundColor
              : backgroundColor,
            defaultTime: isEdit ? editData?.defaultTime : 50,
          }}
          className={styles.form}
          onSubmitCapture={(e) => {
            e.preventDefault()
          }}
          onFinish={onSave}
        >
          <div className={styles.header}>
            <div>
              <LeftOutlined onClick={handleClose} />
              <span className={styles.headerTitle}>
                {isEdit ? 'Edit' : 'Create'} Blockout
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text style={{ marginRight: 8 }}>Active</Text>
              <Item
                name="isActive"
                valuePropName="checked"
                style={{ marginBottom: 0 }}
              >
                <Switch />
              </Item>
              <Button onClick={handleClose} style={{ marginLeft: 32 }}>
                Cancel
              </Button>
              {isEdit && (
                <Button
                  style={{ marginLeft: 16 }}
                  onClick={() => setShowDelete(true)}
                >
                  Delete
                </Button>
              )}
              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: 16 }}
                >
                  {isEdit ? 'Save' : 'Create'}
                </Button>
              </Form.Item>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.bodyContent}>
              <Paragraph style={{ marginBottom: 6 }}>Name</Paragraph>
              <Item
                name="name"
                rules={[{ required: true, message: 'Please enter name' }]}
              >
                <Input placeholder="Enter Name" />
              </Item>

              <Paragraph style={{ marginBottom: 6 }}>Type</Paragraph>
              <div style={{ display: 'flex', flex: 1 }}>
                <div
                  onClick={onTypeCheck('Blockout')}
                  className={`${styles.typeLeft} ${
                    type === 'Blockout' && styles.selectedLeft
                  }`}
                >
                  {type === 'Blockout' && (
                    <CheckCircleFilled className={styles.check} />
                  )}
                  <div className={styles.dash} />
                  <p style={{ marginTop: 16 }}>Blockout</p>
                </div>
                <div
                  onClick={onTypeCheck('Opening')}
                  className={`${styles.typeRight}  ${
                    type === 'Opening' && styles.selectedRight
                  }`}
                >
                  {type === 'Opening' && (
                    <CheckCircleFilled className={styles.check} />
                  )}
                  <div className={styles.dash} />
                  <p style={{ marginTop: 16 }}>Opening</p>
                </div>
              </div>

              {type === 'Blockout' && (
                <>
                  <Paragraph style={{ marginTop: 24, marginBottom: 6 }}>
                    Paid Blockout
                  </Paragraph>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Item
                      name="paidBlockOut"
                      valuePropName="checked"
                      style={{ marginBottom: 0 }}
                    >
                      <Switch />
                    </Item>
                    <Text style={{ marginLeft: 12 }}>Enable</Text>
                  </div>
                </>
              )}

              <Paragraph style={{ marginTop: 24, marginBottom: 6 }}>
                Backgorund color
              </Paragraph>
              <div style={{ display: 'flex', flex: 1 }}>
                <div
                  className={styles.colorBox}
                  style={{
                    backgroundColor: `#${backgroundColor}`,
                  }}
                />
                <Item
                  name="backgroundColor"
                  style={{ marginBottom: 0, flex: 1 }}
                  rules={[
                    {
                      required: true,
                      message: 'Please enter background color',
                    },
                    {
                      pattern: new RegExp('^[0-9A-Fa-f]{6}'),
                      message: 'Please enter valid background color',
                    },
                  ]}
                >
                  <Input
                    style={{ height: 40 }}
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    maxLength={6}
                    minLength={6}
                  />
                </Item>
              </div>

              <Paragraph style={{ marginTop: 24, marginBottom: 0 }}>
                Default Time
              </Paragraph>
              <Item name="defaultTime">
                <Slider
                  tooltipPlacement="bottom"
                  max={400}
                  min={5}
                  step={5}
                  tipFormatter={(value) => <span>{value} min</span>}
                  className={styles.slider}
                  tooltipVisible
                />
              </Item>
            </div>
          </div>
        </Form>
      </Modal>
      <BasicModal
        title="Delete Block Out Option?"
        visible={showDelete}
        onCancel={() => setShowDelete(false)}
        footer={false}
        centered
      >
        <Paragraph type="secondary">This will permenantly delete.</Paragraph>
        <div style={{ padding: '12px 0 40px', textAlign: 'right' }}>
          <Button
            style={{ background: '#FF5B64', border: 'none' }}
            danger
            type="primary"
            size="large"
            onClick={handleDelete}
          >
            Yes, Delete
          </Button>
        </div>
      </BasicModal>
    </Fragment>
  )
}

export default NewBlockOutOptions
