import { Col, Row } from 'antd'
import React, { FC, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
import RightSidebar from '../rightsidebar/RightSidebar'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormEditLeft from './MedicalFormEditLeft'
import MedicalFormEditMain from './MedicalFormEditMain'

const medicalForms = [
  { id: 0, formType: 'basic', formName: 'basic_heading' },
  { id: 1, formType: 'basic', formName: 'basic_shortanswer' },
  { id: 2, formType: 'basic', formName: 'basic_longanswer' },
  { id: 3, formType: 'basic', formName: 'basic_textblock' },
  { id: 4, formType: 'basic', formName: 'basic_singlechoice' },
  { id: 5, formType: 'basic', formName: 'basic_multiplechoice' },
  { id: 6, formType: 'basic', formName: 'basic_dropdown' },
  { id: 7, formType: 'basic', formName: 'basic_drawing' },
  { id: 8, formType: 'basic', formName: 'basic_signature' },
  { id: 9, formType: 'basic', formName: 'basic_conditions' },
  { id: 10, formType: 'basic', formName: 'basic_drugs' },
  { id: 11, formType: 'basic', formName: 'basic_labtests' },
  { id: 12, formType: 'basic', formName: 'basic_traveldestination' },
  { id: 13, formType: 'basic', formName: 'basic_vaccinescheduler' },
  { id: 14, formType: 'basic', formName: 'basic_vaccinehistory' },
  { id: 15, formType: 'custom', formName: 'custom_emailmarketing' },
  { id: 16, formType: 'custom', formName: 'custom_smsmarketing' },
  { id: 17, formType: 'custom', formName: 'custom_phonecall' },
  { id: 18, formType: 'custom', formName: 'custom_lettermarketing' },
  { id: 19, formType: 'custom', formName: 'custom_membershipnumber' },
  { id: 20, formType: 'custom', formName: 'custom_authorizationcode' },
  { id: 21, formType: 'custom', formName: 'custom_company' },
  { id: 22, formType: 'custom', formName: 'custom_dob' },
  { id: 23, formType: 'custom', formName: 'custom_gender' },
  { id: 24, formType: 'custom', formName: 'custom_physicaladdress' },
  { id: 25, formType: 'custom', formName: 'custom_postaladdress' },
  { id: 26, formType: 'custom', formName: 'custom_referredby' },
  { id: 27, formType: 'custom', formName: 'custom_telephonenumber' },
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
    txtQuestion: '',
    txtBlock: '',
    txtInputType: '',
    arrItems: [],
    required: false,
  })
  return destination
}

const MedicalFormEdit: FC = () => {
  const [draggedForms, setDraggedForms] = useState([])
  const [selectedForm, setSelectedForm] = useState({
    id: '',
    formType: '',
    formName: '',
    txtQuestion: '',
    txtBlock: '',
    txtInputType: '',
    arrItems: [],
    required: false,
  })
  const [displaySettingBar, setDisplaySettingBar] = useState(false)
  const handlingFormSetting = (componentID) => {
    setDisplaySettingBar(componentID === '' ? false : true)
    if (componentID !== '') {
      const sel_form = draggedForms.filter((item) => item['id'] === componentID)
      setSelectedForm(
        sel_form
          ? sel_form[0]
          : {
              id: '',
              formType: '',
              formName: '',
              txtQuestion: '',
              txtBlock: '',
              txtInputType: '',
              arrItems: [],
              required: false,
            }
      )
    }
  }
  const handlingDeleteForm = (componentID) => {
    handlingFormSetting('')
    setDraggedForms(draggedForms.filter((item) => item['id'] !== componentID))
  }

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
        case 'LeftSideBasic':
          setDraggedForms((state) =>
            copy(medicalForms, state, source, destination)
          )
          break
        case 'LeftSideCustom':
          setDraggedForms((state) =>
            copy(medicalForms, state, source, destination)
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
        <Col span={5}>
          <MedicalFormEditLeft medicalForms={medicalForms} />
        </Col>
        <Col span={12} className={styles.MedicalFormEditMain}>
          <MedicalFormEditMain
            draggedForms={draggedForms}
            handlingFormSetting={handlingFormSetting}
          />
        </Col>
        <Col span={7}>
          {selectedForm && (
            <RightSidebar
              selectedForm={selectedForm}
              component={selectedForm['formName']}
              formType={selectedForm['formType']}
              display={displaySettingBar}
              handlingFormSetting={handlingFormSetting}
              handlingDeleteForm={handlingDeleteForm}
            />
          )}
        </Col>
      </DragDropContext>
    </Row>
  )
}

export default MedicalFormEdit
