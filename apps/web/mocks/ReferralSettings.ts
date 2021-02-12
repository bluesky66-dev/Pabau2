const generalInputOption = [
  {
    key: 1,
    name: 'reward',
    label: 'Reward Value',
    value: 25,
    helpText: 'Help tooltip',
    isFormatter: true,
  },
  {
    key: 2,
    name: 'refereeReward',
    label: 'Referree Reward Value',
    value: 25,
    helpText: 'Help tooltip',
    isFormatter: true,
  },
  {
    key: 3,
    name: 'expiryDays',
    label: 'Expiry Days',
    value: 15,
    helpText: 'Help tooltip',
  },
]

export const ReferralConfigObj = {
  general: {
    inputList: generalInputOption,
  },
}
