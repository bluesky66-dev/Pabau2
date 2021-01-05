import React, { FC, useCallback, useEffect, useState } from 'react'
import { ReactComponent as IllustrationSvg } from './example.svg'
import Menu from '../menu/Menu'
import { Card, Layout as AntLayout, Switch } from 'antd'
import { useRouter } from 'next/router'
import { Button, ButtonTypes } from '../button/button'
import { Header } from '@pabau/ui'

const { Content, Footer } = AntLayout

interface P extends React.HTMLProps<HTMLDivElement> {
  pageTitle?: string
  newButtonText?: string
  onNewClicked?: string | (() => void)
  onCancelClicked?: true | (() => void)
  card?: true
}

export const Layout: FC<P> = ({
  pageTitle = 'Unknown Title',
  newButtonText,
  onNewClicked,
  onCancelClicked,
  card,
  children,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(true)
  const [pageHasLoaded, setPageHasLoaded] = useState(false)
  const router = useRouter()
  const onNewClick = useCallback(() => {
    if (typeof onNewClicked === 'string') {
      router?.push(router.pathname + '/' + onNewClicked)
    }
  }, [router, onNewClicked])
  const onCancelClick = () => {
    if (onCancelClicked === true) router?.back()
    else onCancelClicked?.()
  }
  useEffect(() => {
    setPageHasLoaded(true)
  }, [setPageHasLoaded])

  return (
    <div className={pageHasLoaded ? '' : 'fade-appear'} {...rest}>
      <Header />
      <Menu />
      <Content
        style={{
          padding: '1em',
          boxShadow: 'inset 0 7px 9px -7px rgba(0,0,0,0.5)',
          backgroundColor: '#eee',
          minHeight: 'calc(100vh - 64px - 56px - 60px)',
        }}
      >
        <Content
          style={{
            padding: '1em',
            boxShadow: '0 0px 9px -4px rgba(0,0,0,0.8)',
            borderRadius: '0.5em',
            backgroundColor: '#f4f4f4',
            minHeight: 'calc(100vh - 64px - 56px - 60px - 1em)',
          }}
        >
          {card ? (
            <Card title={pageTitle} style={{ width: '50vmin', margin: '0 auto' }}>
              {children}
            </Card>
          ) : (
            <>
              <h3 style={{ userSelect: 'none' }}>{pageTitle}</h3>
              {newButtonText && onNewClicked && (
                <Button type={ButtonTypes.primary} style={{ float: 'right' }} onClick={onNewClick}>
                  {newButtonText}
                </Button>
              )}
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

      {!onNewClicked && (
        <Footer>
          <div
            style={{
              display: 'flex',
              margin: '0 0',
              textTransform: 'uppercase',
            }}
          >
            <div>
              <Button type={ButtonTypes.default}>Delete</Button>
            </div>
            <div
              style={{
                textAlign: 'right',
                flex: 1,
                textTransform: 'uppercase',
              }}
            >
              <label style={{ userSelect: 'none', cursor: 'pointer' }}>
                Active{' '}
                <Switch
                  onChange={(e) => setIsActive(e)}
                  size="small"
                  defaultChecked
                  style={{ margin: '0 .5em' }}
                  title="yo"
                />
              </label>
              <Button
                type={ButtonTypes.default}
                style={{ margin: '0 .5em' }}
                onClick={onCancelClick}
              >
                Cancel
              </Button>
              <Button type={ButtonTypes.primary} disabled={isActive} style={{ margin: '0 .5em' }}>
                Save
              </Button>
            </div>
          </div>
        </Footer>
      )}
    </div>
  )
}

export default Layout
