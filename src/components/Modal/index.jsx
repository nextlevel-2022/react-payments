import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const Modal = props => {
	const { children, setIsModalOn } = props;

	const onClose = () => {
		setIsModalOn(false);
	};

	return (
		<S.Background onClick={onClose}>
			<S.Modal> {children}</S.Modal>
		</S.Background>
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	setIsModalOn: PropTypes.func.isRequired,
};

export default Modal;
