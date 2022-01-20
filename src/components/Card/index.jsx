import React, { useState } from 'react';

const Card = props => {
	let companyName = '';
	let companyColor = '';

	const firstSecurityInputArr = props.data.CARD_NUMBER_3.split("").fill('*');
	const secondSecurityInputArr = props.data.CARD_NUMBER_4.split("").fill('*');
	let firstSecurityInput = firstSecurityInputArr.join('');
	let secondSecurityInput = secondSecurityInputArr.join('');
	
	props.company.map(item => {
		if ( props.data.CREDIT_CARD_COMPANY === item.CODE ) {
			companyName = item.COMPANY;
			companyColor = item.COLOR;
		}
	});

	return (
		<>
			<div className="card-box">
				<div className="empty-card">
					<div className="card-top">
						<span className="card-text">
							{ props.data.CREDIT_CARD_COMPANY === '' || props.data.CREDIT_CARD_COMPANY === undefined ? 
								'' : companyName
							}
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
									'NAME' : props.data.NAME
								}
								</span>
							<span className="card-text">
								{ props.data.EXPIRATION_DATE_MM === '' || props.data.EXPIRATION_DATE_MM === undefined ? 
									'MM' : props.data.EXPIRATION_DATE_MM
								}
								{ props.data.EXPIRATION_DATE_YY === '' || props.data.EXPIRATION_DATE_YY === undefined ? 
									'' : ` / ${props.data.EXPIRATION_DATE_YY}`
								}
							</span>
						</div>
					</div>
				</div>
			</div>
			<span className="card-nickname">법인카드</span>
		</>
  );
}

export default Card;