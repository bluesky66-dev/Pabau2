import React, { FC, useState } from 'react'
import { Row, Col } from 'antd'
import { FileProtectOutlined } from '@ant-design/icons'
import styles from './library_tab.module.less'

const LibrariesTab: FC = () => {
  const [libItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  return (
    <Row className={styles.library}>
      {libItems.length > 0 &&
        libItems.map((el, key) => (
          <Col lg={6} md={8} sm={8} xs={24} key={`col-key-${key * 123}`}>
            <div className={styles.libraryCard}>
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
    </Row>
  )
}

export default LibrariesTab
