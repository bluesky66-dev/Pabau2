import React, { FC, useState, useEffect } from 'react'

import EPaper from './EPaper'

export default {
  component: EPaper,
  title: 'Basics/ePaper',
  args: {
    title: 'Ganog’s-Review-of-Medical-Psysiology.pdf',
    pdfURL:
      'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf?hsLang=en',
    // images: [
    //   'https://demo5.pabau.com/wp-content/uploads/2020/09/gfx-ico-p-products-point-of-sale.svg',
    //   'https://demo5.pabau.com/wp-content/uploads/2020/09/gfx-ico-p-business-e-prescriptions.svg',
    //   'https://demo5.pabau.com/wp-content/uploads/2020/09/gfx-ico-p-products-referral-tracker.svg',
    //   'https://demo5.pabau.com/wp-content/uploads/2020/09/gfx-ico-p-business-client-card.svg',
    // ],
  },
}

export interface P {
  title: string
  pdfURL?: string
  images?: string[]
}

export const EPaperStory: FC<P> = ({ title, pdfURL, images }) => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    if (images && images.length > 0 && !pdfURL) setNumPages(images.length)
    else setNumPages(0)

    setPageNumber(1)
  }, [images, pdfURL])

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const onSetNumPages = (page: number) => {
    setPageNumber(page)
  }

  return (
    <EPaper
      title={title}
      numPages={numPages}
      pageNumber={pageNumber}
      pdfURL={pdfURL}
      images={images}
      onDocumentLoadSuccess={onDocumentLoadSuccess}
      onSetNumPages={onSetNumPages}
    />
  )
}
