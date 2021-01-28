import React, { FC, useState } from 'react'
import { ReactComponent as CheckBadge } from '../../assets/images/check-badge.svg'
import styles from './ColorPicker.module.less'
interface P {
  color: string
  selected: boolean
  onClick(): void
  onHover(): void
}

const ColorItem: FC<P> = (props: P) => {
  const { color, selected, onClick, onHover } = props
  return (
    <div
      className={styles.colorItem}
      style={{
        backgroundColor: color,
        border: selected === true ? '1px solid #54B2D3' : 'none',
        boxSizing: 'border-box',
      }}
      onClick={() => {
        onClick()
      }}
      onMouseEnter={() => onHover()}
    >
      {selected && <CheckBadge className={styles.badge} />}
    </div>
  )
}

interface PickerProps {
  heading: string
  onSelected(val): void
  onHover?(val): void
}

export const ColorPicker: FC<PickerProps> = ({
  heading = 'Background color',
  onSelected,
  onHover,
}) => {
  const [colorData, setColorData] = useState([
    {
      color: '#F1F8FB',
      selected: false,
    },
    {
      color: '#FCF1F1',
      selected: false,
    },
    {
      color: '#F8F2FA',
      selected: false,
    },
    {
      color: '#F2F3F1',
      selected: false,
    },
    {
      color: '#F1F8FE',
      selected: false,
    },
    {
      color: '#F2F3FA',
      selected: false,
    },
    {
      color: '#f0fcfd',
      selected: false,
    },
    {
      color: '#EEF6F5',
      selected: false,
    },
    {
      color: '#f2f9e9',
      selected: false,
    },
    {
      color: '#FDF9E9',
      selected: false,
    },
    {
      color: '#F4F1F0',
      selected: false,
    },
    {
      color: '#F3F3F3',
      selected: false,
    },
    {
      color: '#feffd5',
      selected: false,
    },
    {
      color: '#F2F4F5',
      selected: false,
    },
    {
      color: '#EAEAEA',
      selected: false,
    },
    {
      color: '#f9e5f8',
      selected: false,
    },
  ])

  const onClickColorItem = (index, color) => {
    const colors = [...colorData]
    colors.forEach((item, idx) => {
      item.selected = index === idx
    })
    setColorData([...colors])
    onSelected(color)
  }

  const onHoverColorItem = (index, color) => {
    const colors = [...colorData]
    colors.forEach((item, idx) => {
      item.selected = index === idx
    })
    setColorData([...colors])
    // onSelected(color)
  }
  return (
    <div style={{ marginTop: '16px' }}>
      <span className={styles.heading}>{heading}</span>
      <div className={styles.colorPickerWrap}>
        {colorData.map((item, index) => (
          <ColorItem
            key={`${heading}${item.color}`}
            color={item.color}
            selected={item.selected}
            onClick={() => onClickColorItem(index, item.color)}
            onHover={() => {
              if (onHover !== undefined) {
                onHover(item.color)
                onHoverColorItem(index, item.color)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
