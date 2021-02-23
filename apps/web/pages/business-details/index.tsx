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
    mutation insert_company_details_one($data: CompanyDetailsCreateInput!) {
      createOneCompanyDetails(data: $data) {
        company_id
      }
    }
  `
  const [createBusinessDetails] = useMutation(ADD_MUTATION, {
    fetchPolicy: 'no-cache',
  })
  const onSave = async (data) => {
    const { basicInformation, businessLocation, languageSetting } = data
    console.log(data)
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
    try {
      await createBusinessDetails({
        variables: {
          data: {
            company_name: businessName || 'Business Name',
            currency,
            dateFormat,
            week_start_day: weekStart,
            website,
            phone,
            info_email: companyEmail,
            industry_sector: 'industry_sector',
            timezone,
          },
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
            <BusinessDetails onSave={onSave} />
            <Terminology onSave={onSave} />
            <System onSave={onSave} />
            <Security />
            <BusinessDetailsNotifications onSave={onSave} />
          </TabMenu>
        </div>
        <div className={styles.tabsForMobile}>
          <TabMenu tabPosition="top" menuItems={tabMenuItems} minHeight="auto">
            <BusinessDetails onSave={onSave} />
            <Terminology onSave={onSave} />
            <System onSave={onSave} />
            <Security />
            <BusinessDetailsNotifications onSave={onSave} />
          </TabMenu>
        </div>
      </Layout>
    </>
  )
}

export default Index
