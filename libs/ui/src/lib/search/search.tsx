import React, { FC, HTMLProps, useEffect, useRef, useState } from 'react'
import styles from './search.less'
import { Input, Popover, Avatar, Image, Modal, Form, Button } from 'antd'
import {
  SearchOutlined,
  UserAddOutlined,
  RightOutlined,
  LeftOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import User from '../../assets/images/user.png'
import User1 from '../../assets/images/user1.png'
import User2 from '../../assets/images/user2.png'
import User3 from '../../assets/images/user3.png'
import User4 from '../../assets/images/user4.png'
import User5 from '../../assets/images/user5.png'

type P = HTMLProps<HTMLDivElement>

export const Search: FC<P> = ({ ...props }) => {
  const [searchText, setSearchText] = useState('')
  const [searchPopUp, setSearchPopUp] = useState(false)
  const [searchTab, setSearchTab] = useState('Clients')
  const [advanceSearch, setAdvanceSearch] = useState(false)

  const [form] = Form.useForm()

  const searchRef = useRef<Input>(null)
  useEffect(() => {
    window.document.onkeydown = (e) => {
      console.log('state', searchRef.current?.state)
      console.log('code', e.code)
      if (
        !searchRef.current?.state.focused &&
        (e.code === 'KeyS' || (e.ctrlKey && e.code === 'KeyF'))
      ) {
        e.preventDefault()
        searchRef.current?.focus()
      } else if (searchRef.current?.state.focused && e.code === 'Escape') {
        e.preventDefault()
        searchRef.current?.blur()
      }
    }
  })

  const searchMenu = () => {
    return (
      <div className="search-box">
        <div className="cus-tabs">
          <button
            className={`cus-tab-design ${searchTab === 'Clients' && 'active-tabs'}`}
            onClick={() => setSearchTab('Clients')}
          >
            Clients
          </button>
          <button
            className={`cus-tab-design ${searchTab === 'Leads' && 'active-tabs'}`}
            onClick={() => setSearchTab('Leads')}
          >
            Leads
          </button>
        </div>
        {searchTab === 'Clients' && (
          <div style={{ marginTop: '15px' }}>
            <div className="result-text">
              <h1> TOP RESULT </h1>
            </div>

            <div className="content-align-profile">
              <div className="client-profile">
                <Avatar size={40} src={<Image src={User} />} />
              </div>
              <div className="client-profile-text">
                <h1>Whitney Jameson</h1>
                <p>3893312</p>
              </div>
            </div>
            <div className="result-text result-text-top-space">
              <h1> All results </h1>
            </div>
            {searchResult.map((result, index) => {
              return (
                <div key={index} className="content-align-profile">
                  <div className="client-profile">
                    <Avatar size={40} src={<Image src={result.profileURL} />} />
                  </div>
                  <div className="client-profile-text">
                    <h1>{result.clientName}</h1>
                    <p>{result.follower}</p>
                  </div>
                </div>
              )
            })}
            <div className="content-align-profile">
              <div className="client-profile">
                <Avatar size={40} icon={<UserAddOutlined />} />
              </div>
              <div className="client-profile-text">
                <span>Add new client</span>
              </div>
            </div>
            <div
              className="advance-search"
              onClick={() => {
                setSearchPopUp(false)
                setAdvanceSearch(!advanceSearch)
              }}
            >
              <p> Advanced Search </p>
              <RightOutlined className="right-arrow-color" />
            </div>
          </div>
        )}
      </div>
    )
  }

  const searchResult = [
    { clientName: 'Will Lawsons', follower: 38933122, profileURL: User1 },
    { clientName: 'Jessica Winter', follower: 3292312, profileURL: User2 },
    { clientName: 'Stephen Watson', follower: 74628, profileURL: User3 },
    { clientName: 'Walt Smith', follower: 352728, profileURL: User4 },
    { clientName: 'Willy Brown', follower: 2283912, profileURL: User5 },
  ]

  return (
    <div {...props}>
      <Popover content={searchMenu} trigger="click" visible={searchPopUp}>
        <Input
          className="search-input-style"
          placeholder="Search clients or leads"
          prefix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
          ref={searchRef}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => {
            searchRef.current?.select()
            setSearchPopUp(true)
          }}
          onBlur={() => setSearchPopUp(false)}
        />
      </Popover>
      <Modal
        visible={advanceSearch}
        title={
          <>
            <div className="back-to-modal">
              <div
                className="basic-search-align"
                onClick={() => {
                  setAdvanceSearch(!advanceSearch)
                  setSearchPopUp(!searchPopUp)
                }}
              >
                <LeftOutlined className="right-arrow-color" />
                <h6> Back to basic search</h6>
              </div>
              <div>
                <CloseOutlined
                  onClick={() => {
                    setAdvanceSearch(!advanceSearch)
                  }}
                />
              </div>
            </div>
            <div className="advance-search-text">
              <h1>Advance Search</h1>
            </div>
            <div className="cus-tabs cus-tabs-top-space">
              <button
                className={`cus-tab-design ${searchTab === 'Clients' && 'active-tabs'}`}
                onClick={() => setSearchTab('Clients')}
              >
                Clients
              </button>
              <button
                className={`cus-tab-design ${searchTab === 'Leads' && 'active-tabs'}`}
                onClick={() => setSearchTab('Leads')}
              >
                Leads
              </button>
            </div>
          </>
        }
        width={360}
        footer={false}
        wrapClassName={styles.advanceSearchModal}
        closable={false}
      >
        <Form
          form={form}
          requiredMark={false}
          layout="vertical"
          className="adv-search-form adv-search-top-space"
        >
          <Form.Item className="search-form" label="First name">
            <Input className="adv-search-input" placeholder="First name" />
          </Form.Item>
          <Form.Item className="search-form" label="Email">
            <Input className="adv-search-input" placeholder="Email" />
          </Form.Item>
          <Form.Item className="search-form" label="Date of birth">
            <Input className="adv-search-input" placeholder="DD/MM/YYYY" />
          </Form.Item>
          <Form.Item className="search-form" label="Phone">
            <Input className="adv-search-input" placeholder="Phone" />
          </Form.Item>
          <Form.Item className="search-form" label="Mobile">
            <Input className="adv-search-input" placeholder="Mobile" />
          </Form.Item>
          <Form.Item className="search-form" label="Post code">
            <Input className="adv-search-input" placeholder="Post code" />
          </Form.Item>
          <Form.Item className="search-form" label="Policy number">
            <Input className="adv-search-input" placeholder="Policy number" />
          </Form.Item>
          <Form.Item className="search-form" label="Patient ID">
            <Input className="adv-search-input" placeholder="Patient ID" />
          </Form.Item>
          <Form.Item className="search-form" label="Invoice NO">
            <Input className="adv-search-input" placeholder="Invoice NO" />
          </Form.Item>
          <div className="button-end">
            <Button className="btn-disable-style" disabled={true} size="large">
              Search
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default Search
