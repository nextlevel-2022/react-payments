import React from "react";
import Card from "./index";

export default {
	title: "components/Card",
	component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	cardInfo: {
		cardName: "로이드카드",
		cardNumber: "0000 1111 2222 3333",
		cardOwner: "NAME",
		cardExpirationDate: "MM/YY",
	},
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
