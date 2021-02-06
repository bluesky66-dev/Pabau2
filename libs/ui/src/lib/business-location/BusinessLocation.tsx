import React, { FC, useState, useEffect, useCallback } from 'react'
import { Row, Col, Modal } from 'antd'
import fetch from 'node-fetch'
import { Input } from '@pabau/ui'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import styles from './BusinessLocation.module.less'

interface AddressDetails {
  address?: string
  apt?: string
  postcode?: string
  city?: string
  region?: string
  country?: string
}

export interface BusinessLocationProps {
  value?: string
  onChange?(address, detailedAddress): void
}

const apiKey = process.env.google_api_key

export const BusinessLocation: FC<BusinessLocationProps> = ({
  value,
  onChange,
}) => {
  const [location, setLocation] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [detail, setDetail] = useState<AddressDetails>({})
  const [detailForModal, setDetailForModal] = useState<AddressDetails>({})
  const handleChange = useCallback(
    (address) => {
      setLocation(address)
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(
          /\s/g,
          '+'
        )}&key=${apiKey}`
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          if (res.status === 'OK') {
            const addressComponents = res.results[0].address_components
            const streetNumber = addressComponents.find((item) =>
              item.types.includes('street_number')
            )
            const route = addressComponents.find((item) =>
              item.types.includes('route')
            )
            const locality = addressComponents.find((item) =>
              item.types.includes('locality')
            )
            const area1 = addressComponents.find((item) =>
              item.types.includes('administrative_area_level_1')
            )
            const area2 = addressComponents.find((item) =>
              item.types.includes('administrative_area_level_2')
            )
            const country = addressComponents.find((item) =>
              item.types.includes('country')
            )
            const postcode = addressComponents.find((item) =>
              item.types.includes('postal_code')
            )
            const detailedAddress: AddressDetails = {
              address: route ? route.long_name : '',
              postcode: postcode ? postcode.long_name : '',
              city: locality
                ? locality.long_name
                : area2
                ? area2.long_name
                : '',
              region: [
                area1 ? area1.long_name : '',
                area2 ? area2.long_name : '',
              ].join(', '),
              country: country ? country.long_name : '',
              apt: streetNumber ? streetNumber.long_name : '',
            }
            console.log('get detailed information', detailedAddress)
            setDetail(detailedAddress)
            if (onChange) onChange(address, detailedAddress)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    [onChange]
  )

  useEffect(() => {
    if (value) {
      setLocation(value)
      handleChange(value)
    }
  }, [value, handleChange])

  useEffect(() => {
    console.log('detailForModal changed >>>', detailForModal)
  }, [detailForModal])

  return (
    <div className={styles.businessLocationContainer}>
      <p>Where is your business located?</p>
      <GooglePlacesAutocomplete
        apiKey={apiKey}
        initialValue={location}
        onSelect={(result) => handleChange(result.description)}
      />
      <div className={styles.businessLocationDetails}>
        <p
          className={styles.locationItemEdit}
          onClick={() => {
            setShowModal(true)
            setDetailForModal(detail)
          }}
        >
          Edit
        </p>
        <Row gutter={[24, 24]} style={{ marginBottom: 0 }}>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <div className={styles.locationItem}>
              <p className={styles.locationItemTitle}>Address</p>
              {detail.address && (
                <p className={styles.locationItemValue}>{detail.address}</p>
              )}
              {!detail.address && (
                <p
                  className={styles.locationItemAdd}
                  onClick={() => {
                    setShowModal(true)
                    setDetailForModal(detail)
                  }}
                >
                  + Add
                </p>
              )}
            </div>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <div className={styles.locationItem}>
              <p className={styles.locationItemTitle}>Apt./Suite etc.</p>
              {detail.apt && (
                <p className={styles.locationItemValue}>{detail.apt}</p>
              )}
              {!detail.apt && (
                <p
                  className={styles.locationItemAdd}
                  onClick={() => {
                    setShowModal(true)
                    setDetailForModal(detail)
                  }}
                >
                  + Add
                </p>
              )}
            </div>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <div className={styles.locationItem}>
              <p className={styles.locationItemTitle}>Postcode</p>
              {detail.postcode && (
                <p className={styles.locationItemValue}>{detail.postcode}</p>
              )}
              {!detail.postcode && (
                <p
                  className={styles.locationItemAdd}
                  onClick={() => {
                    setShowModal(true)
                    setDetailForModal(detail)
                  }}
                >
                  + Add
                </p>
              )}
            </div>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <div className={styles.locationItem}>
              <p className={styles.locationItemTitle}>City</p>
              {detail.city && (
                <p className={styles.locationItemValue}>{detail.city}</p>
              )}
              {!detail.city && (
                <p
                  className={styles.locationItemAdd}
                  onClick={() => {
                    setShowModal(true)
                    setDetailForModal(detail)
                  }}
                >
                  + Add
                </p>
              )}
            </div>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <div className={styles.locationItem}>
              <p className={styles.locationItemTitle}>Region</p>
              {detail.region && (
                <p className={styles.locationItemValue}>{detail.region}</p>
              )}
              {!detail.region && (
                <p
                  className={styles.locationItemAdd}
                  onClick={() => {
                    setShowModal(true)
                    setDetailForModal(detail)
                  }}
                >
                  + Add
                </p>
              )}
            </div>
          </Col>
          <Col className="gutter-row" lg={6} sm={12} xs={12}>
            <div className={styles.locationItem}>
              <p className={styles.locationItemTitle}>Country</p>
              {detail.country && (
                <p className={styles.locationItemValue}>{detail.country}</p>
              )}
              {!detail.country && (
                <p
                  className={styles.locationItemAdd}
                  onClick={() => {
                    setShowModal(true)
                    setDetailForModal(detail)
                  }}
                >
                  + Add
                </p>
              )}
            </div>
          </Col>
        </Row>
        {showModal && (
          <Modal
            title="Edit Business Location"
            visible={showModal}
            onOk={() => {
              setDetail(detailForModal)
              setShowModal(false)
            }}
            onCancel={() => {
              setDetailForModal(detail)
              setShowModal(false)
            }}
          >
            <Row gutter={[24, 24]}>
              <Col className="gutter-row" xs={24} sm={12}>
                <Input
                  label="Address"
                  text={detailForModal.address}
                  onChange={(val) =>
                    setDetailForModal({ ...detailForModal, address: val })
                  }
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Input
                  label="Apt./Suite etc."
                  text={detailForModal.apt}
                  onChange={(val) =>
                    setDetailForModal({ ...detailForModal, apt: val })
                  }
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Input
                  label="Postcode"
                  text={detailForModal.postcode}
                  onChange={(val) =>
                    setDetailForModal({ ...detailForModal, postcode: val })
                  }
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Input
                  label="City"
                  text={detailForModal.city}
                  onChange={(val) =>
                    setDetailForModal({ ...detailForModal, city: val })
                  }
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Input
                  label="Region"
                  text={detailForModal.region}
                  onChange={(val) =>
                    setDetailForModal({ ...detailForModal, region: val })
                  }
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12}>
                <Input
                  label="Country"
                  text={detailForModal.country}
                  onChange={(val) =>
                    setDetailForModal({ ...detailForModal, country: val })
                  }
                />
              </Col>
            </Row>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default BusinessLocation
