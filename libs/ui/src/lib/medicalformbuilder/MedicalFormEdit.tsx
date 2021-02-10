import { Col, Row } from 'antd'
import React, { FC, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
import RightSidebar from '../rightsidebar/RightSidebar'
import MedicalFormEditLeft from './MedicalFormEditLeft'
import MedicalFormEditMain from './MedicalFormEditMain'

const formNames = [
  { id: 0, formName: 'Heading' },
  { id: 1, formName: 'ShortAnswer' },
  { id: 2, formName: 'LongAnswer' },
  { id: 3, formName: 'TextBlock' },
  { id: 4, formName: 'SingleChoice' },
  { id: 5, formName: 'MultipleChoice' },
  { id: 6, formName: 'DropDown' },
  { id: 7, formName: 'Drawing' },
  { id: 8, formName: 'Signature' },
  { id: 9, formName: 'MedicalConditions' },
  { id: 10, formName: 'Drugs' },
  { id: 11, formName: 'TravelDestination' },
  { id: 12, formName: 'VaccineScheduler' },
  { id: 13, formName: 'VaccineHistory' },
  { id: 14, formName: 'LabTest' },
]

const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1)
  list.splice(endIndex, 0, removed)
  return list
}

const copy = (source, destination, droppableSource, droppableDestination) => {
  const item = source[droppableSource.index]
  destination.splice(droppableDestination.index, 0, {
    ...item,
    id: uuidv4(),
  })
  return destination
}

const MedicalFormEdit: FC = () => {
  const [draggedFromNames, setDraggedFromNames] = useState([])
  const [selectComponent, setSelectComponent] = useState('')
  const [selectComponentId, setSelectComponentId] = useState('')
  const [displaySettingBar, setDisplaySettingBar] = useState(false)
  const handlingComponentSetting = (componentName) => {
    setDisplaySettingBar(componentName === '' ? false : true)
    if (componentName !== '') {
      setSelectComponent(componentName)
      // setSelectComponentId(componentID)
    }
  }
  console.log('selectComponentId = ', selectComponentId)
  // console.log('selectComponent = ', selectComponent)

  const onDragEnd = React.useCallback(
    (result) => {
      const { source, destination } = result
      if (!destination) {
        return
      }
      switch (source.droppableId) {
        case destination.droppableId:
          setDraggedFromNames((state) =>
            reorder(state, source.index, destination.index)
          )
          break
        case 'LeftSide':
          setDraggedFromNames((state) =>
            copy(formNames, state, source, destination)
          )
          break
        default:
          break
      }
    },
    [setDraggedFromNames]
  )
  return (
    <Row>
      <DragDropContext onDragEnd={onDragEnd}>
        <Col span={6}>
          <MedicalFormEditLeft formNames={formNames} />
        </Col>
        <Col span={12}>
          <MedicalFormEditMain
            draggedFromNames={draggedFromNames}
            handlingComponentSetting={handlingComponentSetting}
          />
        </Col>
        <Col span={6}>
          <RightSidebar
            componentName={selectComponent}
            display={displaySettingBar}
            handlingComponentSetting={handlingComponentSetting}
          />
        </Col>
      </DragDropContext>
    </Row>
  )
}

export default MedicalFormEdit
