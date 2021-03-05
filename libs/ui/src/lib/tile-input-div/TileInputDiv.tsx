import React, { FC, useState } from 'react'
import { PhoneNumberInput, Input } from '@pabau/ui'
import { Form } from 'antd'
import styles from './TileInputDiv.module.less'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
  const [focused, setFocused] = useState<boolean>(false)
  const formik = useFormik({
    initialValues: {
      companyName: '',
      phone: '',
      website: '',
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Company name is required'),
      phone: Yup.string().required('Phone is required'),
      website: Yup.string().url('Wesite name is invalid'),
    }),
    onSubmit: (values) => {
      console.log('Form Vales:', values)
    },
  })

  const onchange = (name, key) => {
    formik.setFieldValue(key, name)
  }

  const handleFocusElement = (status) => {
    setFocused(status)
  }

  return (
    <div className={styles.mainWrapper}>
      <div
        className={
          focused ? styles.focusedContentWrapper : styles.contentWrapper
        }
        onFocus={() => handleFocusElement(true)}
        onBlur={() => handleFocusElement(false)}
      >
        <h3>{title}</h3>
        <Form onSubmitCapture={formik.handleSubmit}>
          <div className={styles.customForm}>
            <Input
              label={companyNameData?.label}
              placeHolderText={companyNameData?.placeholderText}
              onChange={(e) => onchange(e, 'companyName')}
              text={formik.values.companyName}
            />
            {formik.errors.companyName ? (
              <div className={styles.error}>{formik.errors.companyName}</div>
            ) : null}
          </div>
          <div className={styles.customForm}>
            <PhoneNumberInput
              label={phoneLabel}
              onChange={(e) => onchange(e, 'phone')}
            />
          </div>
          <div className={styles.customForm}>
            <Input
              label={websiteData?.label}
              placeHolderText={websiteData?.placeholderText}
              onChange={(e) => onchange(e, 'website')}
              text={formik.values.website}
            />
            {formik.errors.website ? (
              <div className={styles.error}>{formik.errors.website}</div>
            ) : null}
          </div>
        </Form>
      </div>
    </div>
  )
}

export default TileInputDiv
