import React from "react";
import CardPasswordInput from "./card_password_input";


export default {
  title: "Components/PasswordIntput",
  component: CardPasswordInput,
}

const Template = (args) => <CardPasswordInput {...args} />;


export const Default = Template.bind({});
Default.args = {
  password: {
    "firstPassword" : null,
    "secondPassword" : null
  },
  setPassword: function(set) {
    const passwords = Default.args.password;
    set(passwords => {
      const update = {...passwords};
      return update
    });
  }
}