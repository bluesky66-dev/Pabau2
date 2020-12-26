/* eslint-disable */

import React from 'react'
import Dropdown from './dropdown'
import CompanyDropdown from './company/company'
import FeedbackDropdown from './feedback/feedback'
import HelpDropdown from './help/help'
import LanguageDropdown from './language/language'

export default {
  component: Dropdown,
  title: 'Dropdown'
}

export const Avatar = () => <Dropdown />
export const Company = () => <CompanyDropdown />
export const Feedback = () => <FeedbackDropdown />
export const Help = () => <HelpDropdown />
export const Language = () => <LanguageDropdown />