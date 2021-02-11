import React, { FC, useRef } from 'react'
import { Button, DotButton } from '@pabau/ui'
import { DeleteOutlined } from '@ant-design/icons'
import styles from './VoucherCard.module.less'

/* eslint-disable-next-line */
export interface VoucherCardProps {
  cardWidth: number
  backgroundColor1: string
  backgroundColor2: string
  gradientType: string
  bookNowButton?: boolean
  buttonLabel: string
  voucherType: string
}

export const VoucherCard: FC<VoucherCardProps> = ({
  cardWidth,
  backgroundColor1,
  backgroundColor2,
  gradientType,
  bookNowButton,
  buttonLabel,
  voucherType,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const DotMenuOptions = [
    {
      key: 2,
      icon: <DeleteOutlined />,
      label: 'Delete',
      onClick: () => {
        console.log('DELETE CLICKED')
      },
    },
  ]
  const cardFaceBgColor = {
    background: `${gradientType}(${
      gradientType === 'radial-gradient' ? 'circle at center' : '47.23deg'
    }, ${backgroundColor1} 3.53%, ${backgroundColor2} 95.41%)`,
  }

  const dotsStyles = {
    width: `${cardWidth / 25 / 2}px`,
    height: `${cardWidth / 25}px`,
  }

  const flipCard = (e) => {
    if (cardRef?.current) {
      if (cardRef.current.classList.contains('is-flipped')) {
        cardRef.current.classList.remove('is-flipped')
      } else {
        cardRef.current.classList.add('is-flipped')
      }
    }
  }

  return (
    <div className={styles.voucherCardMain}>
      <div
        className="scene scene--card"
        style={{ width: `${cardWidth}px`, height: `${cardWidth / 2}px` }}
      >
        <div className="card" ref={cardRef} onClick={flipCard}>
          <div
            className={`card__face card__face--front ${voucherType}`}
            style={
              !voucherType &&
              voucherType != 'flowers' &&
              voucherType != 'valentine' &&
              voucherType != 'birthday'
                ? {
                    ...cardFaceBgColor,
                  }
                : {}
            }
          >
            <div className={styles.dots}>
              <div className="dotsInner">
                <div className="dot1" style={{ ...dotsStyles }}></div>
                <div className="dot2" style={{ ...dotsStyles }}></div>
              </div>
            </div>

            <div className={styles.frontFaceContent}>
              <div className={styles.pRelative}>
                <div className={styles.buttonsRow}>
                  <div>
                    {bookNowButton && (
                      <Button type="default">{buttonLabel}</Button>
                    )}
                  </div>
                  <div>
                    <DotButton menuList={DotMenuOptions} />
                    {/* <img src={ThreeDotIcon} alt="Dotted Icon" width="100%" /> */}
                  </div>
                </div>

                <div className={styles.middleRow}>
                  <div>
                    <h1>£100</h1>
                    <p>Voucher value</p>
                  </div>
                </div>

                <div className={styles.lastRow}>
                  <div className={styles.generalDetails}>
                    <h1>Family</h1>
                    <p>Redeem on all services</p>
                  </div>
                  <div className={styles.soldDetails}>
                    <h1>£100</h1>
                    <p>Sold 5</p>
                    <h1>#100001</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card__face card__face--back">
            <div className={styles.dots}>
              <div className="dotsInner">
                <div className="dot1" style={{ ...dotsStyles }}></div>
                <div className="dot2" style={{ ...dotsStyles }}></div>
              </div>
            </div>
            <div className={styles.backFaceContent}>
              <div className={styles.pRelative}>
                <h1>Terms & Conditions</h1>
                <p>
                  lorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherCard
