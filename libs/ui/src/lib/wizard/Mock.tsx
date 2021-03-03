import React from 'react'
import { FlagOutlined, HomeOutlined, ToolOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

export interface StepperInterface {
  step: number
  name: string
  img: JSX.Element | string
  isActive: boolean
  index: number
}
export const data: StepperInterface[] = [
  {
    step: 1,
    name: 'Basic',
    img: <HomeOutlined />,
    isActive: true,
    index: 0,
  },
  {
    step: 2,
    name: 'Configure (API)',
    img: (
      <FontAwesomeIcon icon={Icons.faPencilAlt} style={{ fontSize: '12px' }} />
    ),
    isActive: false,
    index: 1,
  },
  {
    step: 3,
    name: 'Testing (API)',
    img: <ToolOutlined />,
    isActive: false,
    index: 2,
  },
  {
    step: 4,
    name: 'Result',
    img: <FlagOutlined />,
    isActive: false,
    index: 3,
  },
]
