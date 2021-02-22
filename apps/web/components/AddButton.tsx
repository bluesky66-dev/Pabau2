import React, { FC, useEffect, useState } from 'react'
import { Button, MobileHeader } from '@pabau/ui'
import styles from './AddButton.module.less'
import {
  FilterOutlined,
  PlusSquareFilled,
  SearchOutlined,
} from '@ant-design/icons'
import { Drawer, Input, Popover, Radio } from 'antd'
import classNames from 'classnames'
import { useTranslationI18 } from '../hooks/useTranslationI18'
// import { isMobile, isTablet } from 'react-device-detect'
// import { useKeyPressEvent } from 'react-use'

const WAIT_INTERVAL = 400

interface P {
  schema: Schema
  onClick?: () => void
  onFilterSource: () => void
  onSearch: (term: string) => void
  tableSearch?: boolean
  addFilter?: boolean
  needTranslation?: boolean
  addFilter?: boolean
}

const AddButton: FC<P> = ({
  schema,
  onClick,
  children,
  onFilterSource,
  onSearch,
  tableSearch = true,
  addFilter = true,
  needTranslation,
  addFilter = true,
}) => {
  const [isActive, setIsActive] = useState(true)
  const [mobFilterDrawer, setMobFilterDrawer] = useState(false)
  const [marketingSourceSearch, setMarketingSourceSearch] = useState('')
  const { t } = useTranslationI18()

  // useKeyPressEvent('n', () => {
  //   onClick?.()
  // })

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(marketingSourceSearch)
    }, WAIT_INTERVAL)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketingSourceSearch])

  const filterContent = (isMobile = false) => (
    <div className={styles.filterContent}>
      {!isMobile && (
        <div className={classNames(styles.filterHeader)}>
          <h6>Filter by</h6>
          <p>Status</p>
        </div>
      )}
      <div className={styles.radioTextStyle}>
        <Radio.Group
          onChange={(e) => {
            setIsActive(e.target.value)
            !isMobile && onFilterSource()
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
      {/* Mobile header */}
      <div className={classNames(styles.marketingIcon, styles.desktopViewNone)}>
        {tableSearch && (
          <SearchOutlined className={styles.marketingIconStyle} />
        )}
        {addFilter && (
          <FilterOutlined
            className={styles.marketingIconStyle}
            onClick={() => setMobFilterDrawer((e) => !e)}
          />
        )}
        <PlusSquareFilled
          className={styles.plusIconStyle}
          onClick={() => onClick?.()}
        />
      </div>
      <Drawer
        visible={mobFilterDrawer}
        className={styles.mobFilterDrawer}
        closable={false}
      >
        <MobileHeader className={styles.marketingSourceFilterHeader}>
          <div className={styles.allContentAlignMobile}>
            <div className={styles.marketingTextStyle}>
              <span>Reset</span>
              <p> Filter </p>
              <span>Cancel</span>
            </div>
          </div>
        </MobileHeader>
        <div style={{ marginTop: '91px', paddingLeft: '24px' }}>
          {filterContent(true)}
        </div>
        <Button
          type="primary"
          className={styles.applyButton}
          onClick={() => {
            onFilterSource()
            setMobFilterDrawer((e) => !e)
          }}
        >
          Apply
        </Button>
      </Drawer>

      {/* Desktop header */}
      <div
        className={classNames(styles.marketingSource, styles.mobileViewNone)}
      >
        {tableSearch && (
          <Input
            className={styles.searchMarketingStyle}
            placeholder={
              needTranslation ? t('search-placeholder.translation') : 'Search'
            }
            value={marketingSourceSearch}
            onChange={(e) => setMarketingSourceSearch(e.target.value)}
            suffix={<SearchOutlined style={{ color: '#8C8C8C' }} />}
            autoFocus
          />
        )}
        <Popover
          trigger="click"
          content={filterContent}
          placement="bottomRight"
          overlayClassName={styles.filterPopover}
        >
          {addFilter && (
            <Button className={styles.filterBtn}>
              <FilterOutlined />{' '}
              {needTranslation
                ? t('marketingsource-button-filter.translation')
                : 'Filter'}
            </Button>
          )}
        </Popover>
        <Button
          className={styles.createSourceBtn}
          type="primary"
          onClick={() => onClick?.()}
        >
          {needTranslation
            ? t('marketingsource-header-create.translation')
            : schema.createButtonLabel}
        </Button>
      </div>
    </>
  )
}

export default AddButton
