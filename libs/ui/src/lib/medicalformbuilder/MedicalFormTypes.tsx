export interface OPTION_TYPE {
  id: number
  name: string
}

export interface MEDICAL_FORM_TYPES {
  id?: string
  formType?: string
  formName?: string
  txtQuestion?: string
  txtBlock?: string
  txtInputType?: string
  arrItems?: OPTION_TYPE[]
  required?: boolean
}
