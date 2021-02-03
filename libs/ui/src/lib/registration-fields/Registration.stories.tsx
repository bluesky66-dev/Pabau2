/* eslint-disable */
import React, { useEffect, useState, FC } from 'react'
import RegistrationFields, { FieldType } from './RegistrationFields'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { customFieldTitle, fields, description, requiredTitle, customFields, fieldTitle, title, visibleTitle } from './mock'

export default {
    component: RegistrationFields,
    title: 'UI/Registration Fields',
    args: {
        customFieldTitle,
        fields,
        description,
        requiredTitle,
        customFields,
        fieldTitle,
        title,
        visibleTitle
    },
    argTypes: {
        title: { control: { type: 'text' } },
        description: { control: { type: 'text' } },
        fieldTitle: { control: { type: 'text' } },
        customFieldTitle: { control: { type: 'text' } },
        visibleTitle: { control: { type: 'text' } },
        requiredTitle: { control: { type: 'text' } },
        fields: { control: { type: 'object' } },
        customFields: { control: { type: 'object' } }
    },
    onChange: { action: 'onChange' },
}

interface P {
    customFieldTitle: string,
    fields: FieldType[],
    description: string,
    requiredTitle: string,
    customFields: FieldType[],
    fieldTitle: string,
    title: string,
    visibleTitle: string
}

export const RegistrationFieldsStory: FC<P> = ({ customFieldTitle,
    fields,
    description,
    requiredTitle,
    customFields,
    fieldTitle,
    title,
    visibleTitle }) => {
    const [mainFields, setMainFields] = useState<FieldType[]>([])
    const [customField, setCustomField] = useState<FieldType[]>([])
    console.log('asdsad')

    useEffect(() => {
        if (fields) {
            setMainFields([...fields])
        }

        if (customFields) {
            setCustomField([...customFields])
        }
    }, [fields, customFields])

    const onChange = (mainField: FieldType[], customField: FieldType[]) => {
        console.log('changed', mainField, customField)
    }

    const onMainFieldCheckboxChange = (
        e: CheckboxChangeEvent,
        key: number,
        checkboxField: string
    ) => {
        const records = [...mainFields]
        records.forEach((record) => {
            if (record.key === key) {
                record[checkboxField] = e.target.checked
            }
        })
        setMainFields([...records])
        onChange?.(mainFields, customField)
    }

    const onCustomFieldCheckboxChange = (
        e: CheckboxChangeEvent,
        key: number,
        checkboxField: string
    ) => {
        const records = [...customField]
        records.forEach((record) => {
            if (record.key === key) {
                record[checkboxField] = e.target.checked
            }
        })
        setCustomField([...records])
        onChange?.(mainFields, customField)
    }
    return (
        <RegistrationFields
            customFieldTitle={customFieldTitle}
            fields={mainFields}
            description={description}
            requiredTitle={requiredTitle}
            customFields={customField}
            fieldTitle={fieldTitle}
            title={title}
            visibleTitle={visibleTitle}
            onCustomFieldCheckboxChange={onCustomFieldCheckboxChange}
            onMainFieldCheckboxChange={onMainFieldCheckboxChange}
        />
    )
}