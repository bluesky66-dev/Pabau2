import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Switch } from 'antd'
import React, { FC } from 'react'

interface P {
  needLeft?: boolean
}

export const MedicalFormBottom: FC<P> = ({ needLeft }): JSX.Element => {
  return (
    <div className="formBottom formCommon">
      {needLeft && (
        <div className="leftButtons">
          <Switch defaultChecked size="small" />
          <span>Required</span>
        </div>
      )}
      <div className="rightButtons">
        <Button
          type={ButtonTypes.default}
          icon={<DeleteOutlined />}
          size="small"
        >
          Delete
        </Button>
        <Button type={ButtonTypes.primary} icon={<SaveOutlined />} size="small">
          Save component
        </Button>
      </div>
    </div>
  )
}

export default MedicalFormBottom
