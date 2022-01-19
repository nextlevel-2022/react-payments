import React from "react";
import CardInputForm from "./index";
import {
	FIRST,
	FOURTH,
	MONTH,
	SECOND,
	THIRD,
	YEAR,
} from "../../config/constant";

export default {
	title: "components/CardInputForm",
	component: CardInputForm,
};

const Template = args => <CardInputForm {...args} />;

export const Default = Template.bind({});
Default.args = {
	cardName: "로이드카드",
	cardNumber: {
		[FIRST]: "1111",
		[SECOND]: "2222",
		[THIRD]: "3333",
		[FOURTH]: "4444",
	},
	cardOwner: "NAME",
	cardExpirationDate: { [MONTH]: "10", [YEAR]: "23" },
};
