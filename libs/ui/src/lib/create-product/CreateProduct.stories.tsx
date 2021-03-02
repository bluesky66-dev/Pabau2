import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { CreateProduct } from './CreateProduct'

export default {
  title: 'Modals/CreateProduct',
  component: CreateProduct,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

export const CreateProductStory: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Create product
      </Button>
      <CreateProduct
        categories={[]}
        taxNames={[]}
        supplierNames={[]}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
