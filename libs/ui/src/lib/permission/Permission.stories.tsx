import React, { useEffect, useState, FC } from 'react'
import Permission, { PermissionFieldType } from './Permission'
import { title, description, fields } from './mock'

export default {
  component: Permission,
  title: 'UI/Permission',
  args: {
    title,
    fields,
    description,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    fields: { control: { type: 'object' } },
  },
  onChange: { action: 'onChange' },
}
interface P {
  title: string
  fields: PermissionFieldType[]
  description: string
}
export const PermissionStory: FC<P> = ({ fields, description, title }) => {
  const [mainFields, setMainFields] = useState<PermissionFieldType[]>([])

  useEffect(() => {
    if (fields) {
      setMainFields([...fields])
    }
  }, [fields])

  const onChange = (index: number, ind: number) => {
    fields[index].container[ind].value = !fields[index].container[ind].value
    setMainFields([...fields])
  }

  const CheckAll = () => {
    for (const f of fields) {
      for (const data of f.container) {
        data.value = true
      }
    }
    setMainFields([...fields])
  }
  const UnCheckAll = () => {
    for (const f of fields) {
      for (const data of f.container) {
        data.value = false
      }
    }
    setMainFields([...fields])
  }

  return (
    <Permission
      fields={mainFields}
      description={description}
      title={title}
      onChange={onChange}
      onCheckAllClicked={CheckAll}
      onUnCheckAllClicked={UnCheckAll}
    />
  )
}
