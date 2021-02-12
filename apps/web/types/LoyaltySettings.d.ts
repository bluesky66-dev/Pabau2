interface Dropdown {
  key: number
  id: string
  label: string
  value?: string
  options: Array<string>
  helpText?: string
}

interface inputPointValue {
  label: string
  pointText: string
  value: number
  helpText?: string
}

interface GeneralLoyaltyConfig {
  dropdownList: Dropdown
  inputPoint: inputPointValue
}

interface LoyaltyObjProp {
  showOnReceipt: string
  inputPoint: number
}
