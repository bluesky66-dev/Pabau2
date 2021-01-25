import React, { PropsWithChildren } from 'react'
import { Radio as AntRadiobutton } from 'antd'
import { dataItems } from './mock'
import styles from './radiobutton.module.less'

const RadioGroup = AntRadiobutton.Group

// Radio button property interface
export interface RadiobuttonProps {
  group: string
  Items: dataItems[]
}

export function RadioButton({ group, Items }: PropsWithChildren<RadiobuttonProps>): JSX.Element {
  return (
    <div className={styles.radioButtonWrapper}>
      <RadioGroup name={group}>
        {Items.map((menu: dataItems, i) => {
          return (
            <AntRadiobutton key={i} value={menu.value} checked={menu.check}>
              {menu.label}
            </AntRadiobutton>
          )
        })}
      </RadioGroup>
    </div>
  )
}

export default RadioButton
