import React from 'react';
import Card from './index';
import DeletableCard from './deletable';
import { ComponentStory } from '@storybook/react';

const cardData = {
	cardName: '그린 카드',
	cardNumber: '1234 - 1234 - **** - ****',
	cardExpireDate: '12 / 34',
	cardOwner: 'Youngmin',
	cardNickname: '영카',
};

export default {
	title: '1. Components/Card',
};

const CardTemplate: ComponentStory<typeof Card> = args => (
	<div className="app flex-column-center">
		<Card {...args} />
	</div>
);

export const CardNew = CardTemplate.bind({});
CardNew.args = {
	type: 'new',
	card: null,
};

export const CardEmpty = CardTemplate.bind({});
CardEmpty.args = {
	type: 'small',
	card: null,
};

export const CardBig = CardTemplate.bind({});
CardBig.args = {
	type: 'big',
	card: cardData,
};

export const CardSmall = CardTemplate.bind({});
CardSmall.args = {
	type: 'small',
	card: cardData,
};

const DeletableTemplate: ComponentStory<typeof DeletableCard> = args => (
	<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 'inherit' }}>
		<DeletableCard {...args} />
	</div>
);
export const CardDeletable = DeletableTemplate.bind({});
CardDeletable.args = {
	type: 'small',
	card: cardData,
};
