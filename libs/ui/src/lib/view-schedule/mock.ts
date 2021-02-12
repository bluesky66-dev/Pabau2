import backgroundImage from '../../assets/images/footer.png'

export const schedule = [
  {
    key: '1',
    day: 'Today',
    webinar: [
      {
        id: '1',
        title: 'Stock Management',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isYourSchedule: true,
      },
    ],
  },
]

export const discoverAndLearn = [
  {
    key: '2',
    day: 'Today',
    webinar: [
      {
        id: '1',
        title: 'Stock Management',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isJoin: true,
        category: 'Stock',
        length: 20,
        difficulty: 'Easy',
      },
      {
        id: '2',
        title: 'Basic Start-Up Training Part-|',
        name: 'William Brandham',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        category: 'Startup',
        length: 40,
        difficulty: 'Hard',
      },
      {
        id: '3',
        title: 'Basic Start-Up Training Part-||',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        category: 'Startup',
        length: 30,
        difficulty: 'Easy',
      },
      {
        id: '4',
        title: 'Stock Management',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isJoin: true,
        category: 'Stock',
        length: 30,
        difficulty: 'Hard',
      },
      {
        id: '5',
        title: 'Finance Training',
        name: 'William Brandham',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        category: 'Financial',
        length: 10,
        difficulty: 'Easy',
      },
      {
        id: '6',
        title: 'Basic Start-Up Training',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        category: 'Startup',
        length: 40,
        difficulty: 'Easy',
      },
    ],
  },
  {
    key: '3',
    day: 'Tuesday, 1',
    webinar: [
      {
        id: '7',
        title: 'Basic Start-Up Training Part-|',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isJoin: true,
        category: 'Startup',
        length: 25,
        difficulty: 'Easy',
      },
      {
        id: '8',
        title: 'Advanced Financials',
        name: 'Hitesh Chaudhary',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        category: 'Financial',
        length: 80,
        difficulty: 'Medium',
      },
      {
        id: '9',
        title: 'Basic Start-Up Training Part-||',
        name: 'Alexander Turner',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        isJoin: true,
        category: 'Startup',
        length: 45,
        difficulty: 'Medium',
      },
      {
        id: '10',
        title: 'Advanced Financials',
        name: 'Hitesh Chaudhary',
        time: 'Tuesday, 15 10:00 AM',
        timeLeft: '18:28',
        backgroundImage,
        category: 'Financial',
        length: 80,
        difficulty: 'Hard',
      },
    ],
  },
]

export const filterOptions = [
  {
    key: 1,
    id: 'length',
    label: 'Length',
    options: [
      'Select',
      'Below 20 minutes',
      '20 to 40 minutes',
      '40 to 60 minutes',
      'Above 60 minutes',
    ],
  },
  {
    key: 2,
    id: 'category',
    label: 'Category',
    options: ['Select', 'Stock', 'Financial', 'Startup'],
  },
  {
    key: 3,
    id: 'name',
    label: 'Trainer',
    options: [
      'Select...',
      'Alexander Tuner',
      'Hitesh Chaudhary',
      'William Brandham',
    ],
  },
  {
    key: 4,
    id: 'difficulty',
    label: 'Difficulty',
    options: ['Select', 'Easy', 'Medium', 'Hard'],
  },
]

export enum lengthOptions {
  'Below 20 minutes',
  '20 to 40 minutes',
  '40 to 60 minutes',
  'Above 60 minutes',
}
