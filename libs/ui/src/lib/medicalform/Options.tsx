import { PlusOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Radio } from 'antd'
import React, { FC, useState } from 'react'

const Options: FC = () => {
  const [items, setItems] = useState([])
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
      },
    ])
    setItemName('New Option')
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
            {items.map((item) => (
              <Radio key={item.id} value={item.id} style={radioStyle}>
                {item.name}
              </Radio>
            ))}
          </Radio.Group>
          <br />
        </>
      )}
      <Button
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
