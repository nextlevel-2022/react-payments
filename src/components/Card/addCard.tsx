import React from 'react';
import { useRouter } from '../../contexts/route';

const AddCard = () => {
	const { setRoute } = useRouter();
	const toAddPage = () => {
		setRoute('ADD');
	};

	return (
		<div className="card-box" onClick={toAddPage}>
			<div className="empty-card">+</div>
		</div>
	);
};

export default AddCard;
