import React, { FC, useRef, useState } from 'react'
import classNames from 'classnames'
import { Progress } from 'antd'
import styles from './CircleGraph.module.less'
import { CloseOutlined } from '@ant-design/icons'

/* eslint-disable-next-line */

interface Data {
  name: string
}

interface ChartData {
  target: string
  data?: Data[]
}

interface CalculatedData {
  mainBoxes: number
  boxes: number
}

export interface P {
  chartData?: ChartData[]
}

export const CircleGraph: FC<P> = ({ ...props }) => {
  const ref = useRef<HTMLInputElement>(null)
  const [graphData, setGraphData] = useState<CalculatedData>()
  const { chartData } = props

  React.useEffect(() => {
    calculateBoxes()
  }, [])

  const calculateBoxes = () => {
    let calculatedData: CalculatedData = {
      mainBoxes: 0,
      boxes: 0,
    }
    if (chartData && chartData?.length > 0) {
      calculatedData.mainBoxes = chartData.length
      chartData.forEach(({ data }) => {
        if (data && data.length > 0) {
          data.forEach(() => calculatedData.boxes++)
        }
      })
    }
    setGraphData(calculatedData)
  }
  return (
    <div>
      <div className={classNames(styles.circleChart)}>
        <div className={classNames(styles.circle)} ref={ref}>
          <div className={classNames(styles.innerStyle, styles.circleDate)}>
            <h2>Jan 2021</h2>
            <p>Team Target</p>
          </div>
          <div className={classNames(styles.horizontal)}>
            <div className={classNames(styles.innerStyle, styles.offTrack)}>
              <h2>11</h2>
              <p>Off track</p>
              <CloseOutlined />
            </div>
            <div className={classNames(styles.progressCircle)}>
              <Progress
                type="circle"
                percent={58}
                trailColor="#FF5B64"
                strokeColor="#65cd98"
                width={120}
                strokeLinecap="square"
              />
            </div>
            <div className={classNames(styles.innerStyle, styles.onTrack)}>
              <h2>15</h2>
              <p>Ontrack</p>
              <div className={classNames(styles.circleIcon)}>
                <span />
              </div>
            </div>
          </div>
          <div className={classNames(styles.innerStyle, styles.kpis)}>
            <p>28 KPIS</p>
            <span>(2 n/a results)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircleGraph
