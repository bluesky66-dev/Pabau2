import React, { FC, useState } from 'react'
import { toPng } from 'html-to-image'
import { Typography, Card, Image, Rate, Row, Col } from 'antd'
import { StarFilled } from '@ant-design/icons'
import './ShareReview.module.less'
const { Paragraph } = Typography
export interface ShareReviewProps {
  text: string
  reviewScore: number
  logo: string
  companyName: string
  date: Date
}
export const ShareReview: FC<ShareReviewProps> = (props: ShareReviewProps) => {
  const [url, setUrl] = useState('')
  return (
    <>
      <div
        ref={async (ref) => {
          try {
            if (!ref) {
              return
            }
            if (url) {
              return
            }
            setUrl(
              await toPng(ref, {
                width: 250,
                height: 300,
              })
            )
          } catch (error) {
            console.log(error)
          }
        }}
      >
        <Card style={{ width: 250 }}>
          {props.date && (
            <Paragraph style={{ color: '#dfdfdf' }}>
              {props.date.getDate().toString().padStart(2, '0')}/
              {(props.date.getMonth() + 1).toString().padStart(2, '0')}
            </Paragraph>
          )}
          <Paragraph strong>
            {'"'}
            {props.text}
            {'"'}
          </Paragraph>
          <Row>
            <Col span={6}>
              <Image
                src={props.logo}
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col span={18}>
              <Row>
                <Col span={12}>
                  <Rate
                    style={{ color: '#3ac7b4' }}
                    disabled
                    defaultValue={props.reviewScore}
                    character={() => <StarFilled />}
                  />
                </Col>
                <Col span={12}>asdasda</Col>
              </Row>
              <Row
                style={{
                  backgroundColor: '#3ac7b4',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Paragraph
                  style={{
                    color: 'white',
                    fontSize: 6,
                    marginTop: '1em',
                  }}
                >
                  {props.companyName}
                </Paragraph>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
      <Image src={url} style={{ width: 100, height: 100 }} />
      <a
        href={`http://www.facebook.com/sharer.php?u=https://www.pabau.com&picture=${url}`}
      >
        Hey check out this review
      </a>
    </>
  )
}

export default ShareReview
