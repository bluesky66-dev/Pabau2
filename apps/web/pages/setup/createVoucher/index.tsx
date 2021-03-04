import React, { FC, useState, useRef } from 'react'
import Layout from '../../../components/Layout/Layout'
import ExternalLink from './assets/external-link.svg'
import { Card, Row, Col, Input, Select } from 'antd'
import classNames from 'classnames'
import { HomeOutlined, EditOutlined } from '@ant-design/icons'
import { Breadcrumb, Switch, Wstepper, VoucherCard } from '@pabau/ui'
import styles from './index.module.less'

const { TextArea } = Input
const { Option } = Select

export interface CreateVoucherProps {
  title?: string
}

export const CreateVoucher: FC<CreateVoucherProps> = ({ title }) => {
  const aligns = [styles.pRight, styles.pX, styles.pX, styles.pLeft]

  const bgSelectRef = useRef<HTMLInputElement>(null)

  const steps = [
    {
      img: <HomeOutlined />,
      index: 0,
      isActive: true,
      name: 'Basic',
      step: 1,
    },
    {
      img: <EditOutlined />,
      index: 1,
      isActive: false,
      name: 'Appearance',
      step: 2,
    },
  ]
  const [activeStep, setActiveStep] = useState(0)
  const [showNextBtn, setShowNextBtn] = useState(true)
  const [nextBtnLabel] = useState('Next Step')

  const [bookBtn, setBookBtn] = useState(false)

  const [voucherName, setVoucherName] = useState(null)
  const [voucherNameCount, setVoucherNameCount] = useState(0)

  const [voucherPrice, setVoucherPrice] = useState(0)
  const [voucherRelation] = useState('Family')
  const [voucherRelationLabel] = useState('Redeam all services')

  const [voucherTermsConditions, setVoucherTermsConditions] = useState(null)
  const [termsConditionsCount, setTermsConditionsCount] = useState(0)

  const [clientNotes, setClientNotes] = useState(null)
  const [clientNotesCount, setClientNotesCount] = useState(0)

  const [voucherBackgrounUrl, setVoucherBackgroundUrl] = useState(null)
  const [themes, updateThemes] = useState([
    {
      name: 'Love',
      url:
        'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/valentines-day-1581614371.jpg',
    },
    {
      name: 'Birthday',
      url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-birthday-instagram-captions-1584723902.jpg',
    },
    {
      name: 'Birthday',
      url:
        'https://thumbs.dreamstime.com/b/happy-birthday-cupcake-celebration-message-160558421.jpg',
    },
    { name: '' },
  ])

  const onStepChange = (step) => {
    setActiveStep(step)
    setShowNextBtn(true)
  }

  const cardHeader = (
    <div className={styles.voucherBuilderHeader}>
      <div className={styles.leftCardHeading}>
        <div className={styles.breadcrumbDiv}>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Gift Voucher', path: '' },
            ]}
          />
        </div>
        <div className={styles.heading}>Gift Voucher</div>
      </div>
      <div className={styles.rightCardHeadBtns}>
        <div className={styles.switchDiv}>
          <span>Sell this voucher online</span>
          <span>
            <Switch defaultChecked={true} />
          </span>
        </div>
        <div className={styles.hrefDiv}>
          <a href="https://connect-lutetia.pabau.me/booking">
            https://connect-lutetia.pabau.me/booking{' '}
            <img src={ExternalLink} alt="External Link" />
          </a>
        </div>
      </div>
    </div>
  )

  const cardPreview = (
    <div>
      <div className={styles.previewHeader}>
        <div>Voucher email subject:</div>
        <div>Voucher from Elite Beauty Co.& Kirsty Lillian Aesthetics</div>
      </div>
      <div className={styles.previewCard}>
        <div className={styles.card}>
          <VoucherCard
            backgroundColor1="#9013FE"
            backgroundColor2="#BD10E0"
            borderColor="#000"
            voucherBackgrounUrl={voucherBackgrounUrl}
            buttonLabel="Book Now"
            bookNowButton={bookBtn}
            gradientType="linear-gradient"
            termsConditions={voucherTermsConditions}
            voucherPrice={voucherPrice}
            voucherPriceLabel={voucherName}
            voucherRelation={voucherRelation}
            voucherRelationLabel={voucherRelationLabel}
            voucherType=""
          />
        </div>
      </div>
    </div>
  )

  const onInputChange = (e, fn = null, countFn = null) => {
    const val = e.target.value
    countFn?.(val.length)
    fn?.(val)
  }

  const addNewBgImage = async (e) => {
    if (e) {
      const existingThemes = [...themes]
      const file = e.target.files[0]
      const url = await URL.createObjectURL(file)
      existingThemes.push({
        name: 'None',
        url: url,
      })
      await updateThemes(existingThemes)
    }
  }

  return (
    <Layout>
      <div className={styles.mainCreateVoucher}>
        <Card title={cardHeader}>
          <Row>
            <Col md={24} className={styles.voucherBuilderBody}>
              <Wstepper
                disablePrevStep={false}
                showNextBtn={showNextBtn}
                nextBtnLabel={nextBtnLabel}
                active={activeStep}
                data={steps}
                onActiveStepChange={onStepChange}
              >
                <Row className={styles.orderBuilderSection}>
                  <Col
                    lg={6}
                    md={24}
                    sm={24}
                    xs={24}
                    className={styles.voucherBuilderControls}
                  >
                    <div className={styles.heading}>
                      <span>Builder</span>
                    </div>
                    {activeStep === 0 && (
                      <div className={styles.controls}>
                        <div className={styles.contDiv}>
                          <span className={styles.contHeading}>
                            Voucher Settings
                          </span>
                          <p>
                            Here you can customize the look and feel of client
                            area to match your brand colours.
                          </p>
                        </div>
                        <div className={styles.contDiv}>
                          <span className={styles.contHeading}>
                            Voucher Info
                          </span>
                          <p>
                            Add the voucher name, value and duration of the
                            voucher. If ther voucher value is higher than the
                            retail price it will encourage more sales.
                          </p>
                        </div>
                        <div className={styles.contDiv}>
                          <label>
                            <span>Voucher name</span>
                            <span>{voucherNameCount}/100</span>
                          </label>
                          <div>
                            <Input
                              type="text"
                              size="large"
                              maxLength={100}
                              placeholder="Voucher Name"
                              value={voucherName}
                              onChange={(e) =>
                                onInputChange(
                                  e,
                                  setVoucherName,
                                  setVoucherNameCount
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className={styles.contDiv}>
                          <label>
                            <span>Terms & Conditions</span>
                            <span>{termsConditionsCount}/500</span>
                          </label>
                          <div>
                            <TextArea
                              rows={6}
                              placeholder="Voucher Name"
                              maxLength={500}
                              value={voucherTermsConditions}
                              onChange={(e) =>
                                onInputChange(
                                  e,
                                  setVoucherTermsConditions,
                                  setTermsConditionsCount
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className={styles.contDiv}>
                          <label>
                            <span>Value</span>
                          </label>
                          <div>
                            <Input
                              type="number"
                              size="large"
                              value={voucherPrice}
                              placeholder="Value"
                              onChange={(e) =>
                                onInputChange(e, setVoucherPrice)
                              }
                            />
                          </div>
                        </div>
                        <div className={styles.contDiv}>
                          <label>
                            <span>Valid for</span>
                          </label>
                          <div>
                            <Select
                              size="large"
                              placeholder="valid for"
                              style={{ width: '100%' }}
                            >
                              <Option value="">6 months</Option>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className={styles.controls}>
                        <div className={styles.contDiv}>
                          <span className={styles.contHeading}>
                            Voucher Settings
                          </span>
                          <p>
                            Here you can customize the look and feel of client
                            area to match your brand colours.
                          </p>
                        </div>
                        <div className={styles.contDiv}>
                          <span className={styles.contHeading}>
                            Voucher Theme
                          </span>
                          <p></p>
                        </div>
                        <div className={styles.contDiv}>
                          <span className={styles.contHeadingMin}>
                            Enable online booking
                          </span>
                          <label>
                            <span>Add buttons to the voucher.</span>
                          </label>
                          <div className={styles.topMargin}>
                            <Switch
                              checked={bookBtn}
                              onChange={() => setBookBtn((bookBtn) => !bookBtn)}
                            />{' '}
                            <label>Add a Book now button</label>
                          </div>
                        </div>
                        <div className={styles.contDiv}>
                          <span className={styles.contHeadingMin}>
                            Notes for client
                          </span>
                          <label>
                            <span>
                              Add a note for clients. This will always be
                              visible..
                            </span>
                          </label>
                          <div className={styles.topMargin}>
                            <Switch defaultChecked={true} />{' '}
                            <label>Enable notes for clients</label>
                          </div>
                        </div>
                        <div className={styles.contDiv}>
                          <label>
                            <span>Note</span>
                            <span>{clientNotesCount}/500</span>
                          </label>
                          <div>
                            <TextArea
                              rows={6}
                              placeholder="Notes"
                              maxLength={500}
                              value={clientNotes}
                              onChange={(e) =>
                                onInputChange(
                                  e,
                                  setClientNotes,
                                  setClientNotesCount
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className={styles.contDiv}>
                          <span className={styles.contHeading}>Appearance</span>
                          <p>
                            Here you can customize the look and feel of client
                            area to match your brand colours.
                          </p>
                        </div>
                        <div className={styles.themesDiv}>
                          <div>
                            <span>Voucher Theme</span>
                            <span>Plus</span>
                          </div>
                          <div>
                            <Row>
                              {themes?.length &&
                                themes.map((el, key) => (
                                  <Col
                                    key={`col-${key}`}
                                    lg={6}
                                    md={6}
                                    sm={8}
                                    className={classNames(
                                      styles.bgImgTheme,
                                      aligns[key % 4]
                                    )}
                                  >
                                    <div
                                      onClick={() =>
                                        key + 1 < themes.length
                                          ? setVoucherBackgroundUrl(el.url)
                                          : bgSelectRef?.current.click()
                                      }
                                      style={
                                        key + 1 < themes.length
                                          ? {
                                              backgroundImage: `url(${el?.url})`,
                                            }
                                          : {}
                                      }
                                    ></div>
                                    <span>
                                      {key + 1 < themes.length && el?.name}
                                    </span>
                                  </Col>
                                ))}
                            </Row>
                          </div>
                        </div>
                        <div className={styles.themesDiv}>
                          <div>
                            <span>Background Colors</span>
                            <span></span>
                          </div>
                          <div>
                            <Row>
                              {themes?.length &&
                                themes.map((el, key) => (
                                  <Col
                                    key={`col-${key}`}
                                    lg={6}
                                    md={6}
                                    sm={8}
                                    className={classNames(
                                      styles.bgColorTheme,
                                      aligns[key % 4]
                                    )}
                                  >
                                    <div></div>
                                  </Col>
                                ))}
                            </Row>
                          </div>
                        </div>
                      </div>
                    )}
                  </Col>
                  <Col
                    lg={18}
                    md={24}
                    sm={24}
                    xs={24}
                    className={styles.voucherPreviewSelection}
                  >
                    <div className={styles.heading}>
                      <span>Preview</span>
                    </div>
                    <div className={styles.voucherPreview}>{cardPreview}</div>
                  </Col>
                </Row>
              </Wstepper>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'none' }}>
              <input
                type="file"
                accept=".jpg, .png"
                ref={bgSelectRef}
                onChange={addNewBgImage}
              />
            </Col>
          </Row>
        </Card>
      </div>
    </Layout>
  )
}

export default CreateVoucher
