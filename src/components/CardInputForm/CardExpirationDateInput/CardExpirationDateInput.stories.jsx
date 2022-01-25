import React, { useRef } from "react";
import CardExpirationDateInput from "./index";
import { MONTH, YEAR } from "../../../config/constant";

export default {
	title: "components/cardExpirationDateInput",
	component: CardExpirationDateInput,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};
	return <CardExpirationDateInput {...args} ref={refsObj} />;
};

export const Default = Template.bind({});
Default.args = {
	label: "만료일",
	cardExpirationDate: { [MONTH]: "10", [YEAR]: "23" },
};
