import React from "react";
import Button from "./index";

export default {
	title: "components/Button",
	component: Button,
	decorators: [
		Story => (
			<div style={{ margin: "3rem" }}>
				<Story />
			</div>
		),
	],
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { content: "Default" };
