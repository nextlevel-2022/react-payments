import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";

const ButtonContainer = ({ process, setProcess, content }) => {
	const onClick = () => {
		if (process === "list") {
			setProcess("add");
		} else if (process === "add") {
			setProcess("done");
		} else if (process === "done") {
			setProcess("list");
		}
	};
	return <Button content={content} onClick={onClick} />;
};

ButtonContainer.propTypes = {
	content: PropTypes.string.isRequired,
	process: PropTypes.string.isRequired,
	setProcess: PropTypes.func.isRequired,
};

export default ButtonContainer;
