import React from 'react'
import styles from './Stepper.module.less'
import { StepperInterface } from '../wstepper/mock'
interface StepperProps {
  datasource: StepperInterface[]
  step: number
}

export const Stepper: React.FC<StepperProps> = ({
  datasource = [],
  step = 1,
}) => {
  return <StepperList datasource={datasource} step={step} />
}
export default Stepper

function StepperList(props) {
  const { datasource = [], step = 0 } = props

  function isActive(index) {
    return index <= step
  }

  function isBarEnabled(index) {
    return index < step
  }

  return (
    <div className={styles.horizonstepper}>
      {datasource.map((element, index) => (
        <div key={index} className={styles.steplinediv}>
          <div className={styles.imglabeldiv}>
            <div
              className={
                isActive(index)
                  ? styles.iconenablecircle
                  : styles.icondisablecircle
              }
            >
              {element.imgPath}
            </div>
            <span
              className={
                isActive(index) ? styles.enablespantxt : styles.disablespantxt
              }
            >
              {element.name}
            </span>
          </div>
          {index < datasource.length - 1 && (
            <hr
              className={
                isBarEnabled(index)
                  ? styles.stepperlineenable
                  : styles.stepperlinedisable
              }
            />
          )}
        </div>
      ))}
    </div>
  )
}
