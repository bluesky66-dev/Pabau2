/* eslint-disable graphql/template-strings */
import React, { FC } from 'react'
import { Typography } from 'antd'
import {
  TabMenu,
  Breadcrumb,
  Security,
  System,
  Terminology,
  BusinessDetails,
  BusinessDetailsNotifications,
} from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import CommonHeader from '../setup/CommonHeader'
import styles from './index.module.less'
import { gql, useMutation } from '@apollo/client'
const { Title } = Typography
const apiKey = process.env.google_api_key
export const Index: FC = () => {
  const tabMenuItems = [
    'Details',
    'Terminology',
    'System',
    'Security',
    'Notifications',
  ]
  const ADD_MUTATION = gql`
    mutation MyMutation($variable: CompanyDetailsCreateInput!) {
      createOneCompanyDetails(data: $variable) {
        accept_insurance
        admin
        append_client_pref
        auto_sms
        calendar_version
        capital_surname
        city
        class_teacher_singular
        class_term_plural
        class_term_singular
        company_id
        company_name
        company_notes
        completed_setup
        contact_term_plural
        contact_term_singular
        converted_value
        country
        county
        currency
        cycles_display
        date_format
        db_lock
        debrand_logo
        default_inv_template_id
        default_search
        demo_mode
        details_id
        diagnosis_codes_type
        disable_prescriptions
        employee_clock_track
        employee_term_plural
        employee_term_singular
        employees
        enable_2fa
        enable_ad
        enable_ad_code
        enable_ip_filter
        enable_sens_data
        facebook_page
        fax
        flag_enabled
        footer_logo
        head_office
        header_logo
        healthcode_live
        industry_sector
        info_email
        is_surgical
        language
        legacy_consultations
        linkedin_page
        lock_export
        lock_prescription
        logo
        medical_approvals
        merge_bookings_tabs
        new_reports
        phone
        phone_prefix
        post_code
        preferences_email
        preferences_newsletters
        preferences_post
        preferences_sms
        private_treatment_notes
        rota_version
        secure_medical_forms
        sensitive_data_question
        show_report_logo
        slug
        sms_active
        stock_manager
        street
        subscription
        tax_name
        timezone_id
        twitter_page
        use_google_auth
        vat
        website
        week_start_day
        youtube_page
      }
    }
  `
  const [createBusinessDetails] = useMutation(ADD_MUTATION, {
    fetchPolicy: 'no-cache',
  })
  const onSave = async (values, type) => {
    console.log(values, type)
    let data = {
      accept_insurance: 10,
      admin: 10,
      append_client_pref: 10,
      calendar_version: '',
      city: '',
      company: {},
      company_name: '',
      company_notes: '',
      converted_value: 1.5,
      country: '',
      county: '',
      currency: '',
      date_format: '',
      db_lock: 10,
      debrand_logo: 10,
      default_inv_template_id: 10,
      demo_mode: 10,
      disable_prescriptions: 10,
      employees: '',
      enable_2fa: 10,
      enable_sens_data: 10,
      facebook_page: '',
      fax: '',
      footer_logo: '',
      head_office: 10,
      header_logo: '',
      industry_sector: '',
      info_email: '',
      is_surgical: 10,
      language: '',
      linkedin_page: '',
      lock_export: 10,
      lock_prescription: 10,
      logo: '',
      medical_approvals: 10,
      new_reports: 10,
      phone: '',
      phone_prefix: 10,
      post_code: '',
      private_treatment_notes: 10,
      rota_version: '',
      secure_medical_forms: 0,
      sms_active: 10,
      stock_manager: '',
      street: '',
      subscription: '',
      twitter_page: '',
      vat: '',
      website: '',
      week_start_day: '',
      youtube_page: '',
    }
    let address
    switch (type) {
      case 'business': {
        const { basicInformation, businessLocation, languageSetting } = values
        address = businessLocation
        const {
          businessName,
          businessType,
          companyEmail,
          phone,
          website,
        } = basicInformation
        const {
          currency,
          dateFormat,
          defaultLanuageClients,
          defaultLanuageStaff,
          timezone,
          weekStart,
        } = languageSetting
        // data = {
        //   business_name: businessName,
        //   business_type: businessType,
        //   company_email: companyEmail,
        //   phone,
        //   website,
        //   currency,
        //   business_location: businessLocation,
        //   date_format: dateFormat,
        //   default_language_clients: defaultLanuageClients,
        //   default_language_staff: defaultLanuageStaff,
        //   time_zone: timezone,
        //   week_start: weekStart,
        // }
        data = {
          accept_insurance: 10,
          admin: 10,
          append_client_pref: 10,
          calendar_version: '',
          city: '',
          company: {},
          company_name: businessName,
          company_notes: '',
          converted_value: 1.5,
          country: '',
          county: '',
          currency,
          date_format: dateFormat,
          db_lock: 10,
          debrand_logo: 10,
          default_inv_template_id: 10,
          demo_mode: 10,
          disable_prescriptions: 10,
          employees: '',
          enable_2fa: 10,
          enable_sens_data: 10,
          facebook_page: '',
          fax: '',
          footer_logo: '',
          head_office: 10,
          header_logo: '',
          industry_sector: '',
          info_email: companyEmail,
          is_surgical: 10,
          language: defaultLanuageClients,
          linkedin_page: '',
          lock_export: 10,
          lock_prescription: 10,
          logo: '',
          medical_approvals: 10,
          new_reports: 10,
          phone,
          phone_prefix: 10,
          post_code: '',
          private_treatment_notes: 10,
          rota_version: '',
          secure_medical_forms: 0,
          sms_active: 10,
          stock_manager: '',
          street: '',
          subscription: '',
          // timezone_id: timezone,
          twitter_page: '',
          vat: '',
          website,
          week_start_day: weekStart,
          youtube_page: '',
        }
        break
      }
      case 'terminology': {
        const { config } = values
        const vat = config[4].items[0].value
        data.vat = vat
        break
      }
      case 'system': {
        const {
          disablePrescriptions,
          medicalApprovals,
          performSurgical,
          secureMedicalForms,
        } = values
        data.disable_prescriptions = disablePrescriptions ? 10 : 0
        data.medical_approvals = medicalApprovals ? 10 : 0
        data.is_surgical = performSurgical ? 10 : 0
        data.secure_medical_forms = secureMedicalForms ? 10 : 0
        break
      }
      case 'notification': {
        break
      }
    }
    try {
      if (address) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(
            /\s/g,
            '+'
          )}&key=${apiKey}`
        )
        const res = await response.json()
        if (res.status === 'OK') {
          const addressComponents = res.results[0].address_components
          const streetNumber = addressComponents.find((item) =>
            item.types.includes('street_number')
          )
          if (streetNumber) {
            data.street = streetNumber.long_name
          }
          // const route = addressComponents.find((item) =>
          //   item.types.includes('route')
          // )
          // const locality = addressComponents.find((item) =>
          //   item.types.includes('locality')
          // )
          // const area1 = addressComponents.find((item) =>
          //   item.types.includes('administrative_area_level_1')
          // )
          // const area2 = addressComponents.find((item) =>
          //   item.types.includes('administrative_area_level_2')
          // )
          const country = addressComponents.find((item) =>
            item.types.includes('country')
          )
          if (country) {
            data.country = country.long_name
          }
          const postcode = addressComponents.find((item) =>
            item.types.includes('postal_code')
          )
          if (postcode) {
            data.post_code = postcode.long_name
          }
        }
      }
      await createBusinessDetails({
        variables: {
          variable: data,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.businessDetailsContainer}>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Business Details', path: '' },
            ]}
          />
          <Title>Business Details</Title>
        </div>
        <div className={styles.tabsForDesktop}>
          <TabMenu tabPosition="left" menuItems={tabMenuItems} minHeight="auto">
            <BusinessDetails onSave={(values) => onSave(values, 'business')} />
            <Terminology onSave={(values) => onSave(values, 'terminology')} />
            <System onSave={(values) => onSave(values, 'system')} />
            <Security />
            <BusinessDetailsNotifications
              onSave={(values) => onSave(values, 'notification')}
            />
          </TabMenu>
        </div>
        <div className={styles.tabsForMobile}>
          <TabMenu tabPosition="top" menuItems={tabMenuItems} minHeight="auto">
            <BusinessDetails onSave={(values) => onSave(values, 'business')} />
            <Terminology onSave={(values) => onSave(values, 'terminology')} />
            <System onSave={(values) => onSave(values, 'system')} />
            <Security />
            <BusinessDetailsNotifications
              onSave={(values) => onSave(values, 'notification')}
            />
          </TabMenu>
        </div>
      </Layout>
    </>
  )
}

export default Index
