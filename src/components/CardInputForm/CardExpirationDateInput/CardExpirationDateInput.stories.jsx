import React from "react";
import CardExpirationDateInput from "./index";
import { MONTH, YEAR } from "../../../config/constant";

export default {
	title: "components/cardExpirationDateInput",
	component: CardExpirationDateInput,
};

const Template = args => <CardExpirationDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "만료일",
	cardExpirationDate: { [MONTH]: "10", [YEAR]: "23" },
};
