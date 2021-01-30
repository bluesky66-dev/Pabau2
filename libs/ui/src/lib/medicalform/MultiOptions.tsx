import { EditOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Checkbox, Input } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalForm.module.less'

type itemProps = {
  id: number
  name?: string
  editing?: boolean
}

const MultiOptions: FC = () => {
  const [items, setItems] = useState<itemProps[]>([])
  const [itemName, setItemName] = useState('New Option')

  const checkboxStyle = {
    display: 'inline-block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
    // marginLeft: '0px',
  }

  const addItem = (event) => {
    event.preventDefault()
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
        editing: false,
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

  return (
    <>
      <p style={{ marginTop: '20px' }}>Options</p>
      {items.length > 0 && (
        <>
          {items.map((item, index) => (
            <div key={index} className={styles.multiOption}>
              <Checkbox key={index} value={item.id} style={checkboxStyle}>
                {item.editing && (
                  <Input
                    className={styles.optionInput}
                    placeholder="Enter new option"
                    onChange={(e) =>
                      handleOptions(index, { name: e.target.value })
                    }
                    value={item.name}
                  />
                )}
                {!item.editing && (
                  <>
                    <span>{item.name}</span>{' '}
                  </>
                )}
              </Checkbox>
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
                <Button
                  className={styles.optionBtn}
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
        Add
      </Button>
    </>
  )
}

export default MultiOptions
