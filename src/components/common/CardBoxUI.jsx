import React from 'react'

const CardBoxUI = ({inputs}) => {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">
              {inputs.cardSubNumber1} {inputs.cardSubNumber2} {'*'.repeat(inputs.cardSubNumber3.length)}{' '}
              {'*'.repeat(inputs.cardSubNumber4.length)}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{inputs.cardName.length === 0 ? 'NAME' : inputs.cardName}</span>
            <span className="card-text">
              {inputs.expireMonth} / {inputs.expireYear}{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBoxUI
