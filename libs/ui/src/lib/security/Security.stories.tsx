/* eslint-disable */
import React from 'react'
import SecurityScore from './SecurityScore'
import SecurityTools from './SecurityTools'

export default {
  component: SecurityScore,
  title: 'Security',
}

export const Score = () => {
  return  <div style={{ background: '#f0f2f5', padding: '24px', height: '96vh' }}><SecurityScore /></div>
}
export const Tools = () => {
  return (
    <div style={{ background: '#f0f2f5', padding: '24px', height: '96vh', width: '50%' }}>
      <SecurityTools />
    </div>
  )
}
