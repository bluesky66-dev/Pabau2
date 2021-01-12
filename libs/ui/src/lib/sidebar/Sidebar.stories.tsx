/* eslint-disable */
import React from 'react'
import { Sidebar } from './Sidebar'

export default {
  component: Sidebar,
  title: 'Sidebar',
}

export const primary = () => {
  return <div style={{ background: "#9292A3", border: "1px solid #9292A3" }} ><Sidebar /></div>
}
