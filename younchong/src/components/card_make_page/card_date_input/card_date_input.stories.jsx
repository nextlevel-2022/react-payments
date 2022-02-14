import React from "react";
import CardDateInput from "./card_date_input";



export default {
  title: "Components/DateInput",
  component: CardDateInput,
}

const Template = (args) => <CardDateInput {...args} />;


export const Default = Template.bind({});
Default.args = {
  date: {
    "MM": "03",
    "YY": "96",
  },
  setDate: function(e) {
    Default.args.date = e;
  }
}
