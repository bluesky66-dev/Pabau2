/* eslint-disable */
import React from "react";

import styels from "./WStepper.module.less";
import Stepper from '../stepper/Stepper';
import Wizard from '../wizard/Wizard';
import { data } from './mock';


/* eslint-disable-next-line */
interface WStepperProps {
	active : number
	breadcrumbTxt : string 
	headerTxt : string
}

export function WStepper(props: WStepperProps) {

	const { active, breadcrumbTxt, headerTxt } = props
	const [index, setIndex] = React.useState(active);
	const [datasource, setDatasource] = React.useState(data)

	return (
		<div className={styels.container}>
			<Wizard onPrev={() => setIndex(index - 1)} onNext={() => setIndex(index + 1)} breadcrumb={breadcrumbTxt} header={headerTxt} active={index} allSteps={5}>
				<Stepper datasource={datasource} step={index} />
				{/* {index === 0 && <div>1</div>}
				{index === 1 && <div>2</div>}
				{index === 2 && <div>3</div>} */}
			</Wizard>
			
		</div>
	)
	
}

export default WStepper;
