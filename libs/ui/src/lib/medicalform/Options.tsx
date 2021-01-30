import { DeleteOutlined, EditOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input, Radio } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalForm.module.less'

type itemProps = {
  id: number
  name?: string
  editing?: boolean
}

const Options: FC = () => {
  const [items, setItems] = useState<itemProps[]>([])
  const [itemName, setItemName] = useState('New Option')

  const [optionVal, setOptionVal] = useState(0)
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
  }

  const addItem = (event) => {
    event.preventDefault()
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
        editing: true,
      },
    ])
    setItemName('New Option')
  }

  const handleOptions = (index, value) => {
    const tempItems = [...items]
    const itemValue = {
      ...items[index],
      ...value,
    }
    tempItems.splice(index, 1, itemValue)
    setItems(tempItems)
  }

  const handleDelete = (index) => {
    const tempItems = [...items]
    tempItems.splice(index, 1)
    setItems(tempItems)
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
                <Radio key={item.id} value={item.id} style={radioStyle}>
                  {item.editing && (
                    <>
                      <Input
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
                        onClick={() =>
                          handleDelete(index)
                        }
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
        Add
      </Button>
    </>
  )
}

export default Options
