import React, { FC } from 'react'
import styles from './Footer.module.less'
import classNames from 'classnames'
import { ReactComponent as BookSvg } from '../../assets/images/book.svg'
import { PlaySquareOutlined } from '@ant-design/icons'

export const Guides: FC = () => {
  return (
    <>
      <div className={styles.footerHeading}>
        <h1>Related guides</h1>
      </div>
      <div className={styles.boxDirection}>
        <div className={styles.footerBox}>
          <div className={styles.iconTextAlign}>
            <div>
              <BookSvg />
            </div>
            <div className={styles.boxText}>
              <p>Setting up a Marketing Source</p>
              <h6>Article</h6>
            </div>
          </div>
        </div>

        <div className={classNames(styles.footerBox, styles.rightSpace)}>
          <div className={styles.iconTextAlign}>
            <div>
              <BookSvg />
            </div>
            <div className={styles.boxText}>
              <p>Setting up a Marketing Source</p>
              <h6>Article</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.boxDirection} style={{ paddingTop: '24px' }}>
        <div className={styles.footerBox}>
          <div className={styles.iconTextAlign}>
            <div>
              <BookSvg />
            </div>
            <div className={styles.boxText}>
              <p>Setting up a Marketing Source</p>
              <h6>Article</h6>
            </div>
          </div>
        </div>
        <div className={classNames(styles.footerBox, styles.rightSpace)}>
          <div className={styles.iconTextAlign}>
            <div>
              <PlaySquareOutlined style={{ color: 'var(--primary-color)', fontSize: '20px' }} />
            </div>
            <div className={styles.boxText}>
              <p>Creating a Marketing Source</p>
              <h6>Video</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Guides
