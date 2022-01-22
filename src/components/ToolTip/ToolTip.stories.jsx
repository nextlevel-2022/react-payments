import React from "react";
import ToolTip from "./index";

export default {
	title: "components/ToolTip",
	component: ToolTip,
};

const Template = args => <ToolTip {...args} />;

export const Default = Template.bind({});
Default.args = {};
