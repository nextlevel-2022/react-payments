import React from "react";
import CardNumberInput from "./card_number_input";



export default {
  title: "Components/NumberInput",
  component: CardNumberInput,
}

const Template = (args) => <CardNumberInput {...args} />;


export const Default = Template.bind({});
Default.args = {
  numbers: {
    "firstInput": "1111",
    "secondInput": "1111",
    "thirdInput": "2222",
    "fourthInput": "2222",
  },
  company: {
    name: '신한카드',
    color: '#e24141',
    patterns: ['11111111', '11110000'],
  }
}
