import React from 'react'
import Preloader from './Preloader'

export default {
  component: Preloader,
  title: 'Basics/Preloader',
  args: { isLoaderVisible: true },
}

const PreloaderStory = ({ ...args }) => <Preloader {...args} />
export const Loader = PreloaderStory.bind({})
Loader.args = {
  isLoaderVisible: true,
}
