export interface OptionType {
  id: number
  name: string
  editing: boolean
}

export interface MedicalFormTypes {
  id: string
  formType: string
  formName: string
  txtQuestion: string
  txtBlock: string
  txtInputType: string
  arrItems: OptionType[]
  required: boolean
}

export interface MedicalForms {
  id: number
  formType: string
  formName: string
}

export interface SelectedForms {
  medicalHistory: boolean
  consent: boolean
  treatmentForm: boolean
  epaper: boolean
  presciption: boolean
  labForm: boolean
}

export const defaultSelectedFormInfos: SelectedForms = {
  medicalHistory: false,
  consent: false,
  treatmentForm: false,
  epaper: false,
  presciption: false,
  labForm: false,
}

export interface PreviewData {
  previewData: string
}
