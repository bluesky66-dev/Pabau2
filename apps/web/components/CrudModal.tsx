import Form from './Form'
import React, { FC, useEffect, useState } from 'react'
import { BasicModal as Modal, Notification, NotificationType } from '@pabau/ui'
import { DocumentNode, useMutation } from '@apollo/client'
import { useFormikContext } from 'formik'
interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editingRow?: Record<string, string | boolean | number>
  onClose?: () => void
}

const CrudModal: FC<P> = ({
  schema,
  addQuery,
  deleteQuery,
  listQuery,
  onClose,
  editingRow,
}) => {
  const [openDeleteModal, setDeleteModal] = useState(false)
  const [deleteMutation] = useMutation(deleteQuery, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! ${schema.messages.delete.success}`
      )
    },
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! ${schema.messages.delete.error}`
      )
    },
  })
  const formik = useFormikContext<unknown>()

  //let formRef: { submitForm: () => void } | null = null
  // const formRef = useEnsuredForwardedRef<{ submitForm: () => void }>(null)

  const schemaForm = { ...schema, fields: { ...schema.fields } }
  const specialFormElement = schemaForm.fields['is_active']
  delete schemaForm.fields['is_active']
  const [specialBoolean, setSpecialBoolean] = useState<boolean>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (editingRow?.id && editingRow?.is_active) ??
      (typeof specialFormElement?.defaultvalue === 'boolean' &&
        specialFormElement.defaultvalue) ??
      true
  )

  useEffect(() => {
    setSpecialBoolean(
      (editingRow?.id && (editingRow?.is_active as boolean)) ??
        (typeof specialFormElement?.defaultvalue === 'boolean' &&
          (specialFormElement.defaultvalue as boolean)) ??
        true
    )
  }, [editingRow, specialFormElement])

  console.log('formik', formik)
  console.log('schemaForm', schemaForm)

  return (
    <>
      <Modal
        modalWidth={682}
        centered={true}
        onCancel={() => {
          setDeleteModal(false)
          onClose?.()
        }}
        onOk={async () => {
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
                    [key]: (existing[key] as Record<string, never>).filter(
                      (e) => e.id !== id
                    ),
                  },
                })
              }
            },
          })
          setDeleteModal(false)
          onClose?.()
        }}
        visible={openDeleteModal}
        title={`Delete ${schema.short}?`}
        newButtonText={schema.deleteBtnLabel || 'Yes, Delete'}
        isValidate={true}
      >
        <span
          style={{
            fontFamily: 'Circular-Std-Book',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#9292A3',
          }}
        >
          {editingRow?.name} will be deleted. This action is irreversable
        </span>
      </Modal>
      <Modal
        modalWidth={682}
        centered={true}
        onCancel={() => {
          onClose?.()
          formik.resetForm()
        }}
        onDelete={() => setDeleteModal(true)}
        onOk={() => formik.submitForm()}
        visible={!openDeleteModal}
        title={
          typeof editingRow === 'object' && editingRow.isCreate
            ? `Create ${schema.full}`
            : `Edit ${schema.full}`
        }
        newButtonText={
          typeof editingRow === 'object' && editingRow.isCreate
            ? `Create`
            : 'Save'
        }
        // eslint-disable-next-line
        dangerButtonText={editingRow?.id && `Delete`}
        specialBooleanLabel={!!specialFormElement && 'Active'}
        specialBooleanValue={specialBoolean}
        onSpecialBooleanClick={() => {
          setSpecialBoolean((e) => !e)
          if (editingRow) {
            editingRow.is_active = !specialBoolean
          }
        }}
        isValidate={
          editingRow?.isCreate ? formik.dirty && formik.isValid : formik.isValid
        }
      >
        <Form
          // ref={formRef} typeof editingRow === 'object' ? editingRow : undefined}
          values={formik.values}
          schema={schemaForm}
          // initialValues={typeof editingRow === 'object' ? editingRow : { name: 'erm' }}
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
    </>
  )
}

export default CrudModal
