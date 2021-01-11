import React, { FC, HTMLProps, useEffect, useState } from 'react'
import { Checkbox } from '@pabau/ui'
import styles from './search.module.less'
import { Input, Popover, Avatar, Image, Modal, Form, Button } from 'antd'
import {
  SearchOutlined,
  UserAddOutlined,
  RightOutlined,
  LeftOutlined,
  CloseOutlined,
  CloseCircleFilled,
} from '@ant-design/icons'
import User from '../../../assets/images/user.png'
import User1 from '../../../assets/images/user1.png'
import User2 from '../../../assets/images/user2.png'
import User3 from '../../../assets/images/user3.png'
import User4 from '../../../assets/images/user4.png'
import User5 from '../../../assets/images/user5.png'
import classNames from 'classnames'

type P = HTMLProps<HTMLDivElement>

const WAIT_INTERVAL = 400

export const Search: FC<P> = ({ ...props }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchPopUp, setSearchPopUp] = useState(false)
  const [searchTab, setSearchTab] = useState('Clients')
  const [advanceSearch, setAdvanceSearch] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) setSearchPopUp(true)
      else setSearchPopUp(false)
    }, WAIT_INTERVAL)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const [form] = Form.useForm()

  const searchMenu = () => {
    return (
      <div className={styles.searchBox}>
        <div className={styles.closeIconRight}>
          <CloseOutlined
            className={styles.closeIconStyle}
            onClick={() => setSearchPopUp((e) => !e)}
          />
        </div>
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
          <div className={styles.clientsList}>
            <div className={styles.resultText}>
              <h1>Top Result</h1>
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
                <Avatar
                  size={40}
                  icon={<UserAddOutlined style={{ color: 'var(--grey-text-color)' }} />}
                  className={styles.addNewClient}
                />
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
      <Popover content={searchMenu} visible={searchPopUp} overlayClassName={styles.searchInput}>
        <Input
          className={styles.searchInputStyle}
          placeholder="Search clients or leads"
          prefix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          suffix={
            searchTerm && (
              <CloseCircleFilled
                style={{ color: '#BFBFBF' }}
                onClick={() => {
                  setSearchPopUp(false)
                  setSearchTerm('')
                }}
              />
            )
          }
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
                  style={{ color: 'var(--light-grey-color)', fontSize: '12px' }}
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
          <Checkbox>
            {' '}
            <span className={styles.greyTextColor}> Show inactive clients</span>{' '}
          </Checkbox>
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
