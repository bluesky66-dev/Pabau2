import React, { useState } from 'react'
import { Row, Col, Tabs } from 'antd'
import classNames from 'classnames'
import LeadFormBuilder from './LeadFormBuilder'
import LeadFormPreview from './LeadFormPreview'
import styles from './Lead-forms.module.less'
import { FieldType } from '@pabau/ui'

const { TabPane } = Tabs

const fields: FieldType[] = [
  {
    key: 1,
    fieldName: 'first_name',
    label: 'First Name',
    visible: true,
    required: true,
    disabled: true,
  },
  {
    key: 2,
    fieldName: 'last_name',
    label: 'Last Name',
    visible: true,
    required: true,
    disabled: true,
  },
  {
    fieldName: 'dob',
    label: 'Date of Birth',
    visible: true,
    required: false,
    disabled: false,
    key: 3,
  },
  {
    key: 4,
    fieldName: 'telephone',
    label: 'Telephone',
    visible: true,
    required: false,
    disabled: false,
  },
  {
    key: 5,
    fieldName: 'email',
    label: 'Email',
    visible: true,
    required: false,
    disabled: false,
  },
  {
    key: 6,
    fieldName: 'city',
    label: 'City',
    visible: true,
    required: false,
    disabled: false,
  },
  {
    key: 7,
    fieldName: 'about_us',
    label: 'How did you hear about us?',
    visible: true,
    required: false,
    disabled: false,
  },
  {
    key: 8,
    fieldName: 'message',
    label: 'Message',
    visible: true,
    required: false,
    disabled: false,
  },
]

const schema: Schema = {
  full: '',
  fullLower: '',
  short: '',
  fields: {
    first_name: {
      full: 'First name',
      fullLower: 'first name',
      short: 'First Name',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'Enter your first name',
      cssWidth: 'max',
      type: 'string',
      visible: true,
      required: true,
    },
    last_name: {
      full: 'Last name',
      fullLower: 'last name',
      short: 'Last Name',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'Enter your last name',
      cssWidth: 'max',
      type: 'string',
      visible: true,
      required: true,
    },
    dob: {
      full: 'Date of birth',
      fullLower: 'Date of birth',
      short: 'Date of birth',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'DD/MM/YYYY',
      cssWidth: 'max',
      type: 'string',
      visible: true,
      required: false,
    },
    telephone: {
      full: 'Telephone',
      fullLower: 'telephone',
      short: 'Telephone',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'Enter your telephone',
      cssWidth: 'max',
      type: 'string',
      visible: true,
      required: false,
    },
    email: {
      full: 'Email',
      fullLower: 'email',
      short: 'Email',
      shortLower: 'email',
      min: 2,
      example: '',
      description: 'Email',
      cssWidth: 'max',
      type: 'string',
      visible: true,
      required: false,
    },
    city: {
      full: 'City',
      fullLower: 'city',
      short: 'City',
      shortLower: 'city',
      min: 2,
      example: '',
      description: 'City',
      cssWidth: 'max',
      type: 'string',
      visible: true,
      required: false,
    },
    about_us: {
      full: 'How did you hear about us?',
      fullLower: 'about_us',
      short: 'about_us',
      shortLower: 'about_us',
      min: 2,
      example: '',
      description: 'A about_us',
      cssWidth: 'max',
      type: 'select',
      selectOptions: [
        {
          label: 'Facebook',
          value: 'facebook',
        },
        {
          label: 'Twitter',
          value: 'twitter',
        },
        {
          label: 'Website',
          value: 'website',
        },
      ],
      defaultvalue: 'facebook',
      visible: true,
      required: false,
    },
    message: {
      full: 'Message',
      fullLower: 'message',
      short: 'Message',
      shortLower: 'message',
      min: 2,
      example: '',
      description: 'Enter your message',
      cssWidth: 'max',
      type: 'string',
      visible: true,
      required: false,
    },
  },
}

export const LeadCustomizeForm: React.FC = () => {
  const [mainFields, setMainFields] = useState<FieldType[]>(fields)
  const [formPreviewSchema, setFormPreviewSchema] = useState(schema)
  const [colours, setColours] = useState({ fontColor: '', buttonColor: '' })

  const onUpdateFormBuilder = (updateFields) => {
    setMainFields(updateFields)
    const updateSchemaFields = schema
    updateFields.map((field) => {
      updateSchemaFields.fields[field.fieldName].visible = field.visible
      updateSchemaFields.fields[field.fieldName].required = field.required
      return field
    })
    setFormPreviewSchema(updateSchemaFields)
  }
  return (
    <Row wrap={false} className={styles.leadFormPage}>
      <Col
        flex={'392px'}
        className={classNames(styles.builderColumn, styles.mobileViewNone)}
      >
        <LeadFormBuilder
          fields={mainFields}
          colours={colours}
          onChange={onUpdateFormBuilder}
          onColorChange={(fColor, bColor) => {
            setColours({ fontColor: fColor, buttonColor: bColor })
          }}
        />
      </Col>
      <Col
        flex="auto"
        className={classNames(styles.previewColumn, styles.mobileViewNone)}
      >
        <LeadFormPreview colours={colours} schema={schema} />
      </Col>
      <Col className={styles.desktopViewNone}>
        <Tabs className={styles.tabWidthFull}>
          <TabPane tab="Builder" key="1">
            <LeadFormBuilder
              fields={mainFields}
              colours={colours}
              onColorChange={(fColor, bColor) => {
                setColours({ fontColor: fColor, buttonColor: bColor })
              }}
              onChange={onUpdateFormBuilder}
            />
          </TabPane>
          <TabPane tab="Preview" key="2">
            <LeadFormPreview colours={colours} schema={formPreviewSchema} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

export default LeadCustomizeForm
