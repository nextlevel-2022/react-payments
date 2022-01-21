import React, { useState } from 'react';

const Card = props => {
	const companyType = props.data.CREDIT_CARD_COMPANY !== '' || props.data.CREDIT_CARD_COMPANY !== undefined;
	let companyName = '';
	let companyStyle= {
		background: '',
		color: ''
	};

	const firstSecurityInputArr = props.data.CARD_NUMBER_3.split("").fill('*');
	const secondSecurityInputArr = props.data.CARD_NUMBER_4.split("").fill('*');
	let firstSecurityInput = firstSecurityInputArr.join('');
	let secondSecurityInput = secondSecurityInputArr.join('');
	
	props.company.map(item => {
		if ( props.data.CREDIT_CARD_COMPANY === item.CODE ) {
			companyName = item.COMPANY;
			companyStyle.background = item.STYLE.BACKGROUND;
			companyStyle.color = item.STYLE.COLOR;
		}
	});

	const cardStyle = {
		background: companyType && companyStyle.background,
		color: companyType && companyStyle.color
	}

	return (
		<>
			<div className="card-box">
				<div className="empty-card" style={cardStyle}>
					<div className="card-top">
						<span className="card-text">
							{ companyType && companyName }
						</span>
					</div>
					<div className="card-middle">
						<div className="small-card__chip"></div>
					</div>
					<div className="card-bottom">
						<div className="card-bottom__number">
							<span className="card-text">
								{ props.data.CARD_NUMBER_1 === '' || props.data.CARD_NUMBER_1 === undefined ? 
									'' : props.data.CARD_NUMBER_1
								}
								{ props.data.CARD_NUMBER_2 === '' || props.data.CARD_NUMBER_2 === undefined ? 
									'' : ` - ${props.data.CARD_NUMBER_2}`
								}
								{ props.data.CARD_NUMBER_3 === '' || props.data.CARD_NUMBER_3 === undefined ? 
									// '' : ` - ${props.data.CARD_NUMBER_3}`
									'' : ` - ${firstSecurityInput}`
								}
								{ props.data.CARD_NUMBER_4 === '' || props.data.CARD_NUMBER_4 === undefined ? 
									// '' : ` - ${props.data.CARD_NUMBER_4}`
									'' : ` - ${secondSecurityInput}`
								}
							</span>
						</div>
						<div className="card-bottom__info">
							<span className="card-text">
								{ props.data.NAME === '' || props.data.NAME === undefined ? 
									'' : props.data.NAME
								}
								</span>
							<span className="card-text">
								{ props.data.EXPIRATION_DATE_MM === '' || props.data.EXPIRATION_DATE_MM === undefined ? 
									'' : props.data.EXPIRATION_DATE_MM
								}
								{ props.data.EXPIRATION_DATE_YY === '' || props.data.EXPIRATION_DATE_YY === undefined ? 
									'' : ` / ${props.data.EXPIRATION_DATE_YY}`
								}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}

export default Card;