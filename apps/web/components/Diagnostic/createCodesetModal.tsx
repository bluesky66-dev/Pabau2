import React, { FC } from 'react'
import { gql, useMutation } from '@apollo/client'
import { BasicModal, Button, NotificationType, Notification } from '@pabau/ui'
import { useFormik } from 'formik'
import { Form, Input, Checkbox } from 'antd'
import styles from './common.module.less'
import * as Yup from 'yup'

const ADD_MUTATION = gql`
  mutation insert_diagnostic_codeset_one($name: String!, $isActive: Boolean) {
    insert_diagnostic_codeset_one(
      object: { name: $name, is_active: $isActive }
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
      name: '',
      is_active: true,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
    }),
    onSubmit: async (values) => {
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
        title={`Create Codeset`}
        newButtonText={'Create'}
        isValidate={true}
        onCancel={() => {
          onCancel()
        }}
        className={styles.createCodesetModal}
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
          className={styles.inputList}
        >
          <Form.Item
            className={styles.inputBox}
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Name Is Required',
              },
            ]}
          >
            <Input
              name="name"
              placeholder="eg. Nail Bar"
              value={values.name}
              onChange={handleChange}
            />
          </Form.Item>
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
                disabled={!values.name}
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
