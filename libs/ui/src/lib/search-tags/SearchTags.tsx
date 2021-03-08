import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Input as AntInput } from 'antd'
import {
  FrownOutlined,
  CheckOutlined,
  SearchOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import styles from './SearchTags.module.less'

export interface SearchTagsProps {
  title?: string
  description?: string
  items: Array<string>
  itemType?: string
}

export interface SearchTag {
  title: string
  selected: boolean
}

export const SearchTags: FC<SearchTagsProps> = ({
  title,
  description,
  items,
  itemType,
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchTagItems, setSearchTagItems] = useState<SearchTag[]>([])
  const [showSelectAll, setShowSelectAll] = useState(true)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const handleSelectAll = () => {
    setSearchTagItems(
      searchTagItems.map((item) => ({ ...item, selected: true }))
    )
    setShowSelectAll(false)
  }
  const handleSelectItem = (tag) => {
    const items = [...searchTagItems]
    let showAll = true
    for (const item of items) {
      if (item.title === tag.title) {
        item.selected = !item.selected
      }
      showAll = showAll && item.selected
    }
    setSearchTagItems([...items])
    setShowSelectAll(!showAll)
  }
  const handleSearch = (e) => {
    const query = e.target.value
    setSearchTagItems(
      items
        .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        .map((tag) => ({ title: tag, selected: false }))
    )
    setShowSearchInput(false)
  }
  useEffect(() => {
    setSearchTagItems(items.map((item) => ({ title: item, selected: false })))
  }, [items])
  return (
    <div className={styles.searchTags}>
      {title && <h2>{title}</h2>}
      {description && <h3>{description}</h3>}
      {items.length > 0 && !showSearchInput && (
        <SearchOutlined
          style={{
            cursor: 'pointer',
            color: 'var(--light-grey-color)',
            fontSize: '16px',
            position: 'absolute',
            top: '4px',
            right: '0',
          }}
          onMouseOver={() => setShowSearchInput(true)}
        />
      )}
      {items.length > 0 && showSearchInput && (
        <div className={styles.searchInput}>
          <AntInput
            prefix={<SearchOutlined style={{ fontSize: '16px' }} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onPressEnter={(e) => handleSearch(e)}
            addonAfter={
              <CloseOutlined
                style={{ fontSize: '16px', cursor: 'pointer' }}
                onClick={() => setShowSearchInput(false)}
              />
            }
          />
        </div>
      )}
      <div className={styles.searchTagItems}>
        {items.length === 0 && (
          <div className={styles.noItems}>
            <FrownOutlined
              style={{
                color: 'var(--light-grey-color)',
                fontSize: '24px',
                marginBottom: '1rem',
              }}
            />
            <p>{`No ${itemType} found`}</p>
          </div>
        )}
        {items.length > 0 && (
          <div className={styles.searchTagItemsContainer}>
            {showSelectAll && (
              <span
                className={styles.searchTagItem}
                onClick={() => handleSelectAll()}
              >
                Select All
              </span>
            )}
            {searchTagItems.map((item) => (
              <span
                className={
                  item.selected
                    ? classNames(styles.selectedTagItem, styles.searchTagItem)
                    : item.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) &&
                      searchQuery !== ''
                    ? classNames(styles.possibleItem, styles.searchTagItem)
                    : styles.searchTagItem
                }
                key={item.title}
                onClick={() => handleSelectItem(item)}
              >
                {item.selected && <CheckOutlined />} {item.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchTags
