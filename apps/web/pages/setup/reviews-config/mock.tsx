import {
  ToolOutlined,
  QuestionOutlined,
  ShareAltOutlined,
  LinkOutlined,
} from '@ant-design/icons'
export const stepData = [
  {
    step: 0,
    name: 'Builder',
    img: <ToolOutlined />,
    isActive: true,
    index: 0,
  },
  {
    step: 1,
    name: 'Questions',
    img: <QuestionOutlined />,
    isActive: false,
    index: 1,
  },
  {
    step: 2,
    name: 'Integrations',
    img: <LinkOutlined />,
    isActive: false,
    index: 2,
  },
  {
    step: 3,
    name: 'Share',
    img: <ShareAltOutlined />,
    isActive: false,
    index: 3,
  },
]
