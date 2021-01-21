import Form from './Form'
import React, { FC, useState } from 'react'
import { BasicModal as Modal } from '@pabau/ui'
import { DocumentNode, useMutation } from '@apollo/client'
import { useFormikContext } from 'formik'

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
  const [deleteMutation] = useMutation(deleteQuery)
  const formik = useFormikContext<unknown>()
  //let formRef: { submitForm: () => void } | null = null
  // const formRef = useEnsuredForwardedRef<{ submitForm: () => void }>(null)

  const schemaForm = { ...schema, fields: { ...schema.fields } }
  const specialFormElement = schemaForm.fields['is_active']
  delete schemaForm.fields['is_active']
  const [specialBoolean, setSpecialBoolean] = useState<boolean>(
    (typeof specialFormElement.default === 'boolean' && specialFormElement.default) || true
  )

  return (
    <Modal
      onCancel={() => onClose?.()}
      onDelete={async () => {
        // eslint-disable-next-line
        const { id } = editingRow as any
        await deleteMutation({
          variables: { id },
          optimisticResponse: {},
          update: (cache) => {
            const existing = cache.readQuery({
              query: listQuery,
            })
            if (existing) {
              // eslint-disable-next-line @typescript-eslint/ban-types
              const key = Object.keys(existing as object)[0]
              cache.writeQuery({
                query: listQuery,
                data: {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  [key]: (existing[key] as Record<string, never>).filter((e) => e.id !== id),
                },
              })
            }
          },
        })
        onClose?.()
      }}
      onOk={() => formik.submitForm()}
      visible={editingRow !== false}
      title={typeof editingRow !== 'object' ? `Create ${schema.full}` : `Edit ${editingRow.name}`}
      newButtonText={typeof editingRow !== 'object' ? `Create ${schema.short}` : 'Edit'}
      // eslint-disable-next-line
      dangerButtonText={(editingRow as any)?.id && `Delete`}
      specialBooleanLabel={!!specialFormElement && 'Active?'}
      specialBooleanValue={specialBoolean}
      onSpecialBooleanClick={() => setSpecialBoolean((e) => !e)}
    >
      <Form
        // ref={formRef} typeof editingRow === 'object' ? editingRow : undefined}
        schema={schemaForm}
        initialValues={typeof editingRow === 'object' ? editingRow : { name: 'erm' }}
        // onSubmit={async (form: Record<string, unknown>) => {
        //   console.log('ONsUBMIT', form)
        //   return
        //   if (specialFormElement) form['is_active'] = specialBoolean
        //   debugger
        //   await addMutation({
        //     variables: form,
        //     optimisticResponse: {},
        //     update: (proxy) => {
        //       if (listQuery) {
        //         const existing = proxy.readQuery({
        //           query: listQuery,
        //         })
        //         if (existing) {
        //           const key = Object.keys(existing)[0]
        //           proxy.writeQuery({
        //             query: listQuery,
        //             data: {
        //               [key]: [...existing[key], form],
        //             },
        //           })
        //         }
        //       }
        //     },
        //   })
        //   onClose?.()
        // }}
      />
    </Modal>
  )
}

export default CrudModal
