import { CardData } from './constants';

// const validityState = {
// 	badInput: false, // 잘못된 입력
// 	customError: false, // 커스텀 오류
// 	patternMismatch: false, // 패턴 오류
// 	rangeOverflow: false, // 범위 초과 오류
// 	rangeUnderflow: false, // 범위 미달 오류
// 	stepMismatch: false, // 간격 오류
// 	tooLong: false, // 길이 오류
// 	tooShort: false, // 길이 오류
// 	typeMismatch: false, // 타입 오류
// 	valid: false, // 검증 결과
// 	valueMissing: true, // 필수값 오류
// };

const validityKeys: (keyof ValidityState)[] = [
	'badInput',
	'patternMismatch',
	'rangeOverflow',
	'rangeUnderflow',
	'stepMismatch',
	'tooLong',
	'tooShort',
	'typeMismatch',
	'valueMissing',
];

export const patterns = {
	cardNumberPattern: `^[0-9]{4}$`,
	expiredMonthPattern: `^(0[1-9]|1[012])$`,
	expiredYearPattern: `^(2[2-9]|[3-9][0-9])$`,
	ownerNamePattern: `.*`,
	secureCodePattern: `^[0-9]{3}$`,
	passwordPattern: `^[0-9]{1}$`,
};

const PatternInvalidMessage: { [key: string]: string } = {
	cardNumber1: '0 - 9 사이의 숫자 4개를 입력하세요.',
	cardNumber2: '0 - 9 사이의 숫자 4개를 입력하세요.',
	cardNumber3: '0 - 9 사이의 숫자 4개를 입력하세요.',
	cardNumber4: '0 - 9 사이의 숫자 4개를 입력하세요.',
	expiredMonth: '01 - 12 사이의 두자리 숫자를 입력하세요.',
	expiredYear: '22 - 99 이하의 두자리 숫자를 입력하세요.',
	cvc: '0 - 9 사이의 세 자리 숫자를 입력하세요.',
	pw1: '0 - 9 사이의 숫자를 입력하세요.',
	pw2: '0 - 9 사이의 숫자를 입력하세요.',
};

export const getCustomValidity = (elem: HTMLInputElement) => {
	const { validity, name } = elem;
	const invalidKey = validityKeys.find(key => validity[key]);

	if (!invalidKey) return '';
	return PatternInvalidMessage[name];
};

type DataMap = Map<string, string | number>;

export const convertFormData = (formData: DataMap): CardData | null => {
	if ([...formData.values()].join('').length === 0) return null;

	const {
		cardName,
		cardNumber1,
		cardNumber2,
		cardNumber3,
		cardNumber4,
		expiredMonth,
		expiredYear,
		cardOwner,
		cvc,
		pw1,
		pw2,
		cardNickname,
	} = [...formData].reduce<{ [key: string]: any }>((r, [k, v]) => {
		r[k] = v;
		return r;
	}, {});

	const cardNumber: string[] = [];
	[cardNumber1, cardNumber2].forEach(c => {
		if (c) cardNumber.push(c);
	});
	[cardNumber3, cardNumber4].forEach(c => {
		if (c) cardNumber.push(c.replace(/./g, '*'));
	});

	const expired: string[] = [];
	[expiredMonth, expiredYear].forEach(e => {
		if (e) expired.push(e);
	});

	const password: string[] = [];
	[pw1, pw2].forEach(p => {
		if (p) password.push(p);
	});

	return {
		cardName,
		cardNumber: cardNumber.join(' - '),
		cardExpireDate: expired.join('/'),
		cardOwner,
		cardNickname,
		cvc,
		password: password.join(''),
	};
};
