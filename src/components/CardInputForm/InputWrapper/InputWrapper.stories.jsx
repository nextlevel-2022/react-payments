import React from "react";
import InputWrapper from "./index";

export default {
	title: "components/InputWrapper",
	component: InputWrapper,
};

const Template = args => <InputWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {};
