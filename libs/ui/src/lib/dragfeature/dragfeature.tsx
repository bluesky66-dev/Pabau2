import React, { FC, useState } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { data } from './mock'
import { Row, Col } from 'antd'
import {
  MenuOutlined,
  SearchOutlined,
  FilterOutlined,
  LockOutlined,
  ArrowUpOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr.map((ele, index) => {
    ele.index = index
    return ele
  })
}

export const DragFeature: FC = () => {
  const [dataSource, setDataSource] = useState(data)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = array_move(dataSource, oldIndex, newIndex)
      setDataSource(newData)
    }
  }

  const SortableList = SortableContainer(({ items }) => {
    return (
      <tbody>
        {items.map((value, index) => (
          <SortableItem key={value.index} index={value.index} value={value} />
        ))}
      </tbody>
    )
  })

  const SortableItem = SortableElement(({ value }) => {
    return (
      <tr tabIndex={0}>
        <td align="center">
          <MenuOutlined style={{ fontSize: '14px', color: '#B8B8C0' }} />
          {/* <img src={require('../../assets/images/table-icon.svg').default} alt="table-icon" /> */}
        </td>
        <td>
          <span className="table-data-text-style">{value.name}</span>
          {value.isLocked && <LockOutlined className="lock-icon-style" />}
        </td>
        <td>
          <button
            className={`${value.isActive ? 'active-btn-style' : 'disable-btn'} text-center`}
            disabled={value.isActive}
          >
            {' '}
            {value.isActive ? 'Activated' : 'Deactivated'}{' '}
          </button>
        </td>
      </tr>
    )
  })

  return (
    <div className="container-fluid left-right-spacing">
      <style jsx>{`
        .row-dragging {
          background: #fafafa;
          border: 1px solid #ccc;
        }

        .ant-table-cell .drag-visible {
          cursor: pointer !important;
        }

        // .row-dragging td {
        //   // visibility: hidden;
        // }

        // .row-dragging .drag-visible {
        //   visibility: visible;
        // }

        .activeBtn {
          color: #ffffff !important;
          background-color: #54b2d3 !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          border-radius: 4px !important;
          font-size: 12px !important;
        }
        .text-white {
          color: #fff !important;
        }
        .text-center {
          text-align: center !important;
        }
        // thead th {
        //   background-color: #ECEDF0 !important;
        //   color: #A0A0A0 !important;
        // }
        // tr:hover {
        //   background-color: #ECEDF0 !important;
        // }
      `}</style>
      <section className="header-bottom-space">
        <div className="home-banner">
          <div className="p-4">
            <Row>
              <Col span={12}>
                <div className="setup-text">
                  <p>
                    Setup &gt; <span className="pl-2"> Marketing sources</span>
                  </p>
                  <h5>Marketing Sources</h5>
                </div>
              </Col>
              <Col
                span={12}
                style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
              >
                <div style={{ display: 'flex' }}>
                  <div className="search-menu pr-4">
                    <SearchOutlined style={{ fontSize: '14px' }} />
                    <span className="filter-left-space"> Search</span>
                  </div>
                  <div className="search-menu">
                    <FilterOutlined style={{ fontSize: '14px' }} />
                    <span className="filter-left-space"> Filter</span>
                  </div>
                  <div className="create-source-btn pl-4">
                    <button className="create-source-btn-style">Create Source</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <table className="fixed">
            <thead>
              <tr>
                <th className="text-center">
                  <MenuOutlined style={{ fontSize: '14px', color: '#B8B8C0' }} />
                </th>
                <th className="table-highlight">
                  <div className="d-flex align-items-center">
                    <span className="table-heading-style pr-2">NAME</span>
                    <ArrowUpOutlined className="up-icon-style" />
                  </div>
                </th>
                <th>
                  <span className="table-heading-child pr-2">STATUS</span>
                </th>
              </tr>
            </thead>
            <SortableList items={dataSource} onSortEnd={onSortEnd} helperClass="row-dragging" />
            <tbody>
              <tr>
                <td colSpan={2}>
                  <p className="pl-3 footer-text-style">
                    SHOWING <span className="footer-child-text"> 8 </span> RESULTS FROM{' '}
                    <span className="footer-child-text"> 40 </span>
                  </p>
                </td>
                <td style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="pagination-left-space">
                      <LeftOutlined className="pagination-icon" />
                    </div>
                    <div className="pr-2">
                      <div className="pagination-style text-center text-white pagination-style pagination-background-color">
                        1
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="pagination-style text-center pagination-style pagination-text-color">
                        2
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="pagination-style text-center pagination-style pagination-text-color">
                        3
                      </div>
                    </div>
                    <div className="pr-2">
                      <div className="pagination-style text-center pagination-style pagination-text-color">
                        4
                      </div>
                    </div>
                    <div className="">
                      <div className="pagination-style text-center pagination-style pagination-text-color">
                        5
                      </div>
                    </div>
                    <div className="pagination-right-space">
                      <RightOutlined className="pagination-icon" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
