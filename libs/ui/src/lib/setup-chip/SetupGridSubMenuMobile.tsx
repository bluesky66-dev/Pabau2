import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import styles from './SetupChip.module.less'
import { Collapse } from 'antd'
import Link from 'next/link'

export interface SubDataMenuTitleMobile {
  title: string
  data: string[]
  href?: string
}

export interface SetupGridSubMenuMobileProps {
  subTitleData: SubDataMenuTitleMobile
}

const { Panel } = Collapse

export function SetupGridSubMenuMobile(
  props: SetupGridSubMenuMobileProps
): JSX.Element {
  const { subTitleData } = props

  return (
    <div className={styles.gridMobileWrapper}>
      {subTitleData.data.length > 0 ? (
        <Collapse accordion>
          <Panel
            header={
              <div className={styles.titleWrap}>
                <span className={styles.title}>{subTitleData.title}</span>
                <RightOutlined className={styles.listIcon} />
              </div>
            }
            key={subTitleData.title}
            showArrow={false}
            className={styles.collapsePanel}
          >
            {subTitleData.data.map((thread, index) => {
              return (
                <div key={index}>
                  <span>{thread}</span>
                </div>
              )
            })}
          </Panel>
        </Collapse>
      ) : (
        <div className={styles.titleWrap}>
          {subTitleData.href ? (
            <Link href={subTitleData.href}>
              <div className={styles.title}>{subTitleData.title}</div>
            </Link>
          ) : (
            <div className={styles.title}>{subTitleData.title}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default SetupGridSubMenuMobile
