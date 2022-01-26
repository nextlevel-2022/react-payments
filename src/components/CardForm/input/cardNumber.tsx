import React from 'react';

const CardNumber = () => {
	return (
		<div className="input-container">
			<span className="input-title">카드 번호</span>
			<div className="input-box">
				<input className="input-basic" type="text" defaultValue={''} />
				<input className="input-basic" type="text" defaultValue={''} />
				<input className="input-basic" type="password" defaultValue={''} />
				<input className="input-basic" type="password" defaultValue={''} />
			</div>
		</div>
	);
};

export default CardNumber;
