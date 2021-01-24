import { QuestionCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React, { PropsWithChildren } from 'react'

interface HelpTooltipProps {
  helpText?: string
}

export function HelpTooltip({ helpText }: PropsWithChildren<HelpTooltipProps>): JSX.Element {
  return (
    <Tooltip placement="topLeft" title={helpText}>
      <QuestionCircleOutlined />
    </Tooltip>
  )
}

export default HelpTooltip
