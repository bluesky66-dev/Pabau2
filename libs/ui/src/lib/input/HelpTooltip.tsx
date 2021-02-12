import { QuestionCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { TooltipPlacement } from 'antd/lib/tooltip'
import React, { PropsWithChildren } from 'react'

interface HelpTooltipProps {
  helpText?: string
  placement?: TooltipPlacement
}

export function HelpTooltip({
  helpText,
  placement = 'topLeft',
}: PropsWithChildren<HelpTooltipProps>): JSX.Element {
  return (
    <Tooltip placement={placement} title={helpText}>
      <QuestionCircleOutlined />
    </Tooltip>
  )
}

export default HelpTooltip
