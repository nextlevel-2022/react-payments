import React from 'react';
import { useEffect } from 'react';
import { CardData, CardType, cardColor } from '../../common/constants';
import AddCard from './addCard';

const Card = ({ card, type = 'empty', onClick }: { card: CardData | null; type?: CardType; onClick?: () => void }) => {
	if (type === 'new') return <AddCard />;
	const { cardNumber, cardOwner, cardExpireDate, cardName, cardNickname } = card || {};

	return (
		<div className="card-box" onClick={onClick}>
			<div className={cardName ? `${type}-card color-${cardColor[cardName]}` : 'empty-card'}>
				<div className="card-top">{cardName && <span className={`card-text`}>{cardName}</span>}</div>
				<div className="card-middle">
					<div className="card-middle__chip" />
				</div>
				<div className="card-bottom">
					{cardNumber && (
						<div className="card-bottom__number">
							<span className={`card-text`}>{cardNumber}</span>
						</div>
					)}

					<div className="card-bottom__info">
						<span className={`card-text`}>{cardOwner || 'Name'}</span>
						<span className={`card-text`}>{cardExpireDate || 'MM / YY'}</span>
					</div>
				</div>
			</div>
			{cardNickname && <span className="card-nickname">{cardNickname}</span>}
		</div>
	);
};

export default Card;
