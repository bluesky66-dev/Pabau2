/* eslint-disable */
import React from "react";

import styels from "./Wizard.module.less";
import {Button} from '@pabau/ui';
import Stepper from '../stepper/Stepper';
import Card from '../card/Card';
import { data } from './mock';
import { cardData } from './mockcard';


/* eslint-disable-next-line */
interface WizardProps {
	onPrev: () => void
	onNext: () => void
	active: number
}

export function Wizard(props: WizardProps) {

	const { onPrev, onNext, active } = props

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
						<span className={styels.breadcrumbgraytxt}>Setup</span><span className={styels.breadcrumblighttxt}>{'>'} Lead Capture</span>
					</div>
					<span className={styels.blackbold}>Lead Capture</span>
				</div>
				<Button type='primary'>Share</Button>
			</div>

			<hr className={ styels.line } />

			<hr className={ styels.bottomline } />

			<div className={styels.footer}>
				<Button onClick = { event => prevClick()}>Previous Step</Button>
				<span className={styels.breadcrumbgraytxt}>Step {active}/4</span>
				<Button onClick = { event => nextClick()} type='primary'>Next Step</Button>
			</div>
        </div>
    );
}

export default Wizard;
