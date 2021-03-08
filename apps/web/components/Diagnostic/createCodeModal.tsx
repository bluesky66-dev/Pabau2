import React, { FC } from 'react'
import { gql, useMutation } from '@apollo/client'
import { BasicModal, Button, NotificationType, Notification } from '@pabau/ui'
import { useFormik } from 'formik'
import { Form, Input, Checkbox, Typography } from 'antd'
import { EyeOutlined, ArrowUpOutlined } from '@ant-design/icons'

import styles from './common.module.less'
import * as Yup from 'yup'

const ADD_MUTATION = gql`
  mutation insert_diagnostic_codes_one(
    $code: String!
    $description: String!
    $layer1: String!
    $layer2: String!
    $layer3: String!
    $layer4: String!
    $is_active: Boolean
  ) {
    insert_diagnostic_codes_one(
      object: {
        code: $code
        description: $description
        layer1: $layer1
        layer2: $layer2
        layer3: $layer3
        layer4: $layer4
        is_active: $is_active
      }
    ) {
      id
    }
  }
`

export interface CreateCodesetProps {
  visible: boolean
  onCancel: () => void
}

// eslint-disable-next-line @typescript-eslint/ban-types
const CreateCodesetModal: FC<CreateCodesetProps> = ({ visible, onCancel }) => {
  const [addMutation] = useMutation(ADD_MUTATION, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! You have successfully created a Codeset`
      )
    },
    onError(err) {
      Notification(NotificationType.error, `Error! While creating a codeset`)
    },
  })

  const { handleSubmit, setFieldValue, values, handleChange } = useFormik({
    initialValues: {
      code: '',
      layer1: '',
      layer2: '',
      layer3: '',
      layer4: '',
      description: '',
      icd9_code: '',
      icd10_code: '',
      osics10_code: '',
      is_active: true,
    },
    validationSchema: Yup.object({
      description: Yup.string().required('Detail is required'),
      code: Yup.string().required('Code is required'),
    }),
    onSubmit: async (values) => {
      console.log('...', values)
      await addMutation({
        variables: values,
        optimisticResponse: {},
      })
      onCancel()
    },
  })
  return (
    <div>
      <BasicModal
        visible={visible}
        centered={true}
        width="50%"
        footer={null}
        title={`Create Code`}
        newButtonText={'Create'}
        isValidate={true}
        onCancel={() => {
          onCancel()
        }}
        className={styles.createCodeModal}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={() => {
            handleSubmit()
          }}
          className={styles.createCodeForm}
        >
          <div className={styles.basicInfo}>
            <EyeOutlined className={styles.eyeIcon} />
            <Typography className={styles.basicText}>
              Basic Information
            </Typography>
          </div>

          <div className={styles.inputList}>
            <Form.Item
              className={styles.inputBox}
              label="Detail"
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Detail is Required',
                },
              ]}
            >
              <Input
                name="description"
                placeholder="Name"
                value={values.description}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className={styles.inputBox}
              label="Code"
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Code is Required',
                },
              ]}
            >
              <Input
                name="code"
                placeholder="eg. 1001"
                value={values.code}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <div className={styles.inputList}>
            <Form.Item
              className={styles.inputBox}
              label="Layer 1"
              name="layer1"
            >
              <Input
                name="layer1"
                value={values.layer1}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className={styles.inputBox}
              label="Layer 2"
              name="layer2"
            >
              <Input
                name="layer2"
                value={values.layer2}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <div className={styles.inputList}>
            <Form.Item
              className={styles.inputBox}
              label="Layer 3"
              name="layer3"
            >
              <Input
                name="layer3"
                value={values.layer3}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className={styles.inputBox}
              label="Layer 4"
              name="layer4"
            >
              <Input
                name="layer4"
                value={values.layer4}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <div className={styles.advancedInfo}>
          <ArrowUpOutlined className={styles.upIcon}/>
            <Typography className={styles.infoText}>
              Advanced Information
            </Typography>
          </div>

          <div className={styles.advancedList}>
            <Form.Item
              className={styles.inputBox}
              label="ICD9 Code"
              name="icd9_code"
            >
              <Input
                name="icd9_code"
                value={values.icd9_code}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className={styles.inputBox}
              label="ICD10 Code"
              name="icd10_code"
            >
              <Input
                name="icd10_code"
                value={values.icd10_code}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className={styles.inputBox}
              label="OSICS10 Code"
              name="osics10_code"
            >
              <Input
                name="osics10_code"
                value={values.osics10_code}
                onChange={handleChange}
              />
            </Form.Item>
          </div>

          <div className={styles.createCodesetBtn}>
            <Checkbox
              className={styles.checkActivate}
              disabled={false}
              checked={values.is_active}
              onChange={(e) => setFieldValue('is_active', e.target.checked)}
            >
              Active
            </Checkbox>
            <Form.Item>
              <Button
                disabled={!values.code || !values.description}
                className={styles.createBtn}
                type="primary"
                htmlType="submit"
                size="large"
              >
                Create
              </Button>
            </Form.Item>
          </div>
        </Form>
      </BasicModal>
    </div>
  )
}

export default CreateCodesetModal
