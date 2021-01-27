import React, { FC } from 'react'
import { Slider as AntSlider, Row, Col } from 'antd'

import styles from './Slider.module.less'

interface P {
  title: string
  value: number
  calculatedValue: string
  onChange?: (value: number) => void
}

const Slider: FC<P> = (props) => {
  const { title, value, calculatedValue, onChange } = props

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
              value={value}
              onChange={(e) => onChange(e)}
              handleStyle={{
                backgroundColor: '#65CD98',
                borderColor: '#65CD98',
                width: '16px',
                height: '16px',
                marginTop: '-6px',
              }}
              trackStyle={{ backgroundColor: '#65CD98' }}
              className={styles.slidermain}
            />
          </Col>
          <Col span={2} className="gutter-row">
            <p className={styles.slidervalue}>{calculatedValue}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Slider
