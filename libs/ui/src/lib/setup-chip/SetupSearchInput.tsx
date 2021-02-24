import React, { FC, useState } from 'react'
import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import styles from './SetupChip.module.less'

export interface SetupSearchProps {
  placeholder?: string
  onChange?: (newText: string) => void
}

export const SetupSearchInput: FC<SetupSearchProps> = ({
  onChange,
  placeholder = 'Search',
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <Input
      className={styles.searchInputStyle}
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => handleSearchTerm(e)}
      suffix={
        <>
          <SearchOutlined className={styles.searchIcon} />
          {searchTerm && (
            <CloseCircleFilled
              className={styles.closeIcon}
              onClick={() => {
                setSearchTerm('')
                onChange?.('')
              }}
            />
          )}
        </>
      }
    />
  )
}

export default SetupSearchInput
