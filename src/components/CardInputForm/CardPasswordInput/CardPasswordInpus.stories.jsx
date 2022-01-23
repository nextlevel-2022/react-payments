import React from "react";
import CardPasswordInput from "./index";
import { FIRST, SECOND } from "../../../config/constant";

export default {
	title: "components/CardPasswordInput",
	component: CardPasswordInput,
};

const Template = args => <CardPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "카드 비밀번호",
	cardPassword: { [FIRST]: "", [SECOND]: "" },
};
