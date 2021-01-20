import { Formik, FormikErrors } from 'formik'
import { Form as AntForm } from 'antd'
import React from 'react'
import { Input } from 'antd'

export default function Form<T>({
  onRef,
  schema: { fields },
  onSubmit,
  initialValues,
}: {
  // eslint-disable-next-line
  onRef?: (ref: any) => void
  schema: Schema
  onSubmit: (form: T) => false | string | void | Promise<false | string | void>
  initialValues: T
}): JSX.Element {
  return (
    <Formik
      innerRef={(r) => {
        if (r) {
          onRef?.(r)
        }
      }}
      validate={(e) =>
        Object.entries(fields).reduce((a, c) => {
          if (c[1].min) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (c[1].min > e[c[0]].length) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              a[c[0]] = `The value for ${c[1].shortLower} must be more than ${c[1].min} characters.`
            }
          }
          return a
        }, {} as FormikErrors<T>)
      }
      onSubmit={async (values) => onSubmit?.(values as T)}
      initialValues={initialValues}
    >
      {({ isSubmitting, initialValues }) => (
        <AntForm layout="vertical">
          {Object.entries(fields).map(
            ([name, { short, shortLower, example, description, extra, min }], i) => (
              <AntForm.Item
                //initialValue={initialValues[name]}
                key={name}
                label={short}
                name={name}
                required={!!min}
                tooltip={`${description} for this ${shortLower}, eg: ${example}`}
                // showValidateSuccess={!!min}
                extra={extra && <div>{extra}</div>}
              >
                <Input
                  disabled={isSubmitting}
                  name={name}
                  placeholder={example && `eg ${example}`}
                  autoFocus={i === 0}
                />
              </AntForm.Item>
            )
          )}
        </AntForm>
      )}
    </Formik>
  )
}
