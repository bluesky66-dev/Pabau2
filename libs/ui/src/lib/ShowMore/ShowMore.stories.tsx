import React from "react";
import { ShowMore } from "./ShowMore";

export default {
  component: ShowMore,
  title: "ShowMore",
  args: {
    length: 15,
  },
  argTypes: {
    length: {
      control: {
        type: "number",
      },
    },
  },
};

const ShowMoreStory = ({ ...args }) => <ShowMore {...args} />;

export const Basic = ShowMoreStory.bind({});
