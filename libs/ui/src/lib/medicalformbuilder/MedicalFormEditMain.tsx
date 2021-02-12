import React, { FC, useEffect, useRef, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import InnerConditions from '../medicalform/InnerConditions'
import InnerDrawing from '../medicalform/InnerDrawing'
import InnerDropdown from '../medicalform/InnerDropdown'
import InnerDrugs from '../medicalform/InnerDrugs'
import InnerHeading from '../medicalform/InnerHeading'
import InnerLabTest from '../medicalform/InnerLabTest'
import InnerLongAnswer from '../medicalform/InnerLongAnswer'
import InnerMultiChoice from '../medicalform/InnerMultiChoice'
import InnerShortAnswer from '../medicalform/InnerShortAnswer'
import InnerSignature from '../medicalform/InnerSignature'
import InnerSingleChoice from '../medicalform/InnerSingleChoice'
import InnerTextBlock from '../medicalform/InnerTextBlock'
import InnerTravelDestination from '../medicalform/InnerTravelDestination'
import InnerVaccineHistory from '../medicalform/InnerVaccineHistory'
import InnerVaccineScheduler from '../medicalform/InnerVaccineScheduler'
import styles from './MedicalFormBuilder.module.less'

interface formParams {
  id: number
  formName: string
  txt1: ''
  arr1: []
}

interface P {
  draggedForms?: formParams[]
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
                    {form.formName === 'Heading' && (
                      <InnerHeading
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'ShortAnswer' && (
                      <InnerShortAnswer
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'LongAnswer' && (
                      <InnerLongAnswer
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'TextBlock' && (
                      <InnerTextBlock
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'SingleChoice' && (
                      <InnerSingleChoice
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'MultipleChoice' && (
                      <InnerMultiChoice
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'DropDown' && (
                      <InnerDropdown
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'Drawing' && (
                      <InnerDrawing
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'Signature' && (
                      <InnerSignature
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'MedicalConditions' && (
                      <InnerConditions
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'Drugs' && (
                      <InnerDrugs
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'TravelDestination' && (
                      <InnerTravelDestination
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'VaccineScheduler' && (
                      <InnerVaccineScheduler
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'VaccineHistory' && (
                      <InnerVaccineHistory
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
                    )}
                    {form.formName === 'LabTest' && (
                      <InnerLabTest
                        required={false}
                        activate={
                          activatedFormID === `${form.id}` ? true : false
                        }
                        handlingSelectForm={handlingSelectForm}
                        formData={form}
                      />
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
  )
}

export default MedicalFormEditMain
