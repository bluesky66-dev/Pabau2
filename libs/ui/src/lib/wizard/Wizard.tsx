/* eslint-disable */
import React from 'react'

import styles from './Wizard.module.less'
import icon_check from '../../assets/images/wizard/check.png'

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
