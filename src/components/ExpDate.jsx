import React from 'react';

const ExpDate = ({ inputs, handleChange }) => {
  return (
    <div>
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          name="expireMonth"
          onChange={handleChange}
          value={inputs['expireMonth']}
          className="input-basic"
          type="text"
          placeholder="MM"
          minLength={2}
          maxLength={2}
        />
        <input
          name="expireYear"
          onChange={handleChange}
          value={inputs['expireYear']}
          className="input-basic"
          type="text"
          placeholder="YY"
          minLength={2}
          maxLength={2}
        />
      </div>
    </div>
  );
};

export default ExpDate;
