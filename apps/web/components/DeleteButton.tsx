import { DocumentNode, useMutation } from '@apollo/client'
import React, { FC } from 'react'
import { Button } from '@pabau/ui'

interface P {
  id: string
  deleteQuery: DocumentNode
  listQuery: DocumentNode
  deleteButtonText?: string
}
const DeleteButton: FC<P> = ({ id, deleteQuery, listQuery, deleteButtonText = 'Delete' }) => {
  const [deleteMutation] = useMutation(deleteQuery)
  return (
    <Button
      type="primary"
      danger={true}
      onClick={() => {
        deleteMutation({
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
      }}
    >
      {deleteButtonText}
    </Button>
  )
}

export default DeleteButton
