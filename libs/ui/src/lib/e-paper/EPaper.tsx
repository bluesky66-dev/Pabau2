import React, { FC } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import styles from './EPaper.module.less'

export interface EPaperProps {
  title: string
  numPages: number
  pageNumber: number
  onSetNumPages: (page) => void
  pdfURL?: string
  images?: string[]
  onDocumentLoadSuccess?: ({ numPages: number }) => void
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const EPaper: FC<EPaperProps> = ({
  title,
  pdfURL,
  images,
  numPages,
  pageNumber,
  onSetNumPages,
  onDocumentLoadSuccess,
}) => {
  return (
    <div className={styles.ePaper}>
      {(pdfURL || images?.length) && (
        <>
          <div className={styles.ePaperHeader}>
            <span className={styles.ePaperTitle}>{title}</span>
            <div className={styles.ePaperPage}>
              <span>Page</span>
              <div className={styles.ePaperPageNumber}>
                <span>{pageNumber}</span>
              </div>
              <span className={styles.numPages}>/{numPages}</span>
              <span
                onClick={() =>
                  pageNumber !== 1 && onSetNumPages?.(pageNumber - 1)
                }
                className={styles.navigation}
              >
                <LeftOutlined className={styles.prevPage} />
                Prev Page
              </span>
              <span
                onClick={() =>
                  pageNumber !== numPages && onSetNumPages?.(pageNumber + 1)
                }
                className={styles.navigation}
              >
                Next Page
                <RightOutlined className={styles.nextPage} />
              </span>
            </div>
          </div>
          <div className={styles.ePaperContent}>
            {pdfURL ? (
              <Document
                file={{ url: pdfURL }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  pageNumber={pageNumber}
                  scale={1.3}
                  renderAnnotationLayer={false}
                />
              </Document>
            ) : (
              images &&
              images.length > 0 && (
                <div className={styles.ePaperImage}>
                  <img
                    src={images[pageNumber - 1]}
                    alt={images[pageNumber - 1]}
                  />
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default EPaper