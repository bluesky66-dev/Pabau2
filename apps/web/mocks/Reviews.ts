const columns = [
  {
    title: 'Source',
    dataIndex: 'source',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Score',
    dataIndex: 'score',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'For',
    dataIndex: 'for',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Message',
    dataIndex: 'message',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: '',
    dataIndex: 'visibleData1',
    className: 'drag-visible',
    visible: true,
  },
]

const feedbackScore = {
  value: 5,
}

const progressList = [
  {
    id: 1,
    width: '15%',
    color: '#DF562B',
    label: '<2',
  },
  {
    id: 2,
    width: '20%',
    color: '#FAAD14',
    label: '2-3',
  },
  {
    id: 3,
    width: '40%',
    color: '#9DD7BF',
    label: '3 - 4.5',
  },
  {
    id: 4,
    width: '25%',
    color: 'linear-gradient(67.52deg, #00A36E 0%, #00A69B 92.36%)',
    label: '> 4.5',
  },
]

export const ReviewConfigObj = {
  columnData: columns,
  feedbackScore: feedbackScore,
  progressData: progressList,
}
