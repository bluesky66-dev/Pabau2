import React from 'react'
import { ImageProps } from 'antd/lib/image'

import ProductImage from './ProductImage'

export default {
  component: ProductImage,
  title: 'UI/Product Image',
  args: {
    width: 13,
    height: 13,
  },
}

const ProductImageStory = ({ ...args }: ImageProps): JSX.Element => (
  <ProductImage {...args} />
)

export const ProductWithImage = ProductImageStory.bind({})
ProductWithImage.args = {
  src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
}

export const ProductWithoutImage = ProductImageStory
