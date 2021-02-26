import React, { FC, useState } from 'react'
import { FeaturePermission, FeaturePermissionProps } from '@pabau/ui'
import { feature } from '../../../../mocks/UserDetail'

const Feature: FC = () => {
  const [mainFeature, setFeature] = useState<FeaturePermissionProps[]>(feature)

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

  return (
    <FeaturePermission
      feature={feature}
      onChange={onChange}
      CheckAll={CheckAll}
      UnCheckAll={UnCheckAll}
    />
  )
}

export default Feature
