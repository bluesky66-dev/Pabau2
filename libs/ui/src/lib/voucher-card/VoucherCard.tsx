import React, { FC, useRef } from 'react'
import { DotButton } from '@pabau/ui'
import styles from './VoucherCard.module.less'

/* eslint-disable-next-line */
export interface VoucherCardProps {
  cardWidth: number
  backgroundColor1: string
  backgroundColor2: string
  borderColor: string
  gradientType: string
}

export const VoucherCard: FC<VoucherCardProps> = ({
  cardWidth,
  borderColor,
  backgroundColor1,
  backgroundColor2,
  gradientType,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const cardFaceStyles = {
    borderColor: borderColor,
    background: `${gradientType}(${
      gradientType == 'radial-gradient' ? 'circle at center' : '47.23deg'
    }, ${backgroundColor1} 3.53%, ${backgroundColor2} 95.41%)`,
  }

  const dotsStyles = {
    width: `${cardWidth / 25 / 2}px`,
    height: `${cardWidth / 25}px`,
    borderColor: borderColor,
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
            className="card__face card__face--front"
            style={{ ...cardFaceStyles }}
          >
            <div className={styles.dots}>
              <div className="dotsInner">
                <div className="dot1" style={{ ...dotsStyles }}></div>
                <div className="dot2" style={{ ...dotsStyles }}></div>
              </div>
            </div>
            <div className={styles.frontFaceContent}>
              <div className={styles.buttonsRow}>
                <div>
                  <DotButton menuList={[{key: "1", icon: }]} />
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div
            className="card__face card__face--back"
            style={{
              ...cardFaceStyles,
            }}
          >
            <div className={styles.dots}>
              <div className="dotsInner">
                <div className="dot1" style={{ ...dotsStyles }}></div>
                <div className="dot2" style={{ ...dotsStyles }}></div>
              </div>
            </div>
            <div className={styles.backFaceContent}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherCard
