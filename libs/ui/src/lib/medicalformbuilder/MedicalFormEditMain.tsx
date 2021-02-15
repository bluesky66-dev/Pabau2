import { MEDICAL_FORM_TYPES } from '@pabau/ui'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import InnerElement from '../medicalform/InnerElement'
import styles from './MedicalFormBuilder.module.less'

interface P {
  draggedForms?: MEDICAL_FORM_TYPES[]
  handlingFormSetting?: (formID?: string) => void
}

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const MedicalFormEditMain: FC<P> = ({ ...props }) => {
  const { draggedForms, handlingFormSetting } = props
  const [activatedFormID, setActivatedFormID] = useState('')
  const prevActiveFormID = usePrevious(activatedFormID)
  const clearActivatedForm = () => {
    setActivatedFormID('')
  }

  const handlingSelectForm = (isActive, handleId) => {
    if (isActive) {
      setActivatedFormID(handleId)
    } else {
      clearActivatedForm()
    }
  }

  useEffect(() => {
    if (prevActiveFormID !== activatedFormID)
      handlingFormSetting?.(activatedFormID)
  }, [prevActiveFormID, handlingFormSetting, activatedFormID])

  return (
    <Droppable droppableId="MainSide">
      {(provided, snapshot) => (
        <div
          className={styles.medicalFormEditMainPanel}
          ref={provided.innerRef}
        >
          {draggedForms?.map((form, index) => {
            return (
              <Draggable key={form.id} draggableId={form.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    className={
                      snapshot.isDragging
                        ? styles.dndMainDragging
                        : styles.dndMainNoDragging
                    }
                  >
                    <InnerElement
                      required={form.required}
                      activate={activatedFormID === `${form.id}` ? true : false}
                      type={form.formType}
                      component={form.formName}
                      handleId={form.id}
                      formData={form}
                      handlingSelectForm={handlingSelectForm}
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
  )
}

export default MedicalFormEditMain
