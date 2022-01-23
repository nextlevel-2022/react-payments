import React, { useRef } from "react";
import CardNumberInput from "./index";
import { FIRST, FOURTH, SECOND, THIRD } from "../../../config/constant";

export default {
	title: "components/CardNumberInput",
	component: CardNumberInput,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardNumberInput {...args} ref={refsObj} />;
};

export const Default = Template.bind({});
Default.args = {
	label: "카드번호",
	cardNumber: {
		[FIRST]: "1111",
		[SECOND]: "2222",
		[THIRD]: "3333",
		[FOURTH]: "4444",
	},
};
