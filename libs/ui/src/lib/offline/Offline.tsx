import React, { FC, useState, useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './Offline.module.less'
import PropTypes from 'prop-types'
export interface OfflineProps {
  message: string
  time: number
  buttonLabel: string
  iconColor: string
}
export const Offline: FC<OfflineProps> = (props) => {
  const { message, iconColor, buttonLabel } = props
  const [time, setTime] = useState(props.time)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        if (time) {
          return time - 1
        }
        return props.time
      })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [setTime, props.time])
  return (
    <div className={styles.offlineDiv}>
      {message} {time} seconds...
      <button type="button" className={styles.reconnectBtn}>
        {buttonLabel}
        <LoadingOutlined
          style={{
            color: iconColor,
          }}
        />
      </button>
    </div>
  )
}
Offline.propTypes = {
  message: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
}
Offline.defaultProps = {
  message: 'Connection lost. Reconnecting in',
  time: 15,
  buttonLabel: 'Reconnect',
  iconColor: '#008000',
}
export default Offline
