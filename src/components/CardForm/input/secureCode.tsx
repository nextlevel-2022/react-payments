import React from 'react';

const SecureCode = () => {
	return (
		<div className="input-container">
			<span className="input-title">보안코드(CVC/CVV)</span>
			<input className="input-basic w-25" type="password" defaultValue={''} />
		</div>
	);
};

export default SecureCode;
