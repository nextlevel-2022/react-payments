import React from "react";
import CircleButton from "./index";

export default {
	title: "components/CircleButton",
	component: CircleButton,
};

const Template = args => <CircleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "포코",
	backgroundColor: "#E24141",
};
