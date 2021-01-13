/* eslint-disable */
import React from 'react'
import Footer from './Footer'
import { Guides as FooterGuides } from './Guides'
import { Webinar as FooterWebinar } from './Webinar'

export default {
  component: Footer,
  title: 'Footer',
}

export const primary = () => {
  return <Footer />
}
export const Guides = () => {
  return (
    <div style={{ background: '#f0f2f5', padding: '24px', height: '96vh' }}>
      <FooterGuides />
    </div>
  )
}

export const Webinar = () => {
  return (
    <div
      style={{
        justifyContent: 'flex-start',
        display: 'flex',
        background: '#f0f2f5',
        padding: '24px',
        height: '96vh',
      }}
    >
      <FooterWebinar />
    </div>
  )
}
