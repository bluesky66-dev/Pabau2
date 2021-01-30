import { PlusOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input, Select } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalForm.module.less'

const { Option } = Select

type linkedFieldProps = {
  linkedLabel?: string
}

type itemProps = {
  id: number
  name?: string
  editing?: boolean
}

const LinkedField: FC<linkedFieldProps> = ({ linkedLabel }) => {
  const [items, setItems] = useState<itemProps[]>([])
  const linkedFields = [
    {
      id: 1,
      name: 'CustomField 1',
    },
    {
      id: 2,
      name: 'CustomField 2',
    },
    {
      id: 3,
      name: 'CustomField 3',
    },
    {
      id: 4,
      name: 'CustomField 4',
    },
    {
      id: 5,
      name: 'CustomField 5',
    },
  ]

  const [addLinkedField, setAddLinkedField] = useState(false)

  const addItem = (name) => {
    setItems([
      ...items,
      {
        id: items.length,
        name: name,
        editing: false,
      },
    ])
  }

  const handleChange = (value) => {
    setAddLinkedField(false)
    const selectedItem = linkedFields.filter((item) => item.id === value)
    if (selectedItem.length > 0) {
      addItem(selectedItem[0].name)
    }
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
      <p style={{ marginTop: '20px' }}>{linkedLabel}</p>
      {items.length > 0 &&
        items.map((item, index) => (
          <div key={index} className={styles.linkedField}>
            <Input
              className={styles.optionInput}
              placeholder="Enter new option"
              value={item.name}
              onChange={(e) => handleOptions(index, { name: e.target.value })}
            />
            <Button
              className={styles.optionBtn}
              size="small"
              type={ButtonTypes.default}
            >
              <SaveOutlined />
            </Button>
          </div>
        ))}
      {addLinkedField && (
        <>
          <Select
            size="small"
            style={{ width: '100%', marginTop: '10px' }}
            onChange={(e) => handleChange(e)}
          >
            <Option value="">Select Field</Option>
            {linkedFields.map((fieldName, index) => (
              <Option key={index} value={fieldName.id}>
                {fieldName.name}
              </Option>
            ))}
          </Select>
          <br />
        </>
      )}
      <Button
        style={{ marginTop: '5px' }}
        type={ButtonTypes.default}
        icon={<PlusOutlined />}
        size="small"
        onClick={() => setAddLinkedField((e) => true)}
      >
        Add
      </Button>
    </>
  )
}

export default LinkedField
