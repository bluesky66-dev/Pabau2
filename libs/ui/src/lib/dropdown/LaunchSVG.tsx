import React, { FC } from 'react'
import './Logo.less'
import { ReactComponent as LaunchSvg } from './launch.svg'

export const LaunchSVG: FC = () => (
  <div className="launch-container">
    <LaunchSvg className="launch-logo" />
  </div>
)

export default LaunchSVG
