import React, { FC } from 'react'
import { ReactComponent as LaunchSvg } from '../../assets/images/launch.svg'

export const LaunchSVG: FC = () => (
  <div className="launch-container">
    <LaunchSvg className="launch-logo" />
  </div>
)

export default LaunchSVG
