import React from 'react';
import { CardProps } from '@interface';
import { PUBLIC_CARD_NUMBER_INPUT_LAST_INDEX } from '@constants';

interface CardInfo {
  cardInfo: CardProps;
  type?: string;
}

const Card = ({ cardInfo, type }: CardInfo) => {
  const { company, cardNumber, ownerName, expireMonth, expireYear, nickname, bgColor } = cardInfo;

  return (
    <>
      <div className="card-box">
        <div className={`${type === 'new' ? 'empty-card' : 'small-card'}`} style={{ backgroundColor: bgColor }}>
          <div className="card-top">
            <div className="card-text">{company}</div>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">
                {cardNumber &&
                  cardNumber
                    .filter((el) => el !== '')
                    .map((el, index) => (index <= PUBLIC_CARD_NUMBER_INPUT_LAST_INDEX ? el : '*'.repeat(el.length)))
                    .join(' - ')}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{ownerName || 'NAME'}</span>
              <span className="card-text">
                {expireMonth || 'MM'} / {expireYear || 'YY'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="card-nickname">{nickname}</span>
    </>
  );
};

export default Card;
