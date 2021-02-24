import React, { FC, useEffect, useState } from 'react'
import { Button, MobileHeader, Checkbox } from '@pabau/ui'
import styles from './index.module.less'
import {
  FilterOutlined,
  PlusSquareFilled,
  SearchOutlined,
} from '@ant-design/icons'
import { Drawer, Input, Popover, Radio } from 'antd'
import classNames from 'classnames'
// import { isMobile, isTablet } from 'react-device-detect'
// import { useKeyPressEvent } from 'react-use'

const WAIT_INTERVAL = 400

interface P {
  schema: Schema
  onClick?: () => void
}

const AddButton: FC<P> = ({
  schema,
  onClick
}) => {
  const [isActive, setIsActive] = useState(true)
  const [mobFilterDrawer, setMobFilterDrawer] = useState(false)
  const [marketingSourceSearch, setMarketingSourceSearch] = useState('')

  const schemaForm = { ...schema, fields: { ...schema.fields } }
  // useKeyPressEvent('n', () => {
  //   onClick?.()
  // })

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
