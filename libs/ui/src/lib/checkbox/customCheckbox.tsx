import React, { PropsWithChildren, useState } from 'react'
import './checkbox.less'
// import '../../assets/scss/pretty-checkbox.scss'
import ActiveSVG from '../../assets/images/active.svg'
import NotActiveSVG from '../../assets/images/notactive.svg'

export interface CheckboxProps {
  label?: string
  disabled?: boolean
  onChange?: () => void
}

export function Checkbox({
  label,
  disabled,
  onChange,
}: PropsWithChildren<CheckboxProps>): JSX.Element {
  const [activate, setActivate] = useState(true)
  return (
    <div className="custom-checkbox">
      <div className="pretty p-svg p-toggle p-plain">
        <input
          type="checkbox"
          checked={activate}
          onChange={() => setActivate(!activate)}
          disabled={disabled}
        />
        <div className="state p-off">
          <img className="svg" src={NotActiveSVG} alt="none-active-state" />
          <label>{label}</label>
        </div>
        <div className="state p-on">
          <img className="svg" src={ActiveSVG} alt="active-state" />
          <label>{label}</label>
        </div>
      </div>
    </div>
  )
}

export default Checkbox
