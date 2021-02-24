import React, { FC } from 'react'
import { Button, Checkbox } from '@pabau/ui'
import styles from './index.module.less'
import classNames from 'classnames'

interface P {
  schema: Schema
  onClick?: () => void
}

const AddButton: FC<P> = ({ schema, onClick }) => {
  return (
    <>
      {/* Desktop header */}
      <div
        className={classNames(styles.marketingSource, styles.mobileViewNone)}
      >
        <Checkbox
          defaultChecked={false}
          onClick={() => {
            // setSpecialBoolean((e) => !e)
          }}
        >
          {schema.fields.is_active.full}
        </Checkbox>
        <Button
          className={styles.createSourceBtn}
          type="primary"
          disabled={true}
          onClick={() => onClick?.()}
        >
          {schema.createButtonLabel}
        </Button>
      </div>
    </>
  )
}

export default AddButton
