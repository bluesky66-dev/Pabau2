import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input, Radio } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalForm.module.less'

type itemProps = {
  id: number
  name?: string
  editing?: boolean
}

interface P {
  onChange?: (count) => void
}

const Options: FC<P> = ({ onChange }) => {
  const [items, setItems] = useState<itemProps[]>([])
  const [addedItems, setaddedItems] = useState<itemProps[]>([])
  const [itemName, setItemName] = useState('')

  const [optionVal, setOptionVal] = useState(0)

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
    setaddedItems(tempItems)
    if (onChange) {
      onChange(addedItems.length)
    }
  }

  const handleDelete = (index) => {
    const tempItems = [...items]
    tempItems.splice(index, 1)
    setItems(tempItems)
    setaddedItems(tempItems)
    if (onChange) {
      onChange(addedItems.length)
    }
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
      <br />
    </>
  )
}

export default Options
