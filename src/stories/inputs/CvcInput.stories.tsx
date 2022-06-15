/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/assets/styles/index.css';
import { CvcInput } from '@components';

export default {
  title: 'Inputs/CvcInput',
  component: CvcInput,
} as ComponentMeta<typeof CvcInput>;

const Template: ComponentStory<typeof CvcInput> = (args) => <CvcInput {...args} />;

export const CvcInputTemplate = Template.bind({});
CvcInputTemplate.args = {
  setNewCard: () => { },
};
