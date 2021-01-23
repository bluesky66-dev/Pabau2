import React, { ReactNode, useState } from 'react'
import styles from './SocialMediaCheckbox.module.less'
import classNames from 'classnames'
import { Checkbox, Collapse, Popover } from 'antd'

const { Panel } = Collapse

export interface mediaIconType {
  label: string
  link: string
  icon: ReactNode
}

export interface SocialMediaCheckboxProps {
  label?: string
  icon?: ReactNode
  mediaIcon?: mediaIconType[]
  onChange?: () => void
}

const content = (
  <div>
    <p>You have not setup a link for this particular social network</p>
  </div>
)

export function SocialMediaCheckbox(props: SocialMediaCheckboxProps): JSX.Element {
  const [activate, setActivate] = useState(true)
  const [activeLabel, setactiveLabel] = useState<string[]>([])

  const handleChange = (label) => {
    setActivate(!activate)
    const index = activeLabel.indexOf(label)
    index !== -1 ? activeLabel.splice(index, 1) : activeLabel.push(label)
    setactiveLabel(activeLabel)
  }

  return (
    <div>
      <Collapse>
        <Panel header="Social media icons" key="1">
          {props.mediaIcon &&
            props.mediaIcon.map((socialIcon, index) => (
              <span
                key={index}
                className={classNames(
                  styles.socialBorder,
                  socialIcon.link === null && styles.socialBorderRed,
                  activeLabel.includes(socialIcon.label) && styles.iconColor
                )}
                onClick={() => handleChange(socialIcon.label)}
              >
                {socialIcon.link === null ? (
                  <Popover placement="bottomLeft" content={content} trigger="hover">
                    {socialIcon.icon}
                  </Popover>
                ) : (
                  socialIcon.icon
                )}
                <Checkbox checked={activeLabel.includes(socialIcon.label)} />
              </span>
            ))}
        </Panel>
      </Collapse>
    </div>
  )
}

export default SocialMediaCheckbox
