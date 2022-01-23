import React, { useRef } from "react";
import CardSecureCodeInput from "./index";

export default {
	title: "components/CardSecureCodeInput",
	component: CardSecureCodeInput,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardSecureCodeInput {...args} ref={refsObj} />;
};

export const Default = Template.bind({});
Default.args = {
	label: "보안 코드(CCV/CVV)",
};
