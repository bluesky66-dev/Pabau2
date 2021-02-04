import { Button, ButtonTypes } from '@pabau/ui'
import React, { FC, useState } from 'react'
import LinkedField from './LinkedField'

const ElementAdvanced: FC = () => {
  const [advanced, setAdvanced] = useState(false)
  return (
    <>
      {advanced && (
        <>
          <LinkedField linkedLabel="Linked field" />
          <LinkedField linkedLabel="Default field" />
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

export default ElementAdvanced
