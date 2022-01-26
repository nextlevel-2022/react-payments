import React from "react";
import CardNameInput from "./card_name_input";

export default {
  title: "Components/NameIntput",
  component: CardNameInput,
}

const Template = (args) => <CardNameInput {...args} />;


export const Default = Template.bind({});
Default.args = {
  name: "younchong",
  setName: function(e) {
    Default.args.name = e;
  }
}