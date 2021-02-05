export const title = 'Registration Fields'
export const description =
  'Choose which fields you would like to be visible or mandatory on the registration page'
export const fieldTitle = 'Field Name'
export const customFieldTitle = 'Custom Fields'
export const visibleTitle = 'Visible'
export const requiredTitle = 'Required'
export const fields = [
  {
    fieldName: 'Salutation',
    visible: false,
    required: false,
    key: 1,
  },
  {
    fieldName: 'First Name',
    visible: true,
    required: true,
    disabled: true,
    key: 2,
  },
  {
    fieldName: 'Last Name',
    visible: true,
    required: true,
    disabled: true,
    key: 3,
  },
  {
    fieldName: 'Gender',
    visible: false,
    required: false,
    key: 4,
  },
  {
    fieldName: 'Date of Birth',
    visible: false,
    required: false,
    key: 5,
  },
  {
    fieldName: 'Mobile',
    visible: false,
    required: false,
    key: 6,
  },
  {
    fieldName: 'Address',
    visible: false,
    required: false,
    key: 7,
  },
  {
    fieldName: 'City',
    visible: false,
    required: false,
    key: 8,
  },
  {
    fieldName: 'Country',
    visible: false,
    required: false,
    key: 9,
  },
  {
    fieldName: 'Post code',
    visible: false,
    required: false,
    key: 10,
  },
  {
    fieldName: 'How did you hear about us?',
    visible: false,
    required: false,
    key: 11,
  },
]
export const customFields = [
  {
    fieldName: 'GP Name',
    visible: false,
    required: false,
    key: 1,
  },
  {
    fieldName: 'GP Address',
    visible: false,
    required: false,
    key: 2,
  },
  {
    fieldName: 'Gender',
    visible: false,
    required: false,
    key: 3,
  },
  {
    fieldName: 'Test MC',
    visible: false,
    required: false,
    key: 4,
  },
]
