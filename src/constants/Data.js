
export const DATA = {
	CARD_ID: 0,						// Card ID
	NAME: '',						// 소유자
	CARD_NUMBER_1: '',				// 첫 번째 4자리 카드번호
	CARD_NUMBER_2: '',				// 두 번째 4자리 카드번호
	CARD_NUMBER_3: '',				// 세 번째 4자리 카드번호
	CARD_NUMBER_4: '',				// 네 번째 4자리 카드번호
	EXPIRATION_DATE_YY: '',			// 유효기간_년도
	EXPIRATION_DATE_MM: '',			// 유효기간_월
	CREDIT_CARD_COMPANY: 0,			// 카드사
}
export const DATA_LIST = []

export const CARD_INPUT_LENGTH = {
	CARD_NUMBERS: '4',
	EXPIRATION_DATE: '2',
	USER_NAME: '30',
	CVC: '3',
	PASSWORD: '1'
};

export const CARD_COMPANY = [
	{
		CODE: 1,
		COMPANY: '포코 카드',
		STYLE: {
			BACKGROUND: '#d24e48',
			COLOR: '#fff'
		}
	},
	{
		CODE: 2,
		COMPANY: '준 카드',
		STYLE: {
			BACKGROUND: '#5b7ddd',
			COLOR: '#fff'
		}
	},
	{
		CODE: 3,
		COMPANY: '공원 카드',
		STYLE: {
			BACKGROUND: '#83b975',
			COLOR: '#fff'
		}
	},
	{
		CODE: 4,
		COMPANY: '브랜 카드',
		STYLE: {
			BACKGROUND: '#cf63b5',
			COLOR: '#fff'
		}
	},
	{
		CODE: 5,
		COMPANY: '로이드 카드',
		STYLE: {
			BACKGROUND: '#5bc4a9',
			COLOR: '#fff'
		}
	},
	{
		CODE: 6,
		COMPANY: '도비 카드',
		STYLE: {
			BACKGROUND: '#d87599',
			COLOR: '#fff'
		}
	},
	{
		CODE: 7,
		COMPANY: '콜린 카드',
		STYLE: {
			BACKGROUND: '#e5834b',
			COLOR: '#fff'
		}
	},
	{
		CODE: 8,
		COMPANY: '썬 카드',
		STYLE: {
			BACKGROUND: '#f4ce6c',
			COLOR: '#000'
		}
	},
	{
		CODE: 9,
		COMPANY: '타로 카드',
		STYLE: {
			BACKGROUND: '#9863cf',
			COLOR: '#fff'
		}
	},
];

export const ERROR_MESSAGE = {
	CARD_NUMBERS: '카드 번호를 입력해주세요.',
	EXPIRATION_DATE: '유효기간을 다시 확인해주세요.',
	USER_NAME: '',
	CVC: '보안코드를 다시 확인해주세요.',
	PASSWORD: '비밀번호가 일치하지 않습니다.'
};


