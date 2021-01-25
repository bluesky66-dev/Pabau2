/* eslint-disable */
import React from "react";
import SecurityTools from "./Securitytools";
import { data } from './mock';

export default {
    component: SecurityTools,
    title: "Misc/Securitytools",
    args: {datasource: data},
    argTypes: {
		onClick: { action: 'clicked' },
        // percent: { control: { type: 'number' } },
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
};


const SecuritytoolsStory = ({ ...args }) => <SecurityTools {...args} datasource={args.datasource}></SecurityTools>

export const securityTools = SecuritytoolsStory.bind({})
securityTools.args = {
  datasource : data
}
