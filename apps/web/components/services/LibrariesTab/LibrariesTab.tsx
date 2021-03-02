import React, { FC, useState, useEffect } from 'react'
import { gql } from '@apollo/client'
import { Row, Col } from 'antd'
import { LibraryModal, useLiveQuery } from '@pabau/ui'
import { FileProtectOutlined } from '@ant-design/icons'
import styles from './library_tab.module.less'

const LIST_QUERY = gql`
  query library_installers($limit: Int = 10) {
    library_installers(limit: $limit) {
      library_name
      library_image
      library_description
      library_location
      library_language
      data
      created_date
      id
    }
  }
`

export const LibrariesTab: FC = () => {
  const [libItems, setLibItems] = useState([])
  const [libraryInstaller, setLibraryInstaller] = useState(false)
  const [libraryIntallerData, setLibraryInstallerData] = useState(null)

  const showLibraryInstaller = (item) => {
    setLibraryInstallerData(item)
    setLibraryInstaller((libraryInstaller) => !libraryInstaller)
  }

  const getQueryVariables = () => {
    const queryOptions = {
      variables: {
        limit: 10,
      },
    }

    return queryOptions
  }

  const { data, error, loading } = useLiveQuery(LIST_QUERY, getQueryVariables())

  useEffect(() => {
    if (!loading && data) {
      setLibItems(data)
    }
    console.log('HEL')
  }, [data, error, loading])

  return (
    <Row className={styles.library}>
      {libItems.length > 0 &&
        libItems.map((el, key) => (
          <Col lg={6} md={8} sm={8} xs={24} key={`col-key-${key * 123}`}>
            <div
              className={styles.libraryCard}
              onClick={() => showLibraryInstaller(el)}
            >
              <div>
                <span>
                  <FileProtectOutlined color="#9292A3;" />
                </span>
                <span className="plus">Plus</span>
              </div>
              <h4>{el.library_name}</h4>
              <p>{el.data?.length}</p>
            </div>
          </Col>
        ))}
      <Col md={24}>
        {libraryIntallerData && (
          <LibraryModal
            image={
              libraryIntallerData?.library_image ||
              'https://wallpaperaccess.com/full/271965.jpg'
            }
            title={libraryIntallerData?.library_name}
            subTitle={libraryIntallerData?.library_description}
            visible={libraryInstaller}
            bundleTypes={libraryIntallerData?.data}
            onClose={() =>
              setLibraryInstaller((libraryInstaller) => !libraryInstaller)
            }
          />
        )}
      </Col>
    </Row>
  )
}

export default LibrariesTab
