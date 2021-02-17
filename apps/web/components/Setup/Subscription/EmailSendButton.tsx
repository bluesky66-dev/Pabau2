import { MailOutlined } from '@ant-design/icons'
import { Button, ButtonProps } from '@pabau/ui'
import React, { FC, useState } from 'react'

const EmailSendButton: FC<ButtonProps> = (props) => {
  const [sent, setSent] = useState(false)

  const handleBtnClick = async (e) => {
    await props.onClick?.(e)
    setSent(true)
  }

  return (
    <Button {...props} onClick={handleBtnClick} disabled={sent}>
      <MailOutlined /> {sent ? 'Sent' : 'Email'}
    </Button>
  )
}

export default EmailSendButton
