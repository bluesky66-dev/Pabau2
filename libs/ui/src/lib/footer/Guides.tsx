import React, { FC } from 'react'
import styles from './Footer.module.less'
import classNames from 'classnames'
import { ReactComponent as BookSvg } from '../../assets/images/book.svg'
import { PlaySquareOutlined } from '@ant-design/icons'

export const Guides: FC = () => {
  const guides = [
    {
      guideName: 'Setting up a Marketing Source',
      type: 'Article',
      icon: <BookSvg />,
    },
    {
      guideName: 'Setting up a Marketing Source',
      type: 'Article',
      icon: <BookSvg />,
    },
    {
      guideName: 'Setting up a Marketing Source',
      type: 'Article',
      icon: <BookSvg />,
    },
    {
      guideName: 'Creating a Marketing Source',
      type: 'Video',
      icon: <PlaySquareOutlined />,
    },
  ]

  return (
    <div className={styles.relatedGuides}>
      {guides.map((guide, index) => {
        return index % 2 === 0 ? (
          <div key={index} className={styles.boxDirection} style={{ marginBottom: '12px' }}>
            <div className={classNames(styles.footerBox)}>
              <div className={styles.iconTextAlign}>
                <div>{guides[index].icon}</div>
                <div className={styles.boxText}>
                  <p>{guides[index].guideName}</p>
                  <h6>{guides[index].type}</h6>
                </div>
              </div>
            </div>
            <div className={classNames(styles.footerBox, styles.rightSpace)}>
              <div className={styles.iconTextAlign}>
                <div>{guides[index + 1].icon}</div>
                <div className={styles.boxText}>
                  <p>{guides[index + 1].guideName}</p>
                  <h6>{guides[index + 1].type}</h6>
                </div>
              </div>
            </div>
          </div>
        ) : null
      })}
    </div>
  )
}

export default Guides
