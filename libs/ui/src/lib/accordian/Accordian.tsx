import React, { FC, HTMLProps } from 'react'
import { Collapse } from 'antd'
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons'
const { Panel } = Collapse
import styles from './Accordian.module.less'

/* eslint-disable-next-line */
export interface AccordianProps {}

function callback(key) {
  console.log(key)
}
interface P {
  header?: String
  text?: String
  className?: string
}
export const Accordian: FC<P> = ({
  className,
  // color,
  header,
  // backgroundColor,
  children,
  // style,
  ...props
}) => (
  <Collapse
    onChange={callback}
    expandIconPosition="right"
    className={styles.accordianmain}
  >
    <Panel header={header} key="1" className={styles.accordiandetail}>
      <p>{children}</p>
    </Panel>
  </Collapse>
)
export default Accordian
