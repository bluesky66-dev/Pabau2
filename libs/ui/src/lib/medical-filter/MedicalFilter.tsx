import React, { FC, useState, useEffect } from 'react'
import { Button, Formtype } from '@pabau/ui'
import { Popover } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import styles from './MedicalFilter.module.less'

export interface MedicalFilterType {
  language: string
  status: boolean
  formtype: {
    medicalHistory: boolean
    consent: boolean
    treatmentForm: boolean
    epaper: boolean
    presciption: boolean
    labForm: boolean
  }
}

export interface MedicalFilterProps {
  filter: MedicalFilterType
  onApply(val: MedicalFilterType): void
}

const defaultFilter: MedicalFilterType = {
  language: 'English (UK)',
  status: false,
  formtype: {
    medicalHistory: false,
    consent: false,
    treatmentForm: false,
    epaper: false,
    presciption: false,
    labForm: false,
  },
}

export const MedicalFilter: FC<MedicalFilterProps> = ({ filter, onApply }) => {
  const [filters, setFilters] = useState<MedicalFilterType>(defaultFilter)
  const [visible, setVisible] = useState(false)
  const handleChangeSetting = (val) => {
    const filterSetting = { ...filters }
    filterSetting.formtype = val
    setFilters({ ...filterSetting })
  }
  const handleChangeStatus = (val) => {
    const filterSetting = { ...filters }
    filterSetting.status = val
    setFilters({ ...filterSetting })
  }
  const handleApply = () => {
    onApply(filters)
  }
  const FilterViewer = () => (
    <div className={styles.filterViewerContainer}>
      <p
        className={styles.filterViewerReset}
        onClick={() => setFilters(defaultFilter)}
      >
        Reset
      </p>
      <p className={styles.filterViewerTitle}>Filter by</p>
      <p className={styles.filterViewerSubTitle}>Status</p>
      <div className={styles.filterViewerStatusContainer}>
        <Button
          type={filters.status ? 'primary' : 'default'}
          onClick={() => handleChangeStatus(true)}
        >
          Active
        </Button>
        <Button
          type={!filters.status ? 'primary' : 'default'}
          onClick={() => handleChangeStatus(false)}
        >
          Inactive
        </Button>
      </div>
      <p className={styles.filterViewerSubTitle}>Form type</p>
      <Formtype
        setting={filters.formtype}
        onChangeSetting={(val) => handleChangeSetting(val)}
      />
      <Button block onClick={() => handleApply()}>
        Apply
      </Button>
    </div>
  )
  useEffect(() => {
    setFilters(filter || defaultFilter)
  }, [filter])
  return (
    <div>
      <Popover
        placement="bottomRight"
        content={FilterViewer}
        trigger="click"
        visible={visible}
      >
        <Button icon={<FilterOutlined />} onClick={() => setVisible(true)}>
          Filter
        </Button>
      </Popover>
    </div>
  )
}

export default MedicalFilter
