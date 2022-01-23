import React from "react";
import BackButton from "./index";

export default {
	title: "components/BackButton",
	components: BackButton,
};

const Template = args => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
