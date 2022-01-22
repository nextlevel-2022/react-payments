import React from "react";
import CardOwnerInput from "./index";

export default {
	title: "components/CardOwnerInput",
	component: CardOwnerInput,
};

const Template = args => <CardOwnerInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "카드 소유자 이름 (선택)",
	cardOwner: "",
};
