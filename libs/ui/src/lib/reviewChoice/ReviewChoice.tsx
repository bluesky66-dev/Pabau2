import React, { FC, useState } from 'react'
import { useMedia } from 'react-use'
import classNames from 'classnames'
import { Checkbox, Input } from 'antd'
import { BasicModal, Button, Badge, PabauPlus } from '@pabau/ui'
import styles from './ReviewChoice.module.less'
import { DownOutlined } from '@ant-design/icons'
import { UpOutlined } from '@ant-design/icons/lib'

interface ReviewData {
  logo: string
  header: string
  description: string
  prefix?: string
}

interface ReviewDataWithText {
  reviewLink: string
  logo: string
  header: string
  description: string
}

interface P {
  reviewData?: ReviewData[]
  reviewedData?: ReviewData[]
  onSaveReview?: (reviewData?: ReviewDataWithText) => void
}

export const ReviewChoice: FC<P> = ({
  reviewData,
  reviewedData,
  onSaveReview,
}) => {
  const isMobile = useMedia('(max-width: 768px)', false)
  const [currentReview, setCurrentReview] = useState({
    header: '',
    description: '',
    logo: '',
    prefix: '',
  })
  const [yetToReview, setYetToReview] = useState(reviewData || [])
  const [reviewed, setReviewed] = useState(reviewedData || [])
  const [errorText, setErrorText] = useState(false)
  const [showYetToReviewCards, setShowYetToReviewCards] = useState(false)
  const [reviewLink, setReviewLink] = useState('')
  const [reviewLinkWithPrefix, setReviewLinkWithPrefix] = useState('')
  const [openSetUpModal, setOpenSetUpModal] = useState(false)

  const onCancelSaveReview = () => {
    setReviewLink('')
    setErrorText(false)
    setOpenSetUpModal(false)
  }

  const setReview = () => {
    setErrorText(false)
    const index = yetToReview?.findIndex(
      (item) => item.header === currentReview.header
    )
    const reviewData = {
      ...currentReview,
      reviewLink: reviewLinkWithPrefix,
    }
    onSaveReview?.(reviewData)
    yetToReview.splice(index, 1)
    setYetToReview(yetToReview)
    reviewed.push(currentReview)
    setReviewed(reviewed)
    setReviewLink('')
    setOpenSetUpModal(false)
  }

  const handleLinkChange = (e) => {
    e.stopPropagation()
    setReviewLink(e.target.value)
    setErrorText(false)
    setReviewLinkWithPrefix(
      currentReview.prefix
        ? currentReview.prefix + e.target.value
        : e.target.value
    )
  }

  const validateLinks = () => {
    switch (currentReview.header) {
      case 'Google reviews':
        !reviewLinkWithPrefix.includes('https://www.google.com/search?')
          ? setErrorText(true)
          : setReview()
        break
      case 'Facebook reviews':
        !reviewLinkWithPrefix.includes('https://www.facebook.com/')
          ? setErrorText(true)
          : setReview()
        break
      case 'Trust Pilot':
        !reviewLinkWithPrefix.includes('https://uk.trustpilot.com/evaluate/')
          ? setErrorText(true)
          : setReview()
        break
      case 'Doctify':
        !reviewLinkWithPrefix.includes('https://www.doctify.co.uk/review/')
          ? setErrorText(true)
          : setReview()
        break
    }
  }

  const yetToReviewCard = () => {
    return yetToReview?.map((review) => (
      <div key={review.header} className={styles.cover}>
        <div className={styles.mainContent}>
          <div className={styles.logo}>
            <img alt="" src={review.logo} />
          </div>
          <div className={styles.description}>
            <div className={styles.descriptionTop}>
              <div className={styles.descriptionHead}>
                <span className={styles.descriptionTitle}>{review.header}</span>
                <span className={styles.plusLabel}>
                  <PabauPlus label="plus" modalType="Marketing" />
                </span>
              </div>
              <Badge label="Disabled" disabled={false} />
            </div>
            <div className={styles.descriptionContent}>
              <p>{review.description}</p>
            </div>
            <div className={styles.descriptionSetup}>
              <Button
                onClick={() => {
                  onSetUpNow(review)
                }}
                type="primary"
              >
                Set Up Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  const onSetUpNow = (firm) => {
    setCurrentReview(firm)
    setOpenSetUpModal(true)
  }
  return (
    <div>
      <div className={styles.reviewChoiceHead}>
        <h2>Integrations</h2>
        <p>Choose which tool you would like to use to collect reviews</p>
      </div>

      <div>
        {reviewed ? (
          reviewed?.map((review) => (
            <div
              key={review.header}
              className={classNames(styles.cover, styles.active)}
            >
              <div className={styles.mainContent}>
                <div className={styles.logo}>
                  <img alt="" src={review.logo} />
                </div>
                <div className={styles.description}>
                  {!isMobile && review.header === 'Pabau reviews' && (
                    <div className={styles.descriptionRec}>recommended</div>
                  )}
                  <div className={styles.descriptionTop}>
                    <div className={styles.reviewDes}>
                      <div className={styles.descriptionHead}>
                        <div className={styles.descriptionTitle}>
                          {review.header}
                        </div>
                      </div>
                      <Checkbox
                        className={styles.descriptionCheck}
                        checked={true}
                      />
                    </div>
                  </div>
                  <div className={styles.descriptionContent}>
                    <p>{review.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div />
        )}
      </div>
      <div>
        <div className={styles.descriptionMainWrapper}>
          {yetToReview && yetToReview?.length > 0 && (
            <div>
              {!isMobile ? (
                <div className={styles.btnShowWrapper}>
                  {!showYetToReviewCards ? (
                    <Button
                      className={styles.btnMore}
                      onClick={() => setShowYetToReviewCards(true)}
                    >
                      Show more ({yetToReview?.length}) <DownOutlined />
                    </Button>
                  ) : (
                    <div>
                      <div>{yetToReviewCard()}</div>
                      <div className={styles.btnShowWrapper}>
                        <Button
                          className={styles.btnMore}
                          onClick={() => setShowYetToReviewCards(false)}
                        >
                          Collapse
                          <UpOutlined />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>{yetToReviewCard()}</div>
              )}
            </div>
          )}
        </div>
      </div>
      <BasicModal
        title={`Set Up ${currentReview.header}`}
        visible={openSetUpModal}
        newButtonText="save"
        onOk={validateLinks}
        onCancel={() => onCancelSaveReview?.()}
        modalWidth={682}
        className={styles.reviewModal}
      >
        <h5 className={styles.textContent}>
          Please enter the URL to your {currentReview.header} review link
        </h5>
        <span className={styles.link}>URL</span>
        <Input
          prefix={currentReview.prefix}
          value={reviewLink}
          onChange={handleLinkChange}
          className={styles.customInput}
        />
        {errorText && <div className={styles.errorText}>Link is not Valid</div>}
      </BasicModal>
    </div>
  )
}

export default ReviewChoice
