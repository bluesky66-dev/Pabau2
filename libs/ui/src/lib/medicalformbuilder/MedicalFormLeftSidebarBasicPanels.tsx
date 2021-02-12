import React, { FC } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import LeftSidebarBasicDrawing from '../medicalform/LeftSidebarBasicDrawing'
import LeftSidebarBasicDropDown from '../medicalform/LeftSidebarBasicDropDown'
import LeftSidebarBasicDrugs from '../medicalform/LeftSidebarBasicDrugs'
import LeftSidebarBasicHeading from '../medicalform/LeftSidebarBasicHeading'
import LeftSidebarBasicLabTest from '../medicalform/LeftSidebarBasicLabTest'
import LeftSidebarBasicLongAnswer from '../medicalform/LeftSidebarBasicLongAnswer'
import LeftSidebarBasicMedicalConditions from '../medicalform/LeftSidebarBasicMedicalConditions'
import LeftSidebarBasicMultipleChoice from '../medicalform/LeftSidebarBasicMultipleChoice'
import LeftSidebarBasicShortAnswer from '../medicalform/LeftSidebarBasicShortAnswer'
import LeftSidebarBasicSignature from '../medicalform/LeftSidebarBasicSignature'
import LeftSidebarBasicSingleChoice from '../medicalform/LeftSidebarBasicSingleChoice'
import LeftSidebarBasicTextBlock from '../medicalform/LeftSidebarBasicTextBlock'
import LeftSidebarBasicTravelDestination from '../medicalform/LeftSidebarBasicTravelDestination'
import LeftSidebarBasicVaccineHistory from '../medicalform/LeftSidebarBasicVaccineHistory'
import LeftSidebarBasicVaccineScheduler from '../medicalform/LeftSidebarBasicVaccineScheduler'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormLeftSidebarDivider from './MedicalFormLeftSidebarDivider'

interface formParams {
  id: number
  formName: string
}

interface P {
  formNames?: formParams[]
}

const getRenderItem = () => {
  const MyChild = (provided, snapshot, rubric) => {
    return (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        isDragging={snapshot.isDragging}
        className={snapshot.isDragging ? styles.dndDragging : ''}
      >
        {rubric.draggableId === 'LeftSidebarBasicHeading' && (
          <LeftSidebarBasicHeading />
        )}
        {rubric.draggableId === 'LeftSidebarBasicShortAnswer' && (
          <LeftSidebarBasicShortAnswer />
        )}
        {rubric.draggableId === 'LeftSidebarBasicLongAnswer' && (
          <LeftSidebarBasicLongAnswer />
        )}
        {rubric.draggableId === 'LeftSidebarBasicTextBlock' && (
          <LeftSidebarBasicTextBlock />
        )}
        {rubric.draggableId === 'LeftSidebarBasicSingleChoice' && (
          <LeftSidebarBasicSingleChoice />
        )}
        {rubric.draggableId === 'LeftSidebarBasicMultipleChoice' && (
          <LeftSidebarBasicMultipleChoice />
        )}
        {rubric.draggableId === 'LeftSidebarBasicDropDown' && (
          <LeftSidebarBasicDropDown />
        )}
        {rubric.draggableId === 'LeftSidebarBasicDrawing' && (
          <LeftSidebarBasicDrawing />
        )}
        {rubric.draggableId === 'LeftSidebarBasicSignature' && (
          <LeftSidebarBasicSignature />
        )}
        {rubric.draggableId === 'LeftSidebarBasicMedicalConditions' && (
          <LeftSidebarBasicMedicalConditions />
        )}
        {rubric.draggableId === 'LeftSidebarBasicDrugs' && (
          <LeftSidebarBasicDrugs />
        )}
        {rubric.draggableId === 'LeftSidebarBasicTravelDestination' && (
          <LeftSidebarBasicTravelDestination />
        )}
        {rubric.draggableId === 'LeftSidebarBasicVaccineScheduler' && (
          <LeftSidebarBasicVaccineScheduler />
        )}
        {rubric.draggableId === 'LeftSidebarBasicVaccineHistory' && (
          <LeftSidebarBasicVaccineHistory />
        )}
        {rubric.draggableId === 'LeftSidebarBasicLabTest' && (
          <LeftSidebarBasicLabTest />
        )}
      </div>
    )
  }
  MyChild.displayName = 'renderItem'
  return MyChild
}

const MedicalFormLeftSidebarBasicPanels: FC<P> = ({ ...props }) => {
  const { formNames } = props
  return (
    <div>
      <Droppable
        renderClone={getRenderItem()}
        droppableId="LeftSide"
        isDropDisabled={true}
      >
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <MedicalFormLeftSidebarDivider title="general" />
            {formNames
              ?.filter(
                (form) =>
                  form.formName === 'Heading' ||
                  form.formName === 'ShortAnswer' ||
                  form.formName === 'LongAnswer' ||
                  form.formName === 'TextBlock'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith ===
                  `LeftSidebarBasic${form.formName}` ? (
                  <div className={styles.dndCopy} key={form.id}>
                    {form.formName === 'Heading' && <LeftSidebarBasicHeading />}
                    {form.formName === 'ShortAnswer' && (
                      <LeftSidebarBasicShortAnswer />
                    )}
                    {form.formName === 'LongAnswer' && (
                      <LeftSidebarBasicLongAnswer />
                    )}
                    {form.formName === 'TextBlock' && (
                      <LeftSidebarBasicTextBlock />
                    )}
                  </div>
                ) : (
                  <Draggable
                    key={`LeftSidebarBasic${form.formName}`}
                    draggableId={`LeftSidebarBasic${form.formName}`}
                    index={form.id}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        className={
                          snapshot.isDragging ? styles.dndDragging : ''
                        }
                      >
                        {form.formName === 'Heading' && (
                          <LeftSidebarBasicHeading />
                        )}
                        {form.formName === 'ShortAnswer' && (
                          <LeftSidebarBasicShortAnswer />
                        )}
                        {form.formName === 'LongAnswer' && (
                          <LeftSidebarBasicLongAnswer />
                        )}
                        {form.formName === 'TextBlock' && (
                          <LeftSidebarBasicTextBlock />
                        )}
                      </div>
                    )}
                  </Draggable>
                )
              })}
            <MedicalFormLeftSidebarDivider title="choices" />
            {formNames
              ?.filter(
                (form) =>
                  form.formName === 'SingleChoice' ||
                  form.formName === 'MultipleChoice' ||
                  form.formName === 'DropDown'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith ===
                  `LeftSidebarBasic${form.formName}` ? (
                  <div className={styles.dndCopy} key={form.id}>
                    {form.formName === 'SingleChoice' && (
                      <LeftSidebarBasicSingleChoice />
                    )}
                    {form.formName === 'MultipleChoice' && (
                      <LeftSidebarBasicMultipleChoice />
                    )}
                    {form.formName === 'DropDown' && (
                      <LeftSidebarBasicDropDown />
                    )}
                  </div>
                ) : (
                  <Draggable
                    key={`LeftSidebarBasic${form.formName}`}
                    draggableId={`LeftSidebarBasic${form.formName}`}
                    index={form.id}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        className={
                          snapshot.isDragging ? styles.dndDragging : ''
                        }
                      >
                        {form.formName === 'SingleChoice' && (
                          <LeftSidebarBasicSingleChoice />
                        )}
                        {form.formName === 'MultipleChoice' && (
                          <LeftSidebarBasicMultipleChoice />
                        )}
                        {form.formName === 'DropDown' && (
                          <LeftSidebarBasicDropDown />
                        )}
                      </div>
                    )}
                  </Draggable>
                )
              })}
            <MedicalFormLeftSidebarDivider title="other" />
            {formNames
              ?.filter(
                (form) =>
                  form.formName === 'Drawing' || form.formName === 'Signature'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith ===
                  `LeftSidebarBasic${form.formName}` ? (
                  <div className={styles.dndCopy} key={form.id}>
                    {form.formName === 'Drawing' && <LeftSidebarBasicDrawing />}
                    {form.formName === 'Signature' && (
                      <LeftSidebarBasicSignature />
                    )}
                  </div>
                ) : (
                  <Draggable
                    key={`LeftSidebarBasic${form.formName}`}
                    draggableId={`LeftSidebarBasic${form.formName}`}
                    index={form.id}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        className={
                          snapshot.isDragging ? styles.dndDragging : ''
                        }
                      >
                        {form.formName === 'Drawing' && (
                          <LeftSidebarBasicDrawing />
                        )}
                        {form.formName === 'Signature' && (
                          <LeftSidebarBasicSignature />
                        )}
                      </div>
                    )}
                  </Draggable>
                )
              })}
            <MedicalFormLeftSidebarDivider title="medical" />
            {formNames
              ?.filter(
                (form) =>
                  form.formName === 'MedicalConditions' ||
                  form.formName === 'Drugs' ||
                  form.formName === 'TravelDestination' ||
                  form.formName === 'VaccineScheduler' ||
                  form.formName === 'VaccineHistory' ||
                  form.formName === 'LabTest'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith ===
                  `LeftSidebarBasic${form.formName}` ? (
                  <div className={styles.dndCopy} key={form.id}>
                    {form.formName === 'MedicalConditions' && (
                      <LeftSidebarBasicMedicalConditions />
                    )}
                    {form.formName === 'Drugs' && <LeftSidebarBasicDrugs />}
                    {form.formName === 'TravelDestination' && (
                      <LeftSidebarBasicTravelDestination />
                    )}
                    {form.formName === 'VaccineScheduler' && (
                      <LeftSidebarBasicVaccineScheduler />
                    )}
                    {form.formName === 'VaccineHistory' && (
                      <LeftSidebarBasicVaccineHistory />
                    )}
                    {form.formName === 'LabTest' && <LeftSidebarBasicLabTest />}
                  </div>
                ) : (
                  <Draggable
                    key={`LeftSidebarBasic${form.formName}`}
                    draggableId={`LeftSidebarBasic${form.formName}`}
                    index={form.id}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        className={
                          snapshot.isDragging ? styles.dndDragging : ''
                        }
                      >
                        {form.formName === 'MedicalConditions' && (
                          <LeftSidebarBasicMedicalConditions />
                        )}
                        {form.formName === 'Drugs' && <LeftSidebarBasicDrugs />}
                        {form.formName === 'TravelDestination' && (
                          <LeftSidebarBasicTravelDestination />
                        )}
                        {form.formName === 'VaccineScheduler' && (
                          <LeftSidebarBasicVaccineScheduler />
                        )}
                        {form.formName === 'VaccineHistory' && (
                          <LeftSidebarBasicVaccineHistory />
                        )}
                        {form.formName === 'LabTest' && (
                          <LeftSidebarBasicLabTest />
                        )}
                      </div>
                    )}
                  </Draggable>
                )
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default MedicalFormLeftSidebarBasicPanels
