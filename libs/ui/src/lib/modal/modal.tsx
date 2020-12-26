import React, { PropsWithChildren, useState } from 'react'
import { Form, Modal as AntModal, Button, Input, Checkbox } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import './modal.less'

export interface ModalInterface {
  loading?: boolean
  visible?: boolean
  onClick?: () => void
  handleSubmit?: () => void
}

export function Modal({
  loading,
  visible,
  onClick,
}: PropsWithChildren<ModalInterface>): JSX.Element {
  const [form] = Form.useForm()

  const [mSourceName, setMSourceName] = useState('Facebook')
  const [activate, setActivate] = useState(false)

  return (
    <AntModal
      visible={visible}
      title={
        <div className="modal-heading-align">
          <h1 className="ant-modal-title">Create Marketing Source</h1>
          <CloseOutlined />
        </div>
      }
      width={682}
      footer={false}
      wrapClassName="modal"
      closable={false}
    >
      <Form form={form} requiredMark={false} layout="vertical">
        <div className="modal-body">
          <div className="input-field">
            <Form.Item
              label="Name"
              name="marketingSorce"
              rules={[
                {
                  required: true,
                  message: 'Marketing source name is required!',
                },
              ]}
            >
              <Input
                className="input-style"
                placeholder="Enter marketing source name"
                defaultValue={mSourceName}
                onChange={(e) => setMSourceName(e.target.value)}
              />
            </Form.Item>
          </div>
        </div>
        <div className="modal-footer">
          <div className="active">
            <Checkbox
              className="active-style"
              checked={activate}
              onChange={() => setActivate(!activate)}
            >
              Activate
            </Checkbox>
          </div>
          <Button
            key="submit"
            type="primary"
            className="createBtn"
            size="large"
            loading={loading}
            onClick={onClick}
            htmlType="submit"
            disabled={!mSourceName || !activate}
          >
            Create
          </Button>
        </div>
      </Form>
    </AntModal>
  )
}

export default Modal
