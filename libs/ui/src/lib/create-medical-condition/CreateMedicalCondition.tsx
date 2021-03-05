import React, { FC } from 'react'
import { Modal, Typography } from 'antd'
import { Switch, Input, Button, Checkbox } from '@pabau/ui'
import { Row, Col } from 'antd'
import styles from './CreateMedicalCondition.module.less'
const { Title } = Typography

export interface CreateMedicalConditionProps {
  visible: boolean
  onClose: () => void
  onCreate?: () => void
}
export const CreateMedicalCondition: FC<CreateMedicalConditionProps> = ({
  visible,
  onClose,
  onCreate,
}) => {
  const footer = (
    <div>
      <Checkbox>Active</Checkbox>
      <Button onClick={onCreate}>Create</Button>
    </div>
  )
  return (
    <Modal
      visible={visible}
      centered
      onCancel={onClose}
      onOk={onCreate}
      footer={footer}
    >
      <Title>Create Medical Condition</Title>
      <Row gutter={32}>
        <Col className={styles.gutterRow} span={12}>
          <Typography style={{ fontWeight: 'bold' }}>Common Allergy</Typography>
        </Col>
        <Col className={styles.gutterRow}>
          <Switch />
        </Col>
      </Row>
      <Row gutter={32}>
        <Col span={12}>
          <Typography style={{ color: '#9292A3' }}>Name</Typography>
        </Col>
      </Row>
      <Row gutter={32}>
        <Col span={24}>
          <Input placeHolderText="eg.Diabetic" />
        </Col>
      </Row>
    </Modal>
  )
}

export default CreateMedicalCondition
