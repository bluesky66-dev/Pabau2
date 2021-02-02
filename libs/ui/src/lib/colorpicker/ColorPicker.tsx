import React, { FC, useState } from 'react'
import { ReactComponent as CheckBadge } from '../../assets/images/check-badge.svg'
import styles from './ColorPicker.module.less'
interface P {
  color: string
  selected: boolean
  hovering: boolean
  leaving: boolean
  onClick(): void
  onHover(): void
  onLeave(): void
}

const ColorItem: FC<P> = (props: P) => {
  const { color, selected, hovering, onClick, onHover, onLeave } = props
  return (
    <div
      className={styles.colorItem}
      style={{
        backgroundColor: color,
        border: hovering || selected ? '1px solid #54B2D3' : 'none',
        boxSizing: 'border-box',
        opacity: hovering || selected ? '1' : '0.2',
      }}
      onClick={() => {
        onClick()
      }}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onLeave()}
    >
      {selected && <CheckBadge className={styles.badge} />}
    </div>
  )
}

interface PickerProps {
  heading: string
  onSelected(val): void
  onHover?(val): void
  onLeave?(val): void
}

export const ColorPicker: FC<PickerProps> = ({
  heading = 'Background color',
  onSelected,
  onHover,
  onLeave,
}) => {
  const [colorData, setColorData] = useState([
    {
      color: '#54b2d3',
      selected: false,
    },
    {
      color: '#fca903',
      selected: false,
    },
    {
      color: '#8c03fc',
      selected: false,
    },
    {
      color: '#0ffc03',
      selected: false,
    },
    {
      color: '#03fcfc',
      selected: false,
    },
    {
      color: '#5e03fc',
      selected: false,
    },
    {
      color: '#03e7fc',
      selected: false,
    },
    {
      color: '#45fc03',
      selected: false,
    },
    {
      color: '#84fc03',
      selected: false,
    },
    {
      color: '#fcf403',
      selected: false,
    },
    {
      color: '#fcce03',
      selected: false,
    },
    {
      color: '#d2fc03',
      selected: false,
    },
    {
      color: '#f4fc03',
      selected: false,
    },
    {
      color: '#bf15c2',
      selected: false,
    },
    {
      color: '#486578',
      selected: false,
    },
    {
      color: '#9a3ac9',
      selected: false,
    },
  ])

  const colors = [...colorData]
  const onClickColorItem = (index, color) => {
    colors.forEach((item, idx) => {
      item.selected = index === idx
      setLastColor(color)
    })
    setColorData([...colors])
    onSelected(color)
  }

  const onHoverColorItem = (index, color) => {
    colors.forEach((item, idx) => {
      item.selected = index === idx
    })
    setColorData([...colors])
  }

  const onLeaveColorItem = (index, color) => {
    colors.forEach((item, idx) => {
      if (index === idx) item.selected = false
    })
    setColorData([...colors])
  }
  const [lastColor, setLastColor] = useState('')
  return (
    <div style={{ marginTop: '16px' }}>
      <span className={styles.heading}>{heading}</span>
      <div className={styles.colorPickerWrap}>
        {colorData.map((item, index) => (
          <ColorItem
            key={`${heading}${item.color}`}
            color={item.color}
            selected={item.color === lastColor}
            hovering={item.selected}
            leaving={!item.selected}
            onClick={() => onClickColorItem(index, item.color)}
            onHover={() => {
              onHoverColorItem(index, item.color)
              if (onHover !== undefined) {
                onHover(item.color)
              }
            }}
            onLeave={() => {
              onLeaveColorItem(index, item.color)
              if (onLeave !== undefined) {
                onLeave(item.color)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
