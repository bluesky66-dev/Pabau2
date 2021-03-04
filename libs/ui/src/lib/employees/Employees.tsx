import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Avatar, Button } from '@pabau/ui'
import { Input as AntInput } from 'antd'
import { CheckCircleFilled, SearchOutlined } from '@ant-design/icons'
import styles from './Employees.module.less'

export interface Employee {
  avatar?: string
  name: string
}

export interface EmployeeItem {
  avatar?: string
  name: string
  selected: boolean
}

export interface EmployeesProps {
  employees: Employee[]
}

export const Employees: FC<EmployeesProps> = ({ employees }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [employeeItems, setEmployeeItems] = useState<EmployeeItem[]>([])
  const [loadMore, setLoadMore] = useState(false)
  const handleSelectEmployee = (employee) => {
    const items: EmployeeItem[] = [...employeeItems]
    for (const item of items) {
      if (item.name === employee.name) item.selected = !item.selected
    }
    setEmployeeItems([...items])
  }
  const handleChangeSearchQuery = (e) => {
    // setSearchQuery(e.target.value)
    setEmployeeItems(
      employees
        .filter((employee) =>
          employee.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .map((item) => ({ ...item, selected: false }))
    )
  }
  useEffect(() => {
    setEmployeeItems(
      employees.map((employee) => ({ ...employee, selected: false }))
    )
    setLoadMore(false)
  }, [employees])
  return (
    <div className={styles.employeesContainer}>
      <h2>Employees</h2>
      <h3>Choose which team members would required access to this location</h3>
      <div>
        <AntInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onPressEnter={(e) => handleChangeSearchQuery(e)}
          prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
          placeholder="Search an employee"
        />
      </div>
      <div className={styles.employeeItems}>
        {employeeItems
          .slice(
            0,
            loadMore
              ? employeeItems.length
              : employeeItems.length <= 10
              ? employeeItems.length
              : 10
          )
          .map((item) => (
            <div
              className={
                item.selected
                  ? classNames(styles.employeeItem, styles.selectedItem)
                  : item.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) && searchQuery !== ''
                  ? classNames(styles.employeeItem, styles.possibleItem)
                  : styles.employeeItem
              }
              key={item.name}
              onClick={() => handleSelectEmployee(item)}
            >
              <div>
                <Avatar src={item?.avatar} name={item.name} size={24} />
              </div>
              <div>
                <span>{item.name}</span>
                <div className={styles.employeeItemChecked}>
                  <CheckCircleFilled />
                </div>
              </div>
            </div>
          ))}
      </div>
      {employeeItems.length > 10 && (
        <div className={styles.loadMore}>
          <Button onClick={() => setLoadMore(!loadMore)}>
            {loadMore ? 'Show Less' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Employees
