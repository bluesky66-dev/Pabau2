import { MEDICAL_FORM_TYPES } from '@pabau/ui'
import React, { FC } from 'react'
import conditionsIcon from '../../assets/images/medicalform_conditions.svg'
import customCompanyIcon from '../../assets/images/medicalform_custom_company.svg'
import customDobIcon from '../../assets/images/medicalform_custom_dob.svg'
import customGenderIcon from '../../assets/images/medicalform_custom_gender.svg'
import customPhyAddressIcon from '../../assets/images/medicalform_custom_physical_address.svg'
import customPostalAddressIcon from '../../assets/images/medicalform_custom_postal_address.svg'
import customReferIcon from '../../assets/images/medicalform_custom_refer.svg'
import customTelePhoneIcon from '../../assets/images/medicalform_custom_tele_phone.svg'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
import drugsIcon from '../../assets/images/medicalform_drugs.svg'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import innerDrawingIcon from '../../assets/images/medicalform_innerdrawing.svg'
import labTestIcon from '../../assets/images/medicalform_labtest.svg'
import longAnswerIcon from '../../assets/images/medicalform_longanswer.svg'
import multipleChoiceIcon from '../../assets/images/medicalform_multiplechoice.svg'
import shortAnswerIcon from '../../assets/images/medicalform_shortanswer.svg'
import signatureIcon from '../../assets/images/medicalform_signature.svg'
import singleChoiceIcon from '../../assets/images/medicalform_singlechoice.svg'
import textBlockIcon from '../../assets/images/medicalform_textblock.svg'
import travelDesctinationIcon from '../../assets/images/medicalform_traveldestination.svg'
import vaccineHistoryIcon from '../../assets/images/medicalform_vaccinehistory.svg'
import vaccineSchedulerIcon from '../../assets/images/medicalform_vaccinescheduler.svg'
import InnerMedicalForm from './InnerMedicalForm'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormCheckbox from './InnerMedicalFormCheckbox'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRadio from './InnerMedicalFormRadio'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
  activate?: boolean
  type?: string
  component?: string
  handleId?: string
  formData?: MEDICAL_FORM_TYPES
  handlingSelectForm?: (isActive?: boolean, handleId?: string) => void
}

const InnerElement: FC<P> = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  handlingSelectForm,
}) => {
  const componentInfos = [
    {
      component: 'basic_heading',
      type: { type },
      iconUrl: headingIcon,
      bgcolor: '#6383F1',
      title: 'Heading',
    },
    {
      component: 'basic_shortanswer',
      type: { type },
      iconUrl: shortAnswerIcon,
      bgcolor: '#6383F1',
      title: 'Short answer',
    },
    {
      component: 'basic_longanswer',
      type: { type },
      iconUrl: longAnswerIcon,
      bgcolor: '#6383F1',
      title: 'Long answer',
    },
    {
      component: 'basic_textblock',
      type: { type },
      iconUrl: textBlockIcon,
      bgcolor: '#6383F1',
      title: 'Text block',
    },
    {
      component: 'basic_singlechoice',
      type: { type },
      iconUrl: singleChoiceIcon,
      bgcolor: '#65CD98',
      title: 'Single Choice',
    },
    {
      component: 'basic_multiplechoice',
      type: { type },
      iconUrl: multipleChoiceIcon,
      bgcolor: '#65CD98',
      title: 'Multiple Choices',
    },
    {
      component: 'basic_dropdown',
      type: { type },
      iconUrl: dropdownIcon,
      bgcolor: '#65CD98',
      title: 'Dropdown',
    },
    {
      component: 'basic_drawing',
      type: { type },
      iconUrl: drawingIcon,
      bgcolor: '#F78561',
      title: 'Drawing',
    },
    {
      component: 'basic_signature',
      type: { type },
      iconUrl: signatureIcon,
      bgcolor: '#F78561',
      title: 'Signature',
    },
    {
      component: 'basic_conditions',
      type: { type },
      iconUrl: conditionsIcon,
      bgcolor: '#FAAD14',
      title: 'Medical Conditions',
    },
    {
      component: 'basic_drugs',
      type: { type },
      iconUrl: drugsIcon,
      bgcolor: '#FAAD14',
      title: 'Drugs',
    },
    {
      component: 'basic_traveldestination',
      type: { type },
      iconUrl: travelDesctinationIcon,
      bgcolor: '#FAAD14',
      title: 'Travel destination',
    },
    {
      component: 'basic_vaccinescheduler',
      type: { type },
      iconUrl: vaccineSchedulerIcon,
      bgcolor: '#FAAD14',
      title: 'Vaccine scheduler',
    },
    {
      component: 'basic_vaccinehistory',
      type: { type },
      iconUrl: vaccineHistoryIcon,
      bgcolor: '#FAAD14',
      title: 'Vaccine history',
    },
    {
      component: 'basic_labtests',
      type: { type },
      iconUrl: labTestIcon,
      bgcolor: '#FAAD14',
      title: 'Lab tests',
    },

    {
      component: 'custom_emailmarketing',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Accepts email marketing',
    },
    {
      component: 'custom_smsmarketing',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Accepts SMS/Text marketing',
    },
    {
      component: 'custom_phonecall',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Phone calls',
    },
    {
      component: 'custom_lettermarketing',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Letter marketing',
    },
    {
      component: 'custom_membershipnumber',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Membership number',
    },
    {
      component: 'custom_authorizationcode',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Authorisation code',
    },
    {
      component: 'custom_company',
      type: { type },
      iconUrl: customCompanyIcon,
      bgcolor: '#5991D2',
      title: 'Company',
    },
    {
      component: 'custom_dob',
      type: { type },
      iconUrl: customDobIcon,
      bgcolor: '#88C65B',
      title: 'Date of birth',
    },
    {
      component: 'custom_gender',
      type: { type },
      iconUrl: customGenderIcon,
      bgcolor: '#88C65B',
      title: 'Gender',
    },
    {
      component: 'custom_physicaladdress',
      type: { type },
      iconUrl: customPhyAddressIcon,
      bgcolor: '#88C65B',
      title: 'Physical address',
    },
    {
      component: 'custom_postaladdress',
      type: { type },
      iconUrl: customPostalAddressIcon,
      bgcolor: '#88C65B',
      title: 'Postal address',
    },
    {
      component: 'custom_referredby',
      type: { type },
      iconUrl: customReferIcon,
      bgcolor: '#88C65B',
      title: 'Referred by',
    },
    {
      component: 'custom_telephonenumber',
      type: { type },
      iconUrl: customTelePhoneIcon,
      bgcolor: '#88C65B',
      title: 'Telephone number',
    },
  ]

  const filteredComponent = componentInfos.filter(
    (item) => item.component === component
  )

  return (
    <div>
      {filteredComponent.length > 0 && (
        <InnerMedicalForm
          activate={activate}
          handleId={handleId}
          handlingSelectForm={handlingSelectForm}
        >
          {required && <InnerMedicalFormRequired />}
          <InnerMedicalFormEditIcon />
          <InnerMedicalFormTitle
            iconUrl={filteredComponent[0].iconUrl}
            bgcolor={filteredComponent[0].bgcolor}
            title={filteredComponent[0].title}
          />
          {formData &&
            (formData.txtQuestion !== '' ||
              formData.txtBlock !== '' ||
              formData.txtInputType !== '' ||
              formData.formName === 'basic_drawing' ||
              (formData.arrItems && formData.arrItems.length > 0)) && (
              <InnerMedicalFormBody>
                {formData.formName === 'basic_drawing' && (
                  <img
                    style={{
                      width: '300px',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                    src={innerDrawingIcon}
                    alt=""
                  />
                )}
                {formData.txtQuestion !== '' &&
                  formData.formName !== 'basic_singlechoice' &&
                  formData.formName !== 'basic_multiplechoice' &&
                  formData.formName !== 'basic_dropdown' && (
                    <p>{formData.txtQuestion}</p>
                  )}
                {formData.txtBlock !== '' &&
                  formData.formName !== 'basic_singlechoice' &&
                  formData.formName !== 'basic_multiplechoice' &&
                  formData.formName !== 'basic_dropdown' && (
                    <p>
                      {formData.txtBlock?.split('\n').map(function (item) {
                        return (
                          <>
                            {item}
                            <br />
                          </>
                        )
                      })}
                    </p>
                  )}
                {((formData.arrItems && formData.arrItems?.length > 0) ||
                  formData.txtQuestion !== '') &&
                  (formData.formName === 'basic_singlechoice' ||
                    formData.formName === 'basic_dropdown') && (
                    <InnerMedicalFormRadio
                      title={formData.txtQuestion}
                      options={formData.arrItems}
                    />
                  )}
                {((formData.arrItems && formData.arrItems.length > 0) ||
                  formData.txtQuestion !== '') &&
                  formData.formName === 'basic_multiplechoice' && (
                    <InnerMedicalFormCheckbox
                      title={formData.txtQuestion}
                      options={formData.arrItems}
                    />
                  )}
              </InnerMedicalFormBody>
            )}
        </InnerMedicalForm>
      )}
    </div>
  )
}

export default InnerElement
