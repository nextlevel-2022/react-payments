
export const ONLY_NUMBERS_CHECK = e => {	// 숫자만
	const value = e.target.value;
	const str = /^[0-9]*$/;

	if (!str.test(value)) {
		e.target.value = value.substring(0, value.length - 1);
	}
};

export const USER_NAME_CHECK = e => {    // 한글 + 영문
	const value = e.target.value;
	const str = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z]/gi;

	if (str.test(value)) {
		e.target.value = value.substring(0, value.length - 1);
	}
};

export const TEXT_GAP_CHECK = e => {    // 공백체크
	const value = e.target.value;
	const str = /\s/;

	if (str.exec(value)) {
		e.target.value = value.substring(0, value.length - 1);
	}
};