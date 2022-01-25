import React from "react";
import CardMaker from "./card_maker";

export default {
  title: "Pages/CardMaker",
  component: CardMaker,
}

const Template = (args) => <CardMaker {...args} />;


export const Default = Template.bind({});
Default.args = {
  numbers: {
    "firstInput": "1111",
    "secondInput": "1111",
    "thirdInput": "2222",
    "fourthInput": "2222",
  },
  date: {
    "MM": "03",
    "YY": "96",
  },
  name: "younchong",
  company: {
    name: '신한카드',
    color: '#e24141',
    patterns: ['11111111', '11110000'],
  }
}
