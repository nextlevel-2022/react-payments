import React from "react";
import CardList from "./index";

export default {
	title: "pages/CardList",
	component: CardList,
};

const Template = args => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
	cardInfo: {
		cardName: "로이드카드",
		cardNumber: "0000 1111 2222 3333",
		cardOwner: "NAME",
		cardExpirationDate: "MM/YY",
	},
};
