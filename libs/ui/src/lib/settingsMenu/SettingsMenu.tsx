import React, { FC } from 'react'
import { Tabs } from 'antd'
import styles from './SettingsMenu.module.less'

const { TabPane } = Tabs
interface P {
  items: {
    menuName: string
    component: JSX.Element
  }[]
}

const Menu1 = () => <div>Menu Item #1 Content</div>
const Menu2 = () => <div>Menu Item #2 Content</div>
const Menu3 = () => <div>Menu Item #3 Content</div>
export const SettingsMenu: FC<P> = (props) => {
  const generalSettingsMenu = [
    {
      menuName: 'Menu Item #1',
      component: <Menu1 />,
    },
    {
      menuName: 'Menu Item #2',
      component: <Menu2 />,
    },
    {
      menuName: 'Menu Item #3',
      component: <Menu3 />,
    },
  ]

  const menuItems = props.items || generalSettingsMenu
  return (
    <div className={styles.settingsMenu}>
      <Tabs
        defaultActiveKey="2"
        tabPosition={'left'}
        style={{ minHeight: '100vh' }}
      >
        {menuItems.map((menu, i) => (
          <TabPane tab={menu.menuName} key={i}>
            {menu.component}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default SettingsMenu
