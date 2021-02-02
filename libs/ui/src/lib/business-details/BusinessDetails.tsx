import React, { FC, useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd'
import {
  Button,
  Input,
  SimpleDropdown,
  LanguageDropdown,
  PhoneNumberInput,
  BusinessTypes,
  BusinessLocation,
} from '@pabau/ui'
import { ReactComponent as NormalClinicLogo } from '../../assets/images/normal-clinic-logo.svg'
import styles from './BusinessDetails.module.less'

interface BasicInformation {
  businessName: string
  companyEmail: string
  phone: string
  website: string
  businessType: string
}

interface LanguageSetting {
  defaultLanuageStaff: string
  defaultLanuageClients: string
  timezone: string
  currency: string
  dateFormat: string
  weekStart: string
}

export interface BusinessDetailsProps {
  onSave?(val): void
  basicInformation?: BasicInformation
  languageSetting?: LanguageSetting
  businessLocation?: string
}

const defaultBasicInfo: BasicInformation = {
  businessName: '',
  companyEmail: '',
  phone: '',
  website: '',
  businessType: '',
}

const defaultLangSetting: LanguageSetting = {
  defaultLanuageStaff: 'English',
  defaultLanuageClients: 'English',
  timezone: '(GMT+00:00) London',
  currency: 'British Pound',
  dateFormat: '',
  weekStart: 'Monday',
}

const defaultBizLocation = 'London Road, Sheffield, England'

export const BusinessDetails: FC<BusinessDetailsProps> = ({
  onSave,
  basicInformation,
  languageSetting,
  businessLocation,
}) => {
  const [basicInfo, setBasicInfo] = useState<BasicInformation>(defaultBasicInfo)
  const [langSetting, setLangSetting] = useState<LanguageSetting>(
    defaultLangSetting
  )
  const [bizLocation, setBizLocation] = useState(defaultBizLocation)

  const handleSaveChanges = () => {
    onSave &&
      onSave({
        basicInformation: basicInfo,
        languageSetting: langSetting,
        businessLocation: bizLocation,
      })
  }
  const handleBasicInfoChange = (key, value) => {
    const _basicInfo: BasicInformation = { ...basicInfo }
    _basicInfo[key] = value
    setBasicInfo(_basicInfo)
  }
  const handleLangSettingChange = (key, value) => {
    const _langSetting: LanguageSetting = { ...langSetting }
    _langSetting[key] = value
    setLangSetting(_langSetting)
  }

  useEffect(() => {
    setBasicInfo(basicInformation || defaultBasicInfo)
    setLangSetting(languageSetting || defaultLangSetting)
    setBizLocation(businessLocation || defaultBizLocation)
  }, [basicInformation, languageSetting, businessLocation])

  return (
    <div className={styles.businessDetailsTabContainer}>
      <div className={styles.detailsSubContainer}>
        <div className={styles.detailsHeaderContainer}>
          <div>
            <p className={styles.tabTitle}>Details</p>
            <p className={styles.tabSubTitle} style={{ maxWidth: '420px' }}>
              Your business name is displayed across many including on your
              online booking profile, sales invoices and messages to clients
            </p>
          </div>
          <Button type="primary" onClick={() => handleSaveChanges()}>
            Save Changes
          </Button>
        </div>
      </div>
      <Divider />
      <div className={styles.basicInformationSection}>
        <p className={styles.sectionTitle} style={{ marginBottom: '12px' }}>
          Basic Information
        </p>
        <div className={styles.normalClinicLogo}>
          <NormalClinicLogo />
        </div>
        <Row gutter={[32, 28]} style={{ marginTop: '14px' }}>
          <Col className="gutter-row" xs={24} sm={12}>
            <Input
              label="Business Name"
              requiredMark={true}
              reqiredMsg="Please enter your business name."
              text={basicInfo.businessName}
              onChange={(val) => handleBasicInfoChange('businessName', val)}
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <Input
              type="email"
              label="Company Email"
              requiredMark={true}
              reqiredMsg="Please enter your company email."
              text={basicInfo.companyEmail}
              onChange={(val) => handleBasicInfoChange('companyEmail', val)}
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <PhoneNumberInput
              onChange={(val) => handleBasicInfoChange('phone', val)}
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <Input
              label="Website"
              text={basicInfo.website}
              onChange={(val) => handleBasicInfoChange('website', val)}
            />
          </Col>
        </Row>
        <BusinessTypes
          value={basicInfo.businessType}
          onSelected={(val) => handleBasicInfoChange('businessType', val)}
        />
      </div>
      <Divider />
      <div className={styles.languageSettingSection}>
        <p className={styles.sectionTitle} style={{ marginBottom: '6px' }}>
          Language Settings
        </p>
        <p className={styles.sectionSubTitle} style={{ marginBottom: '24px' }}>
          Choose the default language for appointment notification messages sent
          to your clients. Per client language preferences can also be set
          within the settings for each client
        </p>
        <Row gutter={[32, 28]}>
          <Col className="gutter-row" xs={24} sm={12}>
            <LanguageDropdown
              label="Default language for your staff"
              value={langSetting.defaultLanuageStaff}
              onChange={(val) =>
                handleLangSettingChange('defaultLanuageStaff', val)
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <LanguageDropdown
              label="Default language for your clients"
              value={langSetting.defaultLanuageClients}
              onChange={(val) =>
                handleLangSettingChange('defaultLanuageClients', val)
              }
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <SimpleDropdown
              label="Timezone"
              value={langSetting.timezone}
              dropdownItems={['(GMT+00:00) London']}
              onSelected={(val) => handleLangSettingChange('timezone', val)}
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <SimpleDropdown
              label="Currency"
              value={langSetting.currency}
              dropdownItems={['British Pound']}
              onSelected={(val) => handleLangSettingChange('currency', val)}
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <Input
              label="Date Format"
              text={langSetting.dateFormat}
              onChange={(val) => handleLangSettingChange('dateFormat', val)}
            />
          </Col>
          <Col className="gutter-row" xs={24} sm={12}>
            <SimpleDropdown
              label="Week Start"
              tooltip="Week Start"
              value={langSetting.weekStart}
              dropdownItems={[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ]}
              onSelected={(val) => handleLangSettingChange('weekStart', val)}
            />
          </Col>
        </Row>
      </div>
      <Divider />
      <div className={styles.businessLocationSection}>
        <p className={styles.sectionTitle} style={{ marginBottom: '20px' }}>
          Business Location
        </p>
        <BusinessLocation
          value={bizLocation}
          onChange={(value) => setBizLocation(value)}
        />
      </div>
    </div>
  )
}

export default BusinessDetails
