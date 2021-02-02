/* eslint-disable */
import React from 'react'
import RegistrationFields, {FieldType} from './RegistrationFields'

export default {
    component: RegistrationFields,
    title: 'UI/Registration Fields',
    args: {},
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

const RegistrationFieldsStory = ({ ...args }) => <RegistrationFields {...args}></RegistrationFields>

export const RegistrationField = RegistrationFieldsStory.bind({})
RegistrationField.args = {
    title: 'Registration Fields',
    description: 'Choose which fields you would like to be visible or mandatory on the registration page',
    fieldTitle: 'Field Name',
    customFieldTitle: 'Custom Fields',
    visibleTitle: 'Visible',
    requiredTitle: 'Required',
    fields: [
        {
            fieldName: 'Salutation',
            visible: false,
            required: false,
            key: 1
        },
        {
            fieldName: 'First Name',
            visible: true,
            required: true,
            disabled: true,
            key: 2
        },
        {
            fieldName: 'Last Name',
            visible: true,
            required: true,
            disabled: true,
            key: 3
        },
        {
            fieldName: 'Gender',
            visible: false,
            required: false,
            key: 4
        },
        {
            fieldName: 'Date of Birth',
            visible: false,
            required: false,
            key: 5
        },
        {
            fieldName: 'Mobile',
            visible: false,
            required: false,
            key: 6
        },
        {
            fieldName: 'Address',
            visible: false,
            required: false,
            key: 7
        },
        {
            fieldName: 'City',
            visible: false,
            required: false,
            key: 8
        },
        {
            fieldName: 'Country',
            visible: false,
            required: false,
            key: 9
        },
        {
            fieldName: 'Post code',
            visible: false,
            required: false,
            key: 10
        },
        {
            fieldName: 'How did you hear about us?',
            visible: false,
            required: false,
            key: 11
        }
    ],
    customFields: [
        {
            fieldName: 'GP Name',
            visible: false,
            required: false,
            key: 1
        },
        {
            fieldName: 'GP Address',
            visible: false,
            required: false,
            key: 2
        },
        {
            fieldName: 'Gender',
            visible: false,
            required: false,
            key: 3
        },
        {
            fieldName: 'Test MC',
            visible: false,
            required: false,
            key: 4
        }
    ],
    onChange: (mainField: FieldType[], customField: FieldType[]) => { console.log('changed', mainField, customField) }
}