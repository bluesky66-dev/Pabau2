import React from 'react'
import { Form, Input } from 'formik-antd'
import { Formik } from 'formik'

import {
  Button,
  Notification,
  NotificationType,
  PhoneNumberInput,
} from '@pabau/ui'
import { emergencyData } from '../../../../mocks/UserDetail'
import styles from '../UserDetail.module.less'

const Emergency = () => {
  const { primaryDetail, doctorDetail, secondaryDetail } = emergencyData

  return (
    <Formik
      initialValues={{
        primaryContactName: primaryDetail.primaryContactName,
        relationship: primaryDetail.relationship,
        address: primaryDetail.address,
        secondaryAddress: primaryDetail.secondaryAddress,
        city: primaryDetail.city,
        postcode: primaryDetail.postcode,
        mobilePhone: primaryDetail.mobilePhone,
        homePhone: primaryDetail.homePhone,
        workPhone: primaryDetail.workPhone,
        doctorName: doctorDetail.doctorName,
        doctorPhone: doctorDetail.phone,
        notes: doctorDetail.notes,
        secondaryContactName: secondaryDetail.secondaryContactName,
        secRelationship: secondaryDetail.relationship,
        secAddress: secondaryDetail.address,
        secSecondaryAddress: secondaryDetail.secondaryAddress,
        secCity: secondaryDetail.city,
        secPostcode: secondaryDetail.postcode,
        secMobilePhone: secondaryDetail.mobilePhone,
        secHomePhone: secondaryDetail.homePhone,
        secWorkPhone: secondaryDetail.workPhone,
      }}
      onSubmit={() => {
        Notification(NotificationType.success, 'Success! Saved changes.')
      }}
      render={({ setFieldValue, handleSubmit }) => (
        <Form layout="vertical">
          <div className={styles.emergencyMainWrapper}>
            <div className={styles.emergencyHead}>
              <h4>Emergency</h4>
              <div className={styles.emergencyHeadBtn}>
                <Button
                  htmlType={'submit'}
                  className={styles.saveBtn}
                  onClick={() => handleSubmit}
                >
                  Save changes
                </Button>
              </div>
            </div>
            <div className={styles.upperWrapper}>
              <div className={styles.emergencyFormWrapper}>
                <div className={styles.emergencyTwoColumn}>
                  <Form.Item
                    label={'Primary Contact Name'}
                    name={'primaryContactName'}
                  >
                    <Input name={'primaryContactName'} />
                  </Form.Item>
                  <Form.Item label={'Relationship'} name={'relationship'}>
                    <Input name={'relationship'} />
                  </Form.Item>
                </div>
                <Form.Item label={'Address'} name={'address'}>
                  <Input name={'address'} />
                </Form.Item>
                <Form.Item
                  label={'Secondary Address'}
                  name={'secondaryAddress'}
                >
                  <Input name={'secondaryAddress'} />
                </Form.Item>
                <div className={styles.emergencyTwoColumn}>
                  <Form.Item label={'City'} name={'city'}>
                    <Input name={'city'} />
                  </Form.Item>
                  <Form.Item label={'Postcode'} name={'postcode'}>
                    <Input name={'postcode'} />
                  </Form.Item>
                </div>
                <Form.Item name={'mobilePhone'}>
                  <PhoneNumberInput
                    label={'Mobile Phone'}
                    onChange={(value) => {
                      setFieldValue('mobilePhone', value)
                    }}
                  />
                </Form.Item>
                <div className={styles.emergencyTwoColumn}>
                  <Form.Item name={'homePhone'}>
                    <PhoneNumberInput
                      label={'Home Phone'}
                      onChange={(value) => {
                        setFieldValue('homePhone', value)
                      }}
                    />
                  </Form.Item>
                  <Form.Item name={'workPhone'}>
                    <PhoneNumberInput
                      label={'Work Phone'}
                      onChange={(value) => {
                        setFieldValue('workPhone', value)
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className={styles.doctorWrapper}>
                <div className={styles.doctorTitle}>Doctor Details</div>
                <Form.Item label={'Doctor Name'} name={'doctorName'}>
                  <Input name={'doctorName'} />
                </Form.Item>
                <Form.Item name={'doctorPhone'}>
                  <PhoneNumberInput
                    label={'Phone'}
                    onChange={(value) => {
                      setFieldValue('doctorPhone', value)
                    }}
                  />
                </Form.Item>
                <Form.Item label={'Notes'} name={'notes'}>
                  <Input.TextArea name={'notes'} rows={3} />
                </Form.Item>
              </div>
            </div>
            <div className={styles.secondaryFormWrapper}>
              <div className={styles.emergencyFormWrapper}>
                <div className={styles.emergencyTwoColumn}>
                  <Form.Item
                    label={'Secondary Contact Name'}
                    name={'secondaryContactName'}
                  >
                    <Input name={'secondaryContactName'} />
                  </Form.Item>
                  <Form.Item
                    label={'Relationship'}
                    name={'detailSecRelationship'}
                  >
                    <Input name={'detailSecondaryRelationship'} />
                  </Form.Item>
                </div>
                <Form.Item label={'Address'} name={'secAddress'}>
                  <Input name={'secAddress'} />
                </Form.Item>
                <Form.Item
                  label={'Secondary Address'}
                  name={'secSecondaryAddress'}
                >
                  <Input name={'secSecondaryAddress'} />
                </Form.Item>
                <div className={styles.emergencyTwoColumn}>
                  <Form.Item label={'City'} name={'secCity'}>
                    <Input name={'secCity'} />
                  </Form.Item>
                  <Form.Item label={'Postcode'} name={'secPostcode'}>
                    <Input name={'secPostcode'} />
                  </Form.Item>
                </div>
                <Form.Item name={'secMobilePhone'}>
                  <PhoneNumberInput
                    label={'Mobile Phone'}
                    onChange={(value, valid) => {
                      setFieldValue('secMobilePhone', value)
                    }}
                  />
                </Form.Item>
                <div className={styles.emergencyTwoColumn}>
                  <Form.Item name={'secHomePhone'}>
                    <PhoneNumberInput
                      label={'Home Phone'}
                      onChange={(value) => {
                        setFieldValue('secHomePhone', value)
                      }}
                    />
                  </Form.Item>
                  <Form.Item name={'secWorkPhone'}>
                    <PhoneNumberInput
                      label={'Work Phone'}
                      onChange={(value) => {
                        setFieldValue('secWorkPhone', value)
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    />
  )
}

export default Emergency
