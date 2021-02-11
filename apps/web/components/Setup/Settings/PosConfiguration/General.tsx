import React, { FC } from 'react'

import { HelpTooltip, Switch, SimpleDropdown } from '@pabau/ui'

import GeneralLayout from '../GeneralLayout'
import styles from './common.module.less'

interface P {
  generalObj: GeneralPosConfig
  handleChange: (key: string, obj: GeneralPosConfig) => void
}

const General: FC<P> = ({
  generalObj: { featureList, dropdownList },
  handleChange,
}) => {
  const handleSelect = (key: number, value): void => {
    const data = dropdownList
    data[key] = { ...data[key], value }
    handleChange('general', { featureList, dropdownList: data })
  }

  const handleFeatureChange = (key: number, checked: boolean): void => {
    const data = featureList
    data[key] = { ...data[key], checked }
    handleChange('general', { featureList: data, dropdownList })
  }

  const renderContent = (): JSX.Element => {
    return (
      <div className={styles.generalContainer}>
        {featureList?.map(({ key, value, checked }) => (
          <div
            key={`feature-block-${key}`}
            className={styles.generalContainerList}
          >
            <p>
              {value}
              <HelpTooltip helpText={'Help tooltip'} placement={'top'} />
            </p>
            <Switch
              checked={checked}
              onChange={(checked) => handleFeatureChange(key - 1, checked)}
            />
          </div>
        ))}

        {dropdownList?.map(({ key, label, value, options, helpText }) => (
          <div
            key={`general-dropdown-list-${key}`}
            className={styles.generalDropdownList}
          >
            <SimpleDropdown
              label={label}
              tooltip={helpText}
              value={value}
              dropdownItems={options}
              onSelected={(val) => handleSelect(key - 1, val)}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <GeneralLayout
      title={'General'}
      description={
        'Choose to disable particular features such as the ability to over-ride prices and more.'
      }
      bodyContent={renderContent()}
    />
  )
}

export default General
