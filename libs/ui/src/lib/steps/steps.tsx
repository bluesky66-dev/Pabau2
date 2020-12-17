import React, { FC } from 'react'
import { Steps as AntSteps } from 'antd'
const { Step } = AntSteps

export const Steps: FC = () => {
  return (
    <AntSteps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </AntSteps>
  )
}
