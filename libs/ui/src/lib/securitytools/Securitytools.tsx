import React, { useState } from 'react'
import styles from './Securitytools.module.less'
import { Badge } from '@pabau/ui'

interface P {
  datasource: []
  title: string
  onItemClick: (index) => void
}

export const SecurityTools: React.FC<P> = ({
  datasource,
  title,
  onItemClick,
}) => {
  const [selectedId, setSelectedId] = useState(0)

  function handleItemClick(index) {
    setSelectedId(selectedId)
    onItemClick(index)
  }

  return (
    <div className={styles.scoreBody}>
      <p className={styles.phead}>{title}</p>
      {datasource.map((el, i) => (
        <Item key={i} item={el} onClick={() => handleItemClick(i)} />
      ))}
    </div>
  )
}

export default SecurityTools

interface ItemProps {
  item: ItemInfo
  onClick: () => void
}

interface ItemInfo {
  id: string
  title: string
  name: string
  imgPath: string
  isActive: boolean
  modalType: number
}

function Item(props: ItemProps) {
  const { onClick, item } = props

  function handleClick() {
    onClick()
  }

  return (
    <div onClick={(event) => handleClick()}>
      <div className={styles.container}>
        <div className={styles.colStatusLabel}>
          <img className={styles.iconSecuritytools} src={item.imgPath} alt="" />
        </div>
        <div className={styles.containercol}>
          <span className={styles.p1}>{item.title}</span>
          <span className={styles.p2}>{item.name}</span>
        </div>
        <div className={styles.statelabel}>
          <Badge
            disabled={item.isActive}
            label={item.isActive ? 'Enabled' : 'Disabled'}
          />
        </div>
      </div>
      <hr className={styles.securityToolsline} />
    </div>
  )
}
