import { MedicalFormTypes } from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
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
import SettingElementAdvanced from './SettingElementAdvanced'
import SettingElementFileUpload from './SettingElementFileUpload'
import SettingElementMultiOptions from './SettingElementMultiOptions'
import SettingElementOption from './SettingElementOption'
import SettingElementQuestion from './SettingElementQuestion'
import SettingElementTextBlock from './SettingElementTextBlock'
import SettingElementTextBox from './SettingElementTextBox'
import SettingElementTypeOption from './SettingElementTypeOption'
import SettingMedicalForm from './SettingMedicalForm'
import SettingMedicalFormBody from './SettingMedicalFormBody'
import SettingMedicalFormBottom from './SettingMedicalFormBottom'
import SettingMedicalFormError from './SettingMedicalFormError'
import SettingMedicalFormHeader from './SettingMedicalFormHeader'
import SettingMedicalFormTitle from './SettingMedicalFormTitle'

interface P {
  type: string
  component: string
  selectedForm: MedicalFormTypes
  handleSave?: () => void
  handleDelete?: () => void
}

const SettingElement: FC<P> = ({
  type,
  component,
  selectedForm,
  handleSave,
  handleDelete,
}) => {
  const [form, setForm] = useState(JSON.parse(JSON.stringify(selectedForm)))
  const [addedItems, setAddedItems] = useState(0)
  const [errMsg, setErrMsg] = useState('')
  const componentInfos = [
    {
      component: 'basic_heading',
      type: { type },
      iconUrl: headingIcon,
      bgcolor: '#6383F1',
      title: 'Heading',
      desc: 'Create a heading for a section',
    },
    {
      component: 'basic_shortanswer',
      type: { type },
      iconUrl: shortAnswerIcon,
      bgcolor: '#6383F1',
      title: 'Short answer',
      desc: 'Ask a question with a short answer',
    },
    {
      component: 'basic_longanswer',
      type: { type },
      iconUrl: longAnswerIcon,
      bgcolor: '#6383F1',
      title: 'Long answer',
      desc: 'Ask a question with a long answer',
    },
    {
      component: 'basic_textblock',
      type: { type },
      iconUrl: textBlockIcon,
      bgcolor: '#6383F1',
      title: 'Text block',
      desc: 'Add a paragraph without a question',
    },
    {
      component: 'basic_singlechoice',
      type: { type },
      iconUrl: singleChoiceIcon,
      bgcolor: '#65CD98',
      title: 'Single Choice',
      desc: 'Ask for a single choice',
    },
    {
      component: 'basic_multiplechoice',
      type: { type },
      iconUrl: multipleChoiceIcon,
      bgcolor: '#65CD98',
      title: 'Multiple Choices',
      desc: 'Ask for a several choices',
    },
    {
      component: 'basic_dropdown',
      type: { type },
      iconUrl: dropdownIcon,
      bgcolor: '#65CD98',
      title: 'Dropdown',
      desc: 'A list of options that can be ticked',
    },
    {
      component: 'basic_drawing',
      type: { type },
      iconUrl: drawingIcon,
      bgcolor: '#F78561',
      title: 'Drawing',
      desc: 'Draw on an image or a photo',
    },
    {
      component: 'basic_signature',
      type: { type },
      iconUrl: signatureIcon,
      bgcolor: '#F78561',
      title: 'Signature',
      desc: 'Description',
    },
    {
      component: 'basic_conditions',
      type: { type },
      iconUrl: conditionsIcon,
      bgcolor: '#FAAD14',
      title: 'Medical Conditions',
      desc: 'Description',
    },
    {
      component: 'basic_drugs',
      type: { type },
      iconUrl: drugsIcon,
      bgcolor: '#FAAD14',
      title: 'Drugs',
      desc: 'Description',
    },
    {
      component: 'basic_labtests',
      type: { type },
      iconUrl: labTestIcon,
      bgcolor: '#FAAD14',
      title: 'Lab tests',
      desc: 'Description',
    },
    {
      component: 'basic_traveldestination',
      type: { type },
      iconUrl: travelDesctinationIcon,
      bgcolor: '#FAAD14',
      title: 'Travel destination',
      desc: 'Description',
    },
    {
      component: 'basic_vaccinescheduler',
      type: { type },
      iconUrl: vaccineSchedulerIcon,
      bgcolor: '#FAAD14',
      title: 'Vaccine scheduler',
      desc: 'Description',
    },
    {
      component: 'basic_vaccinehistory',
      type: { type },
      iconUrl: vaccineHistoryIcon,
      bgcolor: '#FAAD14',
      title: 'Vaccine history',
      desc: 'Description',
    },

    {
      component: 'custom_emailmarketing',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Accepts email marketing',
      desc: 'Clients can opt in to marketing',
    },
    {
      component: 'custom_smsmarketing',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Accepts SMS/Text marketing',
      desc: 'Clients can opt in to marketing',
    },
    {
      component: 'custom_phonecall',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Phone calls',
      desc: 'Clients can opt in to marketing',
    },
    {
      component: 'custom_lettermarketing',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Letter marketing',
      desc: 'Clients can opt in to marketing',
    },
    {
      component: 'custom_membershipnumber',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Membership number',
      desc: 'Clients can opt in to marketing',
    },
    {
      component: 'custom_authorizationcode',
      type: { type },
      iconUrl: dobIcon,
      bgcolor: '#20BAB1',
      title: 'Authorisation code',
      desc: 'Clients can opt in to marketing',
    },
    {
      component: 'custom_company',
      type: { type },
      iconUrl: customCompanyIcon,
      bgcolor: '#5991D2',
      title: 'Company',
      desc: 'Confirm a clients company',
    },
    {
      component: 'custom_dob',
      type: { type },
      iconUrl: customDobIcon,
      bgcolor: '#88C65B',
      title: 'Date of birth',
      desc: 'Confirm a clients birth date',
    },
    {
      component: 'custom_gender',
      type: { type },
      iconUrl: customGenderIcon,
      bgcolor: '#88C65B',
      title: 'Gender',
      desc: 'Confirm a clients gender',
    },
    {
      component: 'custom_physicaladdress',
      type: { type },
      iconUrl: customPhyAddressIcon,
      bgcolor: '#88C65B',
      title: 'Physical address',
      desc: 'Confirm a clients physical address',
    },
    {
      component: 'custom_postaladdress',
      type: { type },
      iconUrl: customPostalAddressIcon,
      bgcolor: '#88C65B',
      title: 'Postal address',
      desc: 'Confirm a clients postal address',
    },
    {
      component: 'custom_referredby',
      type: { type },
      iconUrl: customReferIcon,
      bgcolor: '#88C65B',
      title: 'Referred by',
      desc: 'Where did they hear of you',
    },
    {
      component: 'custom_telephonenumber',
      type: { type },
      iconUrl: customTelePhoneIcon,
      bgcolor: '#88C65B',
      title: 'Telephone number',
      desc: 'Confirm a clients telephone number',
    },
  ]

  useEffect(() => {
    setForm(JSON.parse(JSON.stringify(selectedForm)))
  }, [selectedForm])

  const eventhandler = (addedItems) => {
    setAddedItems(addedItems.length)
    const tempForm = { ...form, arrItems: addedItems }
    setForm(tempForm)
    setErrMsg('')
  }

  const saveFunc = () => {
    selectedForm.txtQuestion = form.txtQuestion
    selectedForm.txtBlock = form.txtBlock
    selectedForm.txtInputType = form.txtInputType
    selectedForm.arrItems = form.arrItems
    selectedForm.required = form.required
    selectedForm.txtDefaults = form.txtDefaults

    if (
      component === 'basic_singlechoice' ||
      component === 'basic_multiplechoice' ||
      component === 'basic_dropdown'
    ) {
      if (addedItems > 0) {
        setErrMsg('')
        handleSave?.()
      } else {
        setErrMsg('Please add an option')
      }
    } else {
      handleSave?.()
    }
  }

  const deleteFunc = () => {
    handleDelete?.()
  }

  const requireFunc = (checked) => {
    const tempForm = { ...form, required: checked }
    setForm(tempForm)
  }
  const onChangeQuestion = (value) => {
    const tempForm = { ...form, txtQuestion: value }
    setForm(tempForm)
  }

  const onChangeText = (value) => {
    const tempForm = { ...form, txtBlock: value }
    setForm(tempForm)
  }

  const onChangeDefaults = (value) => {
    const tempForm = { ...form, txtDefaults: value }
    setForm(tempForm)
  }

  const filteredComponent = componentInfos.filter(
    (item) => item.component === component
  )

  return (
    <div>
      {filteredComponent.length > 0 && (
        <SettingMedicalForm>
          <SettingMedicalFormHeader title="component settings" />
          <SettingMedicalFormTitle
            iconUrl={filteredComponent[0].iconUrl}
            bgcolor={filteredComponent[0].bgcolor}
            title={filteredComponent[0].title}
            desc={filteredComponent[0].desc}
          />
          <SettingMedicalFormBody>
            {(filteredComponent[0].component === 'basic_heading' ||
              filteredComponent[0].component === 'basic_shortanswer' ||
              filteredComponent[0].component === 'basic_longanswer' ||
              filteredComponent[0].component === 'basic_singlechoice' ||
              filteredComponent[0].component === 'basic_multiplechoice' ||
              filteredComponent[0].component === 'basic_dropdown' ||
              filteredComponent[0].component === 'basic_conditions' ||
              filteredComponent[0].component === 'basic_drugs' ||
              filteredComponent[0].component === 'basic_labtests' ||
              filteredComponent[0].component === 'basic_traveldestination' ||
              filteredComponent[0].component === 'basic_vaccinescheduler' ||
              filteredComponent[0].component === 'basic_vaccinehistory' ||
              filteredComponent[0].component === 'custom_emailmarketing' ||
              filteredComponent[0].component === 'custom_smsmarketing' ||
              filteredComponent[0].component === 'custom_phonecall' ||
              filteredComponent[0].component === 'custom_lettermarketing' ||
              filteredComponent[0].component === 'custom_membershipnumber' ||
              filteredComponent[0].component === 'custom_authorizationcode' ||
              filteredComponent[0].component === 'custom_company' ||
              filteredComponent[0].component === 'custom_dob' ||
              filteredComponent[0].component === 'custom_gender' ||
              filteredComponent[0].component === 'custom_physicaladdress' ||
              filteredComponent[0].component === 'custom_postaladdress' ||
              filteredComponent[0].component === 'custom_referredby' ||
              filteredComponent[0].component === 'custom_telephonenumber') && (
              <SettingElementQuestion
                desc="Enter your question"
                title="Question"
                value={form.txtQuestion}
                onChangeQuestion={onChangeQuestion}
              />
            )}
            {(filteredComponent[0].component === 'basic_signature' ||
              filteredComponent[0].component === 'basic_drawing') && (
              <SettingElementQuestion
                desc="Enter your title"
                title="Title"
                value={form.txtQuestion}
                onChangeQuestion={onChangeQuestion}
              />
            )}
            {filteredComponent[0].component === 'basic_drawing' && (
              <SettingElementFileUpload
                title="Image"
                desc="Click or drag file to this area to upload"
              />
            )}

            {filteredComponent[0].component === 'basic_shortanswer' && (
              <SettingElementTypeOption
                title="Input type"
                value={form.txtInputType}
              />
            )}
            {filteredComponent[0].component === 'basic_longanswer' && (
              <SettingElementTextBox
                desc="Enter your text"
                title="Text"
                value={form.txtBlock}
                onChangeText={onChangeText}
              />
            )}
            {filteredComponent[0].component === 'basic_textblock' && (
              <SettingElementTextBlock
                desc="Enter your text"
                title="Text"
                value={form.txtBlock}
                onChangeText={onChangeText}
              />
            )}
            {(filteredComponent[0].component === 'basic_singlechoice' ||
              filteredComponent[0].component === 'basic_dropdown') && (
              <SettingElementOption
                onChange={eventhandler}
                paramItems={selectedForm.arrItems ? selectedForm.arrItems : []}
              />
            )}
            {filteredComponent[0].component === 'basic_multiplechoice' && (
              <SettingElementMultiOptions
                onChange={eventhandler}
                paramItems={selectedForm.arrItems ? selectedForm.arrItems : []}
              />
            )}
            {(filteredComponent[0].component === 'basic_singlechoice' ||
              filteredComponent[0].component === 'basic_multiplechoice' ||
              filteredComponent[0].component === 'basic_dropdown') &&
              errMsg !== '' && <SettingMedicalFormError errMsg={errMsg} />}
            {(filteredComponent[0].component === 'basic_shortanswer' ||
              filteredComponent[0].component === 'basic_longanswer' ||
              filteredComponent[0].component === 'basic_singlechoice' ||
              filteredComponent[0].component === 'basic_multiplechoice' ||
              filteredComponent[0].component === 'basic_dropdown') && (
              <SettingElementAdvanced
                defaultFieldValue={form.txtDefaults}
                onChangeDefaults={onChangeDefaults}
              />
            )}
          </SettingMedicalFormBody>
          <SettingMedicalFormBottom
            saveFunc={saveFunc}
            deleteFunc={deleteFunc}
            requireFunc={requireFunc}
            required={selectedForm.required}
            needLeft={
              filteredComponent[0].component === 'basic_textblock'
                ? false
                : true
            }
          />
        </SettingMedicalForm>
      )}
    </div>
  )
}

export default SettingElement
