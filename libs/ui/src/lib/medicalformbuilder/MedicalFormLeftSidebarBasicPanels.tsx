import React, { FC } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import LeftSidebarElement from '../medicalform/LeftSidebarElement'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormLeftSidebarDivider from './MedicalFormLeftSidebarDivider'

interface medicalForms {
  id?: number
  formType?: string
  formName?: string
}

interface P {
  medicalForms: medicalForms[]
}

const MedicalFormLeftSidebarBasicPanels: FC<P> = ({ ...props }) => {
  const { medicalForms } = props
  const getRenderItemBasic = () => {
    const MyChild = (provided, snapshot, rubric) => {
      const draggedForm = medicalForms.filter(
        (item) => item.formName === rubric.draggableId
      )

      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          className={snapshot.isDragging ? styles.dndDragging : ''}
        >
          {draggedForm && (
            <LeftSidebarElement
              type="basic"
              component={draggedForm[0].formName}
            />
          )}
        </div>
      )
    }
    MyChild.displayName = 'renderItemBasic'
    return MyChild
  }

  return (
    <div>
      <Droppable
        renderClone={getRenderItemBasic()}
        droppableId="LeftSideBasic"
        isDropDisabled={true}
      >
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <MedicalFormLeftSidebarDivider title="general" />
            {medicalForms
              ?.filter(
                (form) =>
                  form.formName === 'basic_heading' ||
                  form.formName === 'basic_shortanswer' ||
                  form.formName === 'basic_longanswer' ||
                  form.formName === 'basic_textblock'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith === form.formName ? (
                  <div className={styles.dndCopy} key={form.id}>
                    <LeftSidebarElement
                      type="basic"
                      component={form.formName}
                    />
                  </div>
                ) : (
                  <Draggable
                    key={form.formName}
                    draggableId={form.formName}
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
                        <LeftSidebarElement
                          type="basic"
                          component={form.formName}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
            <MedicalFormLeftSidebarDivider title="choices" />
            {medicalForms
              ?.filter(
                (form) =>
                  form.formName === 'basic_singlechoice' ||
                  form.formName === 'basic_multiplechoice' ||
                  form.formName === 'basic_dropdown'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith === form.formName ? (
                  <div className={styles.dndCopy} key={form.id}>
                    <LeftSidebarElement
                      type="basic"
                      component={form.formName}
                    />
                  </div>
                ) : (
                  <Draggable
                    key={form.formName}
                    draggableId={form.formName}
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
                        <LeftSidebarElement
                          type="basic"
                          component={form.formName}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
            <MedicalFormLeftSidebarDivider title="other" />
            {medicalForms
              ?.filter(
                (form) =>
                  form.formName === 'basic_drawing' ||
                  form.formName === 'basic_signature'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith === form.formName ? (
                  <div className={styles.dndCopy} key={form.id}>
                    <LeftSidebarElement
                      type="basic"
                      component={form.formName}
                    />
                  </div>
                ) : (
                  <Draggable
                    key={form.formName}
                    draggableId={form.formName}
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
                        <LeftSidebarElement
                          type="basic"
                          component={form.formName}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
            <MedicalFormLeftSidebarDivider title="medical" />
            {medicalForms
              ?.filter(
                (form) =>
                  form.formName === 'basic_conditions' ||
                  form.formName === 'basic_drugs' ||
                  form.formName === 'basic_traveldestination' ||
                  form.formName === 'basic_vaccinescheduler' ||
                  form.formName === 'basic_vaccinehistory' ||
                  form.formName === 'basic_labtests'
              )
              .map((form) => {
                return snapshot.draggingFromThisWith === form.formName ? (
                  <div className={styles.dndCopy} key={form.id}>
                    <LeftSidebarElement
                      type="basic"
                      component={form.formName}
                    />
                  </div>
                ) : (
                  <Draggable
                    key={form.formName}
                    draggableId={form.formName}
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
                        <LeftSidebarElement
                          type="basic"
                          component={form.formName}
                        />
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
