import React from "react";
import {
	FIRST,
	FOURTH,
	MONTH,
	SECOND,
	THIRD,
	YEAR,
} from "../../config/constant";
import Card from "./index";

export default {
	title: "components/Card",
	component: Card,
};

const Template = args => <Card {...args} />;

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

export const Small = Template.bind({});
Small.args = {
	size: "small",
	...Default.args,
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	...Default.args,
};
