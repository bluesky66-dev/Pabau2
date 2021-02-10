import React, { FC } from 'react'
import { SimpleDropdown, InputNumber, HelpTooltip } from '@pabau/ui'

import styles from './common.module.less'

interface P {
  generalObj: GeneralLoyaltyConfig
  handleChange: (obj: GeneralLoyaltyConfig) => void
}

const General: FC<P> = ({
  generalObj: { dropdownList, inputPoint },
  handleChange,
}) => {
  const handleSelect = (value): void => {
    const data = dropdownList
    data['value'] = value
    handleChange({ dropdownList: data, inputPoint })
  }

  const handleInputChange = (value: number) => {
    const data = inputPoint
    data.value = value
    handleChange({ dropdownList, inputPoint: data })
  }

  return (
    <div className={styles.loyaltyGeneralContainer}>
      <div className={styles.generalLabel}>
        <div className={styles.loyaltyText}>
          <span>
            <span>{inputPoint.label}</span>
            <HelpTooltip helpText={inputPoint.helpText} />
          </span>
          <span>{inputPoint.pointText}</span>
        </div>
        <InputNumber value={inputPoint.value} onChange={handleInputChange} />
      </div>
      <div className={styles.generalDropdownList}>
        <SimpleDropdown
          label={dropdownList.label}
          tooltip={dropdownList.helpText}
          value={dropdownList.value}
          dropdownItems={dropdownList.options}
          onSelected={(val) => handleSelect(val)}
        />
      </div>
    </div>
  )
}

export default General
