import React from "react";
import CardNumberInput from "./index";
import { FIRST, FOURTH, SECOND, THIRD } from "../../../config/constant";

export default {
	title: "components/CardNumberInput",
	component: CardNumberInput,
};

const Template = args => <CardNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	width: "327px",
	label: "카드번호",
	cardNumber: {
		[FIRST]: "1111",
		[SECOND]: "2222",
		[THIRD]: "3333",
		[FOURTH]: "4444",
	},
};
