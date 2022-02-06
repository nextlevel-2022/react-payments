import React from 'react';
import CardListContextProvider from '../contexts/cardList';
import CardEnroll from './CardEnroll';
import CardList from './CardList';
import CardConfirm from './CardConfirm';
import { ComponentStory } from '@storybook/react';

export default {
	title: '2. Pages/index',
};

const CardEnrollTemplate: ComponentStory<typeof CardEnroll> = args => (
	<>
		<CardEnroll />
		<div id="modalRoot"></div>
	</>
);

export const PageCardEnroll = CardEnrollTemplate.bind({});

const cardData = (cardName = '콜린 카드') => ({
	cardName,
	cardNumber: '1234 - 1234 - **** - ****',
	cardExpireDate: '12 / 34',
	cardOwner: 'Youngmin',
	cardNickname: '영카',
});

const CardConfirmTemplate: ComponentStory<typeof CardConfirm> = args => (
	<>
		<CardListContextProvider {...args}>
			<CardConfirm />
		</CardListContextProvider>
	</>
);

export const PageCardConfirm = CardConfirmTemplate.bind({});
PageCardConfirm.args = {
	initialState: {
		editingCard: cardData(),
	},
};

const CardListTemplate: ComponentStory<typeof CardList> = args => (
	<CardListContextProvider {...args}>
		<CardList />
	</CardListContextProvider>
);

export const PageCardList = CardListTemplate.bind({});
PageCardList.args = {
	initialState: {
		cards: [cardData(), cardData('쿡민 카드')],
	},
};
