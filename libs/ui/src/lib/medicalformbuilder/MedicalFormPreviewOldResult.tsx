import { Base64 } from 'js-base64'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import previewStypes from './MedicalFormPreview.module.less'
import MedicalFormPreviewOldCheckBox from './MedicalFormPreviewOldCheckBox'
import MedicalFormPreviewOldEmpty from './MedicalFormPreviewOldEmpty'
import MedicalFormPreviewOldImage from './MedicalFormPreviewOldImage'
import MedicalFormPreviewOldInputText from './MedicalFormPreviewOldInputText'
import MedicalFormPreviewOldRadio from './MedicalFormPreviewOldRadio'
import MedicalFormPreviewOldSelect from './MedicalFormPreviewOldSelect'
import MedicalFormPreviewOldSignature from './MedicalFormPreviewOldSignature'
import MedicalFormPreviewOldStaticImage from './MedicalFormPreviewOldStaticImage'

interface P {
  formData: string
}
const MedicalFormPreviewOldResult: FC<P> = ({ formData }) => {
  let formDataArray = []
  if (formData !== '') {
    formDataArray = JSON.parse(Base64.decode(formData))
  }

  return (
    <div className={styles.MedicalFormPreviewOldResultPanel}>
      <h2 className={previewStypes.medicalFormName}>Preview Form</h2>
      {formDataArray['form_structure']?.map((form, index) => {
        let name = ''
        let label = ''
        if (form.title) {
          if (typeof form.title === 'object') {
            const obj = Base64.decode(Base64.encode(form.title))
            form.title = obj[1]['value'].trim()
          } else {
            form.title = form.title.trim()
          }
        }
        if (form.title) {
          name = form.title
        } else {
          if (typeof form.values === 'object') {
            const obj = Base64.decode(Base64.encode(form.title))
            name = obj[1]['value'].trim()
          } else {
            name = form.values
          }
        }
        name = name.toLowerCase().trim()
        label = form.title ? form.title.trim() : form.values.trim()
        if (form.cssClass === 'cl_services') label = 'Services'
        else if (form.cssClass === 'cl_drugs') label = 'Drugs'
        else if (form.cssClass === 'labs_tests') label = 'Labs Tests'
        else if (form.cssClass === 'vaccine_scheduler') label = ''
        form.name = name
        form.label = label
        return (
          <>
            <div className={previewStypes.medicalFormLabel}>{form.label}</div>
            {form.cssClass === 'heading' && <MedicalFormPreviewOldEmpty />}
            {form.cssClass === 'staticText' && (
              <div dangerouslySetInnerHTML={{ __html: form.label }} />
            )}
            {form.cssClass === 'cl_services' && <MedicalFormPreviewOldEmpty />}
            {form.cssClass === 'cl_drugs' && <MedicalFormPreviewOldEmpty />}
            {form.cssClass === 'labs_tests' && <MedicalFormPreviewOldEmpty />}
            {form.cssClass === 'vaccine_scheduler' && (
              <MedicalFormPreviewOldEmpty />
            )}
            {form.cssClass === 'history_data' && <MedicalFormPreviewOldEmpty />}
            {form.cssClass === 'input_text' && (
              <MedicalFormPreviewOldInputText
                inputType={form.fldtype}
                defaultValue={form.defaults ? form.defaults : ''}
              />
            )}
            {form.cssClass === 'travel_destination' && (
              <MedicalFormPreviewOldEmpty />
            )}
            {form.cssClass === 'team' && (
              <MedicalFormPreviewOldInputText
                inputType={'text'}
                defaultValue={form.defaults ? form.defaults : ''}
              />
            )}
            {form.cssClass === 'textarea' && (
              <MedicalFormPreviewOldInputText
                inputType={'textarea'}
                defaultValue={form.defaults ? form.defaults : ''}
              />
            )}
            {form.cssClass === 'checkbox' && (
              <MedicalFormPreviewOldCheckBox formValues={form.values} />
            )}
            {form.cssClass === 'radio' && (
              <MedicalFormPreviewOldRadio formValues={form.values} />
            )}
            {form.cssClass === 'select' && (
              <MedicalFormPreviewOldSelect formValues={form.values} />
            )}
            {form.cssClass === 'image' && (
              <MedicalFormPreviewOldImage formValues={form.values} />
            )}
            {form.cssClass === 'staticImage' && (
              <MedicalFormPreviewOldStaticImage formValues={form.values} />
            )}
            {form.cssClass === 'signature' && (
              <MedicalFormPreviewOldSignature formValues={form.values} />
            )}
            {form.cssClass === 'diagram' && <MedicalFormPreviewOldEmpty />}

            {form.cssClass === 'facediagram' && <MedicalFormPreviewOldEmpty />}

            {form.cssClass === 'diagram_mini' && <MedicalFormPreviewOldEmpty />}

            {form.cssClass === 'photo_and_drawer' && (
              <MedicalFormPreviewOldEmpty />
            )}

            {form.cssClass === 'epaper' && <MedicalFormPreviewOldEmpty />}
            {form.cssClass === 'custom_photo_and_drawer' && (
              <MedicalFormPreviewOldEmpty />
            )}
            {form.cssClass === 'btn_medical_condition' && (
              <MedicalFormPreviewOldEmpty />
            )}
            {form.cssClass === 'vaccine_history' && (
              <MedicalFormPreviewOldEmpty />
            )}
          </>
        )
      })}
    </div>
  )
}

export default MedicalFormPreviewOldResult
