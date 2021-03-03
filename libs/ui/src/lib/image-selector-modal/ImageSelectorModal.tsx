import React, { FC, useState, useEffect, useRef } from 'react'
import { Input, Row, Col } from 'antd'
import {
  PlusOutlined,
  CheckCircleFilled,
  PictureOutlined,
} from '@ant-design/icons'
import { BasicModal } from '@pabau/ui'
import classNames from 'classnames'

import styles from './ImageSelectorModal.module.less'
import imgList, { ImgBlock } from './ImageList'

type Timeout = NodeJS.Timeout

export interface ImageSelectorModalProps {
  visible?: boolean
  onOk?: (image) => void
  onCancel?: () => void
  title?: string
  modalWidth?: number
  initialSearch?: string
  attachButtonText?: string
  selectedImage?: string
  allowCustomImage?: boolean
}

export const ImageSelectorModal: FC<ImageSelectorModalProps> = (props) => {
  const {
    visible,
    onOk,
    onCancel,
    title,
    initialSearch = '',
    selectedImage = '',
    allowCustomImage = true,
  } = props

  const [imageList, setImageList] = useState(imgList)
  const [search, setSearch] = useState('')
  const [selectedImg, setSelectedImg] = useState<ImgBlock | undefined>(
    undefined
  )

  const searchTimer = useRef<Timeout | null>(null)

  useEffect(() => setSearch(initialSearch), [initialSearch])

  // pre-load all the images after 1.5 sec of component load
  useEffect(() => {
    setTimeout(
      () => imgList.map((image) => (new Image().src = image.source)),
      1500
    )
  }, [])

  useEffect(() => {
    searchTimer.current && clearTimeout(searchTimer.current)
    searchTimer.current = setTimeout(() => {
      onSearch(search)
    }, 300)
  }, [search])

  useEffect(() => {
    if (selectedImage) {
      const img = imgList.find((i) => i.url === selectedImage)
      !!img && setSelectedImg(img)
    }
  }, [selectedImage])

  const onSelect = () => {
    if (!selectedImg) return
    onOk?.(selectedImg)
  }

  const onSearch = (searchTerm = '') => {
    const terms = searchTerm.toLowerCase().split(' ')
    const list = imgList.filter(
      ({ tags }) =>
        tags.findIndex((t) => {
          return terms.findIndex((term) => t.toLowerCase().includes(term)) > -1
        }) > -1
    )
    setImageList(searchTerm ? list : list.slice(0, 15))
  }

  return (
    <BasicModal
      visible={visible}
      footer
      onOk={onSelect}
      onCancel={onCancel}
      title={title || 'Assign an image'}
      modalWidth={props.modalWidth || 1000}
      isValidate
      newButtonText={props.attachButtonText || 'Attach'}
      newButtonDisable={!selectedImg}
    >
      <Input.Search
        defaultValue={initialSearch}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />
      <div className={styles.listContainer} style={{ margin: '20px 0' }}>
        <Row gutter={[16, 16]}>
          {allowCustomImage && (
            <Col xs={{ span: 12 }} sm={{ span: 8 }} lg={{ span: 6 }}>
              <div className={styles.imgContainer}>
                <PictureOutlined style={{ fontSize: 28, color: '#9292A3' }} />
                <label
                  htmlFor="file-upload"
                  style={{ margin: '20px 0 12px' }}
                  className={styles.chooseFileBtn}
                >
                  <PlusOutlined style={{ color: '#FFF', marginRight: 10 }} />
                  Choose file
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  style={{ height: 0, width: 0, visibility: 'hidden' }}
                  onChange={(e) => {
                    setSelectedImg({
                      key: 0,
                      source: e.target.value,
                      url: e.target.value,
                      tags: ['custom'],
                    })
                  }}
                />
              </div>
            </Col>
          )}
          {imageList.map((img) => (
            <Col
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              lg={{ span: 6 }}
              key={img.key}
              onClick={() => setSelectedImg(img)}
            >
              <div
                className={classNames(
                  styles.imgContainer,
                  selectedImg?.key === img.key && styles.selectedImg
                )}
              >
                <img src={img.source} alt={''} className={styles.listImg} />
                {selectedImg?.key === img.key && (
                  <CheckCircleFilled className={styles.checked} />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </BasicModal>
  )
}

export default ImageSelectorModal
