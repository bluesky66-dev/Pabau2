import React, { FC, useEffect, useRef } from 'react'
import { Button, Input, Layout } from 'antd'
import {
  CalendarOutlined,
  PoundOutlined,
  SearchOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Dropdown, Logo } from '@pabau/ui'

const { Header } = Layout

export const Header2: FC = () => {
  const searchRef = useRef<Input>(null)
  useEffect(() => {
    window.document.onkeydown = (e) => {
      if (e.ctrlKey && e.code === 'KeyA') {
        e.preventDefault()
        // noinspection BadExpressionStatementJS
        searchRef.current?.focus()
      }
    }
  })
  return (
    <Header
      style={{
        backgroundColor: 'white',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 2,
      }}
    >
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotateX(0deg);
            transform-origin: center;
            opacity: 0;
          }
          to {
            transform: rotateX(360deg);
            transform-origin: center;
          }
        }
        @keyframes spin2 {
          from {
            transform: rotateX(0deg);
            transform-origin: center;
          }
          to {
            transform: rotateX(360deg);
            transform-origin: center;
          }
        }
        .imageSpin {
          display: flex;
        }
        .imageSpin svg .spin {
          //transform: rotateX(0deg);
          animation-name: spin2;
          animation-timing-function: linear;
          animation-fill-mode: both;
          animation-iteration-count: 1;
          animation-duration: 0.8s;
        }
        .imageSpin:hover {
        }
        .imageSpin:hover svg .spin {
          animation-iteration-count: infinite;
          animation-duration: 5s;
          animation-name: spin2;
          animation-play-state: running;
        }
        .animation-delay-1 {
          animation-delay: 0s;
        }
        .animation-delay-2 {
          animation-delay: 0.1s;
        }
        .animation-delay-3 {
          animation-delay: 0.2s;
        }
        .animation-delay-4 {
          animation-delay: 0.3s;
        }
        .animation-delay-5 {
          animation-delay: 0.4s;
        }

        .imageSpin:hover .animation-delay-1 {
          animation-delay: 0s;
        }
        .imageSpin:hover .animation-delay-2 {
          animation-delay: 1s;
        }
        .imageSpin:hover .animation-delay-3 {
          animation-delay: 2s;
        }
        .imageSpin:hover .animation-delay-4 {
          animation-delay: 3s;
        }
        .imageSpin:hover .animation-delay-5 {
          animation-delay: 4s;
        }

        .button.ant-btn-primary {
          border-color: transparent;
          color: black;
          margin: 0 0.1em;
          background-color: transparent;
        }
        .button.ant-btn-primary:hover {
          border-color: #1890ff;
        }

        .searchBox {
          margin-left: 1em;
          margin-right: 1em;
          flex: 1;
        }

        .searchBox .searchBoxInner {
          //display: none;
        }
        .searchBoxIcon {
          font-size: 1.8em;
          z-index: 2;
          position: absolute;
          line-height: 70px;
          cursor: pointer;
        }
        .searchBoxInner:not(:hover) {
          border-color: transparent;
        }
        .searchBox:focus-within .searchBoxIcon {
          color: rgba(0, 0, 0, 0);
          transition: 0.2s linear;
        }
      `}</style>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/*{screenfull.isEnabled && (*/}
        {/*  <Button*/}
        {/*    type="ghost"*/}
        {/*    style={{ borderRadius: 5 }}*/}
        {/*    shape="round"*/}
        {/*    icon={<ExpandOutlined />}*/}
        {/*    className="button"*/}
        {/*    size="large"*/}
        {/*    onClick={() => {*/}
        {/*      if (screenfull.isEnabled) screenfull.toggle()*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}

        <Logo className="imageSpin" />
        <div className="searchBox">
          <label>
            <SearchOutlined className="searchBoxIcon" />
            <Input allowClear className="searchBoxInner" />
          </label>
        </div>

        <div style={{ textAlign: 'right', float: 'right', width: 'min-content' }}>
          <Dropdown>
            <Button
              style={{ borderRadius: 5 }}
              type="primary"
              shape="round"
              size="large"
              className="button"
            >
              + Create
              {/*Create <DownOutlined/>*/}
            </Button>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default Header2
