import React, { FC } from 'react'
import { ReactComponent as IllustrationSvg } from './example.svg'
import { Card, Layout as AntLayout } from 'antd'
import { Header, Sidebar } from '@pabau/ui'

const { Content } = AntLayout
export interface LayoutProps {
  pageTitle?: string
  newButtonText?: string
  onNewClicked?: string | (() => void)
  onCancelClicked?: true | (() => void)
  card?: true
  searchRender?: (innerComponent: JSX.Element) => JSX.Element
}

export const Layout: FC<LayoutProps> = ({
  searchRender,
  pageTitle,
  newButtonText,
  onNewClicked,
  onCancelClicked,
  card,
  children,
  ...rest
}) => {
  return (
    <div {...rest}>
      <AntLayout>
        <Header searchRender={searchRender} />
        <AntLayout>
          <Sidebar />
          <Content
            style={{
              borderTop: '2px solid #f3f5fb',
              padding: '32px',
              //minHeight: 'calc(100vh - 64px - 56px - 60px)',
            }}
          >
            <Content
              style={{
                padding: '1em',
                boxShadow: '0 0.5rem 1rem rgba(0,0,0,.1)',
                //minHeight: 'calc(100vh - 64px - 56px - 60px - 1em)',
                position: 'relative',
              }}
            >
              {card ? (
                <Card title={pageTitle} style={{ width: '50vmin', margin: '0 auto' }}>
                  {children}
                </Card>
              ) : (
                <>
                  {pageTitle && <h1>{pageTitle}</h1>}
                  {children}
                </>
              )}
            </Content>
          </Content>

          {onNewClicked && (
            <Content
              style={{
                padding: '1em',
                boxShadow: '0 0px 9px -4px rgba(0,0,0,0.8)',
                borderRadius: '0.5em',
                backgroundColor: '#f4f4f4',
                position: 'relative',
                marginBottom: '0',
              }}
            >
              <h4>Related guides</h4>
              <ul>
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>Setting up a Marketing Source</a>
                </li>
              </ul>
              <div
                style={{
                  position: 'absolute',
                  top: '-2em',
                  right: '0px',
                  left: '50%',
                  bottom: '0',
                  overflow: 'hidden',
                }}
              >
                <IllustrationSvg width={600} height={200} />
              </div>
            </Content>
          )}
        </AntLayout>
      </AntLayout>
    </div>
  )
}

export default Layout
