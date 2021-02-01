import React, { FC, useEffect, useState } from 'react'
import { Modal, Row, Col, Button } from 'antd'

import customStyles from './ModalWithImage.module.less'
import styles from '../modal/basicmodal.module.less'

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
  const [width, setWidth] = useState<number>(window.innerWidth)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div>
      <Modal
        footer={null}
        title={title}
        visible={visible}
        centered={true}
        closable={width > 768}
        wrapClassName={styles.modal + ' ' + customStyles.modalWithImage}
        onCancel={() => onCancel()}
        {...props}
      >
        <div
          className={styles.modalBody + ' ' + customStyles.modalWithImageBody}
        >
          <Row>
            <Col span={width < 768 ? 24 : 12}>
              {description?.map((content) => (
                <p key={`model-description-content-${content}`}>{content}</p>
              ))}
            </Col>
            {width > 768 && (
              <Col span={12} className={customStyles.rightImage}>
                <img src={imageUrl} alt={'Call logo'} />
              </Col>
            )}
          </Row>
          <Row className={customStyles.modalFooter}>
            {width < 768 && (
              <Col onClick={() => onCancel()}>
                <Button className={customStyles.modalCancelBtn}>Cancel</Button>
              </Col>
            )}
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
      </Modal>
    </div>
  )
}

export default ModalWithImage
