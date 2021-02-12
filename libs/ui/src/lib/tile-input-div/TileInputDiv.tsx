import React, { FC } from 'react'
import { PhoneNumberInput, Input } from '@pabau/ui'
import { Form } from 'antd'
import './TileInputDiv.module.less'
import { useFormik } from 'formik'

interface inputProps {
  label?: string
  placeholderText?: string
}

/* eslint-disable-next-line */
export interface TileInputDivProps {
  title?: string
  companyNameData?: inputProps
  phoneLabel?: string
  websiteData?: inputProps
}

export const TileInputDiv: FC<TileInputDivProps> = ({
  title,
  companyNameData,
  phoneLabel,
  websiteData,
}) => {
  const formik = useFormik({
    initialValues: {
      companyName: '',
      phone: '',
      website: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  })

  const onchange = (name, key) => {
    formik.setFieldValue(key, name)
  }

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <Form>
          <Input
            label={companyNameData?.label}
            placeHolderText={companyNameData?.placeholderText}
            onChange={(e) => onchange(e, 'companyName')}
            text={formik.values.companyName}
          />
          <div style={{ marginTop: '30px', marginBottom: '10px' }}>
            <PhoneNumberInput
              label={phoneLabel}
              onChange={(e) => onchange(e, 'phone')}
            />
          </div>
          <Input
            label={websiteData?.label}
            placeHolderText={websiteData?.placeholderText}
            onChange={(e) => onchange(e, 'website')}
            text={formik.values.website}
          />
        </Form>
      </div>
    </div>
  )
}

export default TileInputDiv
