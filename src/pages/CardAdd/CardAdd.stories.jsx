import React from "react";
import CardAdd from "./index";

export default {
	title: "pages/CardAdd",
	component: CardAdd,
};

const Template = args => <CardAdd {...args} />;

export const Default = Template.bind({});
