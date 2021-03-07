import { MailOutlined, MessageOutlined, RightOutlined } from '@ant-design/icons'
import { ChooseModalItem } from '@pabau/ui'
import React, { FC } from 'react'

import styles from './ChooseTypeGroup.module.less'

const addOnStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid var(--border-color-base)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--grey-text-color)',
  fontSize: '16px',
}

const defaultGroup: ChooseModalItem[] = [
  {
    title: 'General',
    icon: <MailOutlined />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
  {
    title: 'SMS',
    icon: <MessageOutlined />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const onSelected = (item) => alert(item.title + ' clicked.')

export const defaultChooseTypeGroupProps: ChooseTypeGroupProps = {
  items: defaultGroup,
  onSelected: onSelected,
}
export interface ChooseTypeGroupProps {
  items?: ChooseModalItem[]
  onSelected?: (item: ChooseModalItem) => void
}

export const ChooseTypeGroup: FC<ChooseTypeGroupProps> = (
  chooseTypeGroupProps
) => {
  if (
    chooseTypeGroupProps === undefined ||
    Object.keys(chooseTypeGroupProps).length === 0
  )
    chooseTypeGroupProps = defaultChooseTypeGroupProps

  const { items, onSelected } = chooseTypeGroupProps
  return (
    <div className={styles.chooseModalContent}>
      {items?.map((item) => (
        <div
          key={item.title}
          className={styles.chooseServiceTypeItem}
          onClick={() => {
            onSelected ? onSelected(item) : alert(item.title + ' clicked.')
          }}
        >
          <div>{item.icon}</div>
          <div>
            <div className={styles.chooseServiceTypeItemContent}>
              <p>{item.title}</p>
              {item.description && <p>{item.description}</p>}
            </div>
            {item.addonIcon && <div>{item.addonIcon}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChooseTypeGroup
