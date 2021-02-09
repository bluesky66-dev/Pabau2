import React, { FC } from 'react'
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
}

interface P {
  draggedFromNames?: formParams[]
}

const MedicalFormEditMain: FC<P> = ({ ...props }) => {
  const { draggedFromNames } = props
  return (
    <Droppable droppableId="MainSide">
      {(provided, snapshot) => (
        <div
          className={styles.medicalFormEditMainPanel}
          ref={provided.innerRef}
        >
          {draggedFromNames?.map((form, index) => {
            return (
              <Draggable
                key={`Inner${form.formName}${index}`}
                draggableId={`Inner${form.formName}${index}`}
                index={index}
              >
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
                      <InnerHeading required={false} />
                    )}
                    {form.formName === 'ShortAnswer' && (
                      <InnerShortAnswer required={false} />
                    )}
                    {form.formName === 'LongAnswer' && (
                      <InnerLongAnswer required={false} />
                    )}
                    {form.formName === 'TextBlock' && (
                      <InnerTextBlock required={false} />
                    )}
                    {form.formName === 'SingleChoice' && (
                      <InnerSingleChoice required={false} />
                    )}
                    {form.formName === 'CheckBox' && (
                      <InnerMultiChoice required={false} />
                    )}
                    {form.formName === 'DropDown' && (
                      <InnerDropdown required={false} />
                    )}
                    {form.formName === 'Drawing' && (
                      <InnerDrawing required={false} />
                    )}
                    {form.formName === 'Signature' && (
                      <InnerSignature required={false} />
                    )}
                    {form.formName === 'MedicalConditions' && (
                      <InnerConditions required={false} />
                    )}
                    {form.formName === 'Drugs' && (
                      <InnerDrugs required={false} />
                    )}
                    {form.formName === 'TravelDestination' && (
                      <InnerTravelDestination required={false} />
                    )}
                    {form.formName === 'VaccineScheduler' && (
                      <InnerVaccineScheduler required={false} />
                    )}
                    {form.formName === 'VaccineHistory' && (
                      <InnerVaccineHistory required={false} />
                    )}
                    {form.formName === 'LabTest' && (
                      <InnerLabTest required={false} />
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
