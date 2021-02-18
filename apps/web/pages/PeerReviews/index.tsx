import React, { FC, useState, useRef } from 'react'
import StartScreen from './ReviewsScreens/StartScreen'
import FinishScreen from './ReviewsScreens/FinishScreen'
import ReviewQuestionScreen from './ReviewsScreens/ReviewQuestionScreen'
import { Logo } from '@pabau/ui'
import classNames from 'classnames'
import { Carousel as PageSlider } from 'antd'
import styles from './index.module.less'
import confetti from 'canvas-confetti'

interface ReviewQuestions {
  reviewType: string
  reviewDescription: string
}

interface User {
  userName: string
  userImagePath?: string
}

const user: User = {
  userName: 'James Warner',
  userImagePath: 'UserAvatar',
}
const reviewQuestions: ReviewQuestions[] = [
  {
    reviewType: 'Analytical thinking 1',
    reviewDescription:
      'Following a scientific approach to problem solving and understanding of complex issues.',
  },
  {
    reviewType: 'Analytical thinking 2',
    reviewDescription:
      'Following a scientific approach to problem solving and understanding of complex issues.',
  },
  {
    reviewType: 'Analytical thinking 3',
    reviewDescription:
      'Following a scientific approach to problem solving and understanding of complex issues.',
  },
  {
    reviewType: 'Analytical thinking 4',
    reviewDescription:
      'Following a scientific approach to problem solving and understanding of complex issues.',
  },
  {
    reviewType: 'Analytical thinking 5',
    reviewDescription:
      'Following a scientific approach to problem solving and understanding of complex issues.',
  },
]
const reviewTitle = 'Quarterly Appraisal'
const reviewSubTitle = 'Please complete your quarterly peer review'

const finishTitle = 'Feedback Completed'
const finishDescription =
  'Your feedback has been submitted successfullly. It took us a little while to generate your feedback report.'

/* eslint-disable-next-line */
export interface IndexProps {}

export const Index: FC<IndexProps> = ({ ...props }) => {
  const [isStarted, setIsStarted] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [totalQs] = useState(reviewQuestions || [])
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }

  const onStart = async () => {
    await setIsStarted(true)
  }

  const onNext = async () => {
    await setCurrent(current + 1)
    if (current < totalQs.length - 1) {
      ref.current.next()
    }
    if (current === totalQs.length - 1) {
      setIsFinished(true)
      setTimeout(() => {
        confetti({
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          particleCount: randomInRange(50, 100),
          origin: { y: 0.6 },
        })
      }, 100)
    }
  }

  const onClose = async () => {
    setIsStarted(false)
    setIsFinished(false)
    setCurrent(0)
  }

  return (
    <div className={styles.peerReviewsMain}>
      <div className={classNames(styles.head, styles.w100)}>
        <Logo />
      </div>
      <div className={styles.body}>
        {!isStarted && !isFinished && totalQs.length > 0 && (
          <StartScreen
            user={user}
            reviewSubTitle={reviewSubTitle}
            reviewTitle={reviewTitle}
            onStart={onStart}
          />
        )}
        {isStarted && !isFinished && (
          <PageSlider dots={false} ref={ref}>
            {totalQs.map((el, key) => (
              <div key={`sliderPageKey${key}`}>
                <ReviewQuestionScreen
                  reviewType={el.reviewType}
                  reviewDescription={el.reviewDescription}
                  questionNo={key + 1}
                  onNext={onNext}
                  onClose={onClose}
                />
              </div>
            ))}
          </PageSlider>
        )}
        {isStarted && isFinished && (
          <FinishScreen
            finishTitle={finishTitle}
            finishDescription={finishDescription}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  )
}

export default Index
