import React from "react";
import Button from "./index";

export default {
	title: "Button",
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

export const Primary = Template.bind({});
Primary.args = { content: "Hello", background: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { content: "World", background: "#0f0", label: "Hello" };
