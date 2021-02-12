import React, { useState } from 'react'
import {
  Layout,
  Breadcrumb,
  WStepper,
  StepperItem,
  BasicModal as Modal,
  ButtonTypes,
} from '@pabau/ui'
import styles from './lead-forms.module.less'
import {
  LeadSettings,
  LeadIntegration,
  LeadTesting,
  LeadResult,
} from './lead-capture/index'
import LeadCustomizeForm from './lead-capture/lead-forms/LeadCustomizeForm'
import { FlagOutlined, HomeOutlined, ToolOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { Typography } from 'antd'

const { Title } = Typography

export function LeadForms() {
  const allAPISteps = ['Basic', 'Configure(API)', 'Testing(API)', 'Result']
  const allFormSteps = ['Basic', 'Customize Form', 'Test Form', 'Result']
  const [activeStepper, setActiveStepper] = useState('API')
  const [activeStep, setActiveStep] = useState(0)
  const [openPabauLeadModal, setPabauLeadModal] = useState(false)

  const apiStepper: StepperItem[] = [
    {
      step: 1,
      name: 'Basic',
      imgPath: <HomeOutlined />,
      isActive: true,
      index: 0,
    },
    {
      step: 2,
      name: 'Configure(API)',
      imgPath: (
        <FontAwesomeIcon
          icon={Icons.faPencilAlt}
          style={{ fontSize: '12px' }}
        />
      ),
      isActive: false,
      index: 1,
    },
    {
      step: 3,
      name: 'Testing(API)',
      imgPath: <ToolOutlined />,
      isActive: false,
      index: 2,
    },
    {
      step: 4,
      name: 'Result',
      imgPath: <FlagOutlined />,
      isActive: false,
      index: 3,
    },
  ]

  const formStepper: StepperItem[] = [
    {
      step: 1,
      name: 'Basic',
      imgPath: <HomeOutlined />,
      isActive: true,
      index: 0,
    },
    {
      step: 2,
      name: 'Customize Form',
      imgPath: (
        <FontAwesomeIcon
          icon={Icons.faPencilAlt}
          style={{ fontSize: '12px' }}
        />
      ),
      isActive: false,
      index: 1,
    },
    {
      step: 3,
      name: 'Test Form',
      imgPath: <ToolOutlined />,
      isActive: false,
      index: 2,
    },
    {
      step: 4,
      name: 'Result',
      imgPath: <FlagOutlined />,
      isActive: false,
      index: 3,
    },
  ]

  const setActiveStepperForLead = (type) => {
    setActiveStepper(type)
  }
  return (
    <Layout active={'setup'}>
      <div className={styles.cardWrapper}>
        <div style={{ background: '#FFF' }}>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Lead Capture', path: '' },
            ]}
          />
          <Title>Lead Capture</Title>
        </div>
        <WStepper
          data={activeStepper === 'API' ? apiStepper : formStepper}
          active={activeStep}
          onActiveStepChange={(step) => {
            if (step === 1 && activeStepper === 'API')
              setPabauLeadModal((e) => !e)
            else setActiveStep(step)
          }}
        >
          {allAPISteps[activeStep] === 'Basic' && (
            <LeadSettings captureLeadStepChange={setActiveStepperForLead} />
          )}
          {activeStepper === 'API' ? (
            <>
              {allAPISteps[activeStep] === 'Configure(API)' && (
                <LeadIntegration />
              )}
              {allAPISteps[activeStep] === 'Testing(API)' && <LeadTesting />}
              {allAPISteps[activeStep] === 'Result' && <LeadResult />}
            </>
          ) : (
            allFormSteps[activeStep] === 'Customize Form' && (
              <LeadCustomizeForm />
            )
          )}
        </WStepper>
        <Modal
          modalWidth={682}
          centered={true}
          onOk={() => {
            setActiveStep(1)
            setPabauLeadModal((e) => !e)
          }}
          closable={true}
          onCancel={() => setPabauLeadModal((e) => !e)}
          visible={openPabauLeadModal}
          title={'Pabau Leads'}
          newButtonText={'Main page'}
          btnType={ButtonTypes.default}
        >
          <p>
            This process is for advanced users and should be handed over to a
            web developer. Please reach out to your web team in order for them
            to follow this guide on how to implement Pabau Leads.
          </p>
        </Modal>
      </div>
    </Layout>
  )
}

export default LeadForms
