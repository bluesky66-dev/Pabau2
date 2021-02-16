export interface OptionType {
  id: number
  name: string
  editing?: boolean
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
