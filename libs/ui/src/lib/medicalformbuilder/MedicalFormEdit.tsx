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
    txt1: '',
    arr1: [],
  })
  return destination
}

const MedicalFormEdit: FC = () => {
  const [draggedForms, setDraggedForms] = useState([])
  // const [selectComponent, setSelectComponent] = useState('')
  // const [selectComponentId, setSelectComponentId] = useState('')
  const [selectedForm, setSelectedForm] = useState({})
  const [displaySettingBar, setDisplaySettingBar] = useState(false)
  const handlingFormSetting = (componentID) => {
    setDisplaySettingBar(componentID === '' ? false : true)
    if (componentID !== '') {
      const sel_form = draggedForms.filter((item) => item['id'] === componentID)
      setSelectedForm(sel_form ? sel_form[0] : {})
    }
  }
  const handlingDeleteForm = (componentID) => {
    handlingFormSetting('')
    setDraggedForms(draggedForms.filter((item) => item['id'] !== componentID))
  }

  // console.log('selectedForm = ', selectedForm)
  const onDragEnd = React.useCallback(
    (result) => {
      const { source, destination } = result
      if (!destination) {
        return
      }
      switch (source.droppableId) {
        case destination.droppableId:
          setDraggedForms((state) =>
            reorder(state, source.index, destination.index)
          )
          break
        case 'LeftSide':
          setDraggedForms((state) =>
            copy(formNames, state, source, destination)
          )
          break
        default:
          break
      }
    },
    [setDraggedForms]
  )
  return (
    <Row>
      <DragDropContext onDragEnd={onDragEnd}>
        <Col span={6}>
          <MedicalFormEditLeft formNames={formNames} />
        </Col>
        <Col span={12}>
          <MedicalFormEditMain
            draggedForms={draggedForms}
            handlingFormSetting={handlingFormSetting}
          />
        </Col>
        <Col span={6}>
          <RightSidebar
            selectedForm={selectedForm}
            display={displaySettingBar}
            handlingFormSetting={handlingFormSetting}
            handlingDeleteForm={handlingDeleteForm}
          />
        </Col>
      </DragDropContext>
    </Row>
  )
}

export default MedicalFormEdit
