import React, { useState } from "react";

const useInput = initialForm => {
	const [form, setForm] = useState(initialForm);

	const onChange = e => {
		const { name, value } = e.target;

		if (typeof form === "object") {
			setForm(form => ({ ...form, [name]: value }));
		} else {
			setForm(e.target.value);
		}
		console.log(form);
	};

	return [form, onChange, setForm];
};

export default useInput;
