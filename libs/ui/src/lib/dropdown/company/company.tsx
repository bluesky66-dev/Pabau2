import React from 'react'
import { Menu, Dropdown as AntDropDown, Button } from 'antd'
import Logo from '../../pabaucliniclogo/Logo'
import { LeftOutlined, CheckCircleFilled } from '@ant-design/icons'
import { ReactComponent as JASVG } from './JA.svg'

export interface DropDownInterface {
  loading?: boolean
  visible?: boolean
  onClick?: () => void
  handleSubmit?: () => void
}

const menu = (
  <Menu className="company-clinic-menu">
    <Menu.Item className="company-clinic-menu-header">
      <div className="logo">
        <LeftOutlined className="header" />
        <span className="select-company-style">Select company</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu active">
      <div className="dropdown-setting">
        <Logo />
        <span className="dropdown-item">Pabau Clinic Software</span>
      </div>
      <CheckCircleFilled className="check-icon" />
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <JASVG />
        <span className="dropdown-item">Jason Austin Har Salon’s & Barbershops</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <Logo />
        <span className="dropdown-item">
          University of Portsmouth Essenntial Student Guide – Info, Offers, Nightlife
        </span>
      </div>
    </Menu.Item>
  </Menu>
)

export function CompanyDropdown(): JSX.Element {
  return (
    <AntDropDown overlay={menu} placement="bottomRight" arrow>
      <Button>Company</Button>
    </AntDropDown>
  )
}

export default CompanyDropdown
