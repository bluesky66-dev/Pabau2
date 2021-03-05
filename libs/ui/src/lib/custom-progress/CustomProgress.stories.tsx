import React, { FC } from 'react'
import CustomProgress, { CustomProgressProps } from './CustomProgress'

import {
  percent,
  rest,
  labelPercent,
  labelRest,
  colorPercent,
  colorRest,
} from './data'

export default {
  component: CustomProgress,
  title: 'UI/Custom Progress',
  args: { percent, rest, labelPercent, labelRest, colorPercent, colorRest },
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const CustomProgressStory: FC<CustomProgressProps> = ({ ...args }) => (
  <CustomProgress
    percent={percent}
    rest={rest}
    labelPercent={labelPercent}
    labelRest={labelRest}
    colorPercent={colorPercent}
    colorRest={colorRest}
  />
)
