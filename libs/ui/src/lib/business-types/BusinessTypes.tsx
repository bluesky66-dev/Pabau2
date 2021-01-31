import React, { FC, useEffect } from 'react'
// import { Row, Col } from 'antd'
import styles from './BusinessTypes.module.less'

export interface BusinessTypesProps {
  onSelected?(val): void
  value?: string
}

const types = [
  'Hair Salon',
  'Nail Salon',
  'Barbershop',
  'Beauty Salon',
  'Aesthetics',
  'Spa',
  'Massage',
  'Waxing Salon',
  'Tanning Studio',
  'Eyebrows & Lashes',
  'Tattoo & Piercing',
  'Therapy Center',
  'Weight Loss',
  'Personal Trainer',
  'Gym & Fitness',
]

export const BusinessTypes: FC<BusinessTypesProps> = ({ value }) => {
  useEffect(() => {
    console.log(value, types)
  }, [value])

  return (
    <div className={styles.businessTypesContainer}>
      <p>How would you best describe your main type of business</p>
    </div>
  )
}

export default BusinessTypes
