/* eslint-disable */
import React from "react";

import Wizard from "./Wizard";

export default {
    component: Wizard,
    title: "Wizard/Wizard",
    args: { active: 1 },
    argTypes: {
		active: { control: { type: 'number' } },
        onPrev: { action: "clicked" },
        onNext: { action: "clicked" },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const WizardStory = ({ ...args }) => {
    const { active = 0 } = args;
    const [index, setIndex] = React.useState(active);
    return <Wizard {...args} active={index} onPrev={() => setIndex(index - 1)} onNext={() => setIndex(index + 1)}></Wizard>;
};

export const wizard = WizardStory.bind({});
wizard.args = {};
