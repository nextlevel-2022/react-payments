/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/assets/styles/index.css';
import { PasswordInput } from '@components';

export default {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

export const PasswordInputTemplate = Template.bind({});
PasswordInputTemplate.args = {
  setNewCard: () => { },
};
