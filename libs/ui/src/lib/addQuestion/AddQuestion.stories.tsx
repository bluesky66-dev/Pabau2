import React from 'react'
import AddQuestion from './AddQuestion'

export default {
  component: AddQuestion,
  title: 'Basics/AddQuestion',
  args: { description: '', questions: [] },
  argTypes: {
    description: { control: { type: 'text' } },
    questions: { control: { type: 'array' } },
  },
}

const AddQuestionStory = ({ ...args }) => <AddQuestion {...args} />

export const Basic = AddQuestionStory.bind({})
Basic.args = {
  title: 'Questions',
  questionLabel: 'Question',
  addQuestionLabel: 'Add Question',
  description:
    'Choose the way in which you request feedback from clients who visit you',
  questions: [
    'How did you rate your consultation',
    'How likely will you recommend us to How likely will you recommend us to',
    'How was your overall experience',
  ],
  goToButtonLabel: 'Go to Question Bank',
}
