import React from "react";
import CardSecureCodeInput from "./index";

export default {
	title: "components/CardSecureCodeInput",
	component: CardSecureCodeInput,
};

const Template = args => <CardSecureCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "보안 코드(CCV/CVV)",
	width: "84px",
};
