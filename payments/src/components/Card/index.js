import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const Card = ({ size, company, numbers, owner, validDay, ...props }) => {
  return (
    <Styled.Container size={size} company={company} {...props}>
      <Styled.Inner>
        <Styled.Header size={size}>
          <Styled.Company>{company && `${company}카드`}</Styled.Company>
        </Styled.Header>
        <Styled.Body>
          <Styled.Chip />
          <Styled.NumbersContainer size={size}>
            <Styled.Numbers size={size}>{numbers}</Styled.Numbers>
          </Styled.NumbersContainer>
        </Styled.Body>
        <Styled.Footer size={size}>
          <Styled.Owner>{owner ? owner : 'NAME'}</Styled.Owner>
          <Styled.ValidDay>
            {`${validDay.month ? validDay.month : 'MM'}/${validDay.year ? validDay.year : 'YY'}`}
          </Styled.ValidDay>
        </Styled.Footer>
      </Styled.Inner>
    </Styled.Container>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  company: PropTypes.oneOf(['', '포코', '준', '공원', '브랜', '로이드', '도비', '콜린', '썬']),
  numbers: PropTypes.string,
  owner: PropTypes.string,
  validDay: PropTypes.object,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  size: 'large',
  company: '',
  numbers: '',
  owner: 'NAME',
  validDay: {
    month: 'MM',
    year: 'YY',
  },
  onClick: () => {},
};
