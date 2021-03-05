import React, { FC } from 'react'
import { FileProtectOutlined } from '@ant-design/icons'
import styles from './LibraryCard.module.less'

export interface LibraryCardProps {
  isPlus?: boolean
  title?: string | number
  bundleCount?: number
  onClick?: () => void
}

export const LibraryCard: FC<LibraryCardProps> = ({
  isPlus = false,
  title,
  bundleCount = 0,
  onClick,
}) => {
  return (
    <div className={styles.libraryCard} onClick={() => onClick?.()}>
      <div>
        <span>
          <FileProtectOutlined color="#9292A3;" />
        </span>
        {isPlus && <span className="plus">Plus</span>}
      </div>
      <h4>{title}</h4>
      <p>{bundleCount}</p>
    </div>
  )
}

export default LibraryCard
