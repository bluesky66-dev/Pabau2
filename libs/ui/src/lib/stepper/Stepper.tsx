import React from 'react'
import styles from './Stepper.module.less'
export interface StepperItem {
  step: number
  name: string
  img: JSX.Element | string
  isActive: boolean
  index: number
}
interface StepperProps {
  datasource: StepperItem[]
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

  return (
    <div className={styles.horizonstepper}>
      {datasource.map((element, index) => (
        <div key={element.name} className={styles.imglabeldiv}>
          <div
            className={
              isActive(index)
                ? styles.iconenablecircle
                : styles.icondisablecircle
            }
          >
            {React.isValidElement(element.img) ? (
              <div>{element.img}</div>
            ) : (
              <img src={element.img} alt="" />
            )}
          </div>
          <span
            className={
              isActive(index) ? styles.enablespantxt : styles.disablespantxt
            }
          >
            {element.name}
          </span>
        </div>
      ))}
      <div className={styles.stepperLine}>
        <div
          style={{
            width: `${step <= 0 ? 0 : (step * 100) / (datasource.length - 1)}%`,
          }}
        />
      </div>
    </div>
  )
}
