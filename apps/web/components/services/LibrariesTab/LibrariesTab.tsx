import React, { FC, useState } from 'react'
import { Row, Col } from 'antd'
import { LibraryModal } from '@pabau/ui'
import { FileProtectOutlined } from '@ant-design/icons'
import styles from './library_tab.module.less'

const LibsBundles = [
  { bundleType: 'ConsentForm', title: 'Custom title to this bundle type' },
  { bundleType: 'Stencil', title: 'This is my stencil' },
  { bundleType: 'Contraindication', title: 'I"m suggesting this one as title' },
]

export const LibrariesTab: FC = () => {
  const [libItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  const [libraryInstaller, setLibraryInstaller] = useState(false)

  const showLibraryInstaller = () => {
    setLibraryInstaller((libraryInstaller) => !libraryInstaller)
  }

  return (
    <Row className={styles.library}>
      {libItems.length > 0 &&
        libItems.map((el, key) => (
          <Col lg={6} md={8} sm={8} xs={24} key={`col-key-${key * 123}`}>
            <div
              className={styles.libraryCard}
              onClick={() => showLibraryInstaller()}
            >
              <div>
                <span>
                  <FileProtectOutlined color="#9292A3;" />
                </span>
                <span className="plus">Plus</span>
              </div>
              <h4>BNF Lib Database</h4>
              <p>{(el + 2) * 2}</p>
            </div>
          </Col>
        ))}
      <Col md={24}>
        <LibraryModal
          image="https://wallpaperaccess.com/full/271965.jpg"
          title="BNF Lib Service Bundle"
          subTitle="BNF Lib Service Bundle Sub Title"
          visible={libraryInstaller}
          bundleTypes={LibsBundles}
          onClose={() =>
            setLibraryInstaller((libraryInstaller) => !libraryInstaller)
          }
        />
      </Col>
    </Row>
  )
}

export default LibrariesTab
