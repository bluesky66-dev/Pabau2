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

export const PermissionFields = [
  {
    name: 'Contacts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 1,
    container: [
      {
        name: 'Contact Manager',
        value: true,
        key: 1,
      },
      {
        name: 'Case Manager',
        value: true,
        key: 2,
      },
      {
        name: 'Lab Requests',
        value: true,
        key: 3,
      },
      {
        name: 'Letter Queue',
        value: true,
        key: 4,
      },
    ],
  },
  {
    name: 'Finance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 2,
    container: [
      {
        name: 'Accounts',
        value: true,
        key: 1,
      },
      {
        name: 'Cashup',
        value: true,
        key: 2,
      },
      {
        name: 'Expenses',
        value: true,
        key: 3,
      },
    ],
  },
  {
    name: 'Leads',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 3,
    container: [
      {
        name: 'Lead Manager',
        value: true,
        key: 1,
      },
    ],
  },
  {
    name: 'Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 4,
    container: [
      {
        name: 'SMS Campaigns',
        value: true,
        key: 1,
      },
      {
        name: 'Newsletters',
        value: true,
        key: 2,
      },
      {
        name: 'Feedback Surveys',
        value: true,
        key: 3,
      },
      {
        name: 'Birthday Mailer',
        value: true,
        key: 4,
      },
      {
        name: 'Gift Vouchers',
        value: true,
        key: 5,
      },
      {
        name: 'Referral Tracker',
        value: true,
        key: 6,
      },
      {
        name: 'Loyalty',
        value: true,
        key: 7,
      },
    ],
  },
  {
    name: 'Reports',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 5,
    container: [
      {
        name: 'Reports',
        value: true,
        key: 1,
      },
    ],
  },
  {
    name: 'Stock',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 6,
    container: [
      {
        name: 'Products',
        value: true,
        key: 1,
      },
      {
        name: 'Inventory Count',
        value: true,
        key: 2,
      },
      {
        name: 'Purchase Order',
        value: true,
        key: 3,
      },
      {
        name: 'Supplier',
        value: true,
        key: 4,
      },
    ],
  },
  {
    name: 'Calendar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 7,
    container: [
      {
        name: 'Calendar',
        value: true,
        key: 1,
      },
    ],
  },
  {
    name: 'Staff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    key: 8,
    container: [
      {
        name: 'Staff Manager',
        value: true,
        key: 1,
      },
      {
        name: 'Staff Targets',
        value: true,
        key: 2,
      },
      {
        name: 'Staff Rota',
        value: true,
        key: 3,
      },
    ],
  },
]

export const feature = [
  {
    id: '1',
    title: 'Features',
    subtitle: 'Choose what things Joseph Howard can do',
    permissionFields: [
      {
        name: 'Calendar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        key: 1,
        container: [
          {
            name: 'Available on calendar',
            value: true,
            key: 1,
          },
          {
            name: 'View everybody’s calendar',
            value: true,
            key: 2,
          },
          {
            name: 'Can make Bookout slot',
            value: true,
            key: 3,
          },
          {
            name: 'Bookable online',
            value: true,
            key: 4,
          },
        ],
      },
      {
        name: 'Financials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        key: 2,
        container: [
          {
            name: 'Can void sales',
            value: true,
            key: 1,
          },
          {
            name: 'Can Edit Invoice Content',
            value: true,
            key: 2,
          },
          {
            name: 'Available to Sell',
            value: true,
            key: 3,
          },
        ],
      },
      {
        name: 'Other',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        key: 3,
        container: [
          {
            name: 'Can delete alert notes',
            value: true,
            key: 1,
          },
          {
            name: 'Edit/Delete EMR',
            value: true,
            key: 2,
          },
          {
            name: 'Merge duplicate Contrast/Leads',
            value: false,
            key: 3,
          },
          {
            name: 'Appear on reports',
            value: false,
            key: 4,
          },
          {
            name: 'Can manage rota',
            value: false,
            key: 5,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Patient',
    subtitle: 'Choose what things Joseph Howard can do',
    permissionFields: [
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        key: 1,
        container: [
          {
            name: 'Person Details',
            value: false,
            key: 1,
          },
          {
            name: 'Photos',
            value: true,
            key: 2,
          },
          {
            name: 'Documents',
            value: true,
            key: 3,
          },
          {
            name: 'Consents',
            value: true,
            key: 4,
          },
        ],
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        key: 2,
        container: [
          {
            name: 'Appointments',
            value: true,
            key: 1,
          },
          {
            name: 'Financials',
            value: true,
            key: 2,
          },
          {
            name: 'Packages',
            value: true,
            key: 3,
          },
        ],
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        key: 3,
        container: [
          {
            name: 'Communications',
            value: true,
            key: 1,
          },
          {
            name: 'Treatments',
            value: true,
            key: 2,
          },
          {
            name: 'Prescriptions',
            value: false,
            key: 3,
          },
          {
            name: 'Loyalty',
            value: false,
            key: 4,
          },
          {
            name: 'Lab Requests',
            value: false,
            key: 5,
          },
        ],
      },
    ],
  },
]

export const userDetailDocuments = {
  name: 'Charlotte Abbott',
  position: 'Sr. HR Administrator',
}
export const documentsFolder = [
  {
    name: 'Signed Documents',
    files: [
      {
        key: '1',
        name: 'Company Handbook.pdf',
        status: 'Shared',
        addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
        size: '25.5 MB',
      },
    ],
  },
  {
    name: 'Resumes and Applications',
    files: [
      {
        key: '2',
        name: 'Company Handbook.pdf',
        status: 'Shared',
        addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
        size: '25.5 MB',
      },
      {
        key: '3',
        name: '1-9 (2017).pdf',
        status: 'Shared',
        addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
        size: '25.5 MB',
      },
    ],
  },
  {
    name: 'Workflow Attachments',
    files: [
      {
        key: '4',
        name: 'Company Handbook.pdf',
        status: 'Shared',
        addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
        size: '25.5 MB',
      },
      {
        key: '5',
        name: '1-9 (2017).pdf',
        status: 'Shared',
        addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
        size: '25.5 MB',
      },
    ],
  },
  {
    name: 'Tasklist Attachments',
    files: [
      {
        key: '6',
        name: 'Company Handbook.pdf',
        status: 'Shared',
        addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
        size: '25.5 MB',
      },
      {
        key: '7',
        name: '1-9 (2017).pdf',
        status: 'Shared',
        addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
        size: '25.5 MB',
      },
    ],
  },
]
