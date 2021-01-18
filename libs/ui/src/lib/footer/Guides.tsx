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
        return (
          <div key={index} className={styles.boxDirection}>
            <div className={classNames(styles.footerBox, styles.rightSpace)}>
              <div className={styles.iconTextAlign}>
                <div>{guide.icon}</div>
                <div className={styles.boxText}>
                  <p>{guide.guideName}</p>
                  <h6>{guide.type}</h6>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Guides
