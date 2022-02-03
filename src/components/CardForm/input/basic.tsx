import React from 'react';
import { RefObject } from 'react';

type BasicInputProps = {
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

const Basic = ({
	elref,
	name,
	width,
	placeHolder,
	maxLength,
	minLength,
	pattern,
	autoFocus,
	required,
	...props
}: BasicInputProps) => {
	return (
		<input
			className={`input-basic`}
			ref={elref}
			type="text"
			name={name}
			placeholder={placeHolder}
			minLength={minLength}
			maxLength={maxLength}
			pattern={pattern}
			autoFocus={autoFocus}
			required={required}
			{...props}
		/>
	);
};

export default Basic;
