import React, { PropsWithChildren, useState } from 'react'
import { Form, Modal as AntModal, Button, Input } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import './modal.less'
import '../fonts.scss'
import './pretty-checkbox.scss'
import ActiveSVG from '../../assets/images/active.svg'
import NotActiveSVG from '../../assets/images/notactive.svg'

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
  const [activate, setActivate] = useState(true)

  return (
    <AntModal
      visible={visible}
      title={
        <div className="modal-heading-align">
          <div className="ant-modal-title">Create Marketing Source</div>
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
                value={mSourceName}
                defaultValue={mSourceName}
                onChange={(e) => setMSourceName(e.target.value)}
              />
            </Form.Item>
          </div>
        </div>
        <div className="modal-footer">
          <div className="pretty p-svg p-toggle p-plain">
            <input type="checkbox" checked={activate} onChange={() => setActivate(!activate)} />
            <div className="state p-off">
              <img className="svg" src={NotActiveSVG} />
              <label>Activate</label>
            </div>
            <div className="state p-on">
              <img className="svg" src={ActiveSVG} />
              <label>Activate</label>
            </div>
          </div>
          <Button
            type="primary"
            className="createBtn"
            size="large"
            loading={loading}
            onClick={onClick}
            disabled={!mSourceName}
          >
            Create
          </Button>
        </div>
      </Form>
    </AntModal>
  )
}

export default Modal
