import React from 'react';

interface InputContainerProps {
  className?: string;
  children: React.ReactNode;
}

interface InputContainerTitleProps {
  title?: string;
  subTitle?: string;
  className?: string;
  children?: React.ReactNode;
}

interface InputContainerBoxProps {
  children: React.ReactNode;
}

interface InputContainerErrorMsgProps {
  text?: string;
}

const InputContainer = ({ className, children }: InputContainerProps) => {
  return <div className={`input-container ${className ? className : ''}`}>{children}</div>;
};

InputContainer.title = ({ title, children, className }: InputContainerTitleProps) => {
  return (
    <div className={`input-title ${className ? className : ''} ${children ? 'space-between' : ''}`}>
      {title}
      {children}
    </div>
  );
};

InputContainer.box = ({ children }: InputContainerBoxProps) => {
  return <div className="input-box">{children}</div>;
};

InputContainer.errorMsg = ({ text }: InputContainerErrorMsgProps) => {
  return <div className="input-error-msg">{text}</div>;
};

export default InputContainer;
