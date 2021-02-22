import React, { FC, useRef } from 'react'
import { Button, DotButton } from '@pabau/ui'
import { DeleteOutlined } from '@ant-design/icons'
import styles from './VoucherCard.module.less'
export interface VoucherCardProps {
  cardWidth: number
  backgroundColor1: string
  backgroundColor2: string
  gradientType: string
  bookNowButton?: boolean
  buttonLabel: string
  dotMenuShow?: boolean
  borderColor: string
  voucherType: string
  voucherNum: number
  voucherPrice: number
  voucherPriceLabel: string
  voucherSoldPrice: number
  voucherSoldPriceLabel: string
  voucherRelation: string
  voucherRelationLabel: string
  currencyType: string
  onMenuClick: () => void
}

export const VoucherCard: FC<VoucherCardProps> = ({
  cardWidth,
  backgroundColor1,
  backgroundColor2,
  gradientType,
  bookNowButton,
  buttonLabel,
  dotMenuShow,
  borderColor,
  voucherType,
  voucherNum,
  voucherPrice,
  voucherPriceLabel,
  voucherSoldPrice,
  voucherSoldPriceLabel,
  voucherRelation,
  voucherRelationLabel,
  currencyType,
  onMenuClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const voucherTypes = ['flowers', 'valentine', 'birthday']
  const DotMenuOptions = [
    {
      key: 2,
      icon: <DeleteOutlined />,
      label: 'Delete',
      onClick: () => {
        onMenuClick()
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
      if (cardRef.current.classList.contains('flip')) {
        cardRef.current.classList.remove('flip')
      } else {
        cardRef.current.classList.add('flip')
      }
    }
  }

  return (
    <div className={styles.voucherCardMain}>
      <div
        className="flip-card"
        style={{ width: `${cardWidth}px`, height: `${cardWidth / 2}px` }}
      >
        <div className="flip-card-inner" ref={cardRef} onClick={flipCard}>
          <div
            className={`flip-card-front ${voucherType}`}
            style={
              !voucherType && !voucherTypes.includes(voucherType)
                ? { ...cardFaceBgColor }
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
                  <div onClick={flipCard}>
                    {bookNowButton && (
                      <Button type="default">{buttonLabel}</Button>
                    )}
                  </div>
                  <div onClick={flipCard}>
                    {dotMenuShow && <DotButton menuList={DotMenuOptions} />}
                  </div>
                </div>

                <div className={styles.middleRow}>
                  <div>
                    <h1>{currencyType + voucherPrice}</h1>
                    <p>{voucherPriceLabel}</p>
                  </div>
                </div>

                <div className={styles.lastRow}>
                  <div className={styles.generalDetails}>
                    <h1>{voucherRelation}</h1>
                    <p>{voucherRelationLabel}</p>
                  </div>
                  <div className={styles.soldDetails}>
                    <h1>{currencyType + voucherSoldPrice}</h1>
                    <p>{voucherSoldPriceLabel}</p>
                    <h1>#{voucherNum}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card-back" style={{ borderColor }}>
            <div className={styles.dots}>
              <div className="dotsInner">
                <div
                  className="dot1"
                  style={{ ...dotsStyles, borderColor }}
                ></div>
                <div
                  className="dot2"
                  style={{ ...dotsStyles, borderColor }}
                ></div>
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
