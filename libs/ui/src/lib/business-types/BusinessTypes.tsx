import React, { FC, useEffect, useState } from 'react'
import ClassNames from 'classnames'
import { Row, Col, Image } from 'antd'
import PabauLogo from '../../assets/images/pabau-logo.svg'
import styles from './BusinessTypes.module.less'

export interface BusinessTypesProps {
  onSelected?(val): void
  value?: string
}

const types = [
  { title: 'Hair Salon', img: '' },
  { title: 'Nail Salon', img: '' },
  { title: 'Barbershop', img: '' },
  { title: 'Beauty Salon', img: '' },
  { title: 'Aesthetics', img: '' },
  { title: 'Spa', img: '' },
  { title: 'Massage', img: '' },
  { title: 'Waxing Salon', img: '' },
  { title: 'Tanning Studio', img: '' },
  { title: 'Eyebrows & Lashes', img: '' },
  { title: 'Tattoo & Piercing', img: '' },
  { title: 'Therapy Center', img: '' },
  { title: 'Weight Loss', img: '' },
  { title: 'Personal Trainer', img: '' },
  { title: 'Gym & Fitness', img: '' },
]

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
          {types.map((type) => (
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
                  <Image src={PabauLogo} width="70%" preview={false} />
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
