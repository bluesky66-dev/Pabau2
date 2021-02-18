interface Feature {
  key: number
  id?: string
  value: string
  checked: boolean
  helpText?: string
}

interface Dropdown {
  key: number
  id: string
  label: string
  value?: string
  options: Array<string>
  helpText?: string
}

interface GeneralPosConfig {
  featureList: Array<Feature>
  dropdownList: Array<Dropdown>
}

interface AppearancePosConfig {
  featureList: Array<Feature>
}
