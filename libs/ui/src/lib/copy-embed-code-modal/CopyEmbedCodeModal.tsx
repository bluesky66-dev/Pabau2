import React, { FC, useState } from 'react'
import { Modal } from 'antd'
import { Button, Input } from '@pabau/ui'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './CopyEmbedCodeModal.module.less'

/* eslint-disable-next-line */
export interface CopyEmbedCodeModalProps {
  modalWidth: number
  visible: boolean
  onClose: () => void
  onDownloadImg: () => void
  onEmailInput: () => void
  code: string
  title: string
  subTitle: string
}

export const CopyEmbedCodeModal: FC<CopyEmbedCodeModalProps> = ({
  visible,
  title,
  modalWidth,
  code,
  subTitle,
  onClose,
  onDownloadImg,
  onEmailInput,
}) => {
  const [hightLight, setHightLight] = useState(false)
  const [devModalState, setDevModalState] = useState(false)

  const copyCode = () => {
    setHightLight(true)
    setTimeout(() => {
      setHightLight(false)
    }, 3000)
  }

  const openEmailModal = () => {
    setDevModalState(true)
  }

  return (
    <>
      <Modal
        title={title}
        visible={!devModalState && visible}
        footer={null}
        width={modalWidth}
        centered={true}
        className={styles.embedModal}
        onCancel={onClose}
      >
        <>
          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.codeBox}>
            <span className={styles.codeHeading}>Code</span>
            <div className={styles.codeDiv}>
              <span
                className={`${hightLight && 'highLighted'}`}
              >{`${code}`}</span>
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="default" className={styles.buttons}>
              Download Images
            </Button>
            <Button
              onClick={openEmailModal}
              type="default"
              className={styles.buttons}
            >
              Send To Developers
            </Button>
            <CopyToClipboard text={code} onCopy={copyCode}>
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
        width={modalWidth}
        centered={true}
        className={styles.embedModal}
        onCancel={() => {
          setDevModalState(false)
        }}
      >
        <Input
          label="Developer email"
          type="email"
          placeHolderText="Enter Developer Email"
          onChange={onEmailInput}
        />
      </Modal>
    </>
  )
}

export default CopyEmbedCodeModal
