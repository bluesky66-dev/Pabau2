import React, { FC, useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import { Card, Image, Rate, Row, Col } from 'antd'
import { StarFilled } from '@ant-design/icons'
import './ShareReview.module.less'
import header from '../../assets/images/brands/Pabau.svg'
export interface ShareReviewProps {
  text: string
  reviewScore: number
  logo: string
  companyName: string
  date: Date
}
export const ShareReview: FC<ShareReviewProps> = (props: ShareReviewProps) => {
  const [url, setUrl] = useState('')
  const ref = useRef(null)
  return (
    <>
      <div ref={ref}>
        <Card style={{ width: 550 }}>
          <div
            style={{
              position: 'relative',
              width: 480,
              height: 480,
            }}
          >
            <div style={{ margin: 20 }}>
              <Row justify="end">
                <Image
                  style={{
                    width: 100,
                    height: 100,
                  }}
                  src={header}
                />
              </Row>
              <Row>
                <span style={{ color: '#e4e4e4', fontWeight: 'bold' }}>
                  {props.date?.getDate().toString().padStart(2, '0')}/
                  {props.date &&
                    (props.date.getMonth() + 1).toString().padStart(2, '0')}
                </span>
              </Row>
              <div style={{ paddingTop: 20 }}>
                <Row>
                  <span
                    style={{
                      width: '80%',
                      margin: '0 auto',
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}
                  >
                    {'"'}
                    {props.text}
                    {'"'}
                  </span>
                </Row>
              </div>
            </div>
            <Row
              align="bottom"
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
            >
              <Image
                onLoad={async () => {
                  try {
                    if (!ref.current || url) {
                      return
                    }
                    console.log('ref current')
                    setUrl(
                      await toPng(ref.current || new HTMLElement(), {
                        width: 550,
                        height: 520,
                        imagePlaceholder: props.logo,
                      })
                    )
                  } catch (error) {
                    console.log(error)
                  }
                }}
                src={props.logo}
                style={{ height: 80, width: 80 }}
              />
              <Col style={{ flex: 1 }}>
                <Row justify="space-between">
                  <Col
                    style={{
                      padding: '8px 16px',
                    }}
                  >
                    <Rate
                      character={() => (
                        <StarFilled style={{ color: '#3BC6B5' }} />
                      )}
                    />
                  </Col>
                  <Col
                    style={{
                      padding: '8px 16px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'gray',
                      }}
                    >
                      verfied patient
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div
                    style={{
                      textTransform: 'capitalize',
                      fontSize: 18,
                      padding: '8px 16px',
                      fontWeight: 'bold',
                      color: 'lightcyan',
                      backgroundColor: '#3BC6B5',
                      flex: 1,
                    }}
                  >
                    {props.companyName}
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
      <Image src={url} />
      <a
        href={`http://www.facebook.com/sharer.php?u=https://www.pabau.com&picture=${url}`}
      >
        Share
      </a>
    </>
  )
}

export default ShareReview
