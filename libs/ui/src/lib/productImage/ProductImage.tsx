import React, { FC } from 'react'
import { Image } from 'antd'
import { ImageProps } from 'antd/lib/image'
import Shop from '../../assets/images/shop.svg'

export const ProductImage: FC<ImageProps> = ({ src, ...props }) => {
  return (
    <Image
      preview={false}
      src={src ? src : Shop}
      {...props}
      fallback={Shop}
      alt={'Product logo'}
    />
  )
}

export default ProductImage
