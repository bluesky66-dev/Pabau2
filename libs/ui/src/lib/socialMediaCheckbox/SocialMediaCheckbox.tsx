import React, { ReactNode, useState } from 'react'
import { Checkbox, Collapse, Popover } from 'antd'
import classNames from 'classnames'
import styles from './SocialMediaCheckbox.module.less'

const { Panel } = Collapse

export interface mediaIconType {
  label: string
  link: string
  icon: ReactNode
}

export interface SocialMediaCheckboxProps {
  mediaIcon?: mediaIconType[]
  onClick?: (activeLabel: string[]) => void
}

const content = (
  <div>
    <p>You have not setup a link for this particular social network</p>
  </div>
)

export function SocialMediaCheckbox(props: SocialMediaCheckboxProps): JSX.Element {
  const [activate, setActivate] = useState(true)
  const [activeLabel, setActiveLabel] = useState<string[]>([])

  const handleClick = (label) => {
    setActivate(!activate)
    const index = activeLabel.indexOf(label)
    index !== -1 ? activeLabel.splice(index, 1) : activeLabel.push(label)
    setActiveLabel(activeLabel)
    props.onClick?.(activeLabel)
  }

  return (
    <div className="social-media-icons">
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
                onClick={() => handleClick(socialIcon.label)}
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
