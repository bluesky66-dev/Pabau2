/* eslint-disable */
import React from 'react'
import styles from './Stepper.module.less'

/* eslint-disable-next-line */
interface StepperProps {
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

interface StepProps {
  isLast? : boolean,
  item : ItemInfo,
  status : boolean,
  progress : boolean
}

interface ItemInfo {
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
  const {datasource = [], step = 0} = props
  const length = datasource.length

  function isActive(data, index) {
	return (index <= step)
	// return data.isActive
  }

  function isBarEnabled(index) {
    return (index < step)
  }

  return (
    <div className={styles.horizonstepper}>
      {datasource.map((el, index) =>
        <>
			<div className={styles.steplinediv}>
				<div className={styles.imglabeldiv}>
					<div className={ isActive(el, index) ? styles.iconenablecircle : styles.icondisablecircle}>
					<img src={el.imgPath} alt=""/>
					</div>
					<span className={isActive(el, index)? styles.enablespantxt : styles.disablespantxt}>{el.name}</span>
				</div>
			{index < datasource.length-1 && <hr className={isBarEnabled(index) ? styles.stepperlineenable : styles.stepperlinedisable}/>}
			</div>
        </>
        
      )}
    </div>
  );
}