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
