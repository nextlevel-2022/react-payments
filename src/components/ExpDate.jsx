import React from 'react';

const ExpDate = () => {
  return (
    <div>
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input className="input-basic" type="text" placeholder="MM" />
        <input className="input-basic" type="text" placeholder="YY" />
      </div>
    </div>
  );
};

export default ExpDate;
