import React, { FC, useState } from 'react'
import { Row } from 'antd'
import classNames from 'classnames'
import SectionTitle from './SectionTitle'
import styles from './index.module.less'
import terminalIcon from '../../../assets/images/terminal.png'
import { RequestTerminalModal } from './index'

const CardTerminal: FC = () => {
  const [visibleModal, setVisibleModal] = useState(false)

  const onCloseModal = () => {
    setVisibleModal(false)
  }

  const onRequestTerminal = () => {
    setVisibleModal(true)
  }
  return (
    <div>
      <div className={classNames(styles.sectionPadding, styles.sectionBorder)}>
        <SectionTitle
          title="Card Terminals"
          description="Request and manage your card terminals to process card and contactless payments at checkout."
          showButton
          buttonText="Request terminal"
          onClick={onRequestTerminal}
        />
      </div>
      <div className={styles.sectionPadding}>
        <Row className={styles.terminalCard}>
          <div className={styles.terminalIcon}>
            <img src={terminalIcon} alt="terminal" />
          </div>
          <div className={styles.terminalCardBody}>
            <div>
              <h4>Pabau Terminal</h4>
              <span>Active</span>
            </div>
            <p>
              Send events about certain actions to Google Analytics and create
              goals based on events to track conversations
            </p>
          </div>
        </Row>
      </div>
      <RequestTerminalModal
        visible={visibleModal}
        onCloseModal={onCloseModal}
      />
    </div>
  )
}

export default CardTerminal
