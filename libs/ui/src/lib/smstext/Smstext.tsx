import React from 'react'

// import styles from './Smstext.module.less'

interface P {
  message?: string
  manageAppointment?: boolean
}

export const Smstext: React.FC<P> = ({ message, manageAppointment }) => {
  return (
    <div>
      <h1>Welcome to Smstext!</h1>
    </div>
  )
}

export default Smstext
