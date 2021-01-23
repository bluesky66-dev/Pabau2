/* eslint-disable */
import React from "react";
import { Badge, PabauPlus } from './Badge';

export default {
    component: Badge,
    title: "Basics/Badge",
    args: { label: "Enabled", disabled: false },
    argTypes: {
        label: { control: { type: "text" } },
        disabled: { control: { type: "boolean" } },
        onClick: { action: "clicked" },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const BadgeStory = ({ ...args }) => <Badge {...args} />;

export const defaultStatusLabel = BadgeStory.bind({});
defaultStatusLabel.args = {
    label: "Enabled",
    disabled: false,
};

const PabauPlusStory = ({ ...args }) => <PabauPlus {...args} />;
export const pabauPlus = PabauPlusStory.bind({});
pabauPlus.args = {
    label: 'Plus',
};
