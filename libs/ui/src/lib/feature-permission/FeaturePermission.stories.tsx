import React, { useEffect, useState, FC } from 'react'
import FeaturePermission, { FeaturePermissionProps } from './FeaturePermission'
import { feature } from './mock'

export default {
  component: FeaturePermission,
  title: 'UI/Feature Permission',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    feature,
  },
  argTypes: {
    feature: { control: { type: 'object' } },
  },
  onChange: { action: 'onChange' },
}

interface P {
  feature: FeaturePermissionProps[]
}

export const FeaturePermissionStory: FC<P> = ({ feature }) => {
  const [mainFeature, setFeature] = useState<FeaturePermissionProps[]>(feature)

  useEffect(() => {
    if (feature) {
      setFeature([...feature])
    }
  }, [feature])

  const onChange = (index: number, ind: number, rowId: string) => {
    const features = mainFeature
    features.map((thread) => {
      if (thread.id === rowId) {
        thread.permissionFields[index].container[ind].value = !thread
          .permissionFields[index].container[ind].value
      }
      return thread
    })
    setFeature([...features])
  }

  const CheckAll = (rowId: string) => {
    const features = mainFeature
    features.map((thread) => {
      if (thread.id === rowId) {
        for (const f of thread.permissionFields) {
          for (const data of f.container) {
            data.value = true
          }
        }
      }
      return thread
    })
    setFeature([...features])
  }

  const UnCheckAll = (rowId: string) => {
    const features = mainFeature
    features.map((thread) => {
      if (thread.id === rowId) {
        for (const f of thread.permissionFields) {
          for (const data of f.container) {
            data.value = false
          }
        }
      }
      return thread
    })
    setFeature([...features])
  }

  return (
    <FeaturePermission
      feature={mainFeature}
      onChange={onChange}
      CheckAll={CheckAll}
      UnCheckAll={UnCheckAll}
    />
  )
}
