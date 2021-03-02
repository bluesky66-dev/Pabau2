import React, { useState } from 'react'
import {
  Breadcrumb,
  Button,
  FullScreenReportModal,
 TabMenu,
 PhoneNumberInput,
 Switch
} from '@pabau/ui'
import { Card, Col, Row, Typography,Input,Form,Select} from 'antd'

import { CheckCircleFilled } from '@ant-design/icons'
import ThirdPartyTable from '../../components/Setup/Table/ThirdPartyTable'
import LibraryTable from '../../components/Setup/Table/LibraryTable'
//import NewThirdTypeModal from '../../components/Setup/Third-Party/Third-partiesModal'
import Layout from '../../components/Layout/Layout'
import styles from './third-parties.module.less'

//import NewThirdPartyModel from '../../components/Setup/Modals/NewThirdPartyModal'

export interface BlockOutOptionsProps {}












export function BlockOutOptions(props: BlockOutOptionsProps) {

  const { Title } = Typography

  

const[showModal,setShowModal]=useState<boolean>(false);
const [activeTab, setActiveTab] = useState('0')


const openModal=()=>
{
  setShowModal(true);
}



const headerContent = () => {
  return (
    <div className={styles.issuingCompanyHeader}>
      <h4> Create Third parties</h4>
      <div className={styles.issueRegister}>
        <div className={styles.vatReg}>
          <small>Activate</small>{' '}
          <Switch
            
          />
        </div>
  
        <div className={styles.btnCancel}>
          <Button
            type="default"
      
          >
            Cancel
           
          </Button>
        </div>

        <div className={styles.btnCancel}>
          <Button
            type="default"
      
          >
            Save as draft
           
          </Button>
        </div>
        
        
        <div>
          <Button>
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}


const modelContent=()=>{
  return(
      <div className={styles.mainWrapper}>
          <Form>
          <h3>General</h3>
            <div className={styles.customForm}>
              <Form.Item label="Type">
           <CheckCircleFilled/>
            
              </Form.Item>
            </div>
          <h3>General</h3>
            <div className={styles.customForm}>
              <Form.Item label="Name">
                <Input    name="Name" placeholder="Enter Name" />
             
              </Form.Item>
          
              <Form.Item label="Provider No.">
                <Input  name="providerNo." placeholder="Enter provider number"
              
                />
              </Form.Item>
            </div>
            <h3>Contact Information</h3>
            <div className={styles.customForm}>
              <Form.Item label="Phone">
               <Input/>
             
              </Form.Item>
          
              <Form.Item label="Email">
                <Input  name="email" placeholder="company@company.com"
              
                />
              </Form.Item>
              <Form.Item label="Website">
                <Input  name="website" placeholder="www.company.com"/>
              </Form.Item>
            </div>
      <h3>Address Information</h3>
            <div className={styles.customForm}>
            <Form.Item label={'Country'}>
              <Select placeholder="Select Country">
                <option>aa</option>
              </Select>
           
               
              </Form.Item>
              <Form.Item label={'City'}>
              <Select placeholder="Select City">
                <option>aa</option>
              </Select>
             
              </Form.Item>
              <Form.Item label={'Street'}>
             <Input name="street" placeholder="Enter street"/>
              </Form.Item>
              <Form.Item label={'Postal Code'}>
             <Input name="postalCode" placeholder="Enter PostalCode"/>
              </Form.Item>
            </div>
          </Form>
      </div>
  )
}



  return (
    <Layout>
      {console.log(activeTab)}
      <Card bodyStyle={{ padding: 0 }}>
        <Row className={styles.headerContainer}>
          <Col>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'third-parties', path: '' },
              ]}
            />
            <Title>Third Parties</Title>
          </Col>
          <Col>
          {activeTab==='0' &&
    
            <Button type="primary" onClick={openModal} >
            Create third party
            </Button>
         } 
           {activeTab==='1' &&
    
    <Button type="primary" onClick={openModal} >
    Create Library
    </Button>
 } 
          </Col>
        </Row>
        <div>
        <TabMenu
        tabPosition={'top'}
        menuItems={[
          'Third Parties',
          'Library',
         
        ]}
        onTabClick={(activeKey) => setActiveTab(activeKey)}
        tabBarStyle={{ backgroundColor: '#FFF' }}
      >
          
          <ThirdPartyTable/>
          <LibraryTable />

        </TabMenu>

        </div>
     
      </Card>
      {showModal &&
   <FullScreenReportModal visible={showModal} content={modelContent} title={headerContent}    header={true}/>
      }
      
              
    </Layout>
  )
}

export default BlockOutOptions
