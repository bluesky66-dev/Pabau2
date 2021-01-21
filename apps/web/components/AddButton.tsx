import React, { FC } from 'react'
import { Button } from '@pabau/ui'
import { useKeyPressEvent } from 'react-use'

interface P {
  onClick?: () => void
}

const AddButton: FC<P> = ({ onClick, children }) => {
  useKeyPressEvent('n', () => {
    onClick?.()
  })
  return (
    <Button
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '1em 28px',
        height: '40px',
        minWidth: '124px',
        fontSize: '14px',
      }}
      type="primary"
      onClick={() => onClick?.()}
    >
      {children}
    </Button>
  )
}

export default AddButton
