import React, { useState } from 'react'
import { Input, Checkbox, Form, Collapse, Typography } from 'antd'
import { Button, BasicModal } from '@pabau/ui'
import styles from './TaxRateComponents.module.less'

export interface CreateTaxRateProps {
  visible: boolean
  onCancel: () => void
  onSave: (values) => void
  isEdit?: boolean
  editData?: {
    name: string
    amount: number
    glCode: string
    is_active: boolean
  }
  onDelete?: (values) => void
}

export function CreateTaxRateModal(props: CreateTaxRateProps) {
  const [form] = Form.useForm()
  const { visible, onCancel, isEdit, editData, onSave, onDelete } = props
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleClose = () => {
    form.resetFields()
    onCancel()
  }

  const handleDelete = () => {
    onDelete(editData)
    setShowDeleteModal(false)
    handleClose()
  }

  return (
    <>
      <BasicModal
        width={700}
        visible={visible}
        title={`${isEdit ? 'Update' : 'Create'} Tax Rate`}
        footer={false}
        centered={true}
        onCancel={handleClose}
      >
        <Form
          layout="vertical"
          form={form}
          name="control-hooks"
          initialValues={{
            name: isEdit ? editData?.name || '' : '',
            amount: isEdit ? editData?.amount || '' : '',
            isActive: isEdit ? !!editData?.is_active : false,
            glCode: isEdit ? editData?.glCode || '' : '',
          }}
          onFinish={(values) => {
            onSave(values)
            handleClose()
          }}
        >
          <div>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Tax name is required' }]}
            >
              <Input placeholder="eg. VAT20" />
            </Form.Item>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: 'Tax amount is required' }]}
            >
              <Input placeholder="20" addonAfter="%" />
            </Form.Item>

            <Collapse
              ghost
              expandIconPosition="right"
              className={styles.advanceCollapse}
            >
              <Collapse.Panel header="Advanced" key="1">
                <Form.Item label="GL Code" name="glCode">
                  <Input placeholder="eg. Nail Bar" />
                </Form.Item>
              </Collapse.Panel>
            </Collapse>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 20,
            }}
          >
            <Form.Item name="isActive" valuePropName="checked">
              <Checkbox>Active</Checkbox>
            </Form.Item>
            {isEdit && (
              <Button
                style={{ margin: '0 16px' }}
                onClick={() => setShowDeleteModal(true)}
              >
                Delete
              </Button>
            )}
            <Button type="primary" htmlType="submit">
              {isEdit ? 'Update' : 'Create'}
            </Button>
          </div>
        </Form>
      </BasicModal>
      <BasicModal
        footer={false}
        width={682}
        title="Delete tax rate?"
        centered={true}
        visible={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
      >
        <div style={{ paddingBottom: 40 }}>
          <Typography.Paragraph>
            {editData?.name} will be deleted. This action is irreversable.
          </Typography.Paragraph>
          <div style={{ textAlign: 'right', marginTop: 20 }}>
            <Button type="primary" onClick={handleDelete}>
              Yes, Delete
            </Button>
          </div>
        </div>
      </BasicModal>
    </>
  )
}

export default CreateTaxRateModal
