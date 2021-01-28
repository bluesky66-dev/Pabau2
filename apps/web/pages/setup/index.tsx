import React, { FC, useState } from 'react'
import { Layout } from '@pabau/ui'
import { Card } from 'antd'
import CommonHeader from './CommonHeader'
import HeaderChip from './headerChip'
import Grid from './grid'
import WebinarCard from './webinar'
import SearchResults from './searchResults'
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

  const setupGridData = [
    {
      title: 'Our clinic',
      subDataTitles: [
        'Bussiness Details',
        'Users',
        'Locations',
        'General settings',
        'Integrations',
        'Data',
        'Pabau Subscription',
      ],
      image: clinicImage,
    },
    {
      title: 'Services',
      subDataTitles: [
        'Services',
        'Products',
        'Packages',
        'Gift Vouchers',
        'Resources',
        'Online Booking',
      ],
      image: servicesImage,
    },
    {
      title: 'Clinical',
      subDataTitles: [
        'Care Pathways',
        'Medical form templates',
        'Diagnostic Codes',
        'Labs',
        'Drugs',
        'Medical Conditions',
        'Vaccine',
        'Body Charts',
      ],
      image: clinicalImage,
    },
    {
      title: 'Marketing & Communication',
      subDataTitles: [
        'Communications',
        'Client Portal',
        'Feedback Survey',
        'Lead Forms',
        'Marketing Sources',
      ],
      image: marketingImage,
    },
    {
      title: 'Financials',
      subDataTitles: [
        'Payment Processing',
        'Discounts',
        'Taxes',
        'Invoice Templates',
        'Payment Types',
        'Contract Pricing',
        'Cancellation Policy',
        'Petty Cash Types',
      ],
      image: financialImage,
    },
    {
      title: 'Developer & Other',
      subDataTitles: [
        'Webhooks',
        'API keys',
        'Credit Note Types',
        'Departments',
        'Field Capture Labels',
        'Block Out Options',
        'Appointment Statuses',
        'Lead Groups',
      ],
      expandTitle: [
        'Salutations',
        'Training titles',
        'Titles',
        'Photo Uploader',
        'Cancellation Reasons',
        'Lead views',
        'Lead groups',
        'Lead assignment rules',
        'Family relationships',
        'Doc label manager',
        'Departments',
        'Invoice distribution',
        'Issuing companies',
        'Commission sheet',
        'Job statues',
        'Supplier categories',
        'Collapse',
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
          titles.map((title) => {
            if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
              searchDataArray.push({ subTitle: title, title: data.title })
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

  return (
    <>
      <CommonHeader />
      <Layout>
        <Card className={styles.cardWrapper}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{title}</span>
            <div className={styles.search}>
              <SetupSearchInput onChange={handleSearch} />
            </div>
          </div>
          {!searchValue ? (
            <>
              <HeaderChip />
              <div className={styles.mainWrap}>
                <Grid data={setupGridData} />
                <WebinarCard />
              </div>
            </>
          ) : (
            <SearchResults data={searchData} searchTerm={searchValue} />
          )}
        </Card>
      </Layout>
    </>
  )
}

export default Index
