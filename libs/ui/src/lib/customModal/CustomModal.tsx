/* eslint-disable */
import React, { useEffect, useState } from 'react'

import styles from './CustomModal.module.less'
import { SecurityTools, SecurityToolsItemInfo } from '@pabau/ui'
import BasicModal from '../modal/basicmodal'
import { Menu, Dropdown, Button, Modal } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

interface P {
  datasource: SecurityToolsItemInfo[]
}

export function CustomModal(props: P) {
  const { datasource = [] } = props
  const [selectedData, setSelectedData] = React.useState<any>(null)

  const [width, setWidth] = useState(window.innerWidth)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div>
      <SecurityTools
        datasource={datasource}
        title={'Security Tools'}
        onItemClick={(index) => setSelectedData(datasource[index])}
      />

      {selectedData &&
        selectedData.modalType === 1 &&
        (width > 768 ? (
          <BasicModal
            title={selectedData ? selectedData.modalTitle : ''}
            visible={Boolean(selectedData)}
            onCancel={() => setSelectedData(null)}
            newButtonText="null"
            centered={true}
          >
            {selectedData && (
              <div
                className={styles.modalGreyText}
                dangerouslySetInnerHTML={{ __html: selectedData.modalContent }}
              />
            )}
          </BasicModal>
        ) : (
          <BasicModal
            title={selectedData ? selectedData.modalTitle : ''}
            visible={Boolean(selectedData)}
            onCancel={() => setSelectedData(null)}
            newButtonText="null"
            dangerButtonText="Cancel"
            closable={false}
            centered={true}
          >
            {selectedData && (
              <div
                className={styles.modalGreyText}
                dangerouslySetInnerHTML={{ __html: selectedData.modalContent }}
              />
            )}
          </BasicModal>
        ))}

      {selectedData &&
        selectedData.modalType === 2 &&
        (width > 768 ? (
          <BasicModal
            title={selectedData ? selectedData.modalTitle : ''}
            visible={Boolean(selectedData)}
            onCancel={() => setSelectedData(null)}
            newButtonText={selectedData.okbtn}
            centered={true}
          >
            {selectedData && (
              <ModalType2Container
                menu={selectedData.modalMenu}
                content={selectedData.modalContent}
              />
            )}
          </BasicModal>
        ) : (
          <BasicModal
            title={selectedData ? selectedData.modalTitle : ''}
            visible={Boolean(selectedData)}
            onCancel={() => setSelectedData(null)}
            newButtonText={selectedData.okbtn}
            dangerButtonText="Cancel"
            closable={false}
            centered={true}
          >
            {selectedData && (
              <ModalType2Container
                menu={selectedData.modalMenu}
                content={selectedData.modalContent}
              />
            )}
          </BasicModal>
        ))}

      {selectedData &&
        selectedData.modalType === 3 &&
        (width > 768 ? (
          <BasicModal
            title={selectedData ? selectedData.modalTitle : ''}
            visible={Boolean(selectedData)}
            onCancel={() => setSelectedData(null)}
            newButtonText={selectedData.okbtn}
            centered={true}
          >
            {selectedData && (
              <div className={styles.modalGreyText}>
                {selectedData.modalContent}
              </div>
            )}
          </BasicModal>
        ) : (
          <BasicModal
            title={selectedData ? selectedData.modalTitle : ''}
            visible={Boolean(selectedData)}
            onCancel={() => setSelectedData(null)}
            newButtonText={selectedData.okbtn}
            dangerButtonText="Cancel"
            closable={false}
            centered={true}
          >
            {selectedData && (
              <div className={styles.modalGreyText}>
                {selectedData.modalContent}
              </div>
            )}
          </BasicModal>
        ))}

      {selectedData && selectedData.modalType === 4 && (
        <BasicModal
          title={selectedData ? selectedData.title : ''}
          visible={Boolean(selectedData)}
          onCancel={() => setSelectedData(null)}
          centered={true}
        >
          <div className={styles.modalGreyText}>
            {selectedData ? selectedData.name : ''}
          </div>
        </BasicModal>
      )}
    </div>
  )
}

export default CustomModal

function ModalType2Container(props) {
  const { menu = [], content = [] } = props

  function handleButtonClick(e) {
    console.log('click left button', e)
  }

  function handleMenuClick(e) {
    console.log('click', e)
  }

  const menuData1 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">{content[0][0]}</Menu.Item>
      <Menu.Item key="2">{content[0][1]}</Menu.Item>
      <Menu.Item key="3">{content[0][2]}</Menu.Item>
    </Menu>
  )

  const menuData2 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">{content[1][0]}</Menu.Item>
      <Menu.Item key="2">{content[1][1]}</Menu.Item>
      <Menu.Item key="3">{content[1][2]}</Menu.Item>
    </Menu>
  )

  const menuData3 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">{content[2][0]}</Menu.Item>
      <Menu.Item key="2">{content[2][1]}</Menu.Item>
      <Menu.Item key="3">{content[2][2]}</Menu.Item>
    </Menu>
  )

  const menuData4 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">{content[3][0]}</Menu.Item>
      <Menu.Item key="2">{content[3][1]}</Menu.Item>
      <Menu.Item key="3">{content[3][2]}</Menu.Item>
    </Menu>
  )

  return (
    <div className={styles.modalContainer}>
      <div className={styles.leftpane}>
        <span className={styles.modalType2Span}>{menu[0]}</span>
        <Dropdown overlay={menuData1} className={styles.customDropdown}>
          <Button>
            {content[0][0]}
            <DownOutlined />
          </Button>
        </Dropdown>
        <span className={styles.modalType2Span}>{menu[2]}</span>
        <Dropdown overlay={menuData2} className={styles.customDropdown}>
          <Button>
            {content[1][0]}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className={styles.rightpane}>
        <span className={styles.modalType2Span}>{menu[1]}</span>
        <Dropdown overlay={menuData3} className={styles.customDropdown}>
          <Button>
            {content[2][0]}
            <DownOutlined />
          </Button>
        </Dropdown>
        <span className={styles.modalType2Span}>{menu[3]}</span>
        <Dropdown overlay={menuData4} className={styles.customDropdown}>
          <Button>
            {content[3][0]}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  )
}
