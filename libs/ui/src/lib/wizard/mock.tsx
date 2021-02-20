import React from 'react'
import { FlagOutlined, HomeOutlined, ToolOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

export interface StepperInterface {
  step: number
  name: string
  imgPath: JSX.Element
  isActive: boolean
  index: number
}
export const data: StepperInterface[] = [
  {
    step: 1,
    name: 'Basic',
    imgPath: <HomeOutlined />,
    isActive: true,
    index: 0,
  },
  {
    step: 2,
    name: 'Configure (API)',
    imgPath: (
      <FontAwesomeIcon icon={Icons.faPencilAlt} style={{ fontSize: '12px' }} />
    ),
    isActive: false,
    index: 1,
  },
  {
    step: 3,
    name: 'Testing (API)',
    imgPath: <ToolOutlined />,
    isActive: false,
    index: 2,
  },
  {
    step: 4,
    name: 'Result',
    imgPath: <FlagOutlined />,
    isActive: false,
    index: 3,
  },
]
