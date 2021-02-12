import React, { FC } from 'react'
import textBlockIcon from '../../assets/images/medicalform_textblock.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
  activate?: boolean
  handlingSelectForm?: (isActive?: boolean, handleId?: string) => void
  formData?: any
}
const InnerTextBlock: FC<P> = ({
  required,
  activate,
  handlingSelectForm,
  formData,
}) => {
  return (
    <InnerElement
      handleId={formData.id}
      activate={activate}
      handlingSelectForm={handlingSelectForm}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={textBlockIcon}
        bgcolor="#6383F1"
        title="Text block"
      />
      {formData.txt1 !== '' && (
        <InnerMedicalFormBody>
          <p>
            {formData.txt1.split('\n').map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              )
            })}
          </p>
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerTextBlock
