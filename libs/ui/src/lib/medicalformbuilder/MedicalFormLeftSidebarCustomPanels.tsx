import React, { FC } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import LeftSidebarElement from '../medicalform/LeftSidebarElement'
import styles from './MedicalFormBuilder.module.less'

interface medicalForms {
  id?: number
  formType?: string
  formName?: string
}

interface P {
  medicalForms: medicalForms[]
}

const MedicalFormLeftSidebarCustomPanels: FC<P> = ({ ...props }) => {
  const { medicalForms } = props
  const getRenderItemCustom = () => {
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
              type="custom"
              component={draggedForm[0].formName}
            />
          )}
        </div>
      )
    }
    MyChild.displayName = 'renderItemCustom'
    return MyChild
  }

  return (
    <div>
      <Droppable
        renderClone={getRenderItemCustom()}
        droppableId="LeftSideCustom"
        isDropDisabled={true}
      >
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            {medicalForms?.map((form) => {
              return snapshot.draggingFromThisWith === form.formName ? (
                <div className={styles.dndCopy} key={form.id}>
                  <LeftSidebarElement type="custom" component={form.formName} />
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
                      className={snapshot.isDragging ? styles.dndDragging : ''}
                    >
                      <LeftSidebarElement
                        type="custom"
                        component={form.formName}
                      />
                    </div>
                  )}
                </Draggable>
              )
            })}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default MedicalFormLeftSidebarCustomPanels
