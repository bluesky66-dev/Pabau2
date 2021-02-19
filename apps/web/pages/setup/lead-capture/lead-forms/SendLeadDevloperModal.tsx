import React from 'react'
import { Formik } from 'formik'
import { Form as AntForm, Input } from 'formik-antd'
import styles from './Lead-forms.module.less'
import { BasicModal as Modal, ButtonTypes } from '@pabau/ui'

interface SendLeadDevloperModalInterface {
  openModal: boolean
  onSendToDeveloper: () => void
  onClose: () => void
}
export const SendLeadDevloperModal: React.FC<SendLeadDevloperModalInterface> = ({
  openModal,
  onSendToDeveloper,
  onClose,
}) => {
  return (
    <Modal
      modalWidth={682}
      centered={true}
      onOk={onSendToDeveloper}
      closable={true}
      onCancel={onClose}
      visible={openModal}
      title={'Send To Developer'}
      newButtonText={'Send'}
      btnType={ButtonTypes.default}
    >
      <Formik
        enableReinitialize={true}
        onSubmit={(values, { resetForm }) => {
          console.log('formik onsubmit', values)
        }}
        initialValues={{ email: '' }}
      >
        <AntForm
          layout={'vertical'}
          requiredMark={false}
          className={styles.clinicLeadCaptureForm}
        >
          <AntForm.Item
            label={'email'}
            name={'email'}
            className={styles.clinicLabelStyle}
            rules={[
              {
                required: true,
                message: `* required email`,
              },
            ]}
          >
            <Input name={'email'} placeholder={'client@email.com'} autoFocus />
          </AntForm.Item>
        </AntForm>
      </Formik>
    </Modal>
  )
}

export default SendLeadDevloperModal
