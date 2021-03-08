import React, { FC, useState } from 'react'
import { Layout } from '@pabau/ui'
import CommonHeader from '../../components/CommonHeader'
import HeaderChip from '../../components/Setup/HeaderChip'
import Grid from '../../components/Setup/Grid'
import WebinarCard from '../../components/Setup/Webinar'
import SearchResults from '../../components/Setup/SearchResults'
import GridMobile from '../../components/Setup/Grid/gridMobile'
import GridSubMenuMobile from '../../components/Setup/Grid/gridSubTitleMobile'
import { SetupSearchInput, SetupGridProps } from '@pabau/ui'
import styles from './Setup.module.less'

import clinicImage from '../../assets/images/our-clinic.png'
import servicesImage from '../../assets/images/services.png'
import clinicalImage from '../../assets/images/clinical.png'
import marketingImage from '../../assets/images/marketing.png'
import financialImage from '../../assets/images/financial.png'
import developerImage from '../../assets/images/developer.png'

const Index: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [title, setTitle] = useState<string>('Setup')
  const [searchData, setSearchData] = useState([])
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false)
  const [selectedMenuData, setMenuData] = useState<SetupGridProps[]>([])

  const setupGridData = [
    {
      title: 'Our clinic',
      subDataTitles: [
        { title: 'Business Details', data: [] },
        { title: 'Users', data: ['Users', 'User Groups'] },
        { title: 'Locations', data: [] },
        {
          title: 'General settings',
          data: [
            'Index Settings',
            'Loyalty',
            'Performance Settings',
            'Point of Sale Configuration',
            'Referral Settings',
          ],
        },
        { title: 'Integrations', data: [] },
        { title: 'Data', data: ['Custom Fields', 'Data Imports'] },
        { title: 'Pabau Subscription', data: ['Billing Activity', 'Addons'] },
      ],
      image: clinicImage,
    },
    {
      title: 'Services',
      subDataTitles: [
        { title: 'Services', data: [] },
        { title: 'Products', data: [] },
        { title: 'Packages', data: [] },
        { title: 'Gift Vouchers', data: [] },
        { title: 'Resources', data: ['Rooms', 'Equipment'] },
        { title: 'Online Booking', data: [] },
      ],
      image: servicesImage,
    },
    {
      title: 'Clinical',
      subDataTitles: [
        { title: 'Care Pathways', data: [] },
        { title: 'Medical form templates', data: [] },
        { title: 'Diagnostic Codes', data: [] },
        { title: 'Labs', data: [] },
        { title: 'Drugs', data: [] },
        {
          title: 'Medical Conditions',
          data: ['Contraindication', 'Medical Conditions'],
        },
        {
          title: 'Vaccine',
          data: [' Vaccines', 'Diseases', 'Vaccine Schedules'],
        },
        { title: 'Body Charts', data: [] },
      ],
      image: clinicalImage,
    },
    {
      title: 'Marketing & Communication',
      subDataTitles: [
        {
          title: 'Communications',
          data: [
            'Client Notifications',
            'Sender Addresses',
            'Templates',
            'SMS Bundles & Settings',
          ],
        },
        { title: 'Client Portal', data: [] },
        { title: 'Feedback Survey', data: [] },
        { title: 'Lead Forms', data: [] },
        {
          title: 'Marketing Sources',
          data: [],
          href: '/setup/marketing-sources',
        },
      ],
      image: marketingImage,
    },
    {
      title: 'Financials',
      subDataTitles: [
        { title: 'Payment Processing', data: [] },
        { title: 'Discounts', data: [] },
        { title: 'Taxes', data: [] },
        { title: 'Invoice Templates', data: [] },
        { title: 'Payment Types', data: [] },
        { title: 'Contract Pricing', data: [] },
        { title: 'Cancellation Policy', data: [] },
      ],
      image: financialImage,
    },
    {
      title: 'Developer & Other',
      subDataTitles: [
        { title: 'Webhooks', data: [] },
        { title: 'API keys', data: [] },
        { title: 'Credit Note Types', data: [] },
        { title: 'Departments', data: [] },
        { title: 'Field Capture Labels', data: [] },
        { title: 'Block Out Options', data: [] },
        { title: 'Appointment Statuses', data: [] },
        { title: 'Lead Groups', data: [] },
        { title: 'Petty Cash Types', data: [] },
      ],
      expandTitle: [
        { title: 'Webhooks', data: [] },
        { title: 'API keys', data: [] },
        { title: 'Credit Note Types', data: [] },
        { title: 'Salutations', data: [] },
        { title: 'Training titles', data: [] },
        { title: 'Titles', data: [] },
        { title: 'Photo Uploader', data: [] },
        { title: 'Cancellation Reasons', data: [] },
        { title: 'Lead views', data: [] },
        { title: 'Lead groups', data: [] },
        { title: 'Lead assignment rules', data: [] },
        { title: 'Family relationships', data: [] },
        { title: 'Doc label manager', data: [] },
        { title: 'Departments', data: [] },
        { title: 'Invoice distribution', data: [] },
        { title: 'Issuing companies', data: [] },
        { title: 'Job statues', data: [] },
        { title: 'Supplier categories', data: [] },
      ],
      isExpand: true,
      image: developerImage,
    },
  ]

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm)
    if (searchTerm) {
      setTitle('Search Results')
      const searchDataArray = []

      setupGridData.map((data: SetupGridProps) => {
        const titles = data.expandTitle ? data.expandTitle : data.subDataTitles
        if (titles.length > 0) {
          titles.map((subTitle) => {
            if (
              subTitle.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              searchDataArray.push({
                subTitle: subTitle.title,
                title: data.title,
              })
            }
            return searchDataArray
          })
        }
        return data
      })

      setSearchData(searchDataArray)
    } else {
      setTitle('Setup')
    }
  }

  const handleShowSubMenuMobile = (title: string) => {
    const data = setupGridData.filter((thread) => thread.title === title)
    setShowSubMenu(true)
    setMenuData(data)
  }

  const handleBack = () => {
    setShowSubMenu(false)
  }

  return (
    <div>
      <CommonHeader handleSearch={handleSearch} />
      <Layout active={'setup'}>
        <div className={styles.cardWrapper}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{title}</span>
            <div className={styles.search}>
              <SetupSearchInput onChange={handleSearch} />
            </div>
          </div>
          {!searchValue ? (
            <>
              {showSubMenu ? (
                <GridSubMenuMobile
                  data={selectedMenuData}
                  handleBack={handleBack}
                />
              ) : (
                <GridMobile
                  data={setupGridData}
                  handleShowSubMenuMobile={handleShowSubMenuMobile}
                />
              )}
              {!showSubMenu && <HeaderChip />}
              <div className={styles.mainWrap}>
                <Grid data={setupGridData} />
                {!showSubMenu && <WebinarCard />}
              </div>
            </>
          ) : (
            <SearchResults data={searchData} searchTerm={searchValue} />
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Index
