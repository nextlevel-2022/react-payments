import React from 'react';

import { CardList } from './CardList';

export default {
  title: 'Example/CardList',
  component: CardList,
};

const Template = (args) => <CardList {...args} />;

export const props = Template.bind({});
props.args = {};
