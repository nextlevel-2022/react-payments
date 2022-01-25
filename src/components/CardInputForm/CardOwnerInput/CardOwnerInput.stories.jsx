import React, { useRef } from "react";
import CardOwnerInput from "./index";

export default {
	title: "components/CardOwnerInput",
	component: CardOwnerInput,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardOwnerInput {...args} ref={refsObj} />;
};

export const Default = Template.bind({});
Default.args = {
	label: "카드 소유자 이름 (선택)",
	cardOwner: "",
};
