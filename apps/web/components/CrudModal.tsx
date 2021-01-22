import Form from './Form'
import React, { FC, useEffect, useState } from 'react'
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
  const [openDeleteModal, setDeleteModal] = useState(false)
  const [deleteMutation] = useMutation(deleteQuery)
  const formik = useFormikContext<unknown>()
  //let formRef: { submitForm: () => void } | null = null
  // const formRef = useEnsuredForwardedRef<{ submitForm: () => void }>(null)

  const schemaForm = { ...schema, fields: { ...schema.fields } }
  const specialFormElement = schemaForm.fields['is_active']
  delete schemaForm.fields['is_active']
  const [specialBoolean, setSpecialBoolean] = useState<boolean>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (editingRow && editingRow.id && editingRow.is_active) ??
      (typeof specialFormElement?.default === 'boolean' && specialFormElement.default) ??
      true
  )

  useEffect(() => {
    setSpecialBoolean(
      (editingRow && editingRow.id && (editingRow.is_active as boolean)) ??
        (typeof specialFormElement?.default === 'boolean' &&
          (specialFormElement.default as boolean)) ??
        true
    )
  }, [editingRow, specialFormElement])

  console.log('editingRow', editingRow)
  console.log(
    'initial value of specialBoolean set to',
    (editingRow && editingRow.id && editingRow.is_active) ??
      (typeof specialFormElement?.default === 'boolean' && specialFormElement.default) ??
      true
  )
  console.log('currently is', specialBoolean)

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
                    [key]: (existing[key] as Record<string, never>).filter((e) => e.id !== id),
                  },
                })
              }
            },
          })
          setDeleteModal(false)
          onClose?.()
        }}
        visible={openDeleteModal}
        title={'Delete Marketing Source?'}
        newButtonText={'Yes, delete source'}
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
          {editingRow && editingRow?.name} will be deleted. This action is irreversable
        </span>
      </Modal>
      <Modal
        modalWidth={682}
        centered={true}
        onCancel={() => onClose?.()}
        onDelete={() => setDeleteModal(true)}
        onOk={() => formik.submitForm()}
        visible={editingRow !== false && !openDeleteModal}
        title={
          typeof editingRow === 'object' && editingRow.isCreate
            ? `Create ${schema.full}`
            : `Edit ${schema.full}`
        }
        newButtonText={typeof editingRow === 'object' && editingRow.isCreate ? `Create` : 'Save'}
        // eslint-disable-next-line
        dangerButtonText={(editingRow as any)?.id && `Delete`}
        specialBooleanLabel={!!specialFormElement && 'Activate'}
        specialBooleanValue={specialBoolean}
        onSpecialBooleanClick={() => {
          setSpecialBoolean((e) => !e)
          if (editingRow) {
            editingRow.is_active = !specialBoolean
          }
        }}
      >
        <Form
          // ref={formRef} typeof editingRow === 'object' ? editingRow : undefined}
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
