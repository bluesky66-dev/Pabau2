/* eslint-disable */
import React from 'react'
import styles from './Stepper.module.less'

/* eslint-disable-next-line */
export interface StepperProps {
  datasource : Array<any>,
  step : number
}


class Stepper extends React.Component<StepperProps> {
  constructor(props) {
    super(props);
    const { datasource = [], step = 1 } = this.props
    this.state = {}
  }

  render() {
    const { datasource = [], step = 1 } = this.props
    return (
        <StepperList datasource={datasource} step={step}/>
    )
  }
}

export default Stepper

export interface StepProps {
  isLast? : boolean,
  item : ItemInfo,
  status : boolean,
  progress : boolean
}

export interface ItemInfo {
  imgPath: string,
  name : string
}

function Step(props: StepProps) {
  const {item, isLast, status, progress} = props
  return (
    <div className={styles.steplinediv}>
      <div className={styles.imglabeldiv}>
        <div className={ status? styles.iconenablecircle : styles.icondisablecircle}>
          <img src={item.imgPath} alt=""/>
        </div>
        <span className={status? styles.enablespantxt : styles.disablespantxt}>{item.name}</span>
        </div>
        {isLast ? <div></div> : <hr className={progress? styles.stepperlinedisable : styles.stepperlineenable}/>}
 			  
    </div>
  );
}

function StepperList(props) {
  const {datasource = [], step = 1} = props
  const length = datasource.length

  return (
    <div className={styles.horizonstepper}>
      {datasource.map((el, index) =>
        <Step item={el} progress={index + 1 < step} status={index < step} isLast={index === (datasource.length - 1)}/>
      )}
    </div>
  );
}