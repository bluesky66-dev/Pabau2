import React, { FC, useState } from 'react'

import { ServiceDataProps, Services } from '@pabau/ui'
import styles from '../UserDetail.module.less'
import { serviceData } from '../../../../mocks/UserDetail'

const Service: FC = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [services, setServices] = useState<ServiceDataProps[]>(serviceData)

  const handleSubServiceChange = (
    checked: boolean,
    subServiceKey: string,
    serviceKey: string
  ) => {
    const service = services.map((service) => {
      if (service.key === serviceKey) {
        service.subServices.filter((thread) => {
          if (thread.key === subServiceKey) {
            thread.checked = checked
          }
          return thread
        })
      }
      return service
    })
    setServices([...service])
    if (!checked && selectAll) {
      setSelectAll(false)
    } else {
      setSelectAll(!checkAllSelect())
    }
  }

  const onCheckAllChange = (checked: boolean) => {
    const service = services.map((service) => {
      service.subServices.filter((thread) => {
        thread.checked = checked
        return thread
      })
      return service
    })
    setServices([...service])
    setSelectAll(checked)
  }

  const handleServiceChange = (checked: boolean, serviceKey: string) => {
    const service = services.map((service) => {
      if (service.key === serviceKey) {
        service.subServices.map((subService) => (subService.checked = checked))
      }
      return service
    })
    setServices([...service])
    if (!checked && selectAll) {
      setSelectAll(false)
    } else {
      setSelectAll(!checkAllSelect())
    }
  }

  const checkAllSelect = () => {
    let allSelect = false
    services.map((service) => {
      service.subServices.map((subService) => {
        if (!subService.checked) {
          allSelect = true
        }
        return subService
      })
      return service
    })
    return allSelect
  }

  return (
    <div className={styles.serviceMainWrapper}>
      <h4>Services</h4>
      <Services
        title={'Services'}
        description={'Choose the services this discount can be applied'}
        serviceData={serviceData}
        handleSubServiceChange={handleSubServiceChange}
        handleServiceChange={handleServiceChange}
        onCheckAllChange={onCheckAllChange}
        selectAll={selectAll}
      />
    </div>
  )
}

export default Service
