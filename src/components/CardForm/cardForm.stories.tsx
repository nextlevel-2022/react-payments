import React, { createRef, ReactChild, SyntheticEvent } from 'react';
import { ComponentStory } from '@storybook/react';
import { getCustomValidity, patterns } from '../../common/formCollection';
import { Basic, Password } from './input';
import { LIMITS } from '../../common/constants';

export default {
	title: '1. Components/CardForm',
};

const Form = ({ children }: { children: ReactChild }) => {
	const handleChange = (e: SyntheticEvent) => {
		const $target = e.target;
		if (!($target instanceof HTMLInputElement)) return;
		const validityResult = getCustomValidity($target);
		$target.setCustomValidity(validityResult);
		$target.reportValidity();
	};

	return (
		<form onChange={handleChange}>
			<div className="input-container">{children}</div>
		</form>
	);
};

// eslint-disable-next-line react/display-name
const InputWithKeypad = (name: string, Component: any) => (args: any) => {
	const ref = createRef<HTMLInputElement>();

	console.log(name);
	return (
		<div style={{ marginTop: '150px' }}>
			<Form>
				<Component name={name} elRef={ref} {...args} />
			</Form>
		</div>
	);
};

const CardNumberTemplate: ComponentStory<typeof Basic> = args => (
	<Form>
		<Basic {...args} />
	</Form>
);

export const InputCardNumber = CardNumberTemplate.bind({});
InputCardNumber.args = {
	name: 'cardNumber1',
	pattern: patterns.cardNumberPattern,
	minLength: LIMITS.CARD_NUMBER_SIZE,
	maxLength: LIMITS.CARD_NUMBER_SIZE,
};

const CardNumberAnonymousTemplate: ComponentStory<typeof Password> = args => {
	const Component = InputWithKeypad('cardNumber3', Password);

	return <Component {...args} />;
};

export const InputCardNumberAnonymous = CardNumberAnonymousTemplate.bind({});
InputCardNumberAnonymous.args = {
	name: 'cardNumber3',
	pattern: patterns.cardNumberPattern,
	minLength: LIMITS.CARD_NUMBER_SIZE,
	maxLength: LIMITS.CARD_NUMBER_SIZE,
};

const MonthTemplate: ComponentStory<typeof Basic> = args => (
	<Form>
		<Basic {...args} />
	</Form>
);

export const InputMonth = MonthTemplate.bind({});
InputMonth.args = {
	name: 'expiredMonth',
	pattern: patterns.expiredMonthPattern,
	minLength: LIMITS.MONTH_SIZE,
	maxLength: LIMITS.MONTH_SIZE,
	placeHolder: 'MM',
};

const YearTemplate: ComponentStory<typeof Basic> = args => (
	<Form>
		<Basic {...args} />
	</Form>
);

export const InputYear = YearTemplate.bind({});
InputYear.args = {
	name: 'expiredYear',
	pattern: patterns.expiredYearPattern,
	minLength: LIMITS.YEAR_SIZE,
	maxLength: LIMITS.YEAR_SIZE,
	placeHolder: 'YY',
};

const CvcTemplate: ComponentStory<typeof Password> = args => {
	const Component = InputWithKeypad('cvc', Password);

	return <Component {...args} />;
};

export const InputCvc = CvcTemplate.bind({});
InputCvc.args = {
	name: 'cvc',
	pattern: patterns.secureCodePattern,
	minLength: LIMITS.CVC_SIZE,
	maxLength: LIMITS.CVC_SIZE,
};

const PasswordTemplate: ComponentStory<typeof Password> = args => {
	const Component = InputWithKeypad('pw1', Password);

	return <Component {...args} />;
};

export const InputPassword = PasswordTemplate.bind({});
InputPassword.args = {
	name: 'password',
	pattern: patterns.passwordPattern,
	minLength: LIMITS.PASSWORD_SIZE,
	maxLength: LIMITS.PASSWORD_SIZE,
};

const UserNameTemplate: ComponentStory<typeof Basic> = args => (
	<Form>
		<Basic {...args} />
	</Form>
);

export const InputUserName = UserNameTemplate.bind({});
InputUserName.args = {
	name: 'userName',
	maxLength: LIMITS.MAX_NAME_SIZE,
	placeHolder: '카드 소유자 성명을 입력하세요.',
};
