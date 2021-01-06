import React, { FC, HTMLProps, useEffect, useRef, useState } from 'react'
import styles from './search.module.less'
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
import classNames from 'classnames'

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
      <div className={styles.searchBox}>
        <div className={styles.cusTabs}>
          <button
            className={classNames(
              styles.cusTabDesign,
              searchTab === 'Clients' && styles.activeTabs
            )}
            onClick={() => setSearchTab('Clients')}
          >
            Clients
          </button>
          <button
            className={classNames(styles.cusTabDesign, searchTab === 'Leads' && styles.activeTabs)}
            onClick={() => setSearchTab('Leads')}
          >
            Leads
          </button>
        </div>
        {searchTab === 'Clients' && (
          <div style={{ marginTop: '15px' }}>
            <div className={styles.resultText}>
              <h1> TOP RESULT </h1>
            </div>

            <div className={styles.contentAlignProfile}>
              <div className={styles.clientProfile}>
                <Avatar size={40} src={<Image src={User} />} />
              </div>
              <div className={styles.clientProfileText}>
                <h1>Whitney Jameson</h1>
                <p>3893312</p>
              </div>
            </div>
            <div className={classNames(styles.resultText, styles.resultTextTopSpace)}>
              <h1> All results </h1>
            </div>
            {searchResult.map((result, index) => {
              return (
                <div key={index} className={styles.contentAlignProfile}>
                  <div className={styles.clientProfile}>
                    <Avatar size={40} src={<Image src={result.profileURL} />} />
                  </div>
                  <div className={styles.clientProfileText}>
                    <h1>{result.clientName}</h1>
                    <p>{result.follower}</p>
                  </div>
                </div>
              )
            })}
            <div className={styles.contentAlignProfile}>
              <div className={styles.clientProfile}>
                <Avatar size={40} icon={<UserAddOutlined />} />
              </div>
              <div className={styles.clientProfileText}>
                <span>Add new client</span>
              </div>
            </div>
            <div
              className={styles.advanceSearch}
              onClick={() => {
                setSearchPopUp(false)
                setAdvanceSearch(!advanceSearch)
              }}
            >
              <p> Advanced Search </p>
              <RightOutlined className={styles.rightArrowColor} />
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
      <Popover
        content={searchMenu}
        trigger="focus"
        visible={searchPopUp}
        overlayClassName={styles.searchInput}
      >
        <Input
          className={styles.searchInputStyle}
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
            <div className={styles.backToModal}>
              <div
                className={styles.basicSearchAlign}
                onClick={() => {
                  setAdvanceSearch(!advanceSearch)
                  setSearchPopUp(!searchPopUp)
                }}
              >
                <LeftOutlined className={styles.rightArrowColor} />
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
            <div className={styles.advanceSearchText}>
              <h1>Advance Search</h1>
            </div>
            <div className={classNames(styles.cusTabs, styles.cusTabsTopSpace)}>
              <button
                className={classNames(
                  styles.cusTabDesign,
                  searchTab === 'Clients' && styles.activeTabs
                )}
                onClick={() => setSearchTab('Clients')}
              >
                Clients
              </button>
              <button
                className={classNames(
                  styles.cusTabDesign,
                  searchTab === 'Leads' && styles.activeTabs
                )}
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
          className={classNames(styles.advSearchForm, styles.advSearchTopSpace)}
        >
          <Form.Item className={styles.searchForm} label="First name">
            <Input className={styles.advSearchInput} placeholder="First name" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Email">
            <Input className={styles.advSearchInput} placeholder="Email" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Date of birth">
            <Input className={styles.advSearchInput} placeholder="DD/MM/YYYY" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Phone">
            <Input className={styles.advSearchInput} placeholder="Phone" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Mobile">
            <Input className={styles.advSearchInput} placeholder="Mobile" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Post code">
            <Input className={styles.advSearchInput} placeholder="Post code" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Policy number">
            <Input className={styles.advSearchInput} placeholder="Policy number" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Patient ID">
            <Input className={styles.advSearchInput} placeholder="Patient ID" />
          </Form.Item>
          <Form.Item className={styles.searchForm} label="Invoice NO">
            <Input className={styles.advSearchInput} placeholder="Invoice NO" />
          </Form.Item>
          <div className={styles.buttonEnd}>
            <Button className={styles.btnDisableStyle} disabled={true} size="large">
              Search
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default Search
