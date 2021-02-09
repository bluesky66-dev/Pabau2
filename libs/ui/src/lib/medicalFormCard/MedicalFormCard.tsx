import React, { ReactElement, useState } from 'react'
import { Card, Row, Col, Popover } from 'antd'
import { Button } from '@pabau/ui'
import styles from './MedicalFormCard.module.less'

export interface TagType {
  title?: string
  key?: number
}

export interface MedicalFormCardListType {
  title: string
  description: string
  form_type: string
  tags: TagType[]
  image: ReactElement
  key: number
}

export interface MedicalFormCardProps {
  list?: MedicalFormCardListType[]
  onChange?: (name: string) => void
}

export function MedicalFormCard(props: MedicalFormCardProps): JSX.Element {
  const { list } = props

  const [overTags, setOverTags] = useState<number>()

  const handleOverTag = (index: number) => {
    setOverTags(index)
  }

  return (
    <div className={styles.medicalFormContainer}>
      <Row gutter={[16, 16]}>
        {list?.map((thread, index) => {
          return (
            <Col span={8} className={styles.medicalCol} key={thread.key}>
              <Card className={styles.cardWrapper} bodyStyle={{ padding: '0' }}>
                <div className={styles.cardBody}>
                  <div>
                    <div className={styles.cardTopBar}>
                      <div className={styles.topBarIcon}>{thread.image}</div>
                      {thread.tags.length > 0 && (
                        <div className={styles.topBarTags}>
                          <span className={styles.tags}>
                            {thread.tags[0].title}
                          </span>
                          {thread.tags[1] && (
                            <span className={styles.tags}>
                              {thread.tags[1].title}
                            </span>
                          )}
                          {thread.tags.length > 2 && (
                            <Popover
                              content={thread.tags
                                .slice(2, thread.tags.length)
                                .map((tag, idx) => {
                                  return (
                                    <span key={tag.key} className={styles.tags}>
                                      {tag.title}
                                    </span>
                                  )
                                })}
                              placement={'bottomLeft'}
                              visible={overTags === index}
                              onVisibleChange={() => setOverTags(undefined)}
                              overlayClassName={styles.medicalPopover}
                            >
                              <div
                                className={styles.tagLength}
                                onMouseOver={() => handleOverTag(index)}
                              >
                                + {thread.tags.length - 2}
                              </div>
                            </Popover>
                          )}
                        </div>
                      )}
                    </div>
                    <div className={styles.cardMiddleBar}>
                      <h6>{thread.title}</h6>
                      <p>{thread.description}</p>
                    </div>
                  </div>
                  <div className={styles.cardBottomBtn}>
                    <Button type="primary" className={styles.cardBtn}>
                      Use
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default MedicalFormCard
