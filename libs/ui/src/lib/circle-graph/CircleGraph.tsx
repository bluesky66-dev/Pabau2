import React, { FC, useRef, useState } from 'react'
import classNames from 'classnames'
import { Progress } from 'antd'
import styles from './CircleGraph.module.less'
import { CloseOutlined } from '@ant-design/icons'
import graphOffTrackSvg from '../../assets/images/graph-off-track.svg'
import graphOnTrackSvg from '../../assets/images/graph-on-track.svg'

/* eslint-disable-next-line */
const CIRCLE_MAX_LENGTH = 52

interface Data {
  name: string
  revenue: number
  target: number
}

interface ChartData {
  id: number
  targetName: string
  data?: Data[]
  type?: string
}

interface RenderData {
  id?: number
  targetName?: string
  name?: string
  type?: string
  angle?: number
  target?: number
  revenue?: number
  isFilled: boolean
}

export interface P {
  chartData?: ChartData[]
}

export const CircleGraph: FC<P> = ({ ...props }) => {
  const ref = useRef<HTMLInputElement>(null)
  const [graphData, setGraphData] = useState<RenderData[]>()
  const { chartData } = props

  React.useEffect(() => {
    calculateBoxes()
  }, [])

  const calculateBoxes = () => {
    let calculatedData: RenderData[] = []
    let countTotalData = 0
    if (chartData && chartData.length > 0) {
      chartData.forEach((parent) => {
        if (parent.data && parent.data.length > 0) {
          parent.data.forEach(() => {
            countTotalData++
          })
        }
      })
      const gapLength = (CIRCLE_MAX_LENGTH - countTotalData) / chartData.length

      chartData.forEach((parent) => {
        for (let i = 0; i < gapLength; i++) {
          calculatedData.push({ isFilled: false })
        }
        if (parent.data && parent.data.length > 0) {
          parent.data.forEach((child) => {
            const getData = {
              id: parent.id,
              targetName: parent.targetName,
              target: child.target,
              revenue: child.revenue,
              type: parent.type,
              name: child.name,
              isFilled: true,
            }
            calculatedData.push(getData)
          })
        }
      })
    }

    const angle = 360 / calculatedData.length

    calculatedData = calculatedData.map((data, i) => ({
      ...data,
      angle: angle * i,
    }))

    console.log('calculatedData', calculatedData)
    setGraphData(calculatedData)
  }
  console.log('graphData', graphData)
  console.log('chartData', chartData)
  return (
    <div>
      <div className={classNames(styles.circleChart)}>
        <ul>
          {graphData &&
            graphData?.length > 0 &&
            graphData.map((renderData, i) => {
              const key = i + 1
              const isHitTheTarget =
                renderData.revenue &&
                renderData.target &&
                Boolean(renderData.revenue >= renderData.target)
              console.log('isHitTheTarget', isHitTheTarget)
              return (
                <li
                  key={key}
                  style={{
                    transform: `rotate(${renderData.angle}deg)`,
                  }}
                >
                  <div className={styles.circleBox}>
                    <img
                      src={isHitTheTarget ? graphOnTrackSvg : graphOffTrackSvg}
                      alt="graph-off-track-svg"
                      style={{
                        display: renderData.isFilled ? 'block' : 'none',
                      }}
                    />
                    <div className={classNames(styles.label)}>
                      {renderData.name}
                    </div>
                  </div>
                </li>
              )
            })}
          {/* <li>
            <div>
              <CloseOutlined />
            </div>
            <div className={classNames(styles.label)}>Test1</div>
          </li>
          <li>
            <div>Test2</div>
            <div className={classNames(styles.label)}>Test1</div>
          </li>
          <li>
            <div>Test3</div>
            <div className={classNames(styles.label)}>Test1</div>
          </li>
          <li>
            <div>Test4</div>
            <div className={classNames(styles.label)}>Test1</div>
          </li>
          <li>
            <div>Test5</div>
            <div className={classNames(styles.label)}>Test1</div>
          </li>
        */}
          <div className={classNames(styles.circle)} ref={ref}>
            <div className={classNames(styles.innerStyle, styles.circleDate)}>
              <h2>Jan 2021</h2>
              <p>Team Target</p>
            </div>
            <div className={classNames(styles.horizontal)}>
              <div className={classNames(styles.innerStyle, styles.offTrack)}>
                <h2>11</h2>
                <p>Off&nbsp;track</p>
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
                <p>On&nbsp;track</p>
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
        </ul>
      </div>
    </div>
  )
}

export default CircleGraph
