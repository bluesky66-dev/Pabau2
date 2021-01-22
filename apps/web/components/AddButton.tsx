import { DocumentNode, useMutation } from '@apollo/client'
import React, { FC, useEffect, useState } from 'react'
import { BasicModal as Modal, Button } from '@pabau/ui'
import Form from './Form'
// import { useKeyPressEvent } from 'react-use'
import styles from './CrudTable.module.less'
import { FilterOutlined, PlusSquareFilled, SearchOutlined } from '@ant-design/icons'
import { Input, Radio, Popover } from 'antd'
import classNames from 'classnames'
// import { isMobile, isTablet } from 'react-device-detect'
import { useKeyPressEvent } from 'react-use'

const WAIT_INTERVAL = 400
interface P {
  schema: Schema
  onClick?: () => void
  onFilterSource: (filter: boolean) => void
  onSearch: (term: string) => void
}

const AddButton: FC<P> = ({ schema, onClick, children, onFilterSource, onSearch }) => {
  const [isActive, setIsActive] = useState(true)
  const [marketingSourceSearch, setMarketingSourceSearch] = useState('')

  useKeyPressEvent('n', () => {
    onClick?.()
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch && onSearch(marketingSourceSearch)
    }, WAIT_INTERVAL)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketingSourceSearch])

  const filterContent = (
    <div className={styles.filterContent}>
      <div className={styles.filterHeader}>
        <h6>Filter by</h6>
        <p>Status</p>
      </div>
      <div className={styles.radioTextStyle}>
        <Radio.Group
          onChange={(e) => {
            setIsActive(e.target.value)
            onFilterSource(e.target.value)
          }}
          value={isActive}
        >
          <Radio value={true}>
            <span>Active</span>
          </Radio>
          <Radio value={false}>
            <span>Inactive</span>
          </Radio>
        </Radio.Group>
      </div>
    </div>
  )
  return (
    <>
      <div className={classNames(styles.marketingIcon, styles.desktopViewNone)}>
        <SearchOutlined className={styles.marketingIconStyle} />
        <FilterOutlined className={styles.marketingIconStyle} />
        <PlusSquareFilled className={styles.plusIconStyle} onClick={() => onClick?.()} />
      </div>
      <div className={classNames(styles.marketingSource, styles.mobileViewNone)}>
        <Input
          className={styles.searchMarketingStyle}
          placeholder="Search"
          value={marketingSourceSearch}
          onChange={(e) => setMarketingSourceSearch(e.target.value)}
          suffix={<SearchOutlined style={{ color: '#8C8C8C' }} />}
          autoFocus
        />
        <Popover
          trigger="click"
          content={filterContent}
          placement="bottomRight"
          overlayClassName={styles.filterPopover}
        >
          <Button className={styles.filterBtn}>
            <FilterOutlined /> Filter
          </Button>
        </Popover>
        <Button
          className={styles.createSourceBtn}
          type="primary"
          onClick={() => onClick?.()}
        >
          {'Create ' + schema.short}
        </Button>
      </div>
    </>
  )
}

export default AddButton
