import React, { FC } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface P {
  pdfURL?: string
  pageNumber: number
  onDocumentLoadSuccess?: ({ numPages: number }) => void
}

const MyEPaper: FC<P> = ({ pdfURL, pageNumber, onDocumentLoadSuccess }) => (
  <Document file={{ url: pdfURL }} onLoadSuccess={onDocumentLoadSuccess}>
    <Page pageNumber={pageNumber} scale={1.3} renderAnnotationLayer={false} />
  </Document>
)
export default MyEPaper
