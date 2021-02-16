import React from 'react'
import {
  Layout,
  Breadcrumb,
  Input
} from '@pabau/ui'
import {Tabs, Typography} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import AllCollectionsHeader, {AllCollectionsBody} from '../../components/Integration/Integration'
import styles from './integration.module.less'
import xero from "../../assets/images/xero.png";
import mailchimp from "../../assets/images/mailchimp-freddie-icon.png";
import july17 from "../../assets/images/july17.png";
import stripe from "../../assets/images/stripe-2 1.png";
import gocardless from "../../assets/images/gocardless.png";
import healthcode from "../../assets/images/healthcode.png";
import SAP from "../../assets/images/SAP-Logo.png";
import treatwell from "../../assets/images/treatwell.png";
import BNF from "../../assets/images/BNF.png";
import Doctolib from "../../assets/images/Doctolib.png";
import RingCenral from "../../assets/images/RingCenral.png";
import Ometria from "../../assets/images/Ometria.png";

const {Title} = Typography
const {TabPane} = Tabs;
const IntegrationBodyCollections = [
  {
    'title': 'Xero',
    'subTitle': 'Software system that helps you see your cashflow in real-time with online accounts & banking',
    'logoImage': xero,
    'installed': 0,
    'categories': ['POPULAR', 'FINANCIAL']
  },
  {
    'title': 'Mailchimp',
    'subTitle': 'Give your marketing efforts a boost',
    'logoImage': mailchimp,
    'installed': 1,
    'categories': ['POPULAR', 'MARKETING']
  },
  {
    'title': 'ICal Integration',
    'subTitle': 'Keep your life and schedules orginized by publishing dates from your sheets to your iCal',
    'logoImage': july17,
    'installed': 0,
    'categories': ['POPULAR']
  },
  {
    'title': 'Stripe Integration',
    'subTitle': 'Extend your Stripe account with tools to help your buisness with analytics, accounting, email, expenses, shipping...',
    'logoImage': stripe,
    'installed': 0,
    'categories': ['POPULAR', 'FINANCIAL']
  },
  {
    'title': 'GoCardless Integration',
    'subTitle': 'Medically-led laboratory with a reputation for excellence in  providing quality accredited pathology services...',
    'logoImage': gocardless,
    'installed': 0,
    'categories': ['FINANCIAL']
  },
  {
    'title': 'Healthcode',
    'subTitle': 'Link up your insurance payments',
    'logoImage': healthcode,
    'installed': 0,
    'categories': ['FINANCIAL']
  },
  {
    'title': 'SAP',
    'subTitle': 'Configure your Pabau system and SAP reports',
    'logoImage': SAP,
    'installed': 0,
    'categories': []
  },
  {
    'title': 'Treatwell',
    'subTitle': 'Link your Pabau diary to trearwell',
    'logoImage': treatwell,
    'installed': 0,
    'categories': ['BOOKINGS']
  },
  {
    'title': 'BNF',
    'subTitle': 'BNF drug search while prescribing to lesan all the side effects of your drug',
    'logoImage': BNF,
    'installed': 0,
    'categories': []
  },
  {
    'title': 'Doctolib',
    'subTitle': 'Imort online bookings only directly from Doctolib',
    'logoImage': Doctolib,
    'installed': 0,
    'categories': ['BOOKINGS', 'LABS', 'POPULAR']
  },
  {
    'title': 'RingCenral',
    'subTitle': 'Link Pabau to RingCentral',
    'logoImage': RingCenral,
    'installed': 0,
    'categories': []
  },
  {
    'title': 'Ometria',
    'subTitle': 'This will enable the Integration with Ometria',
    'logoImage': Ometria,
    'installed': 0,
    'categories': ['MARKETING']
  }
]

export interface IntegrationProps {
}

export function Integration(props: IntegrationProps) {

  return (
    <div>
      <Layout>
        <div style={{backgroundColor: '#fff'}}>
          <div className={styles.headWrapper}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  {breadcrumbName: 'Setup', path: 'setup'},
                  {breadcrumbName: 'Integration', path: '/integration'},
                ]}
              />
              <Title>Integration</Title>
            </div>
            <div className={styles.searchWrapper}>
              <Input
                name="search"
                type="text"
                placeholder="Search by integration name"
              />
              <span>
                <SearchOutlined/>
              </span>
            </div>
          </div>
          <Tabs tabPosition='left' defaultActiveKey="4" >
            <TabPane
              tab="Manage"
              key="1"
              disabled={true}
              style={{color: "red", fontSize: "10px"}}
            />
            <TabPane tab="Your installed apps" key="2">
              Your installed apps
            </TabPane>
            <TabPane
              tab="Features"
              key="3"
              disabled={true}
            />
            <TabPane tab="All Collections" key="4">
              <AllCollectionsHeader/>
              <h5>All</h5>
              <AllCollectionsBody
                category='ALL'
                items={IntegrationBodyCollections}
              />
            </TabPane>
            <TabPane tab="Popular" key="5">
              <AllCollectionsHeader/>
              <h5>Popular</h5>
              <AllCollectionsBody
                category='Popular'
                items={IntegrationBodyCollections}
              />
            </TabPane>
            <TabPane tab="Payment Processing" key="6">
              <AllCollectionsHeader/>
              <h5>Payment Processing</h5>
              <AllCollectionsBody
                category='Payment'
                items={IntegrationBodyCollections}
              />
            </TabPane>
            <TabPane tab="Accountancy" key="7">
              <AllCollectionsHeader/>
              <h5>Accountancy</h5>
              <AllCollectionsBody
                category='Accountancy'
                items={IntegrationBodyCollections}
              />
            </TabPane>
            <TabPane tab="Labs" key="8">
              <AllCollectionsHeader/>
              <h5>Labs</h5>
              <AllCollectionsBody
                category='Labs'
                items={IntegrationBodyCollections}
              />
            </TabPane>
            <TabPane tab="Marketing" key="9">
              <AllCollectionsHeader/>
              <h5>Marketing</h5>
              <AllCollectionsBody
                category='Marketing'
                items={IntegrationBodyCollections}
              />
            </TabPane>
            <TabPane tab="Vaccination" key="10">
              <AllCollectionsHeader/>
              <h5>Vaccination</h5>
              <AllCollectionsBody
                category='Vaccination'
                items={IntegrationBodyCollections}
              />
            </TabPane>
            <TabPane tab="Bookings" key="11">
              <AllCollectionsHeader/>
              <h5>Bookings</h5>
              <AllCollectionsBody
                category='Bookings'
                items={IntegrationBodyCollections}
              />
            </TabPane>
          </Tabs>
        </div>
      </Layout>
    </div>
  );
}

export default Integration
