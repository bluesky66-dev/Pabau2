import React, { FC } from 'react'
import { Row, Col } from 'antd'
import {
  Layout,
  Breadcrumb,
  Checkbox,
  Button,
  PhoneNumberInput,
  Notification,
  NotificationType,
  MobileHeader,
} from '@pabau/ui'
import { Typography } from 'antd'
import { useFormik } from 'formik'
import { Form, Input } from 'antd'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'
import { useMedia } from 'react-use'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './index.module.less'


const { Title } = Typography

interface LeadSchema extends SchemaItem {
  items: LeadSchemaOperation[]
}
interface LeadSchemaOperation { 
  operation: string
  type: string 
}

interface LeadSchemaType{

}

const ADD_MUTATION = gql`
  mutation MyMutation {
    insert_leads_one(
      object: {
        email: "nido_i@hotmail.com"
        interest: "xyz"
        is_active: true
        lead_age: 30
        lead_name: "aysha"
        lead_owner: "rulaa"
        lead_source: "xyz"
        lead_status: "married"
        location: "gilgit"
        order: 2
        phone: "45455545454"
        status: true
        id: "123e4567-e89b-12d3-a456-426614174011"
      }
    ) {
      email
      id
      is_active
      order
      lead_age
      interest
      lead_name
      lead_owner
      lead_source
      lead_status
      location
      phone
      status
    }
  }
`

export const LeadCreateView: FC<LeadSchema>= () => {
  return (
    <>
     <Row className={classNames(styles.headerStyle, styles.mobileViewNone)}>
        <div>PREVIEW</div>
      </Row>
    </>
  )
}

export default LeadCreateView
