import React, { FC, useEffect, useState } from 'react'
import { Badge } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './GroupList.module.less'

interface P {
  onClick?: (isSelected: boolean, type: string) => void
  onCreateModalClick?: () => void
  showChatBox?: boolean
  isNewDm?: boolean
}
export const GroupList: FC<P> = ({ ...props }) => {
  const [active, setActive] = useState<boolean>(false)
  const [group, setGroup] = useState<string>('')

  useEffect(() => {
    if (props.showChatBox) {
      setActive(false)
    }
    if (props.isNewDm) {
      setActive(false)
    }
  }, [props.showChatBox, props.isNewDm])

  const handleClick = (type) => {
    setGroup(type)
    setActive(!active)
    props.onClick?.(true, type)
  }

  return (
    <div>
      <div
        className={classNames(
          styles.channelsText,
          styles.dFlex,
          styles.channelsHead
        )}
        style={{ cursor: 'pointer', transition: 'all 0.5s' }}
      >
        <span className={classNames(styles.textSm, styles.grayTextColor)}>
          channels
        </span>
        <PlusCircleFilled
          onClick={() => props.onCreateModalClick?.()}
          className={styles.addChannelIcon}
          style={{
            color: 'var(--primary-color)',
            fontSize: 'var(--font-size-base)',
          }}
        />
      </div>
      <div
        onClick={() => handleClick('general')}
        className={classNames(
          active && group === 'general'
            ? styles.channelGroupActive
            : styles.channelGroup
        )}
      >
        <div
          className={classNames(
            styles.dFlex,
            styles.channelText,
            styles.cursor
          )}
        >
          <p
            className={classNames(
              styles.textBlack,
              styles.textMd,
              styles.fontMedium,
              styles.mb,
              styles.cursor
            )}
          >
            #general
          </p>
          <h6
            className={classNames(
              styles.grayTextColor,
              styles.textSm,
              styles.mb
            )}
          >
            11: 20 AM
          </h6>
        </div>
        <div className={classNames(styles.dFlex, styles.channelMessage)}>
          <p
            className={classNames(
              styles.grayTextColor,
              styles.textMd,
              styles.fontMedium,
              styles.mb
            )}
          >
            6 unread messages
          </p>
          <h6
            className={classNames(
              styles.grayTextColor,
              styles.textSm,
              styles.mb
            )}
          >
            <Badge count={6} style={{ backgroundColor: '#54B2D3' }} />
          </h6>
        </div>
      </div>
      <div
        onClick={() => handleClick('design')}
        className={classNames(
          active && group === 'design'
            ? styles.channelGroupActive
            : styles.channelGroup
        )}
      >
        <div
          className={classNames(
            styles.dFlex,
            styles.channelText,
            styles.cursor
          )}
        >
          <p
            className={classNames(
              styles.textBlack,
              styles.textMd,
              styles.fontMedium,
              styles.mb,
              styles.cursor
            )}
          >
            #design
          </p>
          <h6
            className={classNames(
              styles.grayTextColor,
              styles.textSm,
              styles.mbs
            )}
          >
            11: 20 AM
          </h6>
        </div>
        <div className={classNames(styles.dFlex, styles.channelMessage)}>
          <p
            className={classNames(
              styles.grayTextColor,
              styles.textMd,
              styles.fontMedium,
              styles.mb
            )}
          >
            Oliver Addams: I have an idea on this issue...
          </p>
        </div>
      </div>
    </div>
  )
}

export default GroupList
