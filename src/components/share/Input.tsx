import React from 'react';

interface InputProps {
  id: string;
  type: string;
  required?: boolean;
  className?: string;
  maxLength?: number;
  placeHolder?: string;
  onChange?: (changeEvent: React.ChangeEvent<HTMLInputElement>) => void;
  dataIndex?: string;
  onKeyPress?: (pressEvent: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Input = ({ type, className, onChange, maxLength, id, required, placeHolder, dataIndex, onKeyPress }: InputProps) => {
  return (
    <>
      <label htmlFor={id} />
      <input
        className={`input-basic ${className ? className : ''}`}
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        id={id}
        required={false || required}
        placeholder={placeHolder ? placeHolder : ''}
        data-index={dataIndex}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default Input;
