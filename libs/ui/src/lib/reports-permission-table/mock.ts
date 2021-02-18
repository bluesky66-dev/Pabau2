export const title = 'Reports'
export const subtitle = 'Setup which sections are accessible to each user permission level. All logged in staff can access the calendar, and owner accounts have full system access.'

export const columns = [
  {
    key: 'scheduler',
    title: 'Scheduler'
  },
  {
    key: 'therapist',
    title: 'Therapist'
  },
  {
    key: 'manager',
    title: 'Manager'
  },
  {
    key: 'director',
    title: 'Director'
  },
  {
    key: 'admin',
    title: 'Admin'
  }
]

export const data = [
  {
    key: '1',
    name: 'Contact Reports',
    children: [
      {
        key: '1-1',
        name: 'FI002 - Daily Payments',
        permissions: {
          scheduler: true,
          therapist: false,
          manager: false,
          director: true,
          admin: true
        },
      }
    ]
  },
  {
    key: '2',
    name: 'Finance Reports',
    children: [
      {
        key: '2-1',
        name: 'FI000 - Daily Sales',
        permissions: {
          scheduler: true,
          therapist: false,
          manager: false,
          director: true,
          admin: true
        },
      },
      {
        key: '2-2',
        name: 'FI001 - Daily Reconciliation',
        permissions: {
          scheduler: true,
          therapist: false,
          manager: false,
          director: true,
          admin: true
        },
      },
      {
        key: '2-3',
        name: 'FI002 - Daily Payments',
        permissions: {
          scheduler: true,
          therapist: false,
          manager: false,
          director: true,
          admin: true
        },
      }
    ],
  },
  {
    key: '3',
    name: 'Lead Reports',
    children: [
      {
        key: '3-1',
        name: 'FI002 - Daily Payments',
        permissions: {
          scheduler: true,
          therapist: false,
          manager: false,
          director: true,
          admin: true
        },
      }
    ]
  },
  {
    key: '4',
    name: 'Marketing Reports',
    children: [
      {
        key: '4-1',
        name: 'FI002 - Daily Payments',
        permissions: {
          scheduler: true,
          therapist: false,
          manager: false,
          director: true,
          admin: true
        },
      }
    ]
  },
]
