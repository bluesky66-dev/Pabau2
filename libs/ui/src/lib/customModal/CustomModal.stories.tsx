/* eslint-disable */
import { argsToArgsConfig } from "graphql/type/definition";
import React from "react";
import { CustomModal } from './CustomModal';
import { data } from './mock';

export default {
    component: CustomModal,
    title: "Modals/customModal",
    args: { datasource : data },
    argTypes: {
        onClick: { action: "clicked" },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const story = ({ ...args }) => <CustomModal {...args} datasource={args.datasource} />;

export const defaultTool = story.bind({});
defaultTool.args = {};