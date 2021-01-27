import React, { ChangeEvent, PropsWithChildren, ReactNode } from 'react'
import { Input as AntInput } from 'antd'
import classNames from 'classnames'
import styles from './input.module.less'

enum ButtonSize {
  small = 'small',
  middle = 'middle',
  large = 'large',
}

export interface CheckBoxProps {
  text?: string
  label?: string
  size?: ButtonSize
  requiredMark?: boolean
  disabled?: boolean
  layout?: string
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  placeHolderText?: string
  value?: string
  requiredMsg?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  text,
  size,
  disabled,
  placeHolderText,
  requiredMark,
  label,
  prefix,
  layout,
  requiredMsg,
  value,
  suffix,
  onChange,
  ...props
}: PropsWithChildren<CheckBoxProps>): JSX.Element {
  return (
    <>
      <div
        className={classNames(
          layout?.toLowerCase() === 'horizontal' && styles.displayFlex
        )}
      >
        <div>
          {label} {requiredMark && <span className={styles.colorError}>*</span>}
        </div>
        <div>
          <AntInput
            className="input-style"
            placeholder={placeHolderText}
            value={text}
            size={size}
            defaultValue={text}
            disabled={disabled}
            prefix={prefix || ''}
            suffix={suffix || ''}
            onChange={(e) => onChange?.(e)}
            {...props}
          />
        </div>
      </div>
      <span
        className={classNames(
          styles.colorError,
          layout?.toLowerCase() === 'horizontal' && styles.pl45
        )}
      >
        {!value && requiredMsg}
      </span>
    </>
  )
}

export default Input
