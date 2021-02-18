import React, { FC, useState, useEffect, useRef } from 'react'
import { Typography } from 'antd'
import { Button, Breadcrumb, Switch } from '@pabau/ui'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../CommonHeader'
import {
  defaultBuilderSetting,
  // defaultStepData,
} from '../../../assets/clientAreaData'
import styles from './index.module.less'

export interface ClientAreaBuilderSetting {
  appearance: {
    backgroundColor: string
    iconColor: string
    headerColor: string
    footerColor: string
  }
  registrationFields: {
    fieldName: string
    visible: boolean
    required: boolean
  }[]
  customFields: {
    fieldName: string
    visible: boolean
    required: boolean
  }[]
}

export interface ClientAreaProps {
  currentStep: number
  builderSetting: ClientAreaBuilderSetting
}

export const Index: FC<ClientAreaProps> = ({
  currentStep = 0,
  builderSetting = defaultBuilderSetting,
}) => {
  const clientAreaRef = useRef(null)
  // const [step, setStep] = useState(0)
  // const [setting, setSetting] = useState<ClientAreaBuilderSetting>(
  //   defaultBuilderSetting
  // )
  // useEffect(() => {
  //   setStep(currentStep)
  //   setSetting(builderSetting)
  // }, [currentStep, builderSetting])

  // const ClientAreaFooter = ({ step, onNext, onPrev }) => {
  //   const handleClickNext = () => {
  //     clientAreaRef.current.scrollIntoView()
  //     onNext()
  //   }
  //   const handleClickPrev = () => {
  //     clientAreaRef.current.scrollIntoView()
  //     onPrev()
  //   }
  //   return (
  //     <div className={styles.clientAreaFooter}>
  //       <Button
  //         type="primary"
  //         disabled={step <= 0}
  //         onClick={() => handleClickPrev()}
  //       >
  //         <LeftOutlined /> Previous Step
  //       </Button>
  //       <p>{`Step ${step + 1}/3`}</p>
  //       <Button
  //         type="primary"
  //         disabled={step >= 2}
  //         onClick={() => handleClickNext()}
  //       >
  //         Next Step <RightOutlined />
  //       </Button>
  //     </div>
  //   )
  // }

  return (
    <div ref={clientAreaRef}>
      <CommonHeader />
      <Layout>
        <div className={styles.clientAreaContainer}>
          <div className={styles.clientAreaHeader}>
            <div className={styles.clientAreaBreadcrumb}>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: '/setup' },
                  {
                    breadcrumbName: 'Client Area',
                    path: '/setup/client-area',
                  },
                ]}
              />
              <Typography.Title>Client Area</Typography.Title>
            </div>
            <div className={styles.clientAreaBreadcrumbMobile}>
              <Typography.Title>
                <LeftOutlined /> Client Area
              </Typography.Title>
            </div>
            <div className={styles.clientAreaOps}>
              <div className={styles.reviewLink}>
                Review Link <Switch size="small" />
              </div>
              <a
                href="https://www.pabau.com/reviews/cadogan-clinic"
                rel="noreferrer"
                target="_blank"
              >
                {/* www.pabau.com/reviews/cadogan-clinic <ExternalLink /> */}
              </a>
            </div>
          </div>
          <div className={styles.clientAreaStep}>
            <div>
              {/* <Stepper datasource={defaultStepData} step={step} /> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Index
