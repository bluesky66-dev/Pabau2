import React, { FC, useState } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { data } from './mock'
import './dragfeature.less'
import './styles/style.scss'
import { Row, Col } from 'antd'

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
          <img src={require('../../assets/images/table-icon.svg').default} alt="table-icon" />
        </td>
        <td>
          <span className="table-data-text-style">{value.name}</span>
          {value.isLocked && (
            <img
              className="pl-4"
              src={require('../../assets/images/lock.svg').default}
              alt="lock"
            />
          )}
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
                    <img src={require('../../assets/images/Vector.svg').default} alt="search" />
                    <span className="filter-left-space"> Search</span>
                  </div>
                  <div className="search-menu">
                    <img src={require('../../assets/images/filter.svg').default} alt="filter" />
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
                  <img
                    src={require('../../assets/images/table-icon.svg').default}
                    alt="table-icon"
                  />
                </th>
                <th className="table-highlight">
                  <div className="d-flex align-items-center">
                    <span className="table-heading-style pr-2">NAME</span>
                    <img src={require('../../assets/images/Path.svg').default} alt="Path" />
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
                      <img src={require('../../assets/images/left.svg').default} alt="left" />
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
                      <img src={require('../../assets/images/right.svg').default} alt="right" />
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
