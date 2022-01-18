import React, { useState } from "react";

const useForm = initialForm => {
	const [form, setForm] = useState(initialForm);

	const onChange = e => {
		const { name, value } = e.target;
		setForm(form => ({ ...form, [name]: value }));
	};

	return [form, onChange];
};

export default useForm;
