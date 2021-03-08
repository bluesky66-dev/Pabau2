import React, { FC, useEffect, useState } from 'react'
import { Button, MobileHeader, SimpleDropdown } from '@pabau/ui'
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
  setFilterPreferences?(data: ThirdPartiesFilterPreferencetype): void
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
  setFilterPreferences,
}) => {
  const [isActive, setIsActive] = useState(true)
  const [mobFilterDrawer, setMobFilterDrawer] = useState(false)
  const [marketingSourceSearch, setMarketingSourceSearch] = useState('')
  const [type, setType] = useState('')
  const [
    filterSpec,
    setFilterSpec,
  ] = useState<ThirdPartiesFilterPreferencetype>({
    isActive: true,
    type: ['Company', 'Insurance'],
  })
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

  const onSelect = (value: string) => {
    setType(value)
    setFilterSpec({ ...filterSpec, type: [value] })
  }

  const clearAll = () => {
    setFilterSpec({
      ...filterSpec,
      isActive: true,
      type: ['Company', 'Insurance'],
    })
    setType('All company')
  }

  const handleMobileDrawerApply = () => {
    if (schema.full === 'Third Parties') {
      setFilterPreferences(filterSpec)
    } else {
      onFilterSource()
    }
    setMobFilterDrawer((e) => !e)
  }

  const handleMobileDrawerReset = () => {
    if (schema.full === 'Third Parties') {
      clearAll()
    }
  }

  const filterThirdPartyContent = (isMobile = false) => (
    <div className={styles.thirdPartyFilterContent}>
      {!isMobile && (
        <div className={classNames(styles.thirdPartyFilterHeader)}>
          <h6>Filter</h6>
        </div>
      )}
      <div className={styles.thirdPartyFilterBody}>
        <div className={styles.radioTextStyle}>
          <p>Status</p>
          <Radio.Group
            onChange={(e) => {
              setFilterSpec({ ...filterSpec, isActive: e.target.value })
              // !isMobile && onFilterSource()
            }}
            value={filterSpec.isActive}
          >
            <Radio value={true}>
              <span>Active</span>
            </Radio>
            <Radio value={false}>
              <span>Disabled</span>
            </Radio>
          </Radio.Group>
        </div>
        <div className={styles.filterType}>
          <p>Type</p>
          <SimpleDropdown
            placeHolderText={'All Companies'}
            value={type}
            onSelected={(e) => onSelect(e)}
            dropdownItems={['Company', 'Insurance']}
          />
        </div>
        {!isMobile && (
          <div className={styles.filterAction}>
            <Button
              type="default"
              onClick={clearAll}
              className={styles.btnClearAll}
            >
              {' '}
              Clear all{' '}
            </Button>
            <Button
              type="primary"
              onClick={() => setFilterPreferences(filterSpec)}
            >
              Apply filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
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
              <span onClick={handleMobileDrawerReset}>Reset</span>
              <p> Filter </p>
              <span onClick={() => setMobFilterDrawer((e) => !e)}>Cancel</span>
            </div>
          </div>
        </MobileHeader>
        <div style={{ marginTop: '91px', paddingLeft: '24px' }}>
          {schema.full !== 'Third Parties'
            ? filterContent(true)
            : filterThirdPartyContent(true)}
        </div>
        <Button
          type="primary"
          className={styles.applyButton}
          onClick={handleMobileDrawerApply}
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
              needTranslation
                ? t('marketingsource-input-search-placeholder.translation')
                : 'Search'
            }
            value={marketingSourceSearch}
            onChange={(e) => setMarketingSourceSearch(e.target.value)}
            suffix={<SearchOutlined style={{ color: '#8C8C8C' }} />}
            autoFocus
          />
        )}
        <Popover
          trigger="click"
          content={
            schema.full === 'Third Parties'
              ? filterThirdPartyContent
              : filterContent
          }
          placement="bottomRight"
          overlayClassName={
            schema.full === 'Third Parties'
              ? styles.thirdPartyPopover
              : styles.filterPopover
          }
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
            ? t('marketingsource-header-create-btn.translation')
            : schema.createButtonLabel}
        </Button>
      </div>
    </>
  )
}

export default AddButton
