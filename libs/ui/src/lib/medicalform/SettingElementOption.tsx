import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { Button, ButtonTypes, OptionType } from '@pabau/ui'
import { Input, Radio } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import styles from './Setting.module.less'

interface P {
  onChange: (addedItems) => void
  paramItems: OptionType[]
}

const SettingElementOption: FC<P> = ({ onChange, paramItems }) => {
  const [items, setItems] = useState<OptionType[]>([])
  const [addedItems, setaddedItems] = useState<OptionType[]>([])
  const [itemName, setItemName] = useState('')
  const [optionVal, setOptionVal] = useState(0)

  useEffect(() => {
    setItems(paramItems)
    setaddedItems(paramItems)
  }, [paramItems])

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
          <Radio.Group
            size="small"
            value={optionVal}
            onChange={(e) => setOptionVal(e.target.value)}
          >
            {items.map((item, index) => (
              <div key={item.id} className={styles.optionItem}>
                <Radio key={item.id} value={item.id} className={styles.radio}>
                  {item.editing && (
                    <>
                      <Input
                        autoFocus
                        className={styles.optionInput}
                        placeholder="Enter new option"
                        onChange={(e) =>
                          handleOptions(index, { name: e.target.value })
                        }
                        value={item.name}
                        onKeyPress={(e) => onKeyUp(e, index, item)}
                      />
                      <Button
                        className={styles.optionBtn}
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
                    </>
                  )}
                  {!item.editing && (
                    <>
                      <span>{item.name}</span>{' '}
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
                </Radio>
              </div>
            ))}
          </Radio.Group>
          <br />
        </>
      )}
      <Button
        style={{ marginTop: '5px' }}
        type={ButtonTypes.default}
        icon={<PlusOutlined />}
        onClick={addItem}
        size="small"
      >
        Add option
      </Button>
    </>
  )
}

export default SettingElementOption
