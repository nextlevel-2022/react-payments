import React, { useRef } from "react";
import CardAdd from "./index";
import {
	FIRST,
	FOURTH,
	MONTH,
	SECOND,
	THIRD,
	YEAR,
} from "../../config/constant";

export default {
	title: "pages/CardAdd",
	component: CardAdd,
};

const Template = args => {
	const refsObj = {
		cardNumberRef: useRef(null),
		cardExpirationDateRef: useRef(null),
		cardOwnerRef: useRef(null),
		cardSecureCodeRef: useRef(null),
		cardPasswordRef: useRef(null),
	};

	return <CardAdd {...args} ref={refsObj} />;
};
export const Default = Template.bind({});
Default.args = {
	cardName: "로이드",
	cardNumber: {
		[FIRST]: "1111",
		[SECOND]: "222",
		[THIRD]: "",
		[FOURTH]: "",
	},
	cardOwner: "",
	cardExpirationDate: { [MONTH]: "10", [YEAR]: "23" },
	cardPassword: { [FIRST]: "", [SECOND]: "" },
};

export const ModalOn = Template.bind({});
ModalOn.args = {
	...Default.args,

	cardNumber: {
		[FIRST]: "1111",
		[SECOND]: "2222",
		[THIRD]: "",
		[FOURTH]: "",
	},
};
