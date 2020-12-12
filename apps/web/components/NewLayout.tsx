import { Formik, FormikErrors } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import React, { useEffect } from 'react'
import { Schema } from '../types/schema'
import { useRouter } from 'next/router'
import { Layout } from '@pabau/ui'
import { Button, Card } from 'antd'

export default function NewLayout<T>({
  schema: { fields, full },
  onSubmit,
}: {
  schema: Schema
  onSubmit: (form: T) => false | string | void | Promise<false | string | void>
}): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    window.document.onkeypress = (e) => {
      if (e.code === 'Escape') {
        router.back()
      }
      //console.log('key down', e.code, e)
    }
    return () => {
      console.log('clean up now pls')
    }
  }, [router])
  return (
    <Layout onCancelClicked={() => router.back()} pageTitle={null}>
      <Card title={`Create new ${full}`} style={{ width: '50vmin', margin: '0 auto' }}>
        <Formik<T>
          validate={(e) =>
            Object.entries(fields).reduce((a, c) => {
              if (c[1].min) {
                if (c[1].min > e[c[0]].length)
                  a[
                    c[0]
                  ] = `The value for ${c[1].shortLower} must be more than ${c[1].min} characters.`
              }
              return a
            }, {} as FormikErrors<T>)
          }
          onSubmit={async (values, fh) => {
            if (onSubmit) {
              if ((await onSubmit(values)) !== false) router.back()
            } else {
              router.back()
            }
            // fh.resetForm()
          }}
          initialValues={Object.keys(fields).reduce((a, c) => {
            a[c] = ''
            return a
          }, {} as T)}
          render={({ isSubmitting }) => (
            <Form layout="vertical">
              {Object.entries(fields).map(
                ([name, { short, shortLower, example, description, extra, min }], i) => (
                  <Form.Item
                    key={name}
                    label={short}
                    name={name}
                    required={!!min}
                    tooltip={`${description} for this ${shortLower}, eg: ${example}`}
                    //showValidateSuccess={!!min}
                    extra={extra && <div>{extra}</div>}
                  >
                    <Input
                      disabled={isSubmitting}
                      name={name}
                      placeholder={`eg ${example}`}
                      autoFocus={i === 0}
                    />
                  </Form.Item>
                )
              )}
              <Button.Group>
                <SubmitButton>Submit</SubmitButton>
              </Button.Group>
            </Form>
          )}
        />
      </Card>
    </Layout>
  )
}
