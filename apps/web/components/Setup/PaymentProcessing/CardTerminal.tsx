import React, { FC } from 'react'
import { Row } from 'antd'
import classNames from 'classnames'
import SectionTitle from './SectionTitle'
import styles from './index.module.less'
import terminalIcon from '../../../assets/images/terminal.png'

interface P {
  onRequestTerminal?: () => void
}

const CardTerminal: FC<P> = ({ onRequestTerminal }) => {
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
    </div>
  )
}

export default CardTerminal
