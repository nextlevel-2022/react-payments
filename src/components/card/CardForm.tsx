import React from 'react';

interface CardFormProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

interface CardFormTitleProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
}

interface CardFormButtonProps {
  children?: React.ReactNode;
}

const CardForm = ({ children, onSubmit }: CardFormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

CardForm.title = ({ onClick, title }: CardFormTitleProps) => {
  return (
    <h2 className="page-title" onClick={onClick}>
      {title}
    </h2>
  );
};

CardForm.button = ({ children }: CardFormButtonProps) => {
  return (
    <div className="button-box">
      <button type="submit" className="button-text">
        다음
      </button>
    </div>
  );
};

export default CardForm;
