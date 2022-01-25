import React from "react";
import CardCvcInput from "./card_cvc_input";

export default {
  title: "Components/CVCIntput",
  component: CardCvcInput,
}

const Template = (args) => <CardCvcInput {...args} />;


export const Default = Template.bind({});
Default.args = {
  cvc: 123,
  
}