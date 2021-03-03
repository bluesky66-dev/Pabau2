import {
  TeamReportChartSeries,
  TeamReportEmployee,
  TeamReportServiceGroup,
} from './TeamReportChart'
import userImage from '../../assets/images/user.png'

export const monthlyTicks = [
  'Sep 19',
  'Oct 19',
  'Nov 19',
  'Dec 19',
  'Jan 20',
  'Feb 20',
  'Mar 20',
  'Apr 20',
  'May 20',
  'Jun 20',
  'Jul 20',
  'Aug 20',
]

export const quaterTicks = [
  'Q1 17/18',
  'Q2 17/18',
  'Q3 17/18',
  'Q4 17/18',
  'Q1 18/19',
  'Q2 18/19',
  'Q3 18/19',
  'Q4 18/19',
  'Q1 19/20',
]

export const yearlyTicks = ['2017', '2018', '2019', '2020']

export const services: TeamReportServiceGroup[] = [
  {
    name: 'Payroll',
    services: ['Team Comission', 'Team Wages'],
  },
  {
    name: 'Shifts',
    services: ['Days Worked', 'Days Off'],
  },
  {
    name: 'Performance',
    services: ['Services', 'Products', 'Packages', 'Vouchers'],
  },
  {
    name: 'Kpis',
    services: ['Services', 'Products', 'Packages', 'Vouchers'],
  },
]

export const employees: TeamReportEmployee[] = [
  {
    name: 'Will Lawsons',
    src: userImage,
  },
  {
    name: 'User 2',
    src: userImage,
  },
  {
    name: 'User 3',
    src: userImage,
  },
  {
    name: 'User 4',
    src: userImage,
  },
]

export const years: string[] = [
  '2017/2018',
  '2018/2019',
  '2019/2020',
  '2020/2021',
]

export const meta = {
  services: ['Revenue', 'Op. profit', 'Services'],
  employees: ['Will Lawsons', 'User 2', 'User 3', 'User 4'],
  years: ['2019/2020'],
}

export const series: TeamReportChartSeries[] = [
  {
    name: 'Revenue',
    data: [0, 100, 250, 100, 150, 0, 120, 140, 200, 250, 200, 100],
    formatter: (value) => `${value < 0 ? '- ' : ''}£${Math.abs(value)}K`,
  },
  {
    name: 'Op. profit',
    data: [
      -32.04,
      -32.04,
      32.04,
      32.04,
      128.16,
      -30,
      -64.08,
      34,
      0,
      92.12,
      92.12,
      128.16,
    ],
    formatter: (value) => `${Number(value).toFixed(2)}%`,
  },
  {
    name: 'Services',
    data: [100, 50, 0, 100, 250, 100, 20, 40, 100, 150, 200, 250],
    formatter: (value) => `${value < 0 ? '- ' : ''}$${Math.abs(value)}K`,
  },
]
