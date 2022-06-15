import React, { SetStateAction } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '/src/assets/styles/index.css';
import CompanyModal from '../components/card/CompanyModal';
import { CardProps } from 'src/interface';

export default {
  title: 'CompanyModal',
};

const ToggleModal = ({ show }: { show: boolean }) => {
  if (show)
    return (
      <CompanyModal
        setNewCard={function (value: SetStateAction<CardProps>): void {
          throw new Error('Function not implemented.');
        }}
        setCompanyModalOpened={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  return null;
};

const ModalTemplate: ComponentStory<typeof ToggleModal> = (args) => <ToggleModal {...args} />;

export const ModalSelect = ModalTemplate.bind({});
ModalSelect.args = {
  show: true,
};
