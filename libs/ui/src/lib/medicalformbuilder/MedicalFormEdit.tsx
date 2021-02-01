import { Col, Row } from 'antd'
import React, { FC } from 'react'
import MedicalFormEditLeft from './MedicalFormEditLeft'
import MedicalFormEditMain from './MedicalFormEditMain'

const MedicalFormEdit: FC = () => {
  return (
    <Row>
      <Col span={6}>
        <MedicalFormEditLeft />
      </Col>
      <Col span={18}>
        <MedicalFormEditMain />
      </Col>
    </Row>
  )
}

export default MedicalFormEdit
