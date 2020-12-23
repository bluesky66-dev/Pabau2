import React, { PropsWithChildren } from 'react'
import { Modal as AntModal, Button, Input, Checkbox } from 'antd';
import './modal.less'
import { CloseOutlined } from '@ant-design/icons';

export interface ModalInterface {
  loading?: boolean
  visible?: boolean
  onClick?: () => void
  handleCancel?: () => void
}

export function Modal({ loading, visible, children, onClick, handleCancel }: PropsWithChildren<ModalInterface>): JSX.Element {

  return (
    <AntModal
      visible={visible}
      title="Create Marketing Source"
      width={682}
      footer={false}
      wrapClassName="modal"      
    >
      <div className="modal-body">
        <div className="input-field">
          <label> Name </label>
          <Input className="input-style" placeholder="Enter marketing source name"/>
        </div>
      </div>
      <div className="modal-footer">
        <div className="active">
          <Checkbox className="active-style">Activate</Checkbox>
        </div>
        <Button key="submit" type="primary" className="btnCreate" size="large" loading={loading} disabled={true} onClick={onClick} >
          Create
        </Button>
      </div>
    </AntModal>
  )
}

export default Modal
