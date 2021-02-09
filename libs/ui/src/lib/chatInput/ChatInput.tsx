import React, { FC, useState, MouseEvent } from 'react'
import { ReactComponent as EmojiIcon } from '../../assets/images/emoji-icon.svg'
import { ReactComponent as AttachIcon } from '../../assets/images/attach-icon.svg'
import { ReactComponent as Stroke } from '../../assets/images/stroke.svg'
import { ReactComponent as ActiveStoke } from '../../assets/images/stroke-active.svg'
import styles from './ChatInput.module.less'

interface P {
  onMessageType?: (e: MouseEvent<HTMLElement>) => void
}

const ChatInput: FC<P> = ({ ...props }) => {
  const [message, setMessage] = useState<string>('')

  const handleChange = (e) => {
    setMessage(e.target.value)
    props?.onMessageType?.(e)
  }

  return (
    <div className={styles.messageInputContainer}>
      <input
        className={styles.messageInput}
        type="text"
        placeholder={'Message'}
        onChange={handleChange}
      />
      <div className={styles.messageSymbol}>
        <div className={styles.messageEmoji}>
          <EmojiIcon />
        </div>
        <div className={styles.messageAttach}>
          <AttachIcon />
        </div>
        <div className={styles.messageStroke}>
          {message ? <ActiveStoke /> : <Stroke />}
        </div>
      </div>
    </div>
  )
}

export default ChatInput
