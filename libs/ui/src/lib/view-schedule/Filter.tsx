import React, { FC, useState } from 'react'
import { Popover } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import _ from 'lodash'

import { discoverAndLearnProps } from '@pabau/ui'
import { WebinarProps } from '@pabau/ui'

import { filterOptions, lengthOptions } from './mock'

import { Button } from '../button/button'
import { SimpleDropdown } from '../simple-dropdown/SimpleDropdown'

import styles from './ViewSchedule.module.less'

interface IFilterOptions {
  name: string
  category: string
  length: string
  difficulty: string
}

interface P {
  webinarList: discoverAndLearnProps[] | undefined
  handleShowResult: (webinar: discoverAndLearnProps[] | undefined) => void
  onClear: () => void
}

const initialFilters: IFilterOptions = {
  name: 'Select',
  category: 'Select',
  length: 'Select',
  difficulty: 'Select',
}

export const Filter: FC<P> = ({ webinarList, onClear, handleShowResult }) => {
  const [filterObj, setFilterObj] = useState<IFilterOptions>(initialFilters)
  const [filters, setFilters] = useState<string[] | undefined>([])

  const handleSelect = (key: string, val): void => {
    setFilterObj({ ...filterObj, [key]: val })
    if (filters?.includes(key) && val === 'Select') {
      const data = filters?.splice(filters?.indexOf(key), 1)
      setFilters(data)
    } else if (!filters?.includes(key)) {
      filters?.push(key)
      setFilters(filters)
    }
  }

  const handleClear = (): void => {
    setFilterObj(initialFilters)
    setFilters([])
    onClear()
  }

  const handleFilter = (): void => {
    const data = filterWebinar(webinarList, filterObj, filters)
    handleShowResult(data)
  }

  const filterPopoverContent = (): JSX.Element => {
    return (
      <div className={styles.filterContainer}>
        <div className={styles.header}>
          <strong>Filter By</strong>
          <Button type={'text'} onClick={handleClear}>
            Clear All
          </Button>
        </div>
        <div className={styles.dropdownList}>
          {filterOptions?.map(({ key, id, label, options }) => (
            <div className={styles.dropdown} key={`filter-${id}`}>
              <SimpleDropdown
                key={key}
                label={label}
                value={filterObj[id]}
                dropdownItems={options}
                onSelected={(val) => handleSelect(id, val)}
              />
            </div>
          ))}
        </div>
        <div className={styles.showResultBtn}>
          <Button
            type={'primary'}
            disabled={filters?.length === 0}
            onClick={() => handleFilter()}
          >
            Show Results
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Popover
      placement={'bottomRight'}
      content={filterPopoverContent()}
      trigger={'click'}
    >
      <span className={styles.filterBtn}>
        <FilterOutlined /> Filter
      </span>
    </Popover>
  )
}

function filterWebinar(
  discoverAndLearn: discoverAndLearnProps[] | undefined,
  filterOptions: IFilterOptions,
  filters: string[] | undefined
): discoverAndLearnProps[] | undefined {
  const duplicateData = _.cloneDeep(discoverAndLearn)
  if (discoverAndLearn && duplicateData) {
    discoverAndLearn.forEach(({ webinar }, index) => {
      const data = filterEachWebinar(webinar, filterOptions, filters)
      duplicateData[index].webinar = data
    })
  }
  return duplicateData
}

function filterEachWebinar(
  webinars: WebinarProps[],
  filterOptions: IFilterOptions,
  filters: string[] | undefined
): WebinarProps[] {
  let filteredData: WebinarProps[] = [...webinars]
  if (filters) {
    filters.map((item) => {
      filteredData = filterCategory(filteredData, filterOptions, item)
    })
  }
  return filteredData
}

function filterCategory(
  webinars: WebinarProps[],
  filterOptions: IFilterOptions,
  key: string
): WebinarProps[] {
  return webinars.filter((i) =>
    key === 'length'
      ? checkWebinarLength(i.length, filterOptions[key])
      : i[key] === filterOptions[key]
  )
}

function checkWebinarLength(length: number, option: string): boolean {
  switch (lengthOptions[option]) {
    case 0:
      return length < 20
    case 1:
      return length >= 20 && length < 40
    case 2:
      return length >= 40 && length < 60
    case 3:
      return length > 60
    default:
      return false
  }
}
