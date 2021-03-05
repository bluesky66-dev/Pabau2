import React, { FC, useState } from 'react'
import Services, { ServiceDataProps } from './Services'
import { serviceData } from './mock'

export default {
  component: Services,
  title: 'UI/Services',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Services',
    description: 'Choose the services this discount can be applied',
    serviceData,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    serviceData: { control: { type: 'object' } },
  },
}

interface P {
  title: string
  description: string
  serviceData: ServiceDataProps[]
}
export const ServicesStory: FC<P> = ({ title, description, serviceData }) => {
  const [services, setServices] = useState<ServiceDataProps[]>(serviceData)
  const [selectAll, setSelectAll] = useState<boolean>(false)

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
    <Services
      title={title}
      description={description}
      serviceData={services}
      handleSubServiceChange={handleSubServiceChange}
      handleServiceChange={handleServiceChange}
      onCheckAllChange={onCheckAllChange}
      selectAll={selectAll}
    />
  )
}
