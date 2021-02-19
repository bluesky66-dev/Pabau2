const generalDropdownOption = {
  key: 1,
  id: 'receipt',
  label: 'Show on receipt',
  value: '15 Minutes',
  options: ['15 Minutes', '30 Minutes', '45 Minutes'],
  helpText: 'Help tooltip',
}

const inputPointValue = {
  label: 'Points value',
  pointText: '1 point = £0.15',
  value: 13.45,
  helpText: 'Help tooltip',
}

export const LoyaltySettingsObj = {
  general: {
    dropdownList: generalDropdownOption,
    inputPoint: inputPointValue,
  },
}
