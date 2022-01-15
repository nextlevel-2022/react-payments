import React from "react";
import TextButton from "./index";

export default {
	title: "components/TextButton",
	component: TextButton,
};

const Template = args => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = { content: "다음" };
