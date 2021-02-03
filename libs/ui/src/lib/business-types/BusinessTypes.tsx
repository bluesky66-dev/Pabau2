import React, { FC, useEffect, useState } from 'react'
import ClassNames from 'classnames'
import { Row, Col } from 'antd'
import { bizTypes } from '../../assets/images/biz-types'
import styles from './BusinessTypes.module.less'

export interface BusinessTypesProps {
  onSelected?(val): void
  value?: string
}

export const BusinessTypes: FC<BusinessTypesProps> = ({
  value = 'Nail Salon',
  onSelected,
}) => {
  const [selected, setSelected] = useState('')
  const handleClickItem = (val) => {
    setSelected(val)
    onSelected && onSelected(val)
  }

  useEffect(() => {
    setSelected(value)
  }, [value])

  return (
    <div className={styles.businessTypesContainer}>
      <p>How would you best describe your main type of business</p>
      <div className={styles.businessTypes}>
        <Row gutter={[8, 8]}>
          {bizTypes.map((type) => (
            <Col xl={2} lg={3} md={4} sm={6} xs={8} key={type.title}>
              <div
                className={
                  type.title === selected
                    ? ClassNames(
                        styles.businessType,
                        styles.businessTypeSelected
                      )
                    : styles.businessType
                }
                onClick={() => handleClickItem(type.title)}
              >
                <div className={styles.businessTypeContent}>
                  <img src={type.img} width="90%" height="50%" alt="biz type" />
                  <p>{type.title}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default BusinessTypes
