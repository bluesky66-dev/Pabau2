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
  const size = useWindowSize()
  function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
      width: 0,
      height: 0,
    })

    React.useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
  }

  return (
    <div className={styles.settingsMenu}>
      <Tabs
        defaultActiveKey="0"
        tabPosition={size.width > 767 ? 'left' : 'top'}
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
