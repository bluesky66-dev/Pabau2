import React from 'react'
import { render } from '@testing-library/react'
import { userList } from './mock'
import EmployeeListModel from './EmployeeListModel'

describe('EmployeeListModel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <EmployeeListModel
        userList={userList}
        label={'All Employees'}
        ListTitle={'Select an Employee'}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
