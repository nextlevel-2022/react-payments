import React, { SyntheticEvent, useMemo, createRef, useState, useRef } from 'react';
import { Basic, Password } from './input';
import { LIMITS } from '../../common/constants';
import { patterns } from '../../common/formCollection';
import { getCustomValidity, convertFormData } from '../../common/formCollection';
import { useCardList } from '../../contexts/cardList';
import { useRouter } from '../../contexts/route';
import Modal from '../Modal';

const InputNames = [
	'cardNumber1',
	'cardNumber2',
	'cardNumber3',
	'cardNumber4',
	'expiredMonth',
	'expiredYear',
	'cvc',
	'pw1',
	'pw2',
	'cardOwner',
];

const InputArray = Array.from({ length: InputNames.length });
const isNameMatched = (index: number, name: string) => InputNames[index] === name;

const CardForm = () => {
	const { setRoute } = useRouter();
	const { setEditingCard } = useCardList();
	const formData = useMemo(() => new Map(), []);
	const inputRefs = InputArray.map(() => createRef<HTMLInputElement>());
	const [inputValidity, setValid] = useState<boolean[]>(InputArray.map(() => false));
	const [showModal, setModalVisibility] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [nameSize, setNameSize] = useState(0);

	const fillForm = () => {
		[1234, 1234, 1234, 1234, 12, 34, 111, 5, 5, 'youngmin'].forEach((v, i) => {
			formData.set(inputRefs[i].current!.name, v + '');
		});
		formData.set('cardName', '공원 카드');
		const cardData = convertFormData(formData);
		if (cardData) setEditingCard(cardData);
		saveCard();
	};
	const setDataValue = (key: string, val: string) => {
		formData.set(key, val);
		const cardData = convertFormData(formData);
		if (cardData) setEditingCard(cardData);
	};

	const onChangeHandler = (e: SyntheticEvent) => {
		const $target = e.target;
		if (!($target instanceof HTMLInputElement)) return;

		setDataValue($target.name, $target.value);

		const index = inputRefs.findIndex(elref => elref.current === $target);
		const validtyResult = getCustomValidity($target);
		$target.setCustomValidity(validtyResult);
		const isValid = $target.reportValidity();

		setValid(prev => {
			const next = [...prev];
			next[index] = isValid;
			return next;
		});

		if (!isValid) return;

		if (isNameMatched(index, 'cardNumber2')) {
			toggleModal(true);
			return;
		}

		if (isNameMatched(index, 'pw2') && buttonRef.current) {
			buttonRef.current.focus();
			return;
		}

		if (isNameMatched(index, 'cardOwner')) {
			setNameSize($target.value.length);
		}

		const nextInput = inputRefs[index + 1]?.current;
		if (nextInput) nextInput.focus();
	};

	const toggleModal = (flag: boolean) => {
		inputRefs.forEach(ref => {
			if (ref.current) ref.current.disabled = flag;
		});
		setModalVisibility(flag);
	};

	const closeCardModal = () => {
		toggleModal(false);
		const $currentInput = inputRefs[1].current;
		const $nextInput = inputRefs[2].current;
		if ($currentInput && $nextInput) {
			$nextInput.focus();
		}
	};

	const selectCard = async (name: string) => {
		setDataValue('cardName', name);
		closeCardModal();
	};

	const saveCard = () => {
		setRoute('CONFIRM');
	};

	return (
		<form onSubmit={saveCard} onChange={onChangeHandler}>
			<div className="input-container">
				<label htmlFor="cardNumber" className="input-title">
					카드 번호
				</label>
				<div className="input-box">
					<Basic
						elref={inputRefs[0]}
						name={InputNames[0]}
						minLength={LIMITS.CARD_NUMBER_SIZE}
						maxLength={LIMITS.CARD_NUMBER_SIZE}
						pattern={patterns.cardNumberPattern}
						autoFocus
						required
					/>

					{inputValidity[0] && ' - '}
					<Basic
						elref={inputRefs[1]}
						name={InputNames[1]}
						minLength={LIMITS.CARD_NUMBER_SIZE}
						maxLength={LIMITS.CARD_NUMBER_SIZE}
						pattern={patterns.cardNumberPattern}
						required
					/>

					{inputValidity[1] && ' - '}
					<Password
						elref={inputRefs[2]}
						name={InputNames[2]}
						width={'w-100'}
						minLength={LIMITS.CARD_NUMBER_SIZE}
						maxLength={LIMITS.CARD_NUMBER_SIZE}
						pattern={patterns.cardNumberPattern}
						required
					/>

					{inputValidity[2] && ' - '}
					<Password
						elref={inputRefs[3]}
						name={InputNames[3]}
						width={'w-100'}
						minLength={LIMITS.CARD_NUMBER_SIZE}
						maxLength={LIMITS.CARD_NUMBER_SIZE}
						pattern={patterns.cardNumberPattern}
						required
					/>
				</div>
			</div>

			<div className="input-container">
				<label htmlFor="expiredDate" className="input-title">
					만료일
				</label>
				<div className="input-box w-50">
					<Basic
						elref={inputRefs[4]}
						name={InputNames[4]}
						minLength={LIMITS.MONTH_SIZE}
						maxLength={LIMITS.MONTH_SIZE}
						pattern={patterns.expiredMonthPattern}
						placeHolder="MM"
						required
					/>

					{inputValidity[4] && ' / '}
					<Basic
						elref={inputRefs[5]}
						name={InputNames[5]}
						minLength={LIMITS.YEAR_SIZE}
						maxLength={LIMITS.YEAR_SIZE}
						pattern={patterns.expiredYearPattern}
						placeHolder="YY"
						required
					/>
				</div>
			</div>

			<div className="input-container">
				<label htmlFor="cardOwner" className="input-title">
					카드 소유자 이름(선택) {nameSize} / {LIMITS.MAX_NAME_SIZE}
				</label>
				<Basic
					elref={inputRefs[9]}
					name={InputNames[9]}
					maxLength={LIMITS.MAX_NAME_SIZE}
					pattern={patterns.ownerNamePattern}
					placeHolder="카드 소유자 이름을 입력하세요."
				/>
			</div>

			<div className="input-container">
				<label htmlFor="cvc" className="input-title">
					보안코드(CVC/CVV)
				</label>
				<Password
					elref={inputRefs[6]}
					name={InputNames[6]}
					width={'w-50'}
					size={LIMITS.CVC_SIZE}
					pattern={patterns.secureCodePattern}
					required
				/>
			</div>

			<div className="input-container">
				<label htmlFor="password" className="input-title">
					카드 비밀번호
				</label>
				<div className="input-box w-50">
					<Password
						elref={inputRefs[7]}
						name={InputNames[7]}
						width={'w-100'}
						size={LIMITS.PASSWORD_SIZE}
						pattern={patterns.passwordPattern}
						required
					/>
					<Password
						elref={inputRefs[8]}
						name={InputNames[8]}
						width={'w-100'}
						size={LIMITS.PASSWORD_SIZE}
						pattern={patterns.passwordPattern}
						required
					/>
					<input className="input-basic" disabled value="*" type="password" />
					<input className="input-basic" disabled value="*" type="password" />
				</div>
			</div>

			<div className="button-box">
				<button type="button" className="button-test" onClick={fillForm}>
					테스트 폼채우기
				</button>
				<button ref={buttonRef} className="button-submit" type="submit">
					다음
				</button>
			</div>
			{showModal && <Modal selectCard={selectCard} closeModal={closeCardModal} />}
		</form>
	);
};

export default CardForm;
