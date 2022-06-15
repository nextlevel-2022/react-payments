/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/assets/styles/index.css';
import { OwnerNameInput } from '@components';

export default {
  title: 'Inputs/OwnerNameInput',
  component: OwnerNameInput,
} as ComponentMeta<typeof OwnerNameInput>;

const Template: ComponentStory<typeof OwnerNameInput> = (args) => <OwnerNameInput {...args} />;

export const OwnerNameInputTemplate = Template.bind({});
OwnerNameInputTemplate.args = {
  setNewCard: () => { },
};
