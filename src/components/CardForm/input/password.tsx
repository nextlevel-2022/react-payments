import React, { RefObject, SyntheticEvent, useState } from 'react';
import KeypadModal from '../../Modal/keypad';

type PasswordInputProps = {
	elref?: RefObject<HTMLInputElement>;
	name: string;
	width?: string;
	placeHolder?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	autoFocus?: boolean;
	required?: boolean;
	[key: string]: any;
};

const Password = ({ elref, name, width, maxLength, minLength, pattern, ...props }: PasswordInputProps) => {
	const [showModal, toggleModal] = useState(false);

	const dispatchChangeValue = (el: HTMLInputElement, value: string) => {
		el.setAttribute('value', value);
		const event = new Event('input', { bubbles: true });
		el.dispatchEvent(event);
		if (el.checkValidity()) {
			toggleModal(false);
		}
	};

	const handleFocus = () => {
		const el = elref?.current as HTMLInputElement;
		el.blur();
		toggleModal(true);
	};

	const onKeypadDown = (num: string) => {
		const el = elref?.current as HTMLInputElement;
		dispatchChangeValue(el, el.value + num);
	};

	const onKeypadBack = (e: SyntheticEvent) => {
		e.preventDefault();
		const el = elref?.current as HTMLInputElement;
		dispatchChangeValue(el, el.value.slice(0, -1));
	};

	return (
		<div className={`keypad-wrap ${width && width}`}>
			<input
				className="input-basic"
				ref={elref}
				type="password"
				name={name}
				inputMode="numeric"
				minLength={minLength}
				maxLength={maxLength}
				pattern={pattern}
				required
				onFocus={handleFocus}
				{...props}
			/>
			{showModal && <KeypadModal handleKeypadDown={onKeypadDown} handleKeypadBack={onKeypadBack} />}
		</div>
	);
};

export default Password;
