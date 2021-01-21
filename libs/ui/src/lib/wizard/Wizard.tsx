/* eslint-disable */
import React from 'react'

import styles from './Wizard.module.less'

import icon_basics from '../../assets/images/wizard/basics.svg'
import icon_config from '../../assets/images/wizard/config.svg'
import icon_test from '../../assets/images/wizard/test.svg'
import icon_result from '../../assets/images/wizard/result.svg'
import icon_api from '../../assets/images/wizard/api.png'
import icon_check from '../../assets/images/wizard/check.png'
import icon_form from '../../assets/images/wizard/form.svg'

import icon_left from '../../assets/images/wizard/left.svg'
import icon_right from '../../assets/images/wizard/right.svg'

import Button from '../button/button';
/* eslint-disable-next-line */
export interface WizardProps {
	active? : string,
	cardtitle1? : string,
	cardlable1?: string,
	iconcard1? : string,
	cardtitle2? : string,
	cardlable2?: string,
	iconcard2? : string,
}

export function Wizard(props: WizardProps) {
	const { active = '', cardtitle1 = '', cardlable1 = '', iconcard1 = '', cardtitle2 = '', cardlable2 = '', iconcard2 = ''} = props

  	return (
		<div className={styles.container} {...props}>
		{/* <div className={styles.horizonstepper}>
			<div className={styles.imglabeldiv}>
			<div className={styles.iconenablecircle}>
				<img src={icon_basics} alt=""/>
			</div>
			<span className={styles.enablespantxt}>Basics</span>
			</div>
			
			<hr className={styles.stepperline}/>

			<div className={styles.imglabeldiv}>
			<div className={styles.icondisablecircle}>
				<img src={icon_config} alt=""/>
			</div>
			<span className={styles.disablespantxt}>Configure (API)</span>
			</div>
			
			
			<hr className={styles.stepperline}/>

			<div className={styles.imglabeldiv}>
			<div className={styles.icondisablecircle}>
				<img src={icon_test} alt=""/>
			</div>
			<span className={styles.disablespantxt}>Testing (API)</span>
			</div>
			
			<hr className={styles.stepperline}/>

			<div className={styles.imglabeldiv}>
			<div className={styles.icondisablecircle}>
				<img src={icon_result} alt=""/>
			</div>
			<span className={styles.disablespantxt}>Result</span>
			</div>
			
		</div> */}

			<div className = {(active == '1') ? styles.apisubcontainerEnable : styles.apisubcontainerDisable}>
				<div className = {styles.topiconsection}>
					<img className={styles.wizardicon} src={iconcard1} alt=""/>
					<img className={ active == '1' ? styles.imgcheckstatusactive : styles.imgcheckstatusunactive} src={icon_check} alt=""/>
				</div>
				<span className={styles.apititle1}>{cardtitle1}</span>
				<span className={styles.apititle2}>{cardlable1}</span>
			</div>
			<div style={{width:'16px'}}></div>
			<div className = {(active == '2') ? styles.apisubcontainerEnable : styles.apisubcontainerDisable}>
				<div className = {styles.topiconsection}>
					<img className={styles.wizardicon} src={iconcard2} alt=""/>
					<img className={ active == '2' ? styles.imgcheckstatusactive : styles.imgcheckstatusunactive} src={icon_check} alt=""/>
				</div>
				<span className={styles.apititle1}>{cardtitle2}</span>
				<span className={styles.apititle2}>{cardlable2}</span>
			</div>
		</div>

  )
}

export default Wizard
