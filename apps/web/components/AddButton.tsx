import { DocumentNode, useMutation } from '@apollo/client'
import React, { FC, useState } from 'react'
import { BasicModal as Modal, Button } from '@pabau/ui'
import Form from './Form'
import { useKeyPressEvent } from 'react-use'

interface P {
  schema: Schema
  addQuery: DocumentNode
  listQuery: DocumentNode
  newButtonText?: string
}
const AddButton: FC<P> = ({
  schema,
  addQuery,
  listQuery,
  newButtonText = 'Create ' + schema.short,
}) => {
  const [addMutation] = useMutation(addQuery)
  const [modalShowing, setModalShowing] = useState(false)
  let formRef: { submitForm: () => void } | null = null
  useKeyPressEvent('n', () => {
    setModalShowing(true)
  })
  return (
    <>
      <Button
        style={{ position: 'absolute', top: 0, right: 0, margin: '1em 28px' }}
        type="primary"
        onClick={() => setModalShowing(true)}
      >
        {newButtonText}
      </Button>
      <Modal
        onCancel={() => setModalShowing(false)}
        onOk={() => formRef?.submitForm()}
        visible={modalShowing}
        title={`Create ${schema.full}`}
        newButtonText={`Create ${schema.short}`}
      >
        <Form
          onRef={(ref) => {
            formRef = ref
          }}
          schema={schema}
          onSubmit={async (form: Record<string, unknown>) => {
            await addMutation({
              variables: form,
              optimisticResponse: {},
              update: (proxy) => {
                if (listQuery) {
                  const existing = proxy.readQuery({
                    query: listQuery,
                  })
                  if (existing) {
                    const key = Object.keys(existing)[0]
                    proxy.writeQuery({
                      query: listQuery,
                      data: {
                        [key]: [...existing[key], form],
                      },
                    })
                  }
                }
              },
            })
            setModalShowing(false)
          }}
        />
      </Modal>
    </>
  )
}

export default AddButton
