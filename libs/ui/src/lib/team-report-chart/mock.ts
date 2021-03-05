import {
  TeamReportChartSeries,
  TeamReportEmployee,
  TeamReportMeta,
  TeamReportServiceGroup,
} from './TeamReportChart'
import userImage from '../../assets/images/user.png'

export const yearsData = {
  monthly: [
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
  ],
  quater: [
    'Q4 17/18',
    'Q1 18/19',
    'Q2 18/19',
    'Q3 18/19',
    'Q4 18/19',
    'Q1 19/20',
    'Q2 19/20',
    'Q3 19/20',
    'Q4 19/20',
  ],
  yearly: ['2017/2018', '2018/2019', '2019/2020', '2020/2021'],
}

export const ticks = {
  monthly: [
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
  ],
  quater: [
    'Q4 17/18',
    'Q1 18/19',
    'Q2 18/19',
    'Q3 18/19',
    'Q4 18/19',
    'Q1 19/20',
    'Q2 19/20',
    'Q3 19/20',
    'Q4 19/20',
  ],
  yearly: ['2017', '2018', '2019', '2020'],
}

export const serviceGroups: TeamReportServiceGroup[] = [
  {
    name: 'Payroll',
    services: ['Revenue'],
  },
  {
    name: 'Shifts',
    services: ['Op. Profit'],
  },
  {
    name: 'Performance',
    services: ['Services'],
  },
  {
    name: 'Kpis',
    services: ['Team Comission'],
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

export const meta: TeamReportMeta = {
  type: 'yearly',
  services: ['Revenue', 'Op. Profit', 'Services'],
  employees: ['Will Lawsons', 'User 2', 'User 3', 'User 4'],
  years: ['2019/2020'],
}

export const seriesData: TeamReportChartSeries[] = [
  {
    title: 'Revenue',
    serviceName: 'Revenue',
    data: [0, 100, 250, 100, 150, 0, 120, 140, 200, 250, 200, 100],
    formatter: (value) => `${value < 0 ? '- ' : ''}£${Math.abs(value)}K`,
    color: '#54B2D3',
  },
  {
    title: 'Op. Profit',
    serviceName: 'Op. Profit',
    data: [-32, -32, 32, 32, 128, -30, -64, 34, 0, 92, 92, 128],
    formatter: (value) => `${Number(value).toFixed(2)}%`,
    color: '#65CD98',
  },
  {
    title: 'Services',
    serviceName: 'Services',
    data: [100, 50, 0, 100, 250, 100, 20, 40, 100, 150, 200, 250],
    formatter: (value): string =>
      `${value < 0 ? '- ' : ''}$${Math.abs(value)}K`,
    color: '#FAAD14',
  },
  {
    title: 'Team Comission',
    serviceName: 'Team Comission',
    data: [0, 150, 100, 100, 150, 200, 220, 240, 0, -50, 100, 150],
    formatter: (value): string =>
      `${value < 0 ? '- ' : ''}$${Math.abs(value)}M`,
    color: '#7B61E2',
  },
]

export const series: TeamReportChartSeries[] = seriesData.slice(0, 3)
