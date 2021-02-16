import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button, MobileHeader, GridVsList } from '@pabau/ui'
import addButtonStyles from '../../../AddButton.module.less'
import styles from './Filter.module.less'
import {
  AppstoreOutlined,
  FilterOutlined,
  MenuOutlined,
  PlusSquareFilled,
  SearchOutlined,
} from '@ant-design/icons'
import { Drawer, Input, Popover, Radio } from 'antd'
import classNames from 'classnames'

const WAIT_INTERVAL = 400

interface P {
  schema: Schema
  onClick?: () => void
  onFilterSource: () => void
  onSearch: (term: string) => void
}
export const Filter: FunctionComponent<P> = ({
  onClick,
  onFilterSource,
  onSearch,
}) => {
  const [isActive, setIsActive] = useState(true)
  const [mobFilterDrawer, setMobFilterDrawer] = useState(false)
  const [marketingSourceSearch, setMarketingSourceSearch] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch?.(marketingSourceSearch)
    }, WAIT_INTERVAL)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketingSourceSearch])

  const filterContent = (isMobile = false) => (
    <div className={addButtonStyles.filterContent}>
      {!isMobile && (
        <div className={classNames(addButtonStyles.filterHeader)}>
          <h6>Filter by</h6>
          <p>Status</p>
        </div>
      )}
      <div className={addButtonStyles.radioTextStyle}>
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
    <div className={styles.mainWrapper}>
      {/* Mobile header */}
      <div
        className={classNames(
          addButtonStyles.marketingIcon,
          addButtonStyles.desktopViewNone
        )}
      >
        <SearchOutlined className={addButtonStyles.marketingIconStyle} />
        <FilterOutlined
          className={addButtonStyles.marketingIconStyle}
          onClick={() => setMobFilterDrawer((e) => !e)}
        />
        <PlusSquareFilled
          className={addButtonStyles.plusIconStyle}
          onClick={() => onClick?.()}
        />
      </div>
      <Drawer
        visible={mobFilterDrawer}
        className={addButtonStyles.mobFilterDrawer}
        closable={false}
      >
        <MobileHeader className={addButtonStyles.marketingSourceFilterHeader}>
          <div className={addButtonStyles.allContentAlignMobile}>
            <div className={addButtonStyles.marketingTextStyle}>
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
          className={addButtonStyles.applyButton}
          onClick={() => {
            onFilterSource()
            setMobFilterDrawer((e) => !e)
          }}
        >
          Apply
        </Button>
        `
      </Drawer>
      {/* Desktop header */}
      <div
        className={classNames(
          addButtonStyles.marketingSource,
          addButtonStyles.mobileViewNone,
          styles.headerCRUD
        )}
      >
        <Input
          className={addButtonStyles.searchMarketingStyle}
          placeholder="Search in Custom"
          value={marketingSourceSearch}
          onChange={(e) => setMarketingSourceSearch(e.target.value)}
          suffix={<SearchOutlined style={{ color: '#8C8C8C' }} />}
          autoFocus
        />
        <Popover
          trigger="click"
          content={filterContent}
          placement="bottomRight"
          overlayClassName={addButtonStyles.filterPopover}
        >
          <Button className={addButtonStyles.filterBtn}>
            <FilterOutlined /> Filter
          </Button>
        </Popover>
        <div className={styles.GridVsList}>
          <GridVsList
            onChange={() => console.log('GridVsList not implemented')}
            displayTypes={[
              { title: 'Grid', icon: <AppstoreOutlined /> },
              { title: 'List', icon: <MenuOutlined /> },
            ]}
          />
        </div>
        <Button
          className={addButtonStyles.createSourceBtn}
          type="primary"
          onClick={() => onClick?.()}
        >
          New Staff Member
        </Button>
      </div>
    </div>
  )
}
