import React, { FC, useContext, useEffect, useState } from 'react'
import { Checkbox, PabauContext } from '@pabau/ui'
import styles from './Search.module.less'
import { Input, Popover, Avatar, Image, Form, Button, Drawer } from 'antd'
import {
  SearchOutlined,
  UserAddOutlined,
  RightOutlined,
  LeftOutlined,
  CloseOutlined,
  CloseCircleFilled,
} from '@ant-design/icons'
import User from '../../../assets/images/user.png'
import classNames from 'classnames'

const WAIT_INTERVAL = 400
interface P {
  searchResults?: {
    id: string
    firstName: string
    lastName: string
    avatarUrl?: string
  }[]
  onChange?: (newText: string) => void
}

export const Search: FC<P> = ({ onChange, searchResults }) => {
  const context = useContext(PabauContext)
  const [searchDrawer, setSearchDrawer] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchPopUp, setSearchPopUp] = useState(false)
  const [searchTab, setSearchTab] = useState('Clients')
  const [advanceSearch, setAdvanceSearch] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        setSearchPopUp(true)
        onChange && onChange(searchTerm)
      } else setSearchPopUp(false)
    }, WAIT_INTERVAL)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  const [form] = Form.useForm()

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
          <div className={styles.clientsList}>
            {searchResults && searchResults.length > 0 && (
              <>
                <div className={styles.resultText}>
                  <h1>Top Result</h1>
                </div>

                <div className={styles.contentAlignProfile}>
                  <div className={styles.clientProfile}>
                    <Avatar size={40} src={<Image src={User} />} />
                  </div>
                  <div className={styles.clientProfileText}>
                    <h1>{searchResults[0].firstName + ' ' + searchResults[0].lastName}</h1>
                    <p>3893312</p>
                  </div>
                </div>
              </>
            )}
            {searchResults && searchResults.length > 1 && (
              <>
                <div className={classNames(styles.resultText, styles.resultTextTopSpace)}>
                  <h1>All results</h1>
                </div>
                {searchResults
                  .filter((_, i) => i !== 0)
                  .map(({ id, avatarUrl, firstName, lastName }) => (
                    <div key={id} className={styles.contentAlignProfile}>
                      <div className={styles.clientProfile}>
                        <Avatar size={40} src={<Image src={avatarUrl ?? User} />} />
                      </div>
                      <div className={styles.clientProfileText}>
                        <h1>{firstName + ' ' + lastName}</h1>
                        <p>1234</p>
                      </div>
                    </div>
                  ))}
              </>
            )}
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
                setAdvanceSearch(!advanceSearch)
                setSearchPopUp(true)
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

  const advanceSearchMenu = () => {
    return (
      <div className={classNames(styles.advanceSearchModal, styles.advSearchBody)}>
        {!context.isMobileDevice && (
          <div className={styles.backToSearch}>
            <div
              className={styles.basicSearchAlign}
              onClick={() => {
                setAdvanceSearch((e) => !e)
              }}
            >
              <LeftOutlined className={styles.rightArrowColor} />
              <h6> Back to basic search</h6>
            </div>
            <div>
              <CloseOutlined
                style={{ color: 'var(--light-grey-color)', fontSize: '12px' }}
                onClick={() => {
                  setAdvanceSearch((e) => !e)
                }}
              />
            </div>
          </div>
        )}
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
            className={classNames(styles.cusTabDesign, searchTab === 'Leads' && styles.activeTabs)}
            onClick={() => setSearchTab('Leads')}
          >
            Leads
          </button>
        </div>
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
            <span className={styles.inactiveClientText}> Show inactive clients</span>{' '}
          </Checkbox>
          <div
            className={classNames(
              styles.buttonEnd,
              context.isMobileDevice && styles.searchBtnBlock
            )}
          >
            <Button
              className={classNames(
                styles.btnDisableStyle,
                context.isMobileDevice && styles.mobileviewBtnSize
              )}
              disabled={true}
              size="large"
            >
              Search
            </Button>
          </div>
        </Form>
      </div>
    )
  }

  const renderMenu = () => {
    if (advanceSearch) {
      return advanceSearchMenu()
    }
    return searchMenu()
  }

  return (
    <div style={{ width: '100%' }}>
      {!context.isMobileDevice ? (
        <Popover
          content={renderMenu}
          visible={searchPopUp}
          overlayClassName={advanceSearch ? styles.advanceSearchModal : styles.searchInput}
        >
          <Input
            className={styles.searchInputStyle}
            placeholder="Search clients or leads"
            value={searchTerm}
            prefix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
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
      ) : (
        <Input
          className={styles.searchInputStyle}
          placeholder="Search clients or leads"
          value={searchTerm}
          prefix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            setSearchDrawer((e) => !e)
          }}
        />
      )}

      <Drawer
        visible={searchDrawer}
        placement="left"
        closable={false}
        className={styles.mobileSearchBar}
      >
        <div className={styles.fixedSearchBar}>
          <div className={styles.searchHeader}>
            <LeftOutlined
              onClick={() => {
                if (advanceSearch) {
                  setAdvanceSearch((e) => !e)
                } else {
                  setSearchDrawer((e) => !e)
                }
              }}
            />
            <Input
              className={classNames(styles.searchInputStyle, styles.resSearchInputStyle)}
              placeholder="Search clients or leads"
              value={searchTerm}
              prefix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
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
              autoFocus
            />
          </div>
          <div className={styles.searchBarBorder}></div>
        </div>
        {advanceSearch ? advanceSearchMenu() : searchMenu()}
      </Drawer>
    </div>
  )
}

export default Search
