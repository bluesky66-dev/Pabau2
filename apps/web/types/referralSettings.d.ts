interface Input {
  key: number
  name: string
  label?: string
  value?: number
  helpText?: string
  isFormatter?: boolean
}

export interface GeneralReferralConfig {
  inputList: Array<Input>
}

export interface ReferralObjProp {
  reward: number
  refereeReward: number
  expiryDays: number
}
