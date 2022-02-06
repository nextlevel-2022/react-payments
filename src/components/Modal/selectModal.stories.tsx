import React from 'react';
import { ComponentStory } from '@storybook/react';
import Modal from '.';
import KeypadModal from './keypad';

export default {
	title: '1. Components/Modal',
};

const ToggleModal = ({ show }: { show: boolean }) => {
	if (show) return <Modal selectCard={() => {}} closeModal={() => {}} />;
	return null;
};

const ModalTemplate: ComponentStory<typeof ToggleModal> = args => {
	const { show } = args;

	return (
		<>
			<ToggleModal show={show} />
			<div id="modalRoot"></div>
		</>
	);
};

export const ModalSelect = ModalTemplate.bind({});
ModalSelect.args = { show: true };

const KeypadTemplate: ComponentStory<typeof KeypadModal> = args => (
	<KeypadModal handleKeypadBack={() => {}} handleKeypadDown={() => {}} />
);

export const ModalKeypad = KeypadTemplate.bind({});
