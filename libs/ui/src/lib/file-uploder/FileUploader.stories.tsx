import React, { FC } from 'react'
import FileUploder, { DraggableProps } from './FileUploder'

export default {
  component: FileUploder,
  title: 'Modals/FileUploder',
  args: {
    draggerProps: { multiple: true, name: 'file' },
  },
  argsTypes: {
    draggerProps: { control: { type: 'object' } },
  },
}

interface P {
  draggerProps?: DraggableProps
}

export const FileUploaderStory: FC<P> = ({
  draggerProps,
  ...args
}): JSX.Element => {
  return <FileUploder draggerProps={draggerProps} {...args} />
}
