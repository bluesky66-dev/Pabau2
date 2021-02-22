import React, { FC } from 'react'
import { Slider as AntSlider, Row, Col } from 'antd'
import { SliderSingleProps } from 'antd/lib/slider'

import styles from './Slider.module.less'

export interface SliderProps extends SliderSingleProps {
  disabled?: boolean
  title: string
  value: number
  calculatedValue: string
}

export const Slider: FC<SliderProps> = ({
  title,
  disabled,
  value,
  calculatedValue,
  ...props
}) => {
  return (
    <Row className={styles.sliderContainer}>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <p className={styles.sliderTitle}>{title}</p>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={22} className="gutter-row">
            <AntSlider
              {...props}
              value={value}
              disabled={disabled}
              handleStyle={{
                backgroundColor: 'var(--primary-color)',
                borderColor: 'var(--primary-color)',
                width: '16px',
                height: '16px',
                marginTop: '-6px',
              }}
              trackStyle={{ backgroundColor: 'var(--primary-color)' }}
              className={styles.sliderMain}
            />
          </Col>
          <Col span={2} className="gutter-row">
            <p className={styles.sliderValue}>{calculatedValue}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Slider
