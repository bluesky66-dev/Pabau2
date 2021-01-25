/* eslint-disable */
import React, { useState } from 'react'

import styles from './Card.module.less'
import icon_check from '../../assets/images/wizard/check.png'
/* eslint-disable-next-line */
interface CardProps {
  datasource : Array<any>,
	active : number
}

export function Card(props: CardProps) {
  	const { datasource = [], active = 1 } = props
  	return (
    	<CardLists datasource={datasource} active={active} />
  	)
}

export default Card

interface P {
	card : CardInfo,
	active : boolean,
	onClick: () => void
}

interface CardInfo {
	id : string
	title: string
	name : string
	imgPath: string
}

function CardItem(props: P) {
	const { card, active, onClick } = props

	function handleClick() {
		onClick()
	}

	return (
		<div onClick = { event => handleClick()} style={{padding:'8px', width:'246px', height:'150px'}}>
			<div className = { active ? styles.apisubcontainerEnable : styles.apisubcontainerDisable }>
				<div className = {styles.topiconsection}>
					<img className={styles.wizardicon} src={card.imgPath} alt=""/>
					{active && <img className={styles.imgcheckstatusactive} src={icon_check} alt=""/>}
				</div>
				<span className={styles.apititle1}>{card.title}</span>
				<span className={styles.apititle2}>{card.name}</span>
			</div>
		</div>
	)
}

function CardLists (props) {
	const { datasource = [], active} = props
	const length = datasource.length

	const [selectedId, setSelectedId] = useState(datasource ? datasource[0].id : null)

	return (
		<div className={styles.container}>
			{datasource.map((el, i) => 
				<CardItem card={el} active={el.id === selectedId} onClick={() => setSelectedId(el.id)} />
			)}
		</div>
	)
}
