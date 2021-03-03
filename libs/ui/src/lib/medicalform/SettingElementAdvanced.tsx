import { Button, ButtonTypes } from '@pabau/ui'
import React, { FC, useState } from 'react'
import SettingDefaultField from './SettingDefaultField'
import SettingLinkedField from './SettingLinkedField'

interface P {
  defaultFieldValue: string
  onChangeDefaults: (value: string) => void
}

const SettingElementAdvanced: FC<P> = ({
  defaultFieldValue,
  onChangeDefaults,
}) => {
  const [advanced, setAdvanced] = useState(false)
  console.log('SettingElementAdvanced:defaultFieldValue', defaultFieldValue)
  return (
    <>
      {advanced && (
        <>
          <SettingLinkedField linkedLabel="Linked field" />
          <SettingDefaultField
            linkedLabel="Default field"
            defaultFieldValue={defaultFieldValue}
            onChangeDefaults={onChangeDefaults}
          />
        </>
      )}
      <Button
        type={ButtonTypes.default}
        style={{ marginTop: '15px' }}
        onClick={(e) => setAdvanced((advanced) => !advanced)}
        size="small"
      >
        {!advanced && `Show advanced settings`}
        {advanced && `Hide advanced settings`}
      </Button>
    </>
  )
}

export default SettingElementAdvanced
