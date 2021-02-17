import { Button, ButtonTypes } from '@pabau/ui'
import React, { FC, useState } from 'react'
import SettingLinkedField from './SettingLinkedField'

const SettingElementAdvanced: FC = () => {
  const [advanced, setAdvanced] = useState(false)
  return (
    <>
      <br />
      {advanced && (
        <>
          <SettingLinkedField linkedLabel="Linked field" />
          <SettingLinkedField linkedLabel="Default field" />
          <br />
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
