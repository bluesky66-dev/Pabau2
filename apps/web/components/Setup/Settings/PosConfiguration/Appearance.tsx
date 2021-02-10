import React, { FC } from 'react'
import { Switch } from '@pabau/ui'

import GeneralLayout from '../GeneralLayout'

import styles from './common.module.less'

interface P {
  appearanceObj: AppearancePosConfig
  handleChange: (key: string, obj: AppearancePosConfig) => void
}

const Appearance: FC<P> = ({
  appearanceObj: { featureList },
  handleChange,
}): JSX.Element => {
  const handleFeatureChange = (
    key: number,
    checked: boolean,
    e: MouseEvent
  ) => {
    const data = featureList
    data[key] = { ...data[key], checked: checked }
    handleChange('appearance', { featureList: data })
  }

  const renderContent = (): JSX.Element => {
    return (
      <div className={styles.appearanceContainer}>
        {featureList?.map(({ key, value, checked }) => (
          <div
            className={styles.featureList}
            key={`appearance-feature-list-${key}`}
          >
            <p>{value}</p>
            <Switch
              checked={checked}
              onChange={(checked, e) =>
                handleFeatureChange(key - 1, checked, e)
              }
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <GeneralLayout
      title={'Appearance'}
      description={
        'Choose to hide specific features from the point of sale. Don’t sell gift cards? -No problem, just go ahead and switch it off.'
      }
      bodyContent={renderContent()}
    />
  )
}

export default Appearance
