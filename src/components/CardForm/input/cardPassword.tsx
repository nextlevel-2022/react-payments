import React from 'react';

const CardPassword = () => {
	return (
		<div className="input-container">
			<span className="input-title">카드 비밀번호</span>
			<input className="input-basic w-15" type="password" defaultValue={''} />
			<input className="input-basic w-15" type="password" defaultValue={''} />
			<input className="input-basic w-15" type="password" defaultValue={'0'} readOnly />
			<input className="input-basic w-15" type="password" defaultValue={'0'} readOnly />
		</div>
	);
};

export default CardPassword;
