import React from 'react';

const ExpireDate = () => {
	return (
		<div className="input-container">
			<span className="input-title">만료일</span>
			<div className="input-box w-50">
				<input className="input-basic" type="text" placeholder="MM" defaultValue={''} />
				<input className="input-basic" type="text" placeholder="YY" defaultValue={''} />
			</div>
		</div>
	);
};

export default ExpireDate;
