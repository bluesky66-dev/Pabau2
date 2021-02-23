import React, { FC, useState, useEffect, useRef } from 'react'
import { useMedia } from 'react-use'
import classNames from 'classnames'
import { Typography, Badge, Form, Row, Col, Radio } from 'antd'
import {
  LeftOutlined,
  RightOutlined,
  ToolOutlined,
  QuestionOutlined,
  ShareAltOutlined,
  LinkOutlined,
  BellOutlined,
  SmileOutlined,
} from '@ant-design/icons'
import {
  TabMenu,
  Breadcrumb,
  NotificationBanner,
  SimpleDropdown,
  Input,
  Slider,
  Switch,
  Stepper,
  Button,
  BasicModal,
  DotButton,
  ColorPicker,
  Appointment,
  ReadReview,
  ReviewListing,
  ReviewWrite,
  ReviewWriteStepper,
  ReviewChoice,
  ReviewSlider,
  ReviewSliderProps,
  AddQuestion,
  IQuestionOptions,
  QuestionField,
  CopyEmbedCodeModal,
} from '@pabau/ui'
import confetti from 'canvas-confetti'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../CommonHeader'
import reviewsConfigBanner from '../../../assets/images/reviews-config-banner.png'
import userAvatar from '../../../assets/images/users/alex.png'
import clinicLogo from '../../../assets/images/clinic-logo.png'
import FeedbackSurveyFinal from '../../../assets/images/feedback-survey-final.png'
import { ReactComponent as ExternalLink } from '../../../assets/images/external-link.svg'
import { ReactComponent as ExternalLinkGrey } from '../../../assets/images/external-link-grey.svg'
import { ReactComponent as Palette } from '../../../assets/images/palette.svg'
import { ReactComponent as Voucher } from '../../../assets/images/voucher.svg'
import {
  addQuestionData,
  integrations,
  questionBankData,
  reviewBadges,
  reviewWidgets,
  defaultPreview,
} from '../../../assets/feedbackSurveyData'
import styles from './index.module.less'

const stepData = [
  {
    step: 0,
    name: 'Builder',
    img: <ToolOutlined />,
    isActive: true,
    index: 0,
  },
  {
    step: 1,
    name: 'Questions',
    img: <QuestionOutlined />,
    isActive: false,
    index: 1,
  },
  {
    step: 2,
    name: 'Integrations',
    img: <LinkOutlined />,
    isActive: false,
    index: 2,
  },
  {
    step: 3,
    name: 'Share',
    img: <ShareAltOutlined />,
    isActive: false,
    index: 3,
  },
]

interface FeedbackSurveyBuilder {
  color: string
  logotypePosition: string
  logotypeSize: number
  clientName: string
  name: string
  notifications: {
    email: boolean
    sms: boolean
  }
  voucherReward: string
  surveyName: string
  surveySubTitle: string
  surveyFormat: boolean
  questionsBank: IQuestionOptions[]
}

export interface ReviewsConfigProps {
  currentStep: number
  builderSetting: FeedbackSurveyBuilder
}

const defaultBuilderSetting: FeedbackSurveyBuilder = {
  color: '',
  logotypePosition: 'Middle',
  logotypeSize: 137,
  clientName: 'First Name',
  name: 'Jamal Potter',
  notifications: {
    email: true,
    sms: true,
  },
  voucherReward: 'No voucher issued',
  surveyName: 'Client Feedback Survey',
  surveySubTitle: 'Please, complete your responses below',
  surveyFormat: false,
  questionsBank: questionBankData,
}

export const Index: FC<ReviewsConfigProps> = ({
  currentStep = 0,
  builderSetting = defaultBuilderSetting,
}) => {
  const [form] = Form.useForm()
  const reviewsConfigRef = useRef(null)
  const [showBanner, setShowBanner] = useState(false)
  const [setting, setSetting] = useState<FeedbackSurveyBuilder>(
    defaultBuilderSetting
  )
  const [step, setStep] = useState(0)

  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }

  useEffect(() => {
    setSetting(builderSetting)
    setStep(currentStep)
  }, [currentStep, builderSetting])

  useEffect(() => {
    if (step === 3) {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      })
    }
  }, [step])

  const ReviewsConfigFooter = ({ step, onNext, onPrev }) => {
    const handleClickNext = () => {
      reviewsConfigRef.current.scrollIntoView()
      onNext()
    }
    const handleClickPrev = () => {
      reviewsConfigRef.current.scrollIntoView()
      onPrev()
    }
    return (
      <div className={styles.reviewsConfigFooter}>
        <Button
          type="primary"
          disabled={step <= 0}
          onClick={() => handleClickPrev()}
        >
          <LeftOutlined /> Previous Step
        </Button>
        <p>{`Step ${step + 1}/4`}</p>
        <Button
          type="primary"
          disabled={step >= 3}
          onClick={() => handleClickNext()}
        >
          Next Step <RightOutlined />
        </Button>
      </div>
    )
  }

  const SMSText = () => {
    const messages = [
      {
        content: 'Hi, Kristy',
        direction: 'from',
      },
      {
        content: 'Heya',
        direction: 'to',
      },
    ]
    return (
      <div className={styles.smsTextContainer}>
        {messages.map((message) => (
          <div
            key={message.content}
            className={
              message.direction === 'from'
                ? classNames(styles.smsTextItem, styles.directionFrom)
                : classNames(styles.smsTextItem, styles.directionTo)
            }
          >
            <div className={styles.smsTextContent}>
              {message.content}
              <div className={styles.smsTextArrow} />
            </div>
          </div>
        ))}
      </div>
    )
  }

  const Step1 = ({ settings }) => {
    const [isListing, setIsListing] = useState(true)
    const [isEmail, setIsEmail] = useState(true)
    const [setting, setSetting] = useState<FeedbackSurveyBuilder>(
      defaultBuilderSetting
    )
    const handleChangeSetting = (key, val) => {
      const builder = { ...setting }
      builder[key] = val
      setSetting({ ...builder })
    }
    useEffect(() => {
      setSetting(settings)
    }, [settings])
    return (
      <>
        <div className={styles.reviewsConfigBody}>
          <div className={styles.reviewsConfigBodyDesktop}>
            <div>
              <h2>Builder</h2>
              <div>
                <div className={styles.section}>
                  <h3>
                    <Palette style={{ marginRight: '.5rem' }} />
                    <span>Apperance</span>
                  </h3>
                  <h4>
                    Customize the look and feel of your survey page, as well as
                    customizing features such as displaying the clients full
                    name or aninymously
                  </h4>
                  <ColorPicker
                    heading="Colour sheme"
                    onSelected={(val) => handleChangeSetting('color', val)}
                  />
                  <div className={styles.sectionItem}>
                    <SimpleDropdown
                      label="Logo Position"
                      value={setting.logotypePosition}
                      dropdownItems={['Left', 'Middle', 'Right']}
                      onSelected={(val) =>
                        handleChangeSetting('logotypePosition', val)
                      }
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <Slider
                      title="Logo size"
                      value={setting.logotypeSize}
                      onChange={(val) =>
                        handleChangeSetting('logotypeSize', val)
                      }
                      calculatedValue={`${setting.logotypeSize}px`}
                      min={30}
                      max={150}
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <SimpleDropdown
                      label="Display client name"
                      value={setting.clientName}
                      dropdownItems={['Full Name', 'First Name', 'Initials']}
                      onSelected={(val) => {
                        handleChangeSetting('clientName', val)
                        setIsListing(false)
                      }}
                    />
                  </div>
                </div>
                <div className={styles.section}>
                  <h3>
                    <BellOutlined
                      style={{ marginRight: '.5rem', color: '#54b2d3' }}
                    />
                    <span>Notifications</span>
                  </h3>
                  <h4>
                    The way in which you request feedback from clients who visit
                    you. Changes in client notifications.
                  </h4>
                  <div className={styles.sectionItem}>
                    <Row>
                      <Col span={12}>
                        <Form form={form} layout="vertical">
                          <Form.Item label="Email">
                            <Badge
                              status={
                                setting.notifications.email
                                  ? 'success'
                                  : 'default'
                              }
                              text={
                                setting.notifications.email
                                  ? 'Enabled'
                                  : 'Disabled'
                              }
                            />
                          </Form.Item>
                        </Form>
                      </Col>
                      <Col span={12}>
                        <Form form={form} layout="vertical">
                          <Form.Item label="SMS">
                            <Badge
                              status={
                                setting.notifications.sms
                                  ? 'success'
                                  : 'default'
                              }
                              text={
                                setting.notifications.sms
                                  ? 'Enabled'
                                  : 'Disabled'
                              }
                            />
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.sectionItem}>
                    <div className={styles.changeInClientNotifications}>
                      <a href="/client-notifications/request-feedback">
                        Change in client notifications
                      </a>
                      <ExternalLinkGrey style={{ marginLeft: '0.5rem' }} />
                    </div>
                  </div>
                </div>
                <div className={styles.section}>
                  <h3>
                    <Voucher style={{ marginRight: '.5rem' }} />
                    <span>Incentive</span>
                    <span className={styles.plusTagItem}>Plus</span>
                  </h3>
                  <h4>Reward clients for writing a review</h4>
                  <div className={styles.sectionItem}>
                    <SimpleDropdown
                      label="Voucher reward"
                      value={setting.voucherReward}
                      dropdownItems={[
                        '£5.00 Review Voucher Scheme',
                        'No voucher issued',
                      ]}
                      onSelected={(val) =>
                        handleChangeSetting('voucherReward', val)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Preview</h2>
              <div className={styles.previewPanel}>
                <Radio.Group
                  buttonStyle="solid"
                  defaultValue={isListing}
                  value={isListing}
                  onChange={(e) => setIsListing(e.target.value)}
                >
                  <Radio.Button value={true}>Listing</Radio.Button>
                  <Radio.Button value={false}>Read</Radio.Button>
                </Radio.Group>
                <div className={styles.templatePanel}>
                  {isListing && (
                    <ReviewListing
                      image={clinicLogo}
                      review={4.67}
                      description="Things people are saying about us"
                      totalReview={5}
                      totalReviewUser={43}
                      weScoreLabel="We score"
                      fromLabel="from"
                      reviewLabel="reviews"
                      color={setting.color}
                      logoPosition={setting.logotypePosition}
                      logoSize={setting.logotypeSize}
                    />
                  )}
                  {!isListing && (
                    <ReadReview
                      title="Highly Recommended"
                      bodyContent="Was extremely nervous about seeing Doctor Hazim Sadideen but had a very friendly and warm welcoming at the reception and immediately felt at ease. Doctor Hazim himself made me feel very comfortable and reassured, initially I was very nervous to begin with. Reassured me that everything was going to be OK and that he'll do the best he can with the surgery. His secretary is also very nice, very approachable and easy to talk to if there are any complications or concerns. Highly recommended."
                      updatedAt="1 year ago"
                      name={
                        setting.clientName === 'Full Name'
                          ? setting.name
                          : setting.clientName === 'First Name'
                          ? setting.name.split(' ')[0]
                          : setting.name
                              .split(' ')
                              .map((str) => str.charAt(0))
                              .join('. ')
                      }
                      defaultRating={2.5}
                      avatarSrc={userAvatar}
                      color={setting.color}
                    />
                  )}
                </div>
                <Radio.Group
                  buttonStyle="solid"
                  defaultValue={isEmail}
                  value={isEmail}
                  onChange={(e) => setIsEmail(e.target.value)}
                >
                  <Radio.Button value={true}>Email</Radio.Button>
                  <Radio.Button value={false}>SMS Text</Radio.Button>
                </Radio.Group>
                <div className={styles.templatePanel}>
                  {isEmail && <Appointment selectLanguage="en" />}
                  {!isEmail && <SMSText />}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.reviewsConfigBodyMobile}>
            <TabMenu
              menuItems={['BUILDER', 'PREVIEW']}
              tabPosition="top"
              minHeight="1px"
            >
              <div>
                <div className={styles.section}>
                  <h3>
                    <Palette style={{ marginRight: '.5rem' }} />
                    <span>Apperance</span>
                  </h3>
                  <h4>
                    Customize the look and feel of your survey page, as well as
                    customizing features such as displaying the clients full
                    name or aninymously
                  </h4>
                  <ColorPicker
                    heading="Colour sheme"
                    onSelected={(val) => handleChangeSetting('color', val)}
                  />
                  <div className={styles.sectionItem}>
                    <SimpleDropdown
                      label="Logo Position"
                      value={setting.logotypePosition}
                      dropdownItems={['Left', 'Middle', 'Right']}
                      onSelected={(val) =>
                        handleChangeSetting('logotypePosition', val)
                      }
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <Slider
                      title="Logo size"
                      value={setting.logotypeSize}
                      onChange={(val) =>
                        handleChangeSetting('logotypeSize', val)
                      }
                      calculatedValue={`${setting.logotypeSize}px`}
                      min={30}
                      max={150}
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <SimpleDropdown
                      label="Display client name"
                      value={setting.clientName}
                      dropdownItems={['Full Name', 'First Name', 'Initials']}
                      onSelected={(val) =>
                        handleChangeSetting('clientName', val)
                      }
                    />
                  </div>
                </div>
                <div className={styles.section}>
                  <h3>
                    <BellOutlined
                      style={{ marginRight: '.5rem', color: '#54b2d3' }}
                    />
                    <span>Notifications</span>
                  </h3>
                  <h4>
                    The way in which you request feedback from clients who visit
                    you. Changes in client notifications.
                  </h4>
                  <div className={styles.sectionItem}>
                    <Row>
                      <Col span={12}>
                        <Form form={form} layout="vertical">
                          <Form.Item label="Email">
                            <Badge
                              status={
                                setting.notifications.email
                                  ? 'success'
                                  : 'default'
                              }
                              text={
                                setting.notifications.email
                                  ? 'Enabled'
                                  : 'Disabled'
                              }
                            />
                          </Form.Item>
                        </Form>
                      </Col>
                      <Col span={12}>
                        <Form form={form} layout="vertical">
                          <Form.Item label="SMS">
                            <Badge
                              status={
                                setting.notifications.sms
                                  ? 'success'
                                  : 'default'
                              }
                              text={
                                setting.notifications.sms
                                  ? 'Enabled'
                                  : 'Disabled'
                              }
                            />
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.sectionItem}>
                    <div className={styles.changeInClientNotifications}>
                      <a href="/client-notifications/request-feedback">
                        Change in client notifications
                      </a>
                      <ExternalLinkGrey style={{ marginLeft: '0.5rem' }} />
                    </div>
                  </div>
                </div>
                <div className={styles.section}>
                  <h3>
                    <Voucher style={{ marginRight: '.5rem' }} />
                    <span>Incentive</span>
                    <span className={styles.plusTagItem}>Plus</span>
                  </h3>
                  <h4>Reward clients for writing a review</h4>
                  <div className={styles.sectionItem}>
                    <SimpleDropdown
                      label="Voucher reward"
                      value={setting.voucherReward}
                      dropdownItems={[
                        '£5.00 Review Voucher Scheme',
                        'No voucher issued',
                      ]}
                      onSelected={(val) =>
                        handleChangeSetting('voucherReward', val)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className={styles.previewPanel}>
                <Radio.Group
                  buttonStyle="solid"
                  defaultValue={isListing}
                  value={isListing}
                  onChange={(e) => setIsListing(e.target.value)}
                >
                  <Radio.Button value={true}>Listing</Radio.Button>
                  <Radio.Button value={false}>Read</Radio.Button>
                </Radio.Group>
                <div className={styles.templatePanel}>
                  {isListing && (
                    <ReviewListing
                      image={clinicLogo}
                      review={4.67}
                      description="Things people are saying about us"
                      totalReview={5}
                      totalReviewUser={43}
                      weScoreLabel="We score"
                      fromLabel="from"
                      reviewLabel="reviews"
                      color={setting.color}
                      logoPosition={setting.logotypePosition}
                      logoSize={setting.logotypeSize}
                    />
                  )}
                  {!isListing && (
                    <ReadReview
                      title="Highly Recommended"
                      bodyContent="Was extremely nervous about seeing Doctor Hazim Sadideen but had a very friendly and warm welcoming at the reception and immediately felt at ease. Doctor Hazim himself made me feel very comfortable and reassured, initially I was very nervous to begin with. Reassured me that everything was going to be OK and that he'll do the best he can with the surgery. His secretary is also very nice, very approachable and easy to talk to if there are any complications or concerns. Highly recommended."
                      updatedAt="1 year ago"
                      name="Jamal Potter"
                      defaultRating={2.5}
                      avatarSrc={userAvatar}
                      color={setting.color}
                    />
                  )}
                </div>
                <Radio.Group
                  buttonStyle="solid"
                  defaultValue={isEmail}
                  value={isEmail}
                  onChange={(e) => setIsEmail(e.target.value)}
                >
                  <Radio.Button value={true}>Email</Radio.Button>
                  <Radio.Button value={false}>SMS Text</Radio.Button>
                </Radio.Group>
                <div className={styles.templatePanel}>
                  {isEmail && <Appointment selectLanguage="en" />}
                  {!isEmail && <SMSText />}
                </div>
              </div>
            </TabMenu>
          </div>
        </div>
        <ReviewsConfigFooter
          step={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </>
    )
  }

  const Step2 = ({ settings, questionData }) => {
    const [questions, setQuestions] = useState<QuestionField[]>([])
    const [setting, setSetting] = useState<FeedbackSurveyBuilder>(
      defaultBuilderSetting
    )
    const [surveyName, setSurveyName] = useState('')
    const [surveySubTitle, setSurveySubTitle] = useState('')
    const [surveyFormat, setSurveyFormat] = useState(false)
    const onChange = (value: string, index: number) => {
      const temporaryQuestions = [...questions]
      for (const [key, question] of temporaryQuestions.entries()) {
        if (key === index) question.title = value
      }
      setQuestions(temporaryQuestions)
    }
    const onAddQuestion = () => {
      const data = [...questions, { title: '', key: questions.length + 1 }]
      setQuestions(data)
    }
    const onDeleteButton = (key: number) => {
      const data = [...questions]
      const questionItems = data.filter((a) => a.key !== key)
      setQuestions(questionItems)
    }

    const onQuestionBankAddButton = (
      question: Array<IQuestionOptions> | undefined
    ): void => {
      const data = [...questions]
      if (question) {
        for (const a of question) {
          data.push({
            title: a.question,
            key: questions.length + Math.floor(Math.random() * 100),
          })
        }
      }
      setQuestions(data)
    }

    useEffect(() => {
      if (questionData) setQuestions(questionData)
      if (settings) {
        setSetting(settings)
        setSurveyName(settings.surveyName)
        setSurveySubTitle(settings.surveySubTitle)
        setSurveyFormat(settings.surveyFormat)
      }
    }, [questionData, settings])

    return (
      <>
        <div className={styles.reviewsConfigBody}>
          <div className={styles.reviewsConfigBodyDesktop}>
            <div>
              <h2>Builder</h2>
              <div>
                <div className={styles.section}>
                  <h3>
                    <SmileOutlined
                      style={{ marginRight: '.5rem', color: '#54b2d3' }}
                    />
                    <span>Survey Settings</span>
                  </h3>
                  <h4>
                    In this section you can name your feedback survey, as well
                    as choose your survey format
                  </h4>
                  <div className={styles.sectionItem}>
                    <Input
                      autoComplete="off"
                      label="Survey name"
                      text={setting.surveyName}
                      onChange={(val) => setSurveyName(val)}
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <Input
                      autoComplete="off"
                      label="Survey subtitle"
                      text={setting.surveySubTitle}
                      onChange={(val) => setSurveySubTitle(val)}
                    />
                  </div>
                  <div className={styles.surveyFormat}>
                    <h4>Survey format</h4>
                    <Form form={form} layout="vertical">
                      <Form.Item
                        hasFeedback
                        help="Show all questions on a page at once"
                      >
                        <Radio
                          checked={surveyFormat === false}
                          onClick={() => setSurveyFormat(false)}
                        >
                          Classic
                        </Radio>
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        help="Automatically scroll t o the next question"
                      >
                        <Radio
                          checked={surveyFormat === true}
                          onClick={() => setSurveyFormat(true)}
                        >
                          <span>
                            Smart Survey{' '}
                            <span className={styles.plusTagItem}>Plus</span>
                          </span>
                        </Radio>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
                <AddQuestion
                  description={addQuestionData.description}
                  questions={questions}
                  title={addQuestionData.title}
                  addQuestionLabel={addQuestionData.addQuestionLabel}
                  goToButtonLabel={addQuestionData.goToButtonLabel}
                  questionLabel={addQuestionData.questionLabel}
                  onChange={(val, index) => onChange(val, index)}
                  onAddQuestion={() => onAddQuestion()}
                  onDeleteButton={(key) => onDeleteButton(key)}
                  isDeleteDisable={questions?.length === 1}
                  onQuestionBankAddButton={onQuestionBankAddButton}
                />
              </div>
            </div>
            <div>
              <h2>Preview</h2>
              <div className={styles.previewPanel}>
                {!surveyFormat && (
                  <ReviewWrite
                    title={surveyName}
                    subtitle={surveySubTitle}
                    reviews={questions.map((question) => ({
                      key: question.key,
                      question: question.title,
                      rating: 0,
                    }))}
                  />
                )}
                {surveyFormat && (
                  <ReviewWriteStepper
                    title={surveyName}
                    subtitle={surveySubTitle}
                    reviews={questions.map((question) => ({
                      key: question.key,
                      question: question.title,
                      rating: 0,
                    }))}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.reviewsConfigBodyMobile}>
            <TabMenu
              menuItems={['BUILDER', 'PREVIEW']}
              tabPosition="top"
              minHeight="1px"
            >
              <div>
                <div className={styles.section}>
                  <h3>
                    <SmileOutlined
                      style={{ marginRight: '.5rem', color: '#54b2d3' }}
                    />
                    <span>Survey Settings</span>
                  </h3>
                  <h4>
                    In this section you can name your feedback survey, as well
                    as choose your survey format
                  </h4>
                  <div className={styles.sectionItem}>
                    <Input
                      autoComplete="off"
                      label="Survey name"
                      text={setting.surveyName}
                      onChange={(val) => setSurveyName(val)}
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <Input
                      autoComplete="off"
                      label="Survey subtitle"
                      text={setting.surveySubTitle}
                      onChange={(val) => setSurveySubTitle(val)}
                    />
                  </div>
                  <div className={styles.surveyFormat}>
                    <h4>Survey format</h4>
                    <Form form={form} layout="vertical">
                      <Form.Item
                        hasFeedback
                        help="Show all questions on a page at once"
                      >
                        <Radio
                          checked={surveyFormat === false}
                          onClick={() => setSurveyFormat(false)}
                        >
                          Classic
                        </Radio>
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        help="Automatically scroll t o the next question"
                      >
                        <Radio
                          checked={surveyFormat === true}
                          onClick={() => setSurveyFormat(true)}
                        >
                          <span>
                            Smart Survey{' '}
                            <span className={styles.plusTagItem}>Plus</span>
                          </span>
                        </Radio>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
                <AddQuestion
                  description={addQuestionData.description}
                  questions={questions}
                  title={addQuestionData.title}
                  addQuestionLabel={addQuestionData.addQuestionLabel}
                  goToButtonLabel={addQuestionData.goToButtonLabel}
                  questionLabel={addQuestionData.questionLabel}
                  onChange={(val, index) => onChange(val, index)}
                  onAddQuestion={() => onAddQuestion()}
                  onDeleteButton={(key) => onDeleteButton(key)}
                  isDeleteDisable={questions?.length === 1}
                  onQuestionBankAddButton={onQuestionBankAddButton}
                />
              </div>
              <div className={styles.previewPanel}>
                {!surveyFormat && (
                  <ReviewWrite
                    title={surveyName}
                    subtitle={surveySubTitle}
                    reviews={questions.map((question) => ({
                      key: question.key,
                      question: question.title,
                      rating: 0,
                    }))}
                  />
                )}
                {surveyFormat && (
                  <ReviewWriteStepper
                    title={surveyName}
                    subtitle={surveySubTitle}
                    reviews={questions.map((question) => ({
                      key: question.key,
                      question: question.title,
                      rating: 0,
                    }))}
                  />
                )}
              </div>
            </TabMenu>
          </div>
        </div>
        <ReviewsConfigFooter
          step={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </>
    )
  }

  const Step3 = () => {
    return (
      <>
        <div className={styles.reviewsConfigBody}>
          <div className={styles.reviewChoiceContainer}>
            <ReviewChoice {...integrations} />
          </div>
        </div>
        <ReviewsConfigFooter
          step={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </>
    )
  }

  const Step4 = ({ reviewBadges = [], reviewWidgets = [] }) => {
    const isMobile = useMedia('(max-width: 767px)', false)
    const [openPreview, setOpenPreview] = useState(false)
    const [currentReviews, setCurrentReviews] = useState<ReviewSliderProps>(
      defaultPreview
    )
    const [embedCodeView, setEmbedCodeView] = useState(false)
    const [embedCode, setEmbedCode] = useState('')
    return (
      <>
        <div className={styles.reviewsConfigBody}>
          <div className={styles.reviewsShare}>
            <div>
              <img src={FeedbackSurveyFinal} alt="" width="100%" />
            </div>
            <div>
              <p className={styles.reviewsShareTitle}>
                Share your reviews with pride
              </p>
              <p className={styles.reviewsShareDescription}>
                Reviews are an important component of a successful profiles,
                considering that today’s tech savvy buyers often trust online
                reviews as muuch as personal recommednations. We make it asy to
                reuquest, track, and reply all within your portal..
              </p>
              <Button
                type="primary"
                onClick={() => {
                  window.open(
                    'https://www.pabau.com/reviews/cadogan-clinic',
                    '_blank'
                  )
                }}
              >
                View Listing
              </Button>
            </div>
          </div>
          <div className={styles.reviewContent}>
            <p className={styles.reviewContentTitle}>Review Badges</p>
            <p className={styles.reviewContentSubTitle}>
              Display your strong product ratings and attract new reviews with
              your dynamic user review badge
            </p>
            {reviewBadges?.map((badge) => (
              <div className={styles.reviewContentItem} key={badge.title}>
                <div>
                  <img src={badge.imgSrc} alt="" />
                </div>
                <div>
                  <p>{badge.title}</p>
                  <div>
                    <Button
                      type="primary"
                      onClick={() => {
                        setEmbedCodeView(true)
                        setEmbedCode(badge.embedCode)
                      }}
                    >
                      View Embed Code
                    </Button>
                    {!isMobile ? (
                      <>
                        {badge.wordpressPlugin && (
                          <a
                            href={badge.wordpressPlugin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button>View Wordpress Plugin</Button>
                          </a>
                        )}
                        {badge.preview && (
                          <Button
                            onClick={() => {
                              setCurrentReviews(badge.preview)
                              setOpenPreview(true)
                            }}
                          >
                            Preview
                          </Button>
                        )}
                      </>
                    ) : badge.wordpressPlugin || badge.preview ? (
                      <DotButton
                        menuList={[
                          badge.wordpressPlugin && {
                            key: 1,
                            icon: <LinkOutlined />,
                            label: 'Viewe Wordpress Plugin',
                            onClick: () => {
                              window.open(badge.wordpressPlugin, '_blank')
                            },
                          },
                          badge.preview && {
                            key: 2,
                            label: 'Preview',
                            icon: <LinkOutlined />,
                            onClick: () => {
                              setCurrentReviews(badge.preview)
                              setOpenPreview(true)
                            },
                          },
                        ]}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            ))}
            <p className={styles.reviewContentTitle}>Review widgets</p>
            <p className={styles.reviewContentSubTitle}>
              Embedd your reviews onto your website
            </p>
            {reviewWidgets?.map((widget) => (
              <div className={styles.reviewContentItem} key={widget.title}>
                <div>
                  <img src={widget.imgSrc} alt="" />
                </div>
                <div>
                  <p>{widget.title}</p>
                  <div>
                    <Button
                      type="primary"
                      onClick={() => {
                        setEmbedCodeView(true)
                        setEmbedCode(widget.embedCode)
                      }}
                    >
                      View Embed Code
                    </Button>
                    {!isMobile ? (
                      <>
                        {widget.wordpressPlugin && (
                          <a
                            href={widget.wordpressPlugin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button>View Wordpress Plugin</Button>
                          </a>
                        )}
                        {widget.preview && (
                          <Button
                            onClick={() => {
                              setCurrentReviews(widget.preview)
                              setOpenPreview(true)
                            }}
                          >
                            Preview
                          </Button>
                        )}
                      </>
                    ) : widget.wordpressPlugin || widget.preview ? (
                      <DotButton
                        menuList={[
                          widget.wordpressPlugin && {
                            key: 1,
                            icon: <LinkOutlined />,
                            label: 'Viewe Wordpress Plugin',
                            onClick: () => {
                              window.open(widget.wordpressPlugin, '_blank')
                            },
                          },
                          widget.preview && {
                            key: 2,
                            label: 'Preview',
                            icon: <LinkOutlined />,
                            onClick: () => {
                              setCurrentReviews(widget.preview)
                              setOpenPreview(true)
                            },
                          },
                        ]}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ReviewsConfigFooter
          step={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
        {openPreview && (
          <BasicModal
            visible={openPreview}
            width="100%"
            footer={null}
            onOk={() => setOpenPreview(false)}
            onCancel={() => setOpenPreview(false)}
          >
            <ReviewSlider {...currentReviews} />
          </BasicModal>
        )}
        {embedCodeView && (
          <CopyEmbedCodeModal
            visible={embedCodeView}
            code={embedCode}
            title="Copy embed code"
            subTitle="Paste this snippet into your webbsite’s source code"
            modalWidth={600}
            onClose={() => {
              setEmbedCodeView(false)
            }}
            onDownloadImg={() => {
              return
            }}
            onEmailInput={() => {
              return
            }}
          />
        )}
      </>
    )
  }

  return (
    <div ref={reviewsConfigRef}>
      <CommonHeader />
      <Layout>
        <div className={styles.reviewsConfigBanner}>
          <NotificationBanner
            title="Reviews"
            desc="Increase the number of reviews your clients complete by by 72% by enabling feedback requests via SMS"
            imgPath={reviewsConfigBanner}
            allowClose={true}
            setHide={[showBanner, setShowBanner]}
          />
        </div>
        <div className={styles.reviewsConfigContainer}>
          <div className={styles.reviewsConfigHeader}>
            <div className={styles.reviewsConfigBreadcrumb}>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: '/setup' },
                  {
                    breadcrumbName: 'Feedback Survey',
                    path: '/setup/reviews-config',
                  },
                ]}
              />
              <Typography.Title>Feedback Survey</Typography.Title>
            </div>
            <div className={styles.reviewsConfigBreadcrumbMobile}>
              <Typography.Title>
                <LeftOutlined /> Feedback Survey
              </Typography.Title>
            </div>
            <div className={styles.reviewsConfigOps}>
              <div className={styles.reviewLink}>
                Review Link <Switch size="small" />
              </div>
              <a
                href="https://www.pabau.com/reviews/cadogan-clinic"
                rel="noreferrer"
                target="_blank"
              >
                www.pabau.com/reviews/cadogan-clinic <ExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.reviewsConfigStep}>
            <div>
              <Stepper datasource={stepData} step={step} />
            </div>
          </div>
          {step === 0 && <Step1 settings={setting} />}
          {step === 1 && (
            <Step2
              questionData={addQuestionData.questions}
              settings={setting}
            />
          )}
          {step === 2 && <Step3 />}
          {step === 3 && (
            <Step4 reviewBadges={reviewBadges} reviewWidgets={reviewWidgets} />
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Index
