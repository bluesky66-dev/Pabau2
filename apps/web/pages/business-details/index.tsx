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
export const Index: FC = () => {
  const tabMenuItems = [
    'Details',
    'Terminology',
    'System',
    'Security',
    'Notifications',
  ]
  const ADD_MUTATION = gql`
    mutation MyMutation($variable: [business_details_insert_input!]!) {
      insert_business_details(objects: $variable) {
        affected_rows
      }
    }
  `
  const [createBusinessDetails] = useMutation(ADD_MUTATION, {
    fetchPolicy: 'no-cache',
  })
  const onSave = async (values, type) => {
    console.log(values, type)
    let data = {
      businses_name: '',
      business_type: '',
      company_email: '',
      phone: '',
      website: '',
      currency: '',
      business_location: '',
      date_format: '',
      default_language_clients: '',
      default_language_staff: '',
      time_zone: '',
      week_start: '',
      vat: '',
    }
    switch (type) {
      case 'business': {
        const { basicInformation, businessLocation, languageSetting } = values
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
        data = {
          businses_name: businessName,
          business_type: businessType,
          company_email: companyEmail,
          phone,
          website,
          currency,
          business_location: businessLocation,
          date_format: dateFormat,
          default_language_clients: defaultLanuageClients,
          default_language_staff: defaultLanuageStaff,
          time_zone: timezone,
          week_start: weekStart,
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
