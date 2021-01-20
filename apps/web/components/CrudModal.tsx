import Form from './Form'
import React, { FC, useState } from 'react'
import { BasicModal as Modal } from '../../../libs/ui/src/lib/modal/basicmodal'
import { DocumentNode, useMutation } from '@apollo/client'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editingRow?: Record<string, string | boolean | number> | false
  onClose?: () => void
}

const CrudModal: FC<P> = ({ schema, addQuery, deleteQuery, listQuery, onClose, editingRow }) => {
  // const [modalShowing, setModalShowing] = useState<P['editingRow'] | false>(false)
  const [addMutation] = useMutation(addQuery)
  const [specialBoolean, setSpecialBoolean] = useState(true)

  let formRef: { submitForm: () => void } | null = null

  const schemaForm = { ...schema, fields: { ...schema.fields } }
  const specialFormElement = schemaForm.fields['is_active']
  delete schemaForm.fields['is_active']

  return (
    <Modal
      onCancel={() => onClose?.()}
      onOk={() => formRef?.submitForm()}
      visible={editingRow !== false}
      title={typeof editingRow !== 'object' ? `Create ${schema.full}` : `Edit row`}
      newButtonText={typeof editingRow !== 'object' ? `Create ${schema.short}` : 'Edit'}
      specialBooleanLabel={!!specialFormElement && 'Active?'}
      specialBooleanValue={specialBoolean}
      onSpecialBooleanClick={() => setSpecialBoolean((e) => !e)}
    >
      <Form
        onRef={(ref) => {
          formRef = ref
        }}
        schema={schemaForm}
        initialValues={editingRow && editingRow}
        onSubmit={async (form: Record<string, unknown>) => {
          console.log(form)
          return
          if (specialFormElement) form['is_active'] = specialBoolean
          debugger
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
          onClose?.()
        }}
      />
    </Modal>
  )
}

export default CrudModal
