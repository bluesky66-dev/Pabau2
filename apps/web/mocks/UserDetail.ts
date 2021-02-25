export const userDetail = {
  name: 'Joseph Howard',
  post: 'Managing Director',
}

export const fields = [
  {
    id: '1',
    label: 'First name',
    name: 'firstname',
    control: 'input',
    type: 'text',
  },
  {
    id: '2',
    label: 'Last name',
    name: 'lastname',
    control: 'input',
    type: 'text',
  },
  {
    id: '3',
    label: 'Staff Title',
    name: 'staffTitle',
    control: 'select',
    options: ['Title 1', 'Title 2', 'Title 3'],
    placeholder: 'Add staff title',
  },
  {
    id: '4',
    label: 'Birthday date',
    name: 'birthday',
    control: 'date',
    placeholder: 'DD/MM/YY',
  },
  {
    id: '5',
    label: 'Mobile phone',
    name: 'mobilePhone',
    control: 'phoneInput',
  },
  {
    id: '6',
    label: 'Email',
    name: 'email',
    control: 'input',
    type: 'text',
  },
  {
    id: '7',
    label: 'Notes',
    name: 'notes',
    control: 'input',
    type: 'textArea',
  },
  {
    id: '8',
    label: 'Employment start date',
    name: 'employmentStartDate',
    control: 'select',
    options: ['Sat, 14 Apr 2018', 'Sat, 15 Apr 2018', 'Sat, 16 Apr 2018'],
    placeholder: 'Select date',
  },
  {
    id: '9',
    label: 'Employment end date',
    name: 'employmentEndDate',
    control: 'select',
    options: ['Sat, 14 Apr 2018', 'Sat, 15 Apr 2018', 'Sat, 16 Apr 2018'],
    placeholder: 'Select date',
  },
  {
    id: '10',
    label: 'Primary Location',
    name: 'primaryLocation',
    control: 'select',
    options: [],
  },
  {
    id: '11',
    label: 'Discount Locations',
    name: 'discountLocations',
    control: 'checkbox-group',
    options: [
      'M-A Hair dressing & SPA/Illusions beauty salon',
      'Illusions beauty salon',
      'M-A Hair dressing & SPA',
      'Illusions beauty salon & salon',
      'M-A Hair dressing & SPA/M-A Hair dressing & SPA',
    ],
  },
]

export const graphData = {
  daysLeft: 'Jun 24-30 (4 days left)',
  seriesData: [
    [5, 3, 4, 7, 2, 6, 7],
    [2, 5, 3, 2, 1, 2, 3],
  ],
  time: '12h 58m',
  holidayRemaining: 3,
}
