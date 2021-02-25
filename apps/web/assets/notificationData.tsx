import {
  ScheduleOutlined,
  BellOutlined,
  SyncOutlined,
  StarOutlined,
  CloseCircleOutlined,
  UserDeleteOutlined,
  FileSyncOutlined,
  UsergroupAddOutlined,
  FileDoneOutlined,
  GoldOutlined,
  MoneyCollectOutlined,
  RiseOutlined,
  GiftOutlined,
  MailOutlined,
  BarChartOutlined,
  SafetyOutlined,
  InteractionOutlined,
  ReconciliationOutlined,
  ExportOutlined,
  CalendarOutlined,
  CrownOutlined,
} from '@ant-design/icons'

const notificationData = {
  Appointments: [
    {
      header: 'New appointment is booked',
      description:
        'Automatically sends to clients when they book their appointment',
      icon: <ScheduleOutlined />,
      smartDelivery: true,
      link: '/client-notifications/new-appointment',
      disabled: true,
    },
    {
      header: 'Upcoming appointment reminder',
      description: 'Automatically sends to clients ahead of their appointment',
      icon: <BellOutlined />,
      smartDelivery: true,
      link: '/client-notifications/appointment-reminder',
      disabled: true,
    },
    {
      header: 'Rescheduled appointment',
      description:
        'Automatically sends to clients when their appointment start time is changed',
      icon: <SyncOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Request feedback',
      description:
        'Automatically sends to clients when an appointment is checked out',
      icon: <StarOutlined />,
      smartDelivery: true,
      link: null,
      disabled: true,
    },
    {
      header: 'Cancelled appointment',
      description:
        'Automatically sends to clients when an appointment is cancelled',
      icon: <CloseCircleOutlined />,
      smartDelivery: false,
      link: '/client-notifications/cancelled-appointment',
      disabled: true,
    },
    {
      header: 'No-show appointment',
      description:
        'Automatically sends to clients when an appointment is marked as no show',
      icon: <UserDeleteOutlined />,
      smartDelivery: false,
      link: '/client-notifications/noshow-appointment',
      disabled: true,
    },
    {
      header: 'Wait list',
      description:
        'Automatically sends to clients when an appointment slot becomes available',
      icon: <FileSyncOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
  ],
  Classes: [
    {
      header: 'Booked onto class',
      description:
        "Automatically sends to clients when they're booked for a class",
      icon: <ScheduleOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Booked onto class (group)',
      description:
        "Automatically sends to clients when they're booked for a class (group)",
      icon: <UsergroupAddOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Cancelled a class booking',
      description:
        'Automatically sends to clients when they cancel a class booking',
      icon: <CloseCircleOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Missed a class',
      description:
        "Automatically sends to clients when they don't show for a class",
      icon: <UserDeleteOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Class rescheduled',
      description: 'Automatically sends to clients when a class is rescheduled',
      icon: <SyncOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Reminder for class',
      description:
        'Automatically sends a reminder to a client who has registered to a class',
      icon: <BellOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Class wait list',
      description:
        'Automatically sends to clients when a class becomes available',
      icon: <FileSyncOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Classes spot available',
      description:
        'Automatically sends to clients when a class slot becomes available',
      icon: <FileDoneOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
  ],
  Engagement: [
    {
      header: 'Refferal',
      description:
        'The default email template you will send when someone is being referred into the business',
      icon: <GoldOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Invoice',
      description:
        'The default email template you will send with a clients invoice attached',
      icon: <MoneyCollectOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Lead responses',
      description:
        'The default email template you will send to your lead when they submit their lead form',
      icon: <RiseOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Gift vouchers',
      description:
        'The default email template you will send when clients purchase a gift voucher',
      icon: <GiftOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
  ],
  Other: [
    {
      header: 'Package session used ',
      description:
        'he default email template you will send when a client has used all their package sessions',
      icon: <ScheduleOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Clinic requested email',
      description:
        'Here you can select the default appointment confirmation which gets out via email',
      icon: <MailOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Clinic emailing timeline',
      description:
        "The email you will send when you are emailing a client's timeline",
      icon: <BarChartOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Secure email template',
      description:
        'The default secure email template which gets sent out via email',
      icon: <SafetyOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Connect registration',
      description:
        'The email the client receives when they register to your Online Booking portal',
      icon: <InteractionOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Medical forms',
      description:
        'The email you will send when you email someone a copy of their prescription',
      icon: <ReconciliationOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Document shared',
      description:
        'The email you will send when you share a document with a client through Pabau Connect',
      icon: <ExportOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Email appointments',
      description:
        'The email you will send if someone requested a list of their appointment history',
      icon: <CalendarOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
    {
      header: 'Birthdays',
      description:
        "The default email template you will send if it's a client's birthday",
      icon: <CrownOutlined />,
      smartDelivery: false,
      link: null,
      disabled: true,
    },
  ],
}

export default notificationData
