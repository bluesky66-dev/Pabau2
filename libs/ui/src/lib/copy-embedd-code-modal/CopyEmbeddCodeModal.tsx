import React, { FC, useState } from 'react'
import { Modal } from 'antd'
import { Button, Input } from '@pabau/ui'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './CopyEmbeddCodeModal.module.less'

/* eslint-disable-next-line */
export interface CopyEmbeddCodeModalProps {
  modalWidth: number
  visible: boolean
  onClose: () => void
  onCopy: () => void
  onDownloadImg: () => void
  onSendToDevs: () => void
  code: string
  title: string
  subTitle: string
}

export const CopyEmbeddCodeModal: FC<CopyEmbeddCodeModalProps> = ({
  ...rest
}) => {
  const [hightLight, setHightLight] = useState(false)
  const [devModalState, setDevModalState] = useState(false)

  const copyCode = () => {
    setHightLight(true)
    setTimeout(() => {
      setHightLight(false)
    }, 3000)
  }

  return (
    <>
      <Modal
        title={rest.title}
        visible={!devModalState && rest.visible}
        footer={null}
        width={rest.modalWidth}
        centered={true}
        className={styles.embeddModal}
        onCancel={() => {
          rest.onClose
        }}
      >
        <>
          <div className={styles.subTitle}>{rest.subTitle}</div>
          <div className={styles.codeBox}>
            <span className={styles.codeHeading}>Code</span>
            <div className={styles.codeDiv}>
              <span
                className={`${hightLight && 'highLighted'}`}
              >{`${rest.code}`}</span>
            </div>
          </div>
          <div className={styles.footer}>
            <Button
              onClick={() => {}}
              type="default"
              className={styles.buttons}
            >
              Download Images
            </Button>
            <Button
              onClick={() => {
                setDevModalState(true)
              }}
              type="default"
              className={styles.buttons}
            >
              Send To Developers
            </Button>
            <CopyToClipboard text={rest.code} onCopy={copyCode}>
              <Button type="primary" className={styles.buttons}>
                Copy
              </Button>
            </CopyToClipboard>
          </div>
        </>
      </Modal>
      <Modal
        visible={devModalState}
        footer={null}
        width={rest.modalWidth}
        centered={true}
        className={styles.embeddModal}
        onCancel={() => {
          setDevModalState(false)
        }}
      >
        <>
          <Input
            label="Developer email"
            type="email"
            placeHolderText="Enter Developer Email"
            onChange={() => {
              console.log('HELLO')
            }}
          />
        </>
      </Modal>
    </>
  )
}

export default CopyEmbeddCodeModal
