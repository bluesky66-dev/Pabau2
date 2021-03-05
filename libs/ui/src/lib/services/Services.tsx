import React, { FC } from 'react'
import { Collapse } from 'antd'

import { Checkbox } from '@pabau/ui'
import styles from './Services.module.less'
import { CaretRightOutlined } from '@ant-design/icons'

const { Panel } = Collapse

export interface subServicesDataProps {
  key: string
  name: string
  checked?: boolean
}

export interface ServiceDataProps {
  key: string
  service: string
  subServices: subServicesDataProps[]
}

export interface ServicesProps {
  title: string
  description: string
  serviceData: ServiceDataProps[]
  handleSubServiceChange?: (
    checked: boolean,
    subServiceKey: string,
    serviceKey: string
  ) => void
  handleServiceChange?: (checked: boolean, serviceKey: string) => void
  selectAll?: boolean
  onCheckAllChange?: (checked: boolean) => void
}

export const Services: FC<ServicesProps> = ({
  title,
  description,
  serviceData,
  handleSubServiceChange,
  handleServiceChange,
  selectAll,
  onCheckAllChange,
}) => {
  const handleCheckIntermediate = (
    subServices: subServicesDataProps[]
  ): boolean => {
    return (
      subServices.filter((subService) => subService.checked === true).length >
        0 &&
      subServices.filter((subService) => subService.checked === true).length !==
        subServices.length
    )
  }

  const handleCheckedSubService = (
    subServices: subServicesDataProps[]
  ): boolean => {
    return (
      subServices.filter((subService) => subService.checked === true).length ===
      subServices.length
    )
  }

  return (
    <div className={styles.servicesWrapper}>
      <div className={styles.servicesHeader}>
        <h5>{title}</h5>
        <div className={styles.desc}>{description}</div>
      </div>
      <div className={styles.checkboxWrapper}>
        <Checkbox
          onChange={(event) => onCheckAllChange?.(event.target.checked)}
          checked={selectAll}
          className={styles.selectAll}
        >
          Select all
        </Checkbox>
        {serviceData?.length > 0 &&
          serviceData.map((thread) => {
            return (
              <Collapse
                key={thread.key}
                className={styles.customCollapse}
                ghost={true}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
              >
                <Panel
                  header={
                    <div>
                      <Checkbox
                        className={styles.headerText}
                        indeterminate={handleCheckIntermediate(
                          thread.subServices
                        )}
                        onChange={(e) =>
                          handleServiceChange?.(e.target.checked, thread.key)
                        }
                        checked={handleCheckedSubService(thread.subServices)}
                      >
                        {thread.service}
                      </Checkbox>
                    </div>
                  }
                  key="true"
                >
                  <div className={styles.panel}>
                    {thread.subServices.length > 0 &&
                      thread.subServices.map((subService) => {
                        return (
                          <Checkbox
                            className={styles.subText}
                            key={subService.key}
                            onChange={(event) =>
                              handleSubServiceChange?.(
                                event.target.checked,
                                subService.key,
                                thread.key
                              )
                            }
                            checked={subService.checked}
                          >
                            {subService.name}
                          </Checkbox>
                        )
                      })}
                  </div>
                </Panel>
              </Collapse>
            )
          })}
      </div>
    </div>
  )
}

export default Services
