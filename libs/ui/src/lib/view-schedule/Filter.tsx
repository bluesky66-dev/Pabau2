import React, { FC, useState } from 'react'
import { Popover } from 'antd'
import { FilterOutlined } from '@ant-design/icons'

import { discoverAndLearnProps } from './ViewSchedule'
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
  name: 'Select...',
  category: 'Select...',
  length: 'Select...',
  difficulty: 'Select...',
}

export const Filter: FC<P> = ({ webinarList, onClear, handleShowResult }) => {
  const [filters, setFilters] = useState<IFilterOptions>(initialFilters)
  const handleSelect = (key: string, val): void => {
    setFilters({ ...filters, [key]: val })
  }

  const handleClear = (): void => {
    setFilters(initialFilters)
    onClear()
  }

  const handleFilter = (): void => {
    const data = filterWebinar(webinarList, filters)
    handleShowResult(data)
  }
  const filterPopoverContent = (): JSX.Element => {
    return (
      <div className={styles.filterContainer}>
        <div>
          <p>Filter By</p>
          <Button type={'text'} onClick={handleClear}>
            Clear All
          </Button>
        </div>
        <div>
          {filterOptions?.map(({ key, id, label, value, options }) => (
            <SimpleDropdown
              key={key}
              label={label}
              value={filters[id]}
              dropdownItems={options}
              onSelected={(val) => handleSelect(id, val)}
            />
          ))}
        </div>
        <div>
          <Button type={'primary'} onClick={handleFilter}>
            Show Results
          </Button>
        </div>
      </div>
    )
  }

  console.log('filter', webinarList)
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
  filterOptions: IFilterOptions
): discoverAndLearnProps[] | undefined {
  if (discoverAndLearn) {
    discoverAndLearn.forEach(({ webinar }, index) => {
      const data = filterEachWebinar(webinar, filterOptions)
      discoverAndLearn[index].webinar = data
    })
  }
  return discoverAndLearn
}

function filterEachWebinar(
  webinars: WebinarProps[],
  filterOptions: IFilterOptions
): WebinarProps[] {
  const filteredData = webinars.filter(
    ({ category, length, name, difficulty }) =>
      category === filterOptions?.category ||
      (length && checkWebinarLength(length, filterOptions.length)) ||
      name === filterOptions?.name ||
      difficulty === filterOptions?.difficulty
  )
  return filteredData
}

function checkWebinarLength(length: number, option: string): boolean {
  if (lengthOptions[option] === 0) {
    return length < 20
  } else if (lengthOptions[option] > 0 && lengthOptions[option] < 3) {
    return (
      length >= lengthOptions[option] * 20 &&
      length < (lengthOptions[option] + 1) * 20
    )
  } else if (lengthOptions[option] === 3) {
    return length > 60
  }
  return false
}
