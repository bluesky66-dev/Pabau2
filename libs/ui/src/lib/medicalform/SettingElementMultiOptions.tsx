import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { Button, ButtonTypes, OptionType } from '@pabau/ui'
import { Checkbox, Input } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import styles from './Setting.module.less'

interface P {
  onChange: (addedItems) => void
  paramItems: OptionType[]
}

const SettingElementMultiOptions: FC<P> = ({ onChange, paramItems }) => {
  const [items, setItems] = useState<OptionType[]>([])
  const [addedItems, setaddedItems] = useState<OptionType[]>([])
  const [itemName, setItemName] = useState('')
  const [btnTitle, setBtnTitle] = useState('Add option')

  useEffect(() => {
    setItems(paramItems)
    setaddedItems(paramItems)
  }, [paramItems])

  useEffect(() => {
    if (addedItems.length > 0) setBtnTitle('Add another option')
    else setBtnTitle('Add option')
  }, [addedItems])

  const addItem = (event) => {
    event.preventDefault()
    if (items.length === addedItems.length) {
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName,
          editing: true,
        },
      ])
      setItemName('')
    }
  }

  const handleOptions = (index, value) => {
    if (value.name === '') {
      return
    }
    const tempItems = [...items]
    const itemValue = {
      ...items[index],
      ...value,
    }
    tempItems.splice(index, 1, itemValue)
    setItems(tempItems)
    if (value.editing === false) {
      setaddedItems(tempItems)
      onChange?.(tempItems)
    }
  }

  const handleDelete = (index) => {
    const tempItems = [...items]
    tempItems.splice(index, 1)
    setItems(tempItems)
    setaddedItems(tempItems)
    onChange?.(tempItems)
  }

  const onKeyUp = (event, index, item) => {
    if (event.charCode === 13) {
      handleOptions(index, {
        name: item.name,
        editing: false,
      })
    }
  }

  return (
    <>
      <p style={{ marginTop: '20px' }}>Options</p>
      {items.length > 0 && (
        <>
          {items.map((item, index) => (
            <div key={index} className={styles.multiOption}>
              {item.editing && (
                <Checkbox value={item.id} className={`${styles.checkboxEdit}`}>
                  <Input
                    autoFocus
                    className={styles.optionInput}
                    placeholder="Enter new option"
                    onChange={(e) =>
                      handleOptions(index, { name: e.target.value })
                    }
                    onKeyPress={(e) => onKeyUp(e, index, item)}
                    value={item.name}
                  />
                </Checkbox>
              )}
              {!item.editing && (
                <Checkbox value={item.id} className={`${styles.checkbox}`}>
                  <span>{item.name}</span>{' '}
                </Checkbox>
              )}

              {item.editing && (
                <Button
                  className={styles.multiOptionBtn}
                  size="small"
                  type={ButtonTypes.default}
                  onClick={() =>
                    handleOptions(index, {
                      name: item.name,
                      editing: false,
                    })
                  }
                >
                  <SaveOutlined />
                </Button>
              )}
              {!item.editing && (
                <>
                  <Button
                    className={styles.optionBtn}
                    size="small"
                    type={ButtonTypes.default}
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteOutlined />
                  </Button>
                  <Button
                    className={`${styles.optionBtn} ${styles.optionEdit}`}
                    size="small"
                    type={ButtonTypes.default}
                    onClick={() =>
                      handleOptions(index, {
                        name: item.name,
                        editing: true,
                      })
                    }
                  >
                    <EditOutlined />
                  </Button>
                </>
              )}
            </div>
          ))}
        </>
      )}
      <Button
        style={{ marginTop: '5px' }}
        type={ButtonTypes.default}
        icon={<PlusOutlined />}
        onClick={addItem}
        size="small"
      >
        {btnTitle}
      </Button>
      <br />
    </>
  )
}

export default SettingElementMultiOptions
