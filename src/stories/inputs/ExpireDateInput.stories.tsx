/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/assets/styles/index.css';
import { ExpireDateInput } from '@components';

export default {
  title: 'Inputs/ExpireDateInput',
  component: ExpireDateInput,
} as ComponentMeta<typeof ExpireDateInput>;

const Template: ComponentStory<typeof ExpireDateInput> = (args) => <ExpireDateInput {...args} />;

export const ExpireDateInputTemplate = Template.bind({});
ExpireDateInputTemplate.args = {
  setNewCard: () => { },
};
