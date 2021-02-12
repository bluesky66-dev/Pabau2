import React, { FC, useEffect, useRef, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
// import InnerDrawing from '../medicalform/InnerDrawing'
// import InnerDropdown from '../medicalform/InnerDropdown'
// import InnerDrugs from '../medicalform/InnerDrugs'
import InnerHeading from '../medicalform/InnerHeading'
// import InnerLabTest from '../medicalform/InnerLabTest'
// import InnerLongAnswer from '../medicalform/InnerLongAnswer'
// import InnerMultiChoice from '../medicalform/InnerMultiChoice'
// import InnerShortAnswer from '../medicalform/InnerShortAnswer'
// import InnerSignature from '../medicalform/InnerSignature'
// import InnerSingleChoice from '../medicalform/InnerSingleChoice'
// import InnerTextBlock from '../medicalform/InnerTextBlock'
// import InnerTravelDestination from '../medicalform/InnerTravelDestination'
// import InnerVaccineHistory from '../medicalform/InnerVaccineHistory'
// import InnerVaccineScheduler from '../medicalform/InnerVaccineScheduler'
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
                    {/* {form.formName === 'ShortAnswer' && (
                      <InnerShortAnswer
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'LongAnswer' && (
                      <InnerLongAnswer
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'TextBlock' && (
                      <InnerTextBlock
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'SingleChoice' && (
                      <InnerSingleChoice
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'MultipleChoice' && (
                      <InnerMultiChoice
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'DropDown' && (
                      <InnerDropdown
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'Drawing' && (
                      <InnerDrawing
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'Signature' && (
                      <InnerSignature
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'MedicalConditions' && (
                      <InnerConditions
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'Drugs' && (
                      <InnerDrugs
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'TravelDestination' && (
                      <InnerTravelDestination
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'VaccineScheduler' && (
                      <InnerVaccineScheduler
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'VaccineHistory' && (
                      <InnerVaccineHistory
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )}
                    {form.formName === 'LabTest' && (
                      <InnerLabTest
                        required={false}
                        activate={
                          activatedComponentID === `${form.id}` ? true : false
                        }
                        componentData={form}
                        handlingSelectComponent={handlingSelectComponent}
                      />
                    )} */}
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
