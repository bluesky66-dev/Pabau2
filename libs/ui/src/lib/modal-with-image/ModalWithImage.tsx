import React, { FC } from 'react'
import { Row, Col, Button } from 'antd'

import BasicModal from '../modal/BasicModal'

import customStyles from './ModalWithImage.module.less'

export interface ModalWithImageProps {
  visible: boolean
  title: string
  description: string[]
  imageUrl: string
  onCancel: () => void
  onEnable: () => void
}

const ModalWithImage: FC<ModalWithImageProps> = ({
  title,
  description,
  visible,
  imageUrl,
  onCancel,
  onEnable,
  ...props
}): JSX.Element => {
  return (
    <div>
      <BasicModal
        footer={false}
        title={title}
        visible={visible}
        centered={true}
        wrapClassName={customStyles.modalWithImage}
        onCancel={() => onCancel()}
        {...props}
      >
        <div className={customStyles.modalWithImageBody}>
          <Row className={customStyles.modalContent}>
            <Col>
              {description?.map((content) => (
                <p key={`model-description-content-${content}`}>{content}</p>
              ))}
            </Col>
            <Col className={customStyles.rightImage}>
              <img src={imageUrl} alt={'Call logo'} />
            </Col>
          </Row>
          <Row className={customStyles.modalFooter}>
            {
              <Col onClick={() => onCancel()}>
                <Button className={customStyles.modalCancelBtn}>Cancel</Button>
              </Col>
            }
            <Col>
              <Button
                className={customStyles.modalEnableBtn}
                type={'primary'}
                onClick={() => onEnable()}
              >
                Enable
              </Button>
            </Col>
          </Row>
        </div>
      </BasicModal>
    </div>
  )
}

export default ModalWithImage
