import React, { FC, useState } from 'react'
import styles from './Footer.module.less'
import { Button, WebinarModal, WebinarModalProps } from '@pabau/ui'
import { PlayCircleOutlined } from '@ant-design/icons'
import BackgroundImage from '../../assets/images/footer.png'
import ReactGA from 'react-ga'

export const Webinar: FC = () => {
  const [isOpenModal, setIsOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState({})

  const handleOpenModal = () => {
    const selectedData: WebinarModalProps = {
      title: 'Stock Management',
      name: 'Alexander Turner ',
      time: 'Tuesday, 15 10:00 AM',
      timeLeft: '18:28',
      description:
        'This training session is to kick start your Pabau jorney, suitable for anyone starting off with the system, fron desh, practioers and anyone who nneds to know how to book. It covers all the core features you will need on a daily basisss, to ensure you are able to work at ease with the system.',
      backgroundImage: BackgroundImage,
      buttonType: 'join',
    }
    setModalData(selectedData)
    setIsOpen(true)
    ReactGA.event({
      category: 'Footer',
      action: 'Footer Webinar Click',
    })
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.webinarBannerEnd}>
        <div>
          <div className={styles.footerHeading}>
            <h1>Recommended Webinar</h1>
          </div>
          <div className={styles.webinarBox} style={{ marginTop: '12px' }}>
            <div className={styles.webinarBanner}> </div>
            <div className={styles.webinarText}>
              <p>Stock Management</p>
              <h6>
                Alexander Turner <br /> Getting Started
              </h6>
              <h5>Tuesday, 15 10:00 AM</h5>
              <h4> 18:28 elapsed </h4>
              <div className={styles.joinBtnTopSpace}>
                <Button
                  className={styles.joinBtn}
                  icon={<PlayCircleOutlined />}
                  onClick={() => handleOpenModal()}
                >
                  Join class
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WebinarModal
        visible={isOpenModal}
        {...modalData}
        onCancel={handleCloseModal}
      />
    </>
  )
}

export default Webinar
