import React from "react";

const Input = ({
  name,
  value,
  type,
  placeholder,
  onChange,
  identifier,
  width,
  min,
  max,
  ...props
}) => {
  return (
    <input
      data-name={name}
      value={value}
      className={`input-basic ${width}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      data-identifier={identifier}
      minLength={min}
      maxLength={max}
      {...props}
    />
  );
};

export default Input;
