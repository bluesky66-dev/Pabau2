/* eslint-disable */
import React from "react";

import styels from "./Wizard.module.less";
import {Button} from '@pabau/ui';


/* eslint-disable-next-line */
interface WizardProps {
	onPrev: () => void
	onNext: () => void
	active: number
	allSteps: number
	breadcrumb : string
	header : string
	children?: any
}

export function Wizard(props: WizardProps) {

	const { onPrev, onNext, active, allSteps, breadcrumb, header, children } = props

	function prevClick() {
		onPrev()
	}

	function nextClick() {
		onNext()
	}

    return (
        <div className={styels.container}>
            <div className={styels.headerSection}>
				<div className={styels.breadcrumbsection}>
					<div className = {styels.breadcrumb}>
						<span className={styels.breadcrumbgraytxt}>{breadcrumb}</span><span className={styels.breadcrumblighttxt}>{'> '}{header}</span>
					</div>
					<span className={styels.blackbold}>{header}</span>
				</div>
			</div>

			<hr className={ styels.line } />
			{children}
			<hr className={ styels.bottomline } />

			<div className={styels.footer}>
				<Button onClick = { event => prevClick()}>Previous Step</Button>
				<span className={styels.breadcrumbgraytxt}>Step {active+1}/{allSteps}</span>
				{active < allSteps - 1 ? <Button type='primary' onClick = { event => nextClick()}>Next Step</Button> : <Button disabled onClick = { event => nextClick()}>Next Step</Button>}
				
			</div>
        </div>
    );
}

export default Wizard;
