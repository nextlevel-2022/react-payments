/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/assets/styles/index.css';
import { CardNumberInput } from '@components';

export default {
  title: 'Inputs/CardNumberInput',
  component: CardNumberInput,
} as ComponentMeta<typeof CardNumberInput>;

const Template: ComponentStory<typeof CardNumberInput> = (args) => <CardNumberInput {...args} />;

export const CardNumberInputTemplate = Template.bind({});
CardNumberInputTemplate.args = {
  newCard: {
    company: '',
    cardNumber: ['1234', '123', '1234', '1234'],
    expireMonth: '',
    expireYear: '',
    cvcNumber: '',
    nickname: '',
  },
  setNewCard: () => { },
  setCompanyModalOpened: () => { },
};
