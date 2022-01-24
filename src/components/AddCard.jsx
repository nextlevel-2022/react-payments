import React from 'react';

const AddCard = () => {
  return (
    <>
      {/*  <> 프래그먼트 - 이름없이 묶어주는 느낌 */}
      <h2 className="page-title">{'< 카드 추가'}</h2>
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCard;
