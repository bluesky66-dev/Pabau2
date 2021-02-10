const generalFeatureList = [
  {
    key: 1,
    value: 'Disable discount',
    checked: true,
  },
  {
    key: 2,
    value: 'Calculate discount before VAT',
    checked: false,
  },
  {
    key: 3,
    value: 'Force discount reason',
    checked: false,
  },
  {
    key: 4,
    value: 'Lock sale',
    checked: false,
  },
  {
    key: 5,
    value: 'Prevent invoice number editing',
    checked: false,
  },
  {
    key: 6,
    value: 'Automatically add booking in calendar on new service added',
    checked: true,
  },
]

const generalDropdownOption = [
  {
    key: 1,
    id: 'packageUseDate',
    label: 'Package use by date',
    value: '15 Minutes',
    options: ['15 Minutes', '30 Minutes', '45 Minutes'],
    helpText: 'Help tooltip',
  },
  {
    key: 2,
    id: 'cashupMode',
    label: 'Cashup mode',
    value: 'Non Blind',
    options: ['Non Blind', 'Blind'],
    helpText: 'Help tooltip',
  },
  {
    key: 3,
    id: 'stockCountMode',
    label: 'Stock count mode',
    value: 'Non Blind',
    options: ['Non Blind', 'Blind'],
    helpText: 'Help tooltip',
  },
  {
    key: 4,
    id: 'paymentType',
    label: 'Default payment type',
    value: 'Card',
    options: ['Card', 'Net Banking'],
    helpText: 'Help tooltip',
  },
]

const appearanceFeatureList = [
  {
    key: 1,
    id: 'service',
    value: 'Service',
    checked: true,
  },
  {
    key: 2,
    id: 'retail',
    value: 'Retail',
    checked: true,
  },
  {
    key: 3,
    id: 'packages',
    value: 'Packages',
    checked: false,
  },
  {
    key: 4,
    id: 'giftcards',
    value: 'Giftcards',
    checked: false,
  },
  {
    key: 5,
    id: 'accounts',
    value: 'Accounts',
    checked: false,
  },
  {
    key: 6,
    id: 'loyalty',
    value: 'Loyalty',
    checked: true,
  },
]

export const PosConfigObj = {
  general: {
    featureList: generalFeatureList,
    dropdownList: generalDropdownOption,
  },
  appearance: {
    featureList: appearanceFeatureList,
  },
}
