import React from 'react';
import { CARD_COMPANY_LIST } from '../../constants/Data';

const Modal = props => {
	const style = { flexWrap: 'wrap' };

	const closeModal = () => {
		props.setModalShow(false);
	}

	return (
		<div className="modal-dimmed" >
			<div className='w-100 h-100' onClick={closeModal}></div>
			<div className="modal">
				<div className="flex-center" style={style}>
				{CARD_COMPANY_LIST.map((item, idx) => 
					<div className="modal-item-container" key={idx} onClick={() => {
						props.setData({ ...props.data, CREDIT_CARD_COMPANY: item.CODE });
						closeModal();
					}}>
						<div className="modal-item-dot" style={{background: item.STYLE.BACKGROUND}}></div>
						<span className="modal-item-name">{item.COMPANY}</span>
					</div>
				)}
				</div>
			</div>
		</div>
  );
}

export default Modal;